
export interface ContactData {
  id?: string;
  name: string;
  company?: string;
  position?: string;
  email: string;
  phone: string;
  country?: string;
  language?: string;
  needs: string;
  budget?: string;
  timeline?: string;
  timestamp?: string;
}

export const submitContactForm = async (data: ContactData) => {
  try {
    // API Endpoint trỏ tới thư mục api/contact.js trên Vercel
    const API_ENDPOINT = '/api/contact'; 

    console.group("🚀 PROVIEW VC - SYSTEM DISPATCH");
    console.log("Status: Initiating Secure Transfer...");

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log("✅ SUCCESS: Data persistent in Cloud.");
      console.groupEnd();
      return { success: true };
    } else {
      throw new Error(result.message || "Server error");
    }
  } catch (error) {
    console.error("❌ CRITICAL: System Dispatch Failed", error);
    // Trả về false để UI hiển thị thông báo lỗi cho người dùng
    return { success: false, error };
  }
};
