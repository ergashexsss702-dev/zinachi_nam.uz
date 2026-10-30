import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory orders backup storage to ensure no order is ever lost
const receivedOrders: any[] = [];

// Helper to format Telegram message
function buildTelegramMessage(order: any): string {
  const categoryIcon = order.category === 'zina' ? '🪜 Zina dizayni' : order.category === 'mdf' ? '🚪 Eshik dizayni' : '📦 Tobut dizayni';
  const categoryName = order.category === 'zina' ? 'ZINA' : order.category === 'mdf' ? 'MDF ESHIKLAR' : 'TOBUTLAR';

  const mapLink = order.coordinates
    ? `https://www.google.com/maps?q=${order.coordinates.lat},${order.coordinates.lng}`
    : (order.deliveryAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.deliveryAddress)}` : 'Ko‘rsatilmadi');

  const now = new Date().toLocaleString('uz-UZ', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  let lines: string[] = [
    '🪵 YANGI BUYURTMA — ZINACHI_NAM.UZ',
    '',
    `📌 Kategoriya: ${categoryName}`,
    `👤 Mijoz: ${order.customerName || 'Noma‘lum'}`,
    `📞 Telefon: ${order.phoneNumber || 'Kiritilmadi'}`,
    `📍 Manzil: ${order.deliveryAddress || 'Kiritilmadi'}`,
    `🗺 Lokatsiya: ${mapLink}`,
    `${categoryIcon}: ${order.designCode || ''} ${order.designTitle || ''}`
  ];

  if (order.woodTypeName) {
    lines.push(`🌳 Yog‘och turi: ${order.woodTypeName}`);
  }

  if (order.mdfGradeName) {
    lines.push(`🪵 MDF materiali: ${order.mdfGradeName}`);
  }

  if (order.selectedFinishNames && order.selectedFinishNames.length > 0) {
    lines.push(`🎨 Rang va dizayn: ${order.selectedFinishNames.join(', ')}`);
  }

  if (order.widthCm || order.heightCm || order.quantity > 1) {
    const dimParts: string[] = [];
    if (order.widthCm) dimParts.push(`Eni: ${order.widthCm}sm`);
    if (order.heightCm) dimParts.push(`Bo‘yi: ${order.heightCm}sm`);
    if (order.thicknessCm) dimParts.push(`Qalinligi: ${order.thicknessCm}sm`);
    dimParts.push(`Miqdor: ${order.quantity || 1} ta`);
    lines.push(`📐 O‘lcham & Miqdor: ${dimParts.join(' | ')}`);
  }

  lines.push(`📝 Izoh: ${order.notes || 'Izoh qoldirilmadi'}`);
  lines.push(`📅 Buyurtma vaqti: ${now}`);

  return lines.join('\n');
}

// Telegram Order Endpoint
app.post('/api/telegram-order', async (req: Request, res: Response) => {
  try {
    const order = req.body;
    if (!order || !order.customerName || !order.phoneNumber) {
      return res.status(400).json({
        success: false,
        error: 'Mijoz ismi va telefon raqami talab qilinadi'
      });
    }

    const messageText = buildTelegramMessage(order);
    
    // Backup in memory
    const storedOrder = {
      id: `ord_${Date.now()}`,
      order,
      messageText,
      createdAt: new Date().toISOString()
    };
    receivedOrders.push(storedOrder);

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

    // Direct Telegram link fallback for 1-tap transmission to @ergashexsss7o2
    const directTelegramUrl = `https://t.me/ergashexsss7o2?text=${encodeURIComponent(messageText)}`;

    if (botToken && chatId && botToken !== 'your_bot_token_here') {
      // Send real message via Telegram Bot API
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText
        })
      });

      const data = await response.json();
      if (!data.ok) {
        console.warn('Telegram Bot API returned non-ok response:', data);
        return res.json({
          success: true,
          botDelivered: false,
          directTelegramUrl,
          message: 'Buyurtmangiz saqlandi! Bot konfiguratsiyasini tekshiring yoki Telegram orqali yuboring.'
        });
      }

      return res.json({
        success: true,
        botDelivered: true,
        directTelegramUrl,
        message: 'Buyurtmangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.'
      });
    } else {
      // Bot token not yet configured in .env - gracefully accept and provide direct Telegram deep-link
      console.log('Order received (Telegram bot credentials not yet set in .env):', messageText);
      return res.json({
        success: true,
        botDelivered: false,
        directTelegramUrl,
        message: 'Buyurtmangiz muvaffaqiyatli qabul qilindi! Tez orada siz bilan bog‘lanamiz.'
      });
    }
  } catch (error: any) {
    console.error('Error handling order:', error);
    return res.status(500).json({
      success: false,
      error: 'Serverda xatolik yuz berdi. Iltimos qayta urinib ko‘ring yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    ordersCount: receivedOrders.length,
    telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_ADMIN_CHAT_ID)
  });
});

// Vite integration
async function setupServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

setupServer();
