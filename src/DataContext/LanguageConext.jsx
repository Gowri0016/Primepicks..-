// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Available languages
const languages = {
  en: {
    greeting: "Hello",
    description: "Welcome to our website!",
  },
  ta: {
    greeting: "வணக்கம்",
    description: "எங்களின் வலைத்தளத்திற்கு வரவேற்கின்றேன்!",
  },
  hi: {
    greeting: "नमस्ते",
    description: "हमारी वेबसाइट पर स्वागत है!",
  },
  bn: {
    greeting: "হ্যালো",
    description: "আমাদের ওয়েবসাইটে স্বাগতম!",
  },
  te: {
    greeting: "హలో",
    description: "మా వెబ్‌సైట్‌లో స్వాగతం!",
  },
  ml: {
    greeting: "ഹലോ",
    description: "ഞങ്ങളുടെ വെബ്സൈറ്റിലേക്ക് സ്വാഗതം!",
  }
};

// Create context
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Language provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};
