
import { Translation } from './types';

export const translations: Record<'en' | 'vi', Translation> = {
  en: {
    nav: {
      strategy: 'Strategy',
      platform: 'AI Platform',
      venture: 'Venture',
      insights: 'Insights',
      about: 'About Us',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Powered by KPIBSC AI BRAIN',
      headline: 'The AI-Powered OS for $100B Startups',
      subheadline: 'Empowering founders with strategic intelligence, automated execution, and institutional capital to build the next generation of decacorns.',
      cta: 'Get Started',
      secondaryCta: 'Explore AI Tools',
    },
    thesis: {
      title: 'Our Investment Thesis',
      subtitle: 'We don’t just consult. We build. PROVIEW VC acts as a Venture Builder using proprietary AI to institutionalize growth.',
      reduction: 'Failure Rate Reduction',
      metric: 'From 90% down to <10%',
      moatTitle: 'Defensible AI Moat',
      moatDesc: 'Leveraging unique proprietary data loops that compound with every transaction.',
      scaleTitle: 'Exponential Scalability',
      scaleDesc: 'Moving from manual processes to automated AI agents managing OKRs 24/7.',
    },
    about: {
      title: 'ABOUT PROVIEW VC',
      problemTitle: 'The Strategic Paradox',
      problemDesc: 'In today’s market, 90% of strategies fail due to fragmented execution.',
      solutionTitle: 'PROVIEW VC Trinity',
      pillars: {
        consulting: {
          title: 'Strategic Advisory (The Brain)',
          desc: 'High-level advisory on Business, Startup, Branding, and Investment. We design the blueprint for global dominance.'
        },
        software: {
          title: 'Autonomous AI OS (The Engine)',
          desc: 'A comprehensive, 100% AI-autonomous operational management ecosystem. It automates the transition from planning to action through IoT.'
        },
        capital: {
          title: 'The Venture Bridge (The Fuel)',
          desc: 'Connecting high-performance clients with global angel investors, VC funds, and institutional capital.'
        }
      },
      softwareFeatures: [
        'Strategic Planning: Vision, Mission, SWOT',
        'Precision Execution: Automated BSC',
        'Operational Autonomy: HR, Payroll, PM, Finance',
        'Industry 4.0: IoT connectivity for Factories',
        '100% Zero-Touch AI Operations',
        'Real-time KPI Tracking'
      ],
      teamTitle: 'The Leadership Team',
      founders: {
        ceo: {
          name: 'Mr. Phan Quang',
          role: 'Founder & CEO',
          bio: 'AI Visionary • Strategic Architect • Venture Capitalist.',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop'
        },
        coo: {
          name: 'Ms. Duc Truong',
          role: 'Co-Founder & COO',
          bio: 'Operations Maestro • Financial Expert.',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop'
        }
      }
    },
    form: {
      title: 'Get Started with PROVIEW VC',
      name: 'Full Name',
      company: 'Company/Organization',
      position: 'Position',
      email: 'Email',
      phone: 'Phone Number',
      country: 'Country',
      language: 'Preferred Language',
      needs: 'Desired Needs',
      budget: 'Estimated Budget',
      timeline: 'Expected Deployment Time',
      submit: 'Submit Information',
      required: 'Required',
      success: 'Thank you for contacting PROVIEW VC, we will contact you for cooperation!',
    },
    tech: {
      title: 'Institutional Grade Tech Stack',
      badge: 'Tier 1 Infrastructure',
      googleCloud: 'Google Cloud Platform',
      vertexAI: 'Vertex AI Model Garden',
      scalable: 'Auto-scaling Microservices',
    },
    footer: {
      products: 'Products',
      company: 'Company',
      contact: 'Contact',
      slogan: 'AI-Powered OS Platform for Future. Automation - Intelligence - Precision - Autonomous Operations.',
    },
  },
  vi: {
    nav: {
      strategy: 'Chiến lược',
      platform: 'Nền tảng AI',
      venture: 'Đầu tư',
      insights: 'Tri thức',
      about: 'Về chúng tôi',
      getStarted: 'Bắt đầu ngay',
    },
    hero: {
      badge: 'Vận hành trên nền tảng Google Cloud Vertex AI',
      headline: 'Hệ điều hành AI cho Startups $100 tỷ đô',
      subheadline: 'Trao quyền cho các nhà sáng lập bằng trí tuệ chiến lược, thực thi tự động và nguồn vốn định chế để xây dựng kỳ lân thế hệ mới.',
      cta: 'Bắt đầu ngay',
      secondaryCta: 'Khám phá công cụ AI',
    },
    thesis: {
      title: 'Triết lý đầu tư',
      subtitle: 'Chúng tôi không chỉ tư vấn. Chúng tôi xây dựng. PROVIEW VC là một Venture Builder sử dụng AI độc quyền để chuyên nghiệp hóa tăng trưởng.',
      reduction: 'Giảm tỷ lệ thất bại',
      metric: 'Từ 90% xuống dưới <10%',
      moatTitle: 'Con hào AI vững chắc',
      moatDesc: 'Tận dụng các vòng lặp dữ liệu độc quyền, tạo ra lợi thế cạnh tranh.',
      scaleTitle: 'Khả năng mở rộng quy mô',
      scaleDesc: 'Chuyển đổi quy trình thủ công sang tác nhân AI quản lý OKR 24/7.',
    },
    about: {
      title: 'VỀ PROVIEW VC',
      problemTitle: 'Nghịch lý Chiến lược',
      problemDesc: 'Trong thị trường siêu tốc độ hiện nay, 90% chiến lược thất bại do thực thi bị phân mảnh.',
      solutionTitle: 'Kiềng ba chân PROVIEW VC',
      pillars: {
        consulting: {
          title: 'Cố vấn Chiến lược (Bộ não)',
          desc: 'Tư vấn cao cấp về Kinh doanh, Khởi nghiệp, Thương hiệu và Đầu tư. Chúng tôi thiết kế bản kế hoạch để thống trị thị trường toàn cầu.'
        },
        software: {
          title: 'Hệ điều hành AI tự chủ (Động cơ)',
          desc: 'Hệ sinh thái Phần mềm quản trị vận hành tổng thể, toàn diện, thông minh, tự trị 100% bằng AI. Loại bỏ sai sót con người bằng cách tự động hóa chuyển đổi từ lập kế hoạch sang hành động thông qua IoT.'
        },
        capital: {
          title: 'Cầu nối Đầu tư (Nhiên liệu)',
          desc: 'Kết nối các khách hàng hiệu suất cao với mạng lưới nhà đầu tư thiên thần, quỹ VC và định chế tài chính toàn cầu.'
        }
      },
      softwareFeatures: [
        'Hoạch định chiến lược: Tầm nhìn, Sứ mệnh, SWOT',
        'Thực thi chính xác: Tự động hóa BSC',
        'Vận hành tự chủ: Nhân sự, Lương, Tài chính',
        'Công nghiệp 4.0: Kết nối IoT cho các nhà máy',
        'Vận hành AI 100% không cần can thiệp',
        'Đo lường KPI thời gian thực'
      ],
      teamTitle: 'Đội ngũ lãnh đạo',
      founders: {
        ceo: {
          name: 'Mr. Phan Quang',
          role: 'Founder & CEO',
          bio: 'Tầm nhìn AI • Kiến trúc sư Chiến lược • Nhà đầu tư mạo hiểm.',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop'
        },
        coo: {
          name: 'Ms. Duc Truong',
          role: 'Co-Founder & COO',
          bio: 'Bậc thầy vận hành • Chuyên gia tài chính.',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop'
        }
      }
    },
    form: {
      title: 'Hợp tác cùng PROVIEW VC',
      name: 'Họ tên',
      company: 'Công ty/Đơn vị',
      position: 'Chức vụ',
      email: 'Email',
      phone: 'Số điện thoại',
      country: 'Quốc gia',
      language: 'Ngôn ngữ sử dụng',
      needs: 'Nhu cầu mong muốn',
      budget: 'Ngân sách',
      timeline: 'Thời gian dự kiến triển khai',
      submit: 'Gửi',
      required: 'Bắt buộc',
      success: 'Cảm ơn bạn đã liên hệ với PROVIEW VC, Chúng tôi sẽ liên lạc với bạn để hợp tác!',
    },
    tech: {
      title: 'Hạ tầng công nghệ cấp định chế',
      badge: 'Cơ sở hạ tầng Tier 1',
      googleCloud: 'Google Cloud Platform',
      vertexAI: 'Vertex AI Model Garden',
      scalable: 'Kiến trúc Microservices mở rộng',
    },
    footer: {
      products: 'Sản phẩm',
      company: 'Công ty',
      contact: 'Liên hệ',
      slogan: 'Nền tảng hệ điều hành AI cho tương lai. Tự động hóa - Thông minh - Chính xác - Vận hành tự động.',
    },
  },
};
