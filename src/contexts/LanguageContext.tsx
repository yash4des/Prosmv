import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "bn" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (lang: Language): Record<string, string> => {
  const translations: Record<Language, Record<string, string>> = {
    en: {
      "hi_user": "Hi Rajesh",
      "welcome": "Welcome to your dashboard!",
      "methoddemo": "MethodDemo",
      "english": "English",
      "hindi": "Hindi",
      "bengali": "Bengali",
      "chinese": "Chinese",
      "dashboard": "Dashboard",
      "customer": "Customer",
      "style_and_order": "Style and order",
      "machine": "Machine",
      "operations": "Operations",
      "operation_sequence": "Operation sequence",
      "pro_smv": "Pro SMV",
      "thread_consumption": "Thread consumption",
      "setting": "Setting",
      "log_out": "Log out",
      "dashboard_overview": "Dashboard Overview",
      "total_style": "Total Style",
      "total_order": "Total Order",
      "pro_smv_made": "Pro SMV Made",
      "approval_trend": "Approval Trend",
      "stage_wise_bubble": "Stage Wise Bubble",
      "analysis_data": "Analysis Data",
      "average_smv": "Average SMV",
      "style_analysis": "Style Analysis",
      "pro_smv_usage": "Pro SMV Usage",
      "add_new": "Add New",
      "search": "Search",
      "filter": "Filter",
      "export": "Export",
      "customer_name": "Customer Name",
      "email": "Email",
      "phone": "Phone",
      "address": "Address",
      "actions": "Actions",
      "style_name": "Style Name",
      "order_number": "Order Number",
      "quantity": "Quantity",
      "status": "Status",
      "machine_name": "Machine Name",
      "machine_type": "Machine Type",
      "operation_name": "Operation Name",
      "smv": "SMV",
      "sequence": "Sequence",
    },
    hi: {
      "hi_user": "नमस्ते राजेश",
      "welcome": "आपके डैशबोर्ड में आपका स्वागत है!",
      "methoddemo": "विधि डेमो",
      "english": "अंग्रेज़ी",
      "hindi": "हिंदी",
      "bengali": "बंगाली",
      "chinese": "चीनी",
      "dashboard": "डैशबोर्ड",
      "customer": "ग्राहक",
      "style_and_order": "शैली और ऑर्डर",
      "machine": "मशीन",
      "operations": "संचालन",
      "operation_sequence": "ऑपरेशन अनुक्रम",
      "pro_smv": "प्रो एसएमवी",
      "thread_consumption": "धागा खपत",
      "setting": "सेटिंग",
      "log_out": "लॉग आउट",
      "dashboard_overview": "डैशबोर्ड अवलोकन",
      "total_style": "कुल शैली",
      "total_order": "कुल ऑर्डर",
      "pro_smv_made": "प्रो एसएमवी बनाया",
      "approval_trend": "अनुमोदन प्रवृत्ति",
      "stage_wise_bubble": "चरणवार बुलबुला",
      "analysis_data": "विश्लेषण डेटा",
      "average_smv": "औसत एसएमवी",
      "style_analysis": "शैली विश्लेषण",
      "pro_smv_usage": "प्रो एसएमवी उपयोग",
      "add_new": "नया जोड़ें",
      "search": "खोजें",
      "filter": "फ़िल्टर",
      "export": "निर्यात",
      "customer_name": "ग्राहक का नाम",
      "email": "ईमेल",
      "phone": "फ़ोन",
      "address": "पता",
      "actions": "क्रियाएँ",
      "style_name": "शैली नाम",
      "order_number": "ऑर्डर संख्या",
      "quantity": "मात्रा",
      "status": "स्थिति",
      "machine_name": "मशीन का नाम",
      "machine_type": "मशीन प्रकार",
      "operation_name": "ऑपरेशन नाम",
      "smv": "एसएमवी",
      "sequence": "अनुक्रम",
    },
    bn: {
      "hi_user": "হাই রাজেশ",
      "welcome": "আপনার ড্যাশবোর্ডে স্বাগতম!",
      "methoddemo": "মেথড ডেমো",
      "english": "ইংরেজি",
      "hindi": "হিন্দি",
      "bengali": "বাংলা",
      "chinese": "চীনা",
      "dashboard": "ড্যাশবোর্ড",
      "customer": "গ্রাহক",
      "style_and_order": "স্টাইল এবং অর্ডার",
      "machine": "মেশিন",
      "operations": "অপারেশন",
      "operation_sequence": "অপারেশন ক্রম",
      "pro_smv": "প্রো এসএমভি",
      "thread_consumption": "থ্রেড খরচ",
      "setting": "সেটিং",
      "log_out": "লগ আউট",
      "dashboard_overview": "ড্যাশবোর্ড ওভারভিউ",
      "total_style": "মোট স্টাইল",
      "total_order": "মোট অর্ডার",
      "pro_smv_made": "প্রো এসএমভি তৈরি",
      "approval_trend": "অনুমোদন প্রবণতা",
      "stage_wise_bubble": "পর্যায়ভিত্তিক বুদ্বুদ",
      "analysis_data": "বিশ্লেষণ ডেটা",
      "average_smv": "গড় এসএমভি",
      "style_analysis": "স্টাইল বিশ্লেষণ",
      "pro_smv_usage": "প্রো এসএমভি ব্যবহার",
      "add_new": "নতুন যোগ করুন",
      "search": "অনুসন্ধান",
      "filter": "ফিল্টার",
      "export": "রপ্তানি",
      "customer_name": "গ্রাহকের নাম",
      "email": "ইমেইল",
      "phone": "ফোন",
      "address": "ঠিকানা",
      "actions": "ক্রিয়া",
      "style_name": "স্টাইল নাম",
      "order_number": "অর্ডার নম্বর",
      "quantity": "পরিমাণ",
      "status": "অবস্থা",
      "machine_name": "মেশিনের নাম",
      "machine_type": "মেশিনের ধরন",
      "operation_name": "অপারেশন নাম",
      "smv": "এসএমভি",
      "sequence": "ক্রম",
    },
    zh: {
      "hi_user": "嗨，拉杰什",
      "welcome": "欢迎来到您的仪表板！",
      "methoddemo": "方法演示",
      "english": "英语",
      "hindi": "印地语",
      "bengali": "孟加拉语",
      "chinese": "中文",
      "dashboard": "仪表板",
      "customer": "客户",
      "style_and_order": "样式和订单",
      "machine": "机器",
      "operations": "操作",
      "operation_sequence": "操作顺序",
      "pro_smv": "专业标准工时",
      "thread_consumption": "线程消耗",
      "setting": "设置",
      "log_out": "登出",
      "dashboard_overview": "仪表板概览",
      "total_style": "总样式",
      "total_order": "总订单",
      "pro_smv_made": "制作的专业标准工时",
      "approval_trend": "审批趋势",
      "stage_wise_bubble": "分阶段气泡",
      "analysis_data": "分析数据",
      "average_smv": "平均标准工时",
      "style_analysis": "样式分析",
      "pro_smv_usage": "专业标准工时使用",
      "add_new": "添加新",
      "search": "搜索",
      "filter": "筛选",
      "export": "导出",
      "customer_name": "客户名称",
      "email": "电子邮件",
      "phone": "电话",
      "address": "地址",
      "actions": "操作",
      "style_name": "样式名称",
      "order_number": "订单号",
      "quantity": "数量",
      "status": "状态",
      "machine_name": "机器名称",
      "machine_type": "机器类型",
      "operation_name": "操作名称",
      "smv": "标准工时",
      "sequence": "顺序",
    },
  };

  return translations[lang];
};
