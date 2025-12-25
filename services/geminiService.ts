
import { GoogleGenAI } from "@google/genai";

const getPersona = (lang: string) => `
Bạn là PROVIEW VC AI Consultant, chuyên gia tư vấn chiến lược và tài chính cấp cao.
Nhiệm vụ: Tư vấn Chiến lược (SWOT, BSC, OKR), Vận hành tự động và Gọi vốn.
Phong cách: Thông minh, sắc sảo, ngôn ngữ chuyên nghiệp.
QUAN TRỌNG: Bạn phải phản hồi bằng ngôn ngữ: ${lang === 'vi' ? 'Tiếng Việt' : 'Tiếng Anh (English)'}.
`;

const getApiKey = () => {
  return (window as any).process?.env?.API_KEY || "";
};

export const consultWithAI = async (message: string, lang: string, history: any[] = []) => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return lang === 'vi' ? "Xin lỗi, hệ thống AI đang được cấu hình." : "Sorry, the AI system is being configured.";

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: message }] }],
      config: { 
        systemInstruction: getPersona(lang), 
        temperature: 0.7 
      }
    });

    return response.text?.replace(/\*\*/g, '') || (lang === 'vi' ? "Hệ thống không phản hồi." : "The system did not respond.");
  } catch (error) {
    return lang === 'vi' ? "Đã xảy ra lỗi kết nối AI." : "AI connection error occurred.";
  }
};
