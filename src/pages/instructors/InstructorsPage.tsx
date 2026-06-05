import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Award } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { instructors } from '../../data/instructors';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function InstructorsPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Nuestros Instructores de Parapente | Pilotos Certificados | AltaVuela' : 'Our Paragliding Instructors | Certified Pilots | AltaVuela'}
        description={lang === 'es' ? 'Conoce a los pilotos certificados de AltaVuela. Instructores con cientos de vuelos en Valle de Bravo. AVLM y APPI certificados.' : 'Meet the certified pilots of AltaVuela. Instructors with hundreds of flights in Valle de Bravo. AVLM and APPI certified.'}
        pathEs="/instructores"
        pathEn="/en/instructors"
      />

      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1920"
          alt={t('alt.instructor')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">{t('instructors.title')}</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, i) => (
              <FadeIn key={instructor.id} delay={i * 0.15}>
                <Card id={instructor.id} className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xl font-heading font-bold text-primary-700">{instructor.initials}</span>
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl text-dark-900">{instructor.name}</h2>
                      <p className="text-sm text-dark-500">{instructor.years} {t('instructors.years')} · {instructor.totalFlights.toLocaleString()}+ {t('instructors.flights')}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-2">{t('instructors.certifications')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map(cert => (
                        <Badge key={cert} variant="primary">{cert}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-1">{t('instructors.specialty')}</h3>
                    <p className="text-sm text-dark-600">{lang === 'es' ? instructor.specialtyEs : instructor.specialtyEn}</p>
                  </div>

                  <p className="text-sm text-dark-500 leading-relaxed flex-1">
                    {lang === 'es' ? instructor.bioEs : instructor.bioEn}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
