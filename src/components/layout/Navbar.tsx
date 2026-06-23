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
    const handle = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    // Check initial scroll position
    handle();
    
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Reset scroll state when location changes and check scroll position
  useEffect(() => {
    const isScrolled = window.scrollY > 20;
    setScrolled(isScrolled);
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { key: 'home', page: 'home' },
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

  // Only transparent when at top AND on a page with dark hero
  const isTransparent = hasDarkHero && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent 
            ? 'bg-transparent' 
            : 'bg-white shadow-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Mucho más visible y grande */}
          <Link
            to={getLocalizedRoute('home', currentLang)}
            className={`flex items-center shrink-0 transition-all duration-300 rounded-xl ${
              isTransparent 
                ? 'bg-white shadow-lg px-3 py-1.5' 
                : ''
            }`}
          >
            <img
              src="/img/logo.jpeg"
              alt="VuelaValle"
              className="h-10 sm:h-12 lg:h-14 w-auto"
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
                      ? 'text-dark-900 bg-white shadow-sm'
                      : 'text-primary-600 bg-primary-50'
                    : isTransparent
                    ? 'text-white hover:text-white hover:bg-white/20'
                    : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/525554070103"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                isTransparent
                  ? 'text-white hover:text-white hover:bg-white/20'
                  : 'text-green-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={switchLanguage}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                isTransparent
                  ? 'border-white/40 text-white hover:bg-white/20'
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
              isTransparent 
                ? 'text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm' 
                : 'text-dark-900 hover:bg-dark-50'
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
              href="https://wa.me/525554070103"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 bg-green-500 text-white rounded-xl font-semibold text-base text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
