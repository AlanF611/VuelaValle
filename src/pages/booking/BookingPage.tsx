import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Calendar,
  Users,
  Clock,
  Phone,
  Weight,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Accordion from '../../components/ui/Accordion';
import { flightPackages, addOnPrices, type FlightType } from '../../data/packages';

// Shared input class — text-base prevents iOS auto-zoom on focus
const inputCls =
  'w-full px-4 py-3 text-base rounded-lg border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-white';

export default function BookingPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    flightType: z.enum(['classic', 'sunset', 'xc'], {
      required_error: t('booking.validation.flightTypeRequired'),
    }),
    people: z.number().min(1).max(4),
    date: z.string().min(1, t('booking.validation.dateRequired')),
    timeSlot: z.string(),
    name: z.string().min(1, t('booking.validation.nameRequired')),
    email: z
      .string()
      .min(1, t('booking.validation.emailRequired'))
      .email(t('booking.validation.emailInvalid')),
    whatsapp: z.string().min(1, t('booking.validation.whatsappRequired')),
    weight: z.number().min(30).max(110, t('booking.validation.weightMax')),
    medical: z.string().optional(),
    hearAbout: z.string().optional(),
    goproPhotos: z.boolean().optional(),
    goproVideo: z.boolean().optional(),
    privateTransport: z.boolean().optional(),
    certificate: z.boolean().optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      flightType: 'classic',
      people: 1,
      date: '',
      timeSlot: '9am',
      name: '',
      email: '',
      whatsapp: '',
      weight: 70,
      medical: '',
      hearAbout: '',
      goproPhotos: false,
      goproVideo: false,
      privateTransport: false,
      certificate: false,
    },
  });

  const watched = watch();

  const total = useMemo(() => {
    const base =
      flightPackages[watched.flightType || 'classic'].priceMXN * (watched.people || 1);
    const addOns =
      (watched.goproPhotos ? addOnPrices.goproPhotos : 0) * (watched.people || 1) +
      (watched.goproVideo ? addOnPrices.goproVideo : 0) * (watched.people || 1) +
      (watched.privateTransport ? addOnPrices.privateTransport : 0) +
      (watched.certificate ? addOnPrices.certificate : 0) * (watched.people || 1);
    return base + addOns;
  }, [
    watched.flightType,
    watched.people,
    watched.goproPhotos,
    watched.goproVideo,
    watched.privateTransport,
    watched.certificate,
  ]);

  const onSubmit = (data: FormData) => {
    console.log('Booking submitted:', data, 'Total:', total);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await trigger(['flightType', 'people', 'date', 'timeSlot']);
    if (step === 2) valid = await trigger(['name', 'email', 'whatsapp', 'weight']);
    if (valid) setStep(s => Math.min(s + 1, 3));
  };

  const flightTypeOptions: { id: FlightType; label: string; price: string }[] = [
    { id: 'classic', label: t('packages.classic.name'), price: t('packages.classic.price') },
    { id: 'sunset', label: t('packages.sunset.name'), price: t('packages.sunset.price') },
    { id: 'xc', label: t('packages.xc.name'), price: t('packages.xc.price') },
  ];

  const timeSlots = ['7am', '9am', '11am', '2pm'] as const;
  const today = new Date().toISOString().split('T')[0];

  const seoCopy =
    lang === 'es'
      ? {
          title: 'Reservar Vuelo en Parapente Valle de Bravo | AltaVuela',
          desc: 'Reserva tu vuelo en parapente en Valle de Bravo. Proceso simple y seguro.',
        }
      : {
          title: 'Book Paragliding Flight Valle de Bravo | AltaVuela',
          desc: 'Book your paragliding flight in Valle de Bravo. Simple and secure process.',
        };

  if (submitted) {
    return (
      <main className="pt-16 lg:pt-20">
        <SEOHead title={seoCopy.title} description={seoCopy.desc} pathEs="/reservar" pathEn="/en/book" />
        <section className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="font-heading font-bold text-3xl text-dark-900">{t('booking.successTitle')}</h1>
            <p className="mt-4 text-dark-600 leading-relaxed">{t('booking.successMessage')}</p>
            <a
              href="https://wa.me/5217220000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 lg:pt-20" id="reservar">
      <SEOHead title={seoCopy.title} description={seoCopy.desc} pathEs="/reservar" pathEn="/en/book" />

      <section className="py-10 sm:py-16 bg-dark-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-center text-dark-900 mb-8">
            {t('booking.title')}
          </h1>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s ? 'bg-primary-500 text-white' : 'bg-dark-200 text-dark-400'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-10 sm:w-16 h-0.5 transition-colors ${step > s ? 'bg-primary-500' : 'bg-dark-200'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Form column */}
            <div className="lg:col-span-3">
              <Card hover={false} className="p-5 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="font-heading font-semibold text-xl text-dark-900 mb-6">
                          {t('booking.step1Title')}
                        </h2>

                        {/* Flight type */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-dark-700 mb-3">
                            {t('booking.flightType')}
                          </label>
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {flightTypeOptions.map(opt => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setValue('flightType', opt.id)}
                                className={`p-3 sm:p-4 rounded-xl border-2 text-center transition-all min-h-[70px] ${
                                  watched.flightType === opt.id
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-dark-200 hover:border-dark-300 active:border-primary-400'
                                }`}
                              >
                                <span className="block font-semibold text-dark-900 text-xs sm:text-sm">
                                  {opt.label}
                                </span>
                                <span className="block text-primary-600 text-xs sm:text-sm mt-1 font-medium">
                                  {opt.price}
                                </span>
                              </button>
                            ))}
                          </div>
                          {errors.flightType && (
                            <p className="mt-2 text-sm text-red-500">{errors.flightType.message}</p>
                          )}
                        </div>

                        {/* People */}
                        <div className="mb-6">
                          <label className="flex items-center gap-2 text-sm font-medium text-dark-700 mb-3">
                            <Users className="w-4 h-4" />
                            {t('booking.people')}
                          </label>
                          <div className="flex gap-3">
                            {[1, 2, 3, 4].map(n => (
                              <button
                                key={n}
                                type="button"
                                onClick={() => setValue('people', n)}
                                className={`w-12 h-12 rounded-xl border-2 font-bold text-lg transition-all ${
                                  watched.people === n
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-dark-200 text-dark-600 hover:border-dark-300'
                                }`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Date */}
                        <div className="mb-6">
                          <label className="flex items-center gap-2 text-sm font-medium text-dark-700 mb-2">
                            <Calendar className="w-4 h-4" />
                            {t('booking.date')}
                          </label>
                          <input
                            type="date"
                            min={today}
                            {...register('date')}
                            className={inputCls}
                          />
                          {errors.date && (
                            <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                          )}
                        </div>

                        {/* Time */}
                        <div className="mb-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-dark-700 mb-2">
                            <Clock className="w-4 h-4" />
                            {t('booking.time')}
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {timeSlots.map(slot => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setValue('timeSlot', slot)}
                                className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                  watched.timeSlot === slot
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-dark-200 text-dark-600 hover:border-dark-300'
                                }`}
                              >
                                {t(`booking.timeSlots.${slot}`)}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="font-heading font-semibold text-xl text-dark-900 mb-6">
                          {t('booking.step2Title')}
                        </h2>
                        <div className="space-y-5">
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-1">
                              {t('booking.name')}
                            </label>
                            <input
                              type="text"
                              autoComplete="name"
                              {...register('name')}
                              className={inputCls}
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-500" role="alert">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-1">
                              {t('booking.email')}
                            </label>
                            <input
                              type="email"
                              autoComplete="email"
                              inputMode="email"
                              {...register('email')}
                              className={inputCls}
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-500" role="alert">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-dark-700 mb-1">
                              <Phone className="w-4 h-4" />
                              {t('booking.whatsapp')}
                            </label>
                            <div className="flex">
                              <span className="px-3 py-3 bg-dark-100 border border-r-0 border-dark-200 rounded-l-xl text-base text-dark-500 flex items-center">
                                +52
                              </span>
                              <input
                                type="tel"
                                autoComplete="tel"
                                inputMode="tel"
                                {...register('whatsapp')}
                                className="flex-1 px-4 py-3 text-base rounded-r-xl border border-dark-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors bg-white"
                              />
                            </div>
                            {errors.whatsapp && (
                              <p className="mt-1 text-sm text-red-500" role="alert">
                                {errors.whatsapp.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-dark-700 mb-1">
                              <Weight className="w-4 h-4" />
                              {t('booking.weight')}{' '}
                              <span className="text-xs text-dark-400">(max 110 kg)</span>
                            </label>
                            <input
                              type="number"
                              inputMode="numeric"
                              {...register('weight', { valueAsNumber: true })}
                              min={30}
                              max={110}
                              className={inputCls}
                            />
                            {errors.weight && (
                              <p className="mt-1 text-sm text-red-500" role="alert">
                                {errors.weight.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-1">
                              {t('booking.medical')}
                            </label>
                            <textarea
                              {...register('medical')}
                              rows={3}
                              className={`${inputCls} resize-none`}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-dark-700 mb-1">
                              {t('booking.hearAbout')}
                            </label>
                            <select {...register('hearAbout')} className={inputCls}>
                              <option value="">—</option>
                              {Object.entries(
                                t('booking.hearOptions', {
                                  returnObjects: true,
                                }) as Record<string, string>
                              ).map(([key, val]) => (
                                <option key={key} value={key}>
                                  {val}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="font-heading font-semibold text-xl text-dark-900 mb-6">
                          {t('booking.step3Title')}
                        </h2>

                        {/* Add-ons */}
                        <div className="mb-6">
                          <h3 className="text-sm font-medium text-dark-700 mb-3">{t('booking.addOns')}</h3>
                          <div className="space-y-2">
                            {[
                              { key: 'goproPhotos' as const, label: t('booking.goproPhotos') },
                              { key: 'goproVideo' as const, label: t('booking.goproVideo') },
                              { key: 'privateTransport' as const, label: t('booking.privateTransport') },
                              { key: 'certificate' as const, label: t('booking.certificate') },
                            ].map(addon => (
                              <label
                                key={addon.key}
                                className="flex items-center gap-3 p-4 rounded-xl border border-dark-200 hover:border-dark-300 cursor-pointer transition-colors has-[:checked]:border-primary-400 has-[:checked]:bg-primary-50"
                              >
                                <input
                                  type="checkbox"
                                  {...register(addon.key)}
                                  className="w-4 h-4 rounded border-dark-300 text-primary-500 focus:ring-primary-500"
                                />
                                <span className="text-sm text-dark-700">{addon.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Summary */}
                        <div className="p-4 bg-dark-50 rounded-xl space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-dark-500">{t('booking.selectedPackage')}</span>
                            <span className="font-medium text-dark-900">
                              {t(`packages.${watched.flightType}.name`)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-dark-500">{t('booking.dateAndTime')}</span>
                            <span className="font-medium text-dark-900">
                              {watched.date || '—'} ·{' '}
                              {t(`booking.timeSlots.${watched.timeSlot}`)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-dark-500">{t('booking.peopleCount')}</span>
                            <span className="font-medium text-dark-900">{watched.people}</span>
                          </div>
                          <div className="flex justify-between pt-3 border-t border-dark-200">
                            <span className="font-semibold text-dark-900">{t('booking.total')}</span>
                            <span className="font-heading font-bold text-2xl text-dark-900">
                              ${total.toLocaleString()} MXN
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-xs text-dark-400">{t('booking.deposit')}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation buttons */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(s => s - 1)}
                        className="flex items-center gap-1 text-sm text-dark-500 hover:text-dark-700 transition-colors py-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {lang === 'es' ? 'Anterior' : 'Previous'}
                      </button>
                    ) : (
                      <div />
                    )}
                    {step < 3 ? (
                      <Button variant="primary" onClick={nextStep} className="flex-shrink-0">
                        {lang === 'es' ? 'Siguiente' : 'Next'}
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="amber" type="submit" size="lg" className="flex-1 sm:flex-none">
                        {t('booking.confirmButton')}
                      </Button>
                    )}
                  </div>
                </form>
              </Card>

              {/* Below form */}
              <div className="mt-4 text-center">
                <a
                  href="https://wa.me/5217220000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors py-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('booking.whatsappCta')}
                </a>
              </div>
              <div className="mt-3">
                <Accordion
                  items={[
                    {
                      question: t('booking.cancellationPolicy'),
                      answer: t('booking.cancellationText'),
                    },
                  ]}
                />
              </div>
            </div>

            {/* Live summary — sticky on desktop, stacked on mobile */}
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="lg:sticky lg:top-24">
                <Card hover={false} className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-dark-900 mb-4">
                    {t('booking.summary')}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dark-500">{t('booking.selectedPackage')}</span>
                      <span className="font-medium text-dark-900">
                        {t(`packages.${watched.flightType}.name`)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">{t('booking.dateAndTime')}</span>
                      <span className="font-medium text-dark-900 text-right">
                        {watched.date || '—'} ·{' '}
                        {watched.timeSlot ? t(`booking.timeSlots.${watched.timeSlot}`) : '—'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">{t('booking.peopleCount')}</span>
                      <span className="font-medium text-dark-900">{watched.people}</span>
                    </div>

                    {(watched.goproPhotos ||
                      watched.goproVideo ||
                      watched.privateTransport ||
                      watched.certificate) && (
                      <div>
                        <p className="text-dark-500 mb-1">{t('booking.extras')}:</p>
                        <ul className="space-y-0.5 pl-2">
                          {watched.goproPhotos && (
                            <li className="text-dark-700 flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary-500" />
                              {lang === 'es' ? 'Fotos GoPro' : 'GoPro photos'}
                            </li>
                          )}
                          {watched.goproVideo && (
                            <li className="text-dark-700 flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary-500" />
                              {lang === 'es' ? 'Video GoPro' : 'GoPro video'}
                            </li>
                          )}
                          {watched.privateTransport && (
                            <li className="text-dark-700 flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary-500" />
                              {lang === 'es' ? 'Transporte privado' : 'Private transport'}
                            </li>
                          )}
                          {watched.certificate && (
                            <li className="text-dark-700 flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary-500" />
                              {lang === 'es' ? 'Certificado' : 'Certificate'}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-dark-200">
                      <div className="flex justify-between items-end">
                        <span className="font-semibold text-dark-900">{t('booking.total')}</span>
                        <div className="text-right">
                          <span className="font-heading font-bold text-2xl text-dark-900">
                            ${total.toLocaleString()}
                          </span>
                          <span className="text-xs text-dark-400 ml-1">MXN</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-dark-400">{t('booking.deposit')}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
