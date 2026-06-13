import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhatsAppBubble() {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/5217220000000"
      target="_blank"
      rel="noopener noreferrer"
      // On mobile: sit above the MobileCTA bar (bottom-20 = 80px clears the ~72px bar)
      // On desktop: standard bottom-6
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-30 group flex items-center gap-2"
      aria-label={t('whatsapp.tooltip')}
    >
      {/* Tooltip — desktop only */}
      <span className="hidden sm:block px-3 py-1.5 bg-white text-dark-700 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 whitespace-nowrap">
        {t('whatsapp.tooltip')}
      </span>
      <span className="relative flex items-center justify-center w-13 h-13 w-12 h-12 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition-all duration-200 hover:scale-105 active:scale-95">
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-300 rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full" />
      </span>
    </a>
  );
}
