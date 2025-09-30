// js/config.js - إعدادات التطبيق المنفصلة
const APP_CONFIG = {
    // معلومات التطبيق
    app: {
        name: "تطبيق صوتيات إسلامية",
        version: "2.0.0",
        author: "الشيخ فضل الكلدي",
        description: "تطبيق للاستماع إلى الدروس والمحاضرات الإسلامية"
    },
    
    // إعدادات الربط عن بعد
    remote: {
        enabled: true,
        baseUrl: "https://raw.githubusercontent.com/username/islamic-audio-app/main",
        categoriesUrl: "https://raw.githubusercontent.com/username/islamic-audio-app/main/categories.json",
        topicsUrl: "https://raw.githubusercontent.com/username/islamic-audio-app/main/topics.json",
        audioBaseUrl: "https://drive.google.com/uc?id=",
        updateInterval: 24 // ساعات بين كل تحديث
    },
    
    // المميزات
    features: {
        download: true,
        offline: true,
        themes: true,
        backgroundPlay: true,
        autoPlayNext: true
    },
    
    // الإعدادات الافتراضية
    settings: {
        theme: "auto", // light, dark, auto
        volume: 0.8,
        playbackSpeed: 1.0,
        autoDownload: false
    },
    
    // روابط التواصل
    links: {
        website: "https://example.com",
        email: "support@example.com",
        telegram: "https://t.me/username"
    }
};
