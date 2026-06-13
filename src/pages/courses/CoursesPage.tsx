import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, ChevronDown, Award } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';

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

interface CourseScheduleProps {
  items: string[];
}

function CourseSchedule({ items }: CourseScheduleProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
      >
        {open ? 'Ocultar programa' : 'Ver programa detallado'}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="mt-3 space-y-1 pl-4 border-l-2 border-primary-200">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-dark-600 py-1">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CoursesPage() {
  const { t, i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const courses = [
    {
      key: 'beginner',
      name: t('courses.beginner.name'),
      duration: t('courses.beginner.duration'),
      price: t('courses.beginner.price'),
      description: t('courses.beginner.description'),
      includes: t('courses.beginner.includes', { returnObjects: true }) as string[],
      schedule: t('courses.beginner.schedule', { returnObjects: true }) as string[],
    },
    {
      key: 'pilot',
      name: t('courses.pilot.name'),
      duration: t('courses.pilot.duration'),
      price: t('courses.pilot.price'),
      description: t('courses.pilot.description'),
      includes: t('courses.pilot.includes', { returnObjects: true }) as string[],
      schedule: t('courses.pilot.schedule', { returnObjects: true }) as string[],
    },
    {
      key: 'advanced',
      name: t('courses.advanced.name'),
      duration: t('courses.advanced.duration'),
      price: t('courses.advanced.price'),
      description: t('courses.advanced.description'),
      includes: t('courses.advanced.includes', { returnObjects: true }) as string[],
      schedule: t('courses.advanced.schedule', { returnObjects: true }) as string[],
    },
  ];

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Cursos de Parapente en Valle de Bravo | Aprende a Volar | VuelaValle' : 'Paragliding Courses in Valle de Bravo | Learn to Fly | VuelaValle'}
        description={lang === 'es' ? 'Cursos de parapente en Valle de Bravo. Iniciación 5 días $8,500, Piloto 10 días $15,000, XC $12,000. Certificación AVLM/APPI.' : 'Paragliding courses in Valle de Bravo. Beginner 5 days $8,500, Pilot 10 days $15,000, XC $12,000. AVLM/APPI certification.'}
        pathEs="/cursos-parapente"
        pathEn="/en/paragliding-courses"
        ogImage="/img/courses-hero.jpg"
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/img/courses-hero.jpg"
          alt={lang === 'es' ? 'Cursos de parapente valle de bravo' : 'Paragliding courses valle de bravo'}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">{t('courses.title')}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{t('courses.subtitle')}</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, i) => (
              <FadeIn key={course.key} delay={i * 0.15}>
                <Card className="h-full flex flex-col p-6">
                  <Badge variant="primary" className="self-start mb-4">{course.duration}</Badge>
                  <h2 className="font-heading font-bold text-2xl text-dark-900">{course.name}</h2>
                  <p className="mt-2 text-dark-500 text-sm leading-relaxed flex-1">{course.description}</p>
                  <ul className="mt-5 space-y-2">
                    {course.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-dark-600">
                        <Check className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CourseSchedule items={course.schedule} />
                  <div className="mt-6 pt-4 border-t border-dark-100">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="font-heading font-bold text-2xl text-dark-900">{course.price}</span>
                        <span className="text-xs text-dark-400 ml-1">MXN</span>
                      </div>
                      <a href={`https://wa.me/5217220000000?text=${encodeURIComponent(t('courses.inquirySubject') + ' - ' + course.name)}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="amber" size="sm">{t('courses.inquiry')}</Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark-900">{t('courses.certification')}</h2>
              <p className="mt-4 text-dark-600 leading-relaxed">{t('courses.certText')}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
