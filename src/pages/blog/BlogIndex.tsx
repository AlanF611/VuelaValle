import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { blogPosts } from '../../data/blogPosts';
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

export default function BlogIndex() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const filteredPosts = blogPosts.filter(p => p.lang === lang);

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Blog de Parapente en Valle de Bravo | Guías y Consejos | VuelaValle' : 'Paragliding Blog Valle de Bravo | Guides & Tips | VuelaValle'}
        description={lang === 'es' ? 'Guías, consejos y todo lo que necesitas saber sobre el parapente en Valle de Bravo. Blog de VuelaValle.' : 'Guides, tips, and everything you need to know about paragliding in Valle de Bravo. VuelaValle blog.'}
        pathEs="/blog"
        pathEn="/en/blog"
      />

      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="/img/blog-hero.jpg"
          alt={lang === 'es' ? 'Blog parapente valle de bravo' : 'Paragliding blog valle de bravo'}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">{t('blog.title')}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.15}>
                <Card>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={lang === 'es' ? `parapente valle de bravo ${post.title}` : `paragliding valle de bravo ${post.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <Badge variant="primary" className="mb-3">{lang === 'es' ? post.categoryEs : post.categoryEn}</Badge>
                    <h2 className="font-heading font-semibold text-lg text-dark-900 leading-snug">{post.title}</h2>
                    <p className="mt-2 text-sm text-dark-500 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-dark-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} {t('blog.minRead')}</span>
                        <span className="mx-1">·</span>
                        <span>{post.date}</span>
                      </div>
                      <Link
                        to={`${getLocalizedRoute('blog', lang)}/${post.slug}`}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
