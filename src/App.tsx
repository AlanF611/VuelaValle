import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppBubble from './components/layout/WhatsAppBubble';
import MobileCTA from './components/layout/MobileCTA';
import PageWrapper from './components/layout/PageWrapper';
import AppRouter from './router';
import './i18n';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg">
            Skip to content
          </a>
          <Navbar />
          <PageWrapper>
            <AppRouter />
          </PageWrapper>
          <Footer />
          <WhatsAppBubble />
          <MobileCTA />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
