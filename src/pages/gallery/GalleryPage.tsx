import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SEOHead from '../../components/seo/SEOHead';
import Modal from '../../components/ui/Modal';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', category: 'tandem', altEs: 'Parapente volando sobre el lago de Valle de Bravo', altEn: 'Paragliding over Valle de Bravo lake' },
  { src: 'https://images.unsplash.com/photo-1601987077677-5346c463c08e?w=800', category: 'sunset', altEs: 'Parapente tándem en Valle de Bravo atardecer', altEn: 'Tandem paragliding in Valle de Bravo sunset' },
  { src: 'https://images.unsplash.com/photo-1563804447971-6e113ab80713?w=800', category: 'xc', altEs: 'Vuelo cross-country parapente Valle de Bravo', altEn: 'Cross-country paragliding flight Valle de Bravo' },
  { src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800', category: 'tandem', altEs: 'Vista aérea del lago Valle de Bravo parapente', altEn: 'Aerial view of Valle de Bravo lake paragliding' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'sunset', altEs: 'Paisaje panorámico Valle de Bravo vuelo libre', altEn: 'Panoramic landscape Valle de Bravo free flight' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', category: 'xc', altEs: 'Montañas alrededor de Valle de Bravo parapente', altEn: 'Mountains around Valle de Bravo paragliding' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800', category: 'courses', altEs: 'Curso de parapente iniciación Valle de Bravo', altEn: 'Beginner paragliding course Valle de Bravo' },
  { src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800', category: 'tandem', altEs: 'Parapente despegando en Valle de Bravo', altEn: 'Paraglider launching in Valle de Bravo' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800', category: 'courses', altEs: 'Práctica de parapente en ladera Valle de Bravo', altEn: 'Paragliding hill practice Valle de Bravo' },
  { src: 'https://images.unsplash.com/photo-1563804447971-6e113ab80713?w=800', category: 'sunset', altEs: 'Atardecer sobre Valle de Bravo parapente', altEn: 'Sunset over Valle de Bravo paragliding' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', category: 'xc', altEs: 'Vuelo en parapente sobre bosques Valle de Bravo', altEn: 'Paragliding over forests Valle de Bravo' },
  { src: 'https://images.unsplash.com/photo-1601987077677-5346c463c08e?w=800', category: 'courses', altEs: 'Instructor de parapente con alumno Valle de Bravo', altEn: 'Paragliding instructor with student Valle de Bravo' },
];

type Category = 'all' | 'tandem' | 'sunset' | 'xc' | 'courses';

export default function GalleryPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: Category[] = ['all', 'tandem', 'sunset', 'xc', 'courses'];
  const filtered = activeFilter === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeFilter);

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Galería de Vuelos en Parapente | Valle de Bravo | AltaVuela' : 'Paragliding Gallery | Valle de Bravo | AltaVuela'}
        description={lang === 'es' ? 'Galería de fotos de vuelos en parapente en Valle de Bravo. Vuelos tándem, sunset, XC y cursos.' : 'Photo gallery of paragliding flights in Valle de Bravo. Tandem, sunset, XC flights and courses.'}
        pathEs="/galeria"
        pathEn="/en/gallery"
      />

      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563804447971-6e113ab80713?w=1920"
          alt={lang === 'es' ? 'Galería parapente valle de bravo' : 'Paragliding gallery valle de bravo'}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">{t('gallery.title')}</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex gap-2 flex-wrap justify-center mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === f ? 'bg-primary-500 text-white' : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                }`}
              >
                {t(`gallery.${f}`)}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightboxIndex(i)}
                className="break-inside-avoid w-full group relative overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-primary-500"
              >
                <img
                  src={img.src}
                  alt={lang === 'es' ? img.altEs : img.altEn}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Modal isOpen={lightboxIndex !== null} onClose={() => setLightboxIndex(null)}>
        {lightboxIndex !== null && (
          <div className="p-2">
            <img
              src={filtered[lightboxIndex].src.replace('w=800', 'w=1400')}
              alt={lang === 'es' ? filtered[lightboxIndex].altEs : filtered[lightboxIndex].altEn}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-3 px-2 text-sm text-dark-500">
              {lang === 'es' ? filtered[lightboxIndex].altEs : filtered[lightboxIndex].altEn}
            </p>
          </div>
        )}
      </Modal>
    </main>
  );
}
