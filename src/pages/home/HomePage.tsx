import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Camera, Car, Clock, ChevronDown, Star, Check } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';
import StarRating from '../../components/ui/StarRating';
import { useCountUp } from '../../hooks/useCountUp';
import { getLocalizedRoute } from '../../hooks/useLanguage';
import { reviews } from '../../data/reviews';
import { flightPackages } from '../../data/packages';
import { blogPosts } from '../../data/blogPosts';

function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const stat1 = useCountUp(500);
  const stat2 = useCountUp(10);
  const stat3 = useCountUp(10);

  const trustItems = [
    { icon: ShieldCheck, text: t('trust.certified') },
    { icon: Camera, text: t('trust.gopro') },
    { icon: Car, text: t('trust.transport') },
    { icon: Clock, text: t('trust.booking') },
  ];

  const packageIds: Array<'classic' | 'sunset' | 'xc'> = ['classic', 'sunset', 'xc'];

  const whyReasons = [
    { title: t('why.reason1Title'), text: t('why.reason1Text') },
    { title: t('why.reason2Title'), text: t('why.reason2Text') },
    { title: t('why.reason3Title'), text: t('why.reason3Text') },
  ];

  const filteredBlogPosts = blogPosts.filter(p => p.lang === lang).slice(0, 3);

  return (
    <main id="main-content">
      <SEOHead
        title={
          lang === 'es'
            ? 'Parapente en Valle de Bravo | VuelaValle | Especialistas en Vuelo'
            : 'Paragliding in Valle de Bravo | VuelaValle | Flight Specialists'
        }
        description={t('hero.subtitle')}
        pathEs="/"
        pathEn="/en"
        ogImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          alt={t('alt.hero')}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-heading font-bold text-[clamp(2rem,8vw,5rem)] text-white max-w-4xl mx-auto leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 text-base sm:text-xl text-white/80 max-w-xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to={getLocalizedRoute('book', lang)}>
              <Button variant="amber" size="lg" className="w-full sm:w-auto">
                {t('hero.cta1')}
              </Button>
            </Link>
            <Link to={getLocalizedRoute('flights', lang)}>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                {t('hero.cta2')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Star className="w-4 h-4 text-accent-400 fill-accent-400" />
            <span className="text-white text-sm font-medium">4.9</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/80 text-sm">
              500+ {lang === 'es' ? 'vuelos este año' : 'flights this year'}
            </span>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* On mobile: 2 columns; md+: 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-y-4 gap-x-4">
            {trustItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-2.5">
                  <item.icon className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-dark-300 font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {t('packages.title')}
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {packageIds.map((id, i) => {
              const pkg = flightPackages[id];
              const features = t(`packages.${id}.features`, {
                returnObjects: true,
              }) as string[];
              return (
                <FadeIn key={id} delay={i * 0.12}>
                  <Card className="h-full flex flex-col relative">
                    {id === 'sunset' && (
                      <div className="absolute top-3 right-3 z-10">
                        <Badge>{t('packages.sunset.badge')}</Badge>
                      </div>
                    )}
                    {/* Responsive image height */}
                    <div className="h-40 sm:h-44 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={t(`alt.${id}`)}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={800}
                        height={533}
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-xl text-dark-900">
                        {t(`packages.${id}.name`)}
                      </h3>
                      <p className="text-sm text-dark-500 mt-0.5">
                        {t(`packages.${id}.duration`)}
                      </p>
                      <ul className="mt-4 space-y-1.5 flex-1">
                        {features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-dark-600">
                            <Check className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex items-center justify-between gap-2 flex-wrap">
                        <div>
                          <span className="font-heading font-bold text-2xl text-dark-900">
                            {t(`packages.${id}.price`)}
                          </span>
                          <span className="text-xs text-dark-400 ml-1">MXN</span>
                        </div>
                        <Link to={getLocalizedRoute('book', lang)}>
                          <Button variant="primary" size="sm">
                            {t('packages.bookButton')}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY VuelaValle ── */}
      <section className="section-padding bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {t('why.title')}
            </h2>
          </FadeIn>
          <div className="mt-12 space-y-12 sm:space-y-16">
            {whyReasons.map((reason, i) => (
              <FadeIn key={i} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } gap-6 md:gap-10 items-center`}
                >
                  <div className="flex-1 w-full">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-dark-900">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-dark-600 leading-relaxed">{reason.text}</p>
                  </div>
                  <div className="flex-1 w-full flex justify-center">
                    <div className="w-full max-w-xs h-40 sm:h-48 rounded-2xl bg-primary-100 flex items-center justify-center">
                      <span className="text-6xl sm:text-7xl font-heading font-bold text-primary-300">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMBERS ── */}
      <section className="py-16 sm:py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            <div ref={stat1.ref} className="text-center">
              <p className="font-heading font-bold text-4xl sm:text-5xl text-primary-400">
                {stat1.count}+
              </p>
              <p className="mt-2 text-dark-400 text-sm">{t('numbers.flights')}</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-4xl sm:text-5xl text-accent-400">4.9</p>
              <p className="mt-2 text-dark-400 text-sm">{t('numbers.rating')}</p>
            </div>
            <div ref={stat2.ref} className="text-center">
              <p className="font-heading font-bold text-4xl sm:text-5xl text-primary-400">
                {stat2.count}+
              </p>
              <p className="mt-2 text-dark-400 text-sm">{t('numbers.years')}</p>
            </div>
            <div className="text-center">
              <p className="font-heading font-bold text-4xl sm:text-5xl text-primary-400">3</p>
              <p className="mt-2 text-dark-400 text-sm">{t('numbers.pilots')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS CAROUSEL ── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {t('reviews.title')}
            </h2>
          </FadeIn>
          {/*
            -mx + px trick creates edge-to-edge scroll on mobile while keeping
            cards visually inset with padding
          */}
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scroll-smooth">
            {reviews.map(review => (
              <div
                key={review.id}
                className="snap-center shrink-0 w-[85vw] sm:w-72 lg:w-80"
              >
                <Card hover={false} className="p-5 h-full">
                  <StarRating rating={review.stars} />
                  <p className="mt-3 text-dark-600 text-sm leading-relaxed italic">
                    "{lang === 'en' ? review.textEn : review.textEs}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-xs font-bold shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-dark-900 truncate">{review.name}</p>
                      <p className="text-xs text-dark-400 truncate">
                        {lang === 'en' ? review.cityEn : review.cityEs} · {review.date}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="section-padding bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900">
              {t('blog.title')}
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBlogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.12}>
                <Card>
                  <div className="h-40 sm:h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={
                        lang === 'es'
                          ? `parapente valle de bravo ${post.title}`
                          : `paragliding valle de bravo ${post.title}`
                      }
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={533}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <Badge variant="primary" className="mb-3">
                      {lang === 'es' ? post.categoryEs : post.categoryEn}
                    </Badge>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-dark-900 leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-dark-500 line-clamp-2">{post.excerpt}</p>
                    <Link
                      to={`${getLocalizedRoute('blog', lang)}/${post.slug}`}
                      className="mt-3 inline-flex text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {t('blog.readMore')} →
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-dark-300 max-w-xl mx-auto">{t('cta.subtitle')}</p>
            <div className="mt-8">
              <Link to={getLocalizedRoute('book', lang)}>
                <Button variant="amber" size="lg">
                  {t('cta.button')}
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
