import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wind, Instagram, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { getLocalizedRoute } from '../../hooks/useLanguage';

export default function Footer() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const navItems = [
    { key: 'flights', page: 'flights' },
    { key: 'gallery', page: 'gallery' },
    { key: 'instructors', page: 'instructors' },
    { key: 'blog', page: 'blog' },
    { key: 'contact', page: 'contact' },
  ] as const;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TouristAttraction'],
    name: 'VuelaValle',
    description: lang === 'es'
      ? 'Especialistas en vuelo en parapente en Valle de Bravo. Pilotos certificados AVLM/APPI. Vuelos tándem, cursos y experiencias de vuelo libre.'
      : 'Paragliding specialists in Valle de Bravo. AVLM/APPI certified pilots. Tandem flights, courses, and free flight experiences.',
    url: 'https://VuelaValle.mx',
    telephone: '+52-722-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Valle de Bravo',
      addressLocality: 'Valle de Bravo',
      addressRegion: 'Estado de México',
      postalCode: '51200',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.1944,
      longitude: -100.1323,
    },
    openingHours: 'Mo-Su 07:00-18:00',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
    },
    sameAs: [
      'https://www.instagram.com/VuelaValle',
      'https://www.facebook.com/VuelaValle',
    ],
  };

  return (
    <footer className="bg-dark-900 text-dark-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wind className="w-6 h-6 text-primary-400" />
              <span className="font-heading font-bold text-xl text-white">VuelaValle</span>
            </div>
            <p className="text-sm leading-relaxed text-dark-400">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{t('footer.pages')}</h3>
            <ul className="space-y-2">
              {navItems.map(({ key, page }) => (
                <li key={key}>
                  <Link
                    to={getLocalizedRoute(page, lang)}
                    className="text-sm text-dark-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span className="text-sm">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-sm">info@VuelaValle.mx</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-sm">+52 722 XXX XXXX</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">{t('footer.social')}</h3>
            <div className="flex gap-3">
              <a href="https://instagram.com/VuelaValle" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-dark-800 rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/VuelaValle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-dark-800 rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@VuelaValle" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 bg-dark-800 rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <Link
                to={getLocalizedRoute('book', lang)}
                className="inline-flex px-5 py-2.5 bg-accent-500 text-dark-900 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-all"
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">{t('footer.copyright')}</p>
          <div className="flex gap-4 text-xs text-dark-500">
            <span className="hover:text-dark-300 cursor-pointer">{t('footer.privacy')}</span>
            <span className="hover:text-dark-300 cursor-pointer">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
