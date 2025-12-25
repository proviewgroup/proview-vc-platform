
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const data = req.body;

  try {
    // Cấu hình Transporter - Sử dụng App Password 16 ký tự của Google
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kpibscdoc@gmail.com',
        pass: 'mprpyskkukgjtgvb' // Lưu ý: Nên thay bằng biến môi trường trên Vercel để bảo mật
      }
    });

    const mailOptions = {
      from: '"PROVIEW VC OS" <kpibscdoc@gmail.com>',
      to: 'ceo@proviewvc.com, ceo@proview.vn',
      subject: `🔥 [HỆ THỐNG] LIÊN HỆ MỚI: ${data.name.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 15px; overflow: hidden;">
          <div style="background: #10b981; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0;">Thông tin đối tác tiềm năng</h2>
          </div>
          <div style="padding: 25px; line-height: 1.6; color: #1e293b;">
            <p><strong>Họ tên:</strong> ${data.name}</p>
            <p><strong>Công ty:</strong> ${data.company || 'N/A'}</p>
            <p><strong>Chức vụ:</strong> ${data.position || 'N/A'}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Điện thoại:</strong> ${data.phone}</p>
            <p><strong>Nhu cầu:</strong> ${data.needs}</p>
          </div>
          <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 11px; color: #64748b;">
            Hệ thống PROVIEW VC OS - AI Automatic Dispatch<br>
            Thời gian: ${new Date().toLocaleString('vi-VN')}
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
