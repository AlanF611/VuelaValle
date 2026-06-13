import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedRoute } from '../../hooks/useLanguage';

export default function MobileCTA() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  return (
    // z-20 — below WhatsApp bubble (z-30), below navbar (z-50)
    // safe-area-inset-bottom ensures it clears iOS home indicator
    <div className="fixed bottom-0 left-0 right-0 z-20 lg:hidden bg-white/95 backdrop-blur-lg border-t border-dark-100 shadow-lg"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="px-4 py-3">
        <Link
          to={getLocalizedRoute('book', lang)}
          className="flex items-center justify-center w-full py-3.5 bg-accent-500 text-dark-900 rounded-xl font-bold text-base active:bg-accent-600 transition-colors"
        >
          {t('whatsapp.book')}
        </Link>
      </div>
    </div>
  );
}
