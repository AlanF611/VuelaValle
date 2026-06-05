import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  pathEs: string;
  pathEn: string;
  ogImage?: string;
}

export default function SEOHead({ title, description, pathEs, pathEn, ogImage }: SEOProps) {
  const { i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';
  const baseUrl = 'https://altavuela.mx';
  const currentPath = lang === 'en' ? pathEn : pathEs;
  const canonical = `${baseUrl}${currentPath}`;
  const ogLocale = lang === 'es' ? 'es_MX' : 'en_US';
  const htmlLang = lang === 'en' ? 'en' : 'es';

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hreflang="es" href={`${baseUrl}${pathEs}`} />
      <link rel="alternate" hreflang="en" href={`${baseUrl}${pathEn}`} />
      <link rel="alternate" hreflang="x-default" href={`${baseUrl}${pathEs}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
