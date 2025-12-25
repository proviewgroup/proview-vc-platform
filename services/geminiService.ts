
import { GoogleGenAI } from "@google/genai";

const PROVIEW_PERSONA = `
Bạn là PROVIEW VC AI Consultant, chuyên gia tư vấn chiến lược và tài chính cấp cao.
Nhiệm vụ: Tư vấn Chiến lược (SWOT, BSC, OKR), Vận hành tự động và Gọi vốn.
Phong cách: Thông minh, sắc sảo, ngôn ngữ chuyên nghiệp. Luôn phản hồi bằng Tiếng Việt.
`;

const getApiKey = () => {
  return (window as any).process?.env?.API_KEY || "";
};

export const consultWithAI = async (message: string, history: any[] = []) => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return "Xin lỗi, hệ thống AI đang được cấu hình.";

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: { systemInstruction: PROVIEW_PERSONA, temperature: 0.7 }
    });

    return response.text?.replace(/\*\*/g, '') || "Hệ thống không phản hồi.";
  } catch (error) {
    return "Đã xảy ra lỗi kết nối AI.";
  }
};
