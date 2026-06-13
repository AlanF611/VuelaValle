import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useLanguage, getLocalizedRoute } from '../../hooks/useLanguage';
import { useNavbarStyle } from '../../hooks/useNavbarStyle';

export default function Navbar() {
  const { t } = useTranslation();
  const { currentLang, switchLanguage } = useLanguage();
  const location = useLocation();
  const { hasDarkHero } = useNavbarStyle();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    // Run once on mount to set initial state (e.g. user navigates via back button mid-scroll)
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { key: 'flights', page: 'flights' },
    { key: 'gallery', page: 'gallery' },
    { key: 'instructors', page: 'instructors' },
    { key: 'blog', page: 'blog' },
    { key: 'contact', page: 'contact' },
  ] as const;

  const isActive = (page: string) => {
    const route = getLocalizedRoute(page, currentLang);
    return location.pathname === route || location.pathname.startsWith(route + '/');
  };

  // Transparent only when: page has a dark hero AND user hasn't scrolled AND menu is closed
  const isTransparent = hasDarkHero && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-dark-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to={getLocalizedRoute('home', currentLang)}
            className={`flex items-center shrink-0 transition-all duration-300 ${
              isTransparent ? 'bg-white rounded-xl px-2.5 py-1' : ''
            }`}
          >
            <img
              src="/img/logo.jpeg"
              alt="VuelaValle"
              className="h-8 lg:h-9 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ key, page }) => (
              <Link
                key={key}
                to={getLocalizedRoute(page, currentLang)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(page)
                    ? isTransparent
                      ? 'text-white bg-white/15'
                      : 'text-primary-600 bg-primary-50'
                    : isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={switchLanguage}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                isTransparent
                  ? 'border-white/30 text-white/80 hover:bg-white/10'
                  : 'border-dark-200 text-dark-600 hover:bg-dark-50'
              }`}
            >
              {currentLang === 'es' ? 'EN' : 'ES'}
            </button>
            <Link
              to={getLocalizedRoute('book', currentLang)}
              className="px-5 py-2.5 bg-accent-500 text-dark-900 rounded-lg text-sm font-semibold hover:bg-accent-600 transition-all hover:-translate-y-0.5 shadow-sm whitespace-nowrap"
            >
              {t('nav.bookNow')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className={`lg:hidden p-2 -mr-1 rounded-lg transition-colors ${
              isTransparent ? 'text-white' : 'text-dark-900'
            }`}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="flex flex-col px-6 py-8 gap-1">
            {navItems.map(({ key, page }) => (
              <Link
                key={key}
                to={getLocalizedRoute(page, currentLang)}
                className={`py-4 text-xl font-heading font-semibold border-b border-dark-100 transition-colors ${
                  isActive(page) ? 'text-primary-600' : 'text-dark-900 hover:text-primary-600'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            ))}

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => { switchLanguage(); setMobileOpen(false); }}
                className="flex-1 py-3 rounded-xl border-2 border-dark-200 text-dark-700 font-semibold text-base"
              >
                {currentLang === 'es' ? 'English' : 'Español'}
              </button>
              <Link
                to={getLocalizedRoute('book', currentLang)}
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-3 bg-accent-500 text-dark-900 rounded-xl font-bold text-base text-center"
              >
                {t('nav.bookNow')}
              </Link>
            </div>

            <a
              href="https://wa.me/5217220000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 bg-green-500 text-white rounded-xl font-semibold text-base text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
