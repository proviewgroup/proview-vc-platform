
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // 1. Chỉ chấp nhận phương thức POST (Bảo mật)
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const data = req.body;

  try {
    // 2. Cấu hình Transporter Gmail
    // LƯU Ý QUAN TRỌNG: Gmail yêu cầu "Mật khẩu ứng dụng" (App Password) 16 ký tự.
    // Nếu pass '2023@Abcd#' không hoạt động, bạn phải tạo App Password trong Google Account.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kpibscdoc@gmail.com',
        pass: 'mprpyskkukgjtgvb' 
      }
    });

    // 3. Chuẩn bị nội dung Email chuyên nghiệp
    const mailOptions = {
      from: '"PROVIEW VC AI System" <kpibscdoc@gmail.com>',
      to: 'ceo@proviewvc.com, ceo@proview.vn',
      subject: `[PROVIEW VC] THÔNG BÁO LIÊN HỆ MỚI: ${data.name.toUpperCase()}`,
      html: `
        <div style="background-color: #f8fafc; padding: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
            <div style="background-color: #10b981; padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Lead Mới Từ Website</h1>
            </div>
            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Khách hàng</td></tr>
                <tr><td style="padding-bottom: 20px; font-size: 18px; font-weight: bold; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${data.name}</td></tr>
                
                <tr><td style="padding: 15px 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase;">Công ty & Chức vụ</td></tr>
                <tr><td style="padding-bottom: 15px; font-weight: 500;">${data.company || 'N/A'} - ${data.position || 'N/A'}</td></tr>

                <tr><td style="padding: 15px 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase;">Thông tin liên lạc</td></tr>
                <tr><td style="padding-bottom: 15px;">📧 ${data.email}<br>📞 ${data.phone}</td></tr>

                <tr><td style="padding: 15px 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase;">Nhu cầu chi tiết</td></tr>
                <tr><td style="padding: 20px; background: #f8fafc; border-radius: 12px; font-style: italic;">"${data.needs}"</td></tr>
                
                <tr><td style="padding: 15px 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase;">Thời gian mong muốn</td></tr>
                <tr><td>${data.timeline || 'Càng sớm càng tốt'} | Ngân sách: ${data.budget || 'Thỏa thuận'}</td></tr>
              </table>
            </div>
            <div style="background: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 11px;">
              Được gửi tự động từ hệ thống PROVIEW VC OS Platform<br>
              ${new Date().toLocaleString('vi-VN')}
            </div>
          </div>
        </div>
      `
    };

    // 4. Thực thi gửi
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Notification sent to Founders' });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
