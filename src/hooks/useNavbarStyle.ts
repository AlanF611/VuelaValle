import { useLocation } from 'react-router-dom';

// SOLO las páginas que tienen hero con imagen/fondo oscuro
const DARK_HERO_PATHS = new Set([
  '/',
  '/en',
]);

export function useNavbarStyle() {
  const { pathname } = useLocation();
  const hasDarkHero = DARK_HERO_PATHS.has(pathname);
  return { hasDarkHero };
}
