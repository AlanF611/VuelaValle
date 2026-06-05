import { useLocation } from 'react-router-dom';

// Pages where the hero is dark enough to support a transparent navbar
const DARK_HERO_PATHS = new Set([
  '/',
  '/en',
  '/parapente-valle-de-bravo',
  '/en/paragliding-valle-de-bravo',
  '/galeria',
  '/en/gallery',
  '/contacto',
  '/en/contact',
  '/blog',
  '/en/blog',
  '/instructores',
  '/en/instructors',
]);

export function useNavbarStyle() {
  const { pathname } = useLocation();
  // Exact match OR starts with /blog/ (blog posts also have dark hero)
  const hasDarkHero =
    DARK_HERO_PATHS.has(pathname) ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/en/blog/');
  return { hasDarkHero };
}
