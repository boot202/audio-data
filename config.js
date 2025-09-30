// config.js - إعدادات التطبيق
const APP_CONFIG = {
    name: "تطبيق صوتيات إسلامية",
    version: "1.0.0",
    author: "الشيخ فضل الكلدي",
    remote: {
        enabled: true,
        baseUrl: "https://raw.githubusercontent.com/boot202/audio-data/refs/heads/main",
        updateInterval: 24 // ساعات
    },
    features: {
        download: true,
        offline: true,
        themes: true,
        backgroundPlay: true
    }
};
