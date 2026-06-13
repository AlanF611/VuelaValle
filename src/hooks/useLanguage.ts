import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const routeMap: Record<string, Record<string, string>> = {
  es: {
    home: '/',
    flights: '/parapente-valle-de-bravo',
    courses: '/cursos-parapente',
    gallery: '/galeria',
    instructors: '/instructores',
    blog: '/blog',
    contact: '/contacto',
    book: '/reservar',
    privacy: '/aviso-de-privacidad',
    terms: '/terminos-y-condiciones',
  },
  en: {
    home: '/en',
    flights: '/en/paragliding-valle-de-bravo',
    courses: '/en/paragliding-courses',
    gallery: '/en/gallery',
    instructors: '/en/instructors',
    blog: '/en/blog',
    contact: '/en/contact',
    book: '/en/book',
    privacy: '/en/privacy-policy',
    terms: '/en/terms-and-conditions',
  },
};

function getCurrentPage(location: string, lang: string): string {
  const routes = routeMap[lang];
  for (const [key, path] of Object.entries(routes)) {
    if (location === path || (key !== 'home' && location.startsWith(path + '/'))) {
      return key;
    }
  }
  return 'home';
}

export function useLanguage() {
  const { i18n: i18nInstance } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18nInstance.language as 'es' | 'en';
  const currentPage = getCurrentPage(location.pathname, currentLang);

  const switchLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18nInstance.changeLanguage(newLang);
    localStorage.setItem('vuelavalle-lang', newLang);
    const targetRoute = routeMap[newLang][currentPage] || routeMap[newLang].home;
    navigate(targetRoute);
  };

  return { currentLang, switchLanguage };
}

export function getLocalizedRoute(page: string, lang: string): string {
  return routeMap[lang]?.[page] || routeMap[lang].home;
}

export { routeMap };
