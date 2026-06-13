import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, MessageCircle, Clock, Check } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

export default function ContactPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(1, t('contact.validation.nameRequired')),
    email: z.string().min(1, t('contact.validation.emailRequired')).email(),
    subject: z.string().optional(),
    message: z.string().min(1, t('contact.validation.messageRequired')),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('Contact form submitted:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-16 lg:pt-20">
        <SEOHead
          title={lang === 'es' ? 'Contacto | VuelaValle Parapente Valle de Bravo' : 'Contact Us | VuelaValle Paragliding Valle de Bravo'}
          description={lang === 'es' ? 'Contacta a VuelaValle. Resolvemos tus dudas sobre vuelos en parapente en Valle de Bravo.' : 'Contact VuelaValle. We answer your questions about paragliding in Valle de Bravo.'}
          pathEs="/contacto"
          pathEn="/en/contact"
        />
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="container-custom max-w-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="font-heading font-bold text-3xl text-dark-900">{t('contact.successTitle')}</h1>
            <p className="mt-4 text-dark-600">{t('contact.successMessage')}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Contacto | VuelaValle Parapente Valle de Bravo' : 'Contact Us | VuelaValle Paragliding Valle de Bravo'}
        description={lang === 'es' ? 'Contacta a VuelaValle. Resolvemos tus dudas sobre vuelos en parapente en Valle de Bravo.' : 'Contact VuelaValle. We answer your questions about paragliding in Valle de Bravo.'}
        pathEs="/contacto"
        pathEn="/en/contact"
      />

      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <img
          src="/img/contact-hero.jpg"
          alt={lang === 'es' ? 'Contacto parapente valle de bravo' : 'Contact paragliding valle de bravo'}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">{t('contact.title')}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card hover={false} className="p-6 sm:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">{t('contact.name')}</label>
                  <input
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    className="w-full px-4 py-3 text-base rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-white"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500" role="alert">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">{t('contact.email')}</label>
                  <input
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    {...register('email')}
                    className="w-full px-4 py-3 text-base rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-white"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">{t('contact.subject')}</label>
                  <select
                    {...register('subject')}
                    className="w-full px-4 py-3 text-base rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-white"
                  >
                    <option value="">—</option>
                    {Object.entries(t('contact.subjectOptions', { returnObjects: true }) as Record<string, string>).map(([key, val]) => (
                      <option key={key} value={key}>{val}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1">{t('contact.message')}</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 text-base rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none bg-white"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500" role="alert">{errors.message.message}</p>}
                </div>
                <Button variant="amber" type="submit" className="w-full">{t('contact.send')}</Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card hover={false} className="p-6">
                <h2 className="font-heading font-semibold text-lg text-dark-900 mb-4">{t('contact.address')}</h2>
                <div className="bg-dark-100 rounded-xl h-48 flex items-center justify-center">
                  <div className="text-center text-dark-400">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">19.1944° N, 100.1323° W</p>
                    <p className="text-xs mt-1">Valle de Bravo, Edo. México</p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/5217220000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-dark-900">{t('contact.whatsappLabel')}</p>
                    <p className="text-xs text-dark-500">+52 722 XXX XXXX</p>
                  </div>
                </a>
                <a
                  href="mailto:info@vuelavalle.mx"
                  className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-dark-900">{t('contact.emailLabel')}</p>
                    <p className="text-xs text-dark-500">info@vuelavalle.mx</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                  <Clock className="w-6 h-6 text-dark-500" />
                  <div>
                    <p className="text-sm font-medium text-dark-900">{lang === 'es' ? 'Horario' : 'Hours'}</p>
                    <p className="text-xs text-dark-500">{t('contact.hours')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-xl">
                  <Phone className="w-6 h-6 text-dark-500" />
                  <div>
                    <p className="text-sm font-medium text-dark-900">{lang === 'es' ? 'Teléfono' : 'Phone'}</p>
                    <p className="text-xs text-dark-500">+52 722 XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
