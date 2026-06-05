import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ShieldCheck, MapPin, CloudSun } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';
import Accordion from '../../components/ui/Accordion';
import { flightPackages } from '../../data/packages';
import { getLocalizedRoute } from '../../hooks/useLanguage';

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

export default function FlightsPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const packageIds: Array<'classic' | 'sunset' | 'xc'> = ['classic', 'sunset', 'xc'];
  const goodForKeys = ['classic', 'sunset', 'xc'] as const;

  const launchSites = [
    {
      name: lang === 'es' ? 'La Torre' : 'La Torre',
      description: lang === 'es'
        ? 'Despegue sobre el pueblo de Valle de Bravo. Vistas panorámicas del lago y del pueblo. Ideal para vuelos tándem y primeras experiencias. Acceso directo desde el centro de Valle.'
        : 'Launch site above the town of Valle de Bravo. Panoramic views of the lake and town. Ideal for tandem flights and first experiences. Direct access from downtown Valle.',
      elevation: lang === 'es' ? '2,200 msnm' : '2,200 m ASL',
    },
    {
      name: lang === 'es' ? 'El Peñón' : 'El Peñón',
      description: lang === 'es'
        ? 'Sitio de clase mundial ubicado a 14 km de Valle de Bravo. Sede de la Copa del Mundo de Paragliding en 5 ocasiones. Condiciones térmicas excepcionales para vuelos cross-country.'
        : 'World-class site located 14 km from Valle de Bravo. Hosted the Paragliding World Cup 5 times. Exceptional thermal conditions for cross-country flights.',
      elevation: lang === 'es' ? '2,600 msnm' : '2,600 m ASL',
    },
  ];

  const faqItems = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
  ];

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Vuelos en Parapente Valle de Bravo | Tándem, Sunset y XC | AltaVuela' : 'Paragliding Flights Valle de Bravo | Tandem, Sunset & XC | AltaVuela'}
        description={lang === 'es' ? 'Vuelos en parapente tándem en Valle de Bravo. Clásico $1,200, Sunset $1,800, XC $2,800. Pilotos certificados. Reserva en línea.' : 'Tandem paragliding flights in Valle de Bravo. Classic $1,200, Sunset $1,800, XC $2,800. Certified pilots. Book online.'}
        pathEs="/parapente-valle-de-bravo"
        pathEn="/en/paragliding-valle-de-bravo"
        ogImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200"
      />

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920"
          alt={t('alt.hero')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            {lang === 'es' ? 'Vuelos en Parapente en Valle de Bravo' : 'Paragliding Flights in Valle de Bravo'}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {lang === 'es' ? 'Elige tu experiencia de vuelo y vive el cielo de Valle de Bravo' : 'Choose your flight experience and live the skies of Valle de Bravo'}
          </p>
        </div>
      </section>

      {/* Package Details */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {packageIds.map((id, i) => {
            const pkg = flightPackages[id];
            const features = t(`packages.${id}.features`, { returnObjects: true }) as string[];
            return (
              <FadeIn key={id} delay={0.1}>
                <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-stretch`}>
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden relative">
                      <img
                        src={pkg.image}
                        alt={t(`alt.${id}`)}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {id === 'sunset' && (
                        <div className="absolute top-4 left-4">
                          <Badge>{t('packages.sunset.badge')}</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-900">
                      {t(`packages.${id}.name`)}
                    </h2>
                    <p className="text-dark-500 mt-1">{t(`packages.${id}.duration`)}</p>
                    <ul className="mt-6 space-y-3">
                      {features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-dark-600">
                          <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm text-dark-400 italic">{t(`packages.${id}.goodFor`)}</p>
                    <div className="mt-6 flex items-end gap-4">
                      <div>
                        <span className="font-heading font-bold text-3xl text-dark-900">{t(`packages.${id}.price`)}</span>
                        <span className="text-dark-400 ml-1">MXN</span>
                      </div>
                      <Link to={getLocalizedRoute('book', lang)}>
                        <Button variant="amber">{t('packages.bookButton')}</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Launch Sites */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {lang === 'es' ? 'Sitios de despegue' : 'Launch sites'}
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {launchSites.map((site, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <h3 className="font-heading font-semibold text-xl text-dark-900">{site.name}</h3>
                    <Badge variant="dark">{site.elevation}</Badge>
                  </div>
                  <p className="text-dark-600 leading-relaxed">{site.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {lang === 'es' ? 'Tu seguridad es nuestra prioridad' : 'Your safety is our priority'}
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: lang === 'es' ? 'AVLM Certificado' : 'AVLM Certified', desc: lang === 'es' ? 'Pilotos con licencia oficial AVLM' : 'Official AVLM licensed pilots' },
              { icon: ShieldCheck, title: 'APPI', desc: lang === 'es' ? 'Reconocimiento internacional APPI' : 'International APPI recognition' },
              { icon: CloudSun, title: lang === 'es' ? 'Protocolo meteorológico' : 'Weather protocol', desc: lang === 'es' ? 'Solo volamos con condiciones ideales' : 'We only fly in ideal conditions' },
              { icon: ShieldCheck, title: lang === 'es' ? 'Seguro incluido' : 'Insurance included', desc: lang === 'es' ? 'Cobertura completa por vuelo' : 'Full coverage per flight' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="p-6 text-center h-full">
                  <item.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-dark-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-dark-500">{item.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {t('faq.title')}
            </h2>
          </FadeIn>
          <div className="mt-12">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
