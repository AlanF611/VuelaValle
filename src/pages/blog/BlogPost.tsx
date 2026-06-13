import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../../components/seo/SEOHead';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { blogPosts } from '../../data/blogPosts';
import { instructors } from '../../data/instructors';
import { getLocalizedRoute } from '../../hooks/useLanguage';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-dark-900">404</h1>
          <p className="mt-2 text-dark-500">Post not found</p>
          <Link to={getLocalizedRoute('blog', lang)} className="mt-4 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700">
            <ArrowLeft className="w-4 h-4" />
            {t('blog.title')}
          </Link>
        </div>
      </main>
    );
  }

  const author = instructors.find(i => i.id === post.authorId);
  const relatedPosts = blogPosts.filter(p => p.lang === post.lang && p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: author ? { '@type': 'Person', name: author.name } : undefined,
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post.title;

  return (
    <main className="pt-16 lg:pt-20">
      <Helmet>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Helmet>

      <SEOHead
        title={`${post.title} | VuelaValle`}
        description={post.excerpt}
        pathEs={`/blog/${post.lang === 'es' ? post.slug : blogPosts.find(p => p.lang === 'es' && p.categoryEs === post.categoryEn)?.slug || post.slug}`}
        pathEn={`/en/blog/${post.lang === 'en' ? post.slug : blogPosts.find(p => p.lang === 'en' && p.categoryEn === post.categoryEs)?.slug || post.slug}`}
        ogImage={post.image}
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <Link to={getLocalizedRoute('blog', lang)} className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t('blog.title')}
          </Link>

          <Badge variant="primary" className="mb-4">{lang === 'es' ? post.categoryEs : post.categoryEn}</Badge>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-dark-900 leading-tight">{post.title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-dark-400">
            {author && <span>{author.name}</span>}
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} {t('blog.minRead')}
            </span>
            <span>{post.date}</span>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-3">
            <Share2 className="w-4 h-4 text-dark-400" />
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dark-500 hover:text-green-600 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dark-500 hover:text-blue-600 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-dark-500 hover:text-dark-900 transition-colors"
            >
              X / Twitter
            </a>
          </div>

          {/* Cover Image */}
          <div className="mt-8 rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={lang === 'es' ? `parapente valle de bravo ${post.title}` : `paragliding valle de bravo ${post.title}`}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Table of Contents */}
          {post.sections.length > 1 && (
            <div className="mt-8 p-5 bg-dark-50 rounded-xl">
              <h2 className="text-sm font-semibold text-dark-900 mb-3">{t('blog.toc')}</h2>
              <ul className="space-y-1">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content */}
          <div className="mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <motion.section
                key={i}
                id={`section-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="font-heading font-semibold text-2xl text-dark-900 mb-4">{section.heading}</h2>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-dark-600 leading-relaxed mb-4">{para}</p>
                ))}
              </motion.section>
            ))}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-dark-200">
              <h2 className="font-heading font-semibold text-2xl text-dark-900 mb-6">{t('blog.related')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map(rp => (
                  <Card key={rp.slug}>
                    <div className="h-36 overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-dark-900 leading-snug">{rp.title}</h3>
                      <Link
                        to={`${getLocalizedRoute('blog', lang)}/${rp.slug}`}
                        className="mt-2 inline-flex text-sm text-primary-600 hover:text-primary-700"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
