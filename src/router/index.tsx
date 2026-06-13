import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const FlightsPage = lazy(() => import('../pages/flights/FlightsPage'));
const GalleryPage = lazy(() => import('../pages/gallery/GalleryPage'));
const InstructorsPage = lazy(() => import('../pages/instructors/InstructorsPage'));
const BlogIndex = lazy(() => import('../pages/blog/BlogIndex'));
const BlogPost = lazy(() => import('../pages/blog/BlogPost'));
const BookingPage = lazy(() => import('../pages/booking/BookingPage'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));
const PrivacyPage = lazy(() => import('../pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('../pages/legal/TermsPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function AppRouter() {
  const { i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Spanish routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/parapente-valle-de-bravo" element={<FlightsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/instructores" element={<InstructorsPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/reservar" element={<BookingPage />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPage />} />
        <Route path="/terminos-y-condiciones" element={<TermsPage />} />

        {/* English routes */}
        <Route path="/en" element={<HomePage />} />
        <Route path="/en/paragliding-valle-de-bravo" element={<FlightsPage />} />
        <Route path="/en/gallery" element={<GalleryPage />} />
        <Route path="/en/instructors" element={<InstructorsPage />} />
        <Route path="/en/blog" element={<BlogIndex />} />
        <Route path="/en/blog/:slug" element={<BlogPost />} />
        <Route path="/en/contact" element={<ContactPage />} />
        <Route path="/en/book" element={<BookingPage />} />
        <Route path="/en/privacy-policy" element={<PrivacyPage />} />
        <Route path="/en/terms-and-conditions" element={<TermsPage />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to={lang === 'en' ? '/en' : '/'} replace />} />
      </Routes>
    </Suspense>
  );
}
