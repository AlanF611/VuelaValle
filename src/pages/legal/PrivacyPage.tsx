import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  UserCheck,
  FileText,
  Send,
  Lock,
  Cookie,
  RefreshCw,
  Mail,
} from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';

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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-primary-500" />
    </div>
  );
}

export default function PrivacyPage() {
  const { i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const sections = lang === 'es'
    ? [
        {
          icon: Shield,
          title: '1. Identidad y Domicilio del Responsable',
          content: (
            <p>VuelaValle, con domicilio en Valle de Bravo, Estado de México, 51200, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
          ),
        },
        {
          icon: UserCheck,
          title: '2. Datos Personales que se Recaban',
          content: (
            <>
              <p>Para la prestación de nuestros servicios de vuelos en parapente, recabamos las siguientes categorías de datos personales:</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-dark-50 rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-2">Datos de identificación</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Nombre completo</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Fecha de nacimiento</li>
                  </ul>
                </div>
                <div className="bg-dark-50 rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-2">Datos de contacto</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Correo electrónico</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Número de teléfono</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Dirección de residencia</li>
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 ring-1 ring-primary-200">
                  <h4 className="font-heading font-semibold text-sm text-primary-700 mb-2">Datos sensibles para seguridad</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Peso y talla</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Condiciones médicas relevantes</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Uso de medicamentos</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-dark-500 italic bg-dark-50 rounded-lg px-4 py-3">Los datos relativos a la salud serán tratados con especial protección y únicamente para garantizar su seguridad durante la actividad.</p>
            </>
          ),
        },
        {
          icon: FileText,
          title: '3. Finalidades del Tratamiento',
          content: (
            <>
              <div className="mt-2 space-y-4">
                <div className="bg-dark-50 rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Finalidades primarias</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>Registro y confirmación de reservaciones</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>Evaluación de aptitud física para la práctica del parapente</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>Emisión de comprobantes de pago y facturación</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>Atención a emergencias médicas durante la actividad</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>Cumplimiento de obligaciones legales en materia de aviación deportiva</li>
                  </ul>
                </div>
                <div className="bg-dark-50 rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Finalidades secundarias</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">a</span>Envío de promociones y novedades sobre nuestros servicios</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">b</span>Encuestas de satisfacción</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">c</span>Uso de fotografías y videos del vuelo (con consentimiento expreso)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">Si no desea que sus datos se usen para finalidades secundarias, puede manifestarlo enviando un correo a <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a>.</p>
            </>
          ),
        },
        {
          icon: Send,
          title: '4. Transferencia de Datos',
          content: (
            <>
              <p>Sus datos podrán ser transferidos a:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Autoridades de salud y emergencias en caso de accidente</li>
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Autoridades gubernamentales cuando la ley lo requiera</li>
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Compañías de seguros para la gestión de coberturas</li>
              </ul>
              <p className="mt-3 text-sm text-dark-500">No realizamos transferencias con fines comerciales sin su consentimiento.</p>
            </>
          ),
        },
        {
          icon: Lock,
          title: '5. Derechos ARCO',
          content: (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3">
              {['Acceder', 'Rectificar', 'Cancelar', 'Oponerse'].map((right) => (
                <div key={right} className="bg-primary-50 rounded-xl p-4 text-center ring-1 ring-primary-100">
                  <span className="font-heading font-bold text-primary-700 text-lg">{right.charAt(0)}</span>
                  <p className="text-xs text-dark-600 mt-1">{right}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          icon: Cookie,
          title: '6. Uso de Cookies',
          content: <p>Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Puede desactivarlas desde la configuración de su navegador, aunque esto puede afectar algunas funcionalidades.</p>,
        },
        {
          icon: RefreshCw,
          title: '7. Cambios al Aviso',
          content: <p>Nos reservamos el derecho de modificar este Aviso en cualquier momento. Los cambios serán publicados en nuestro sitio web y entrarán en vigor desde su publicación.</p>,
        },
        {
          icon: Mail,
          title: '8. Contacto',
          content: (
            <div className="bg-dark-50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Correo:</span> <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Teléfono:</span> +52 722 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Send className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Domicilio:</span> Valle de Bravo, Estado de México, 51200</span>
              </div>
            </div>
          ),
        },
      ]
    : [
        {
          icon: Shield,
          title: '1. Identity and Address of the Data Controller',
          content: <p>VuelaValle, located in Valle de Bravo, State of Mexico, 51200, Mexico, is responsible for the processing of your personal data in compliance with the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).</p>,
        },
        {
          icon: UserCheck,
          title: '2. Personal Data Collected',
          content: (
            <>
              <p>To provide our paragliding flight services, we collect the following categories of personal data:</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-dark-50 rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-2">Identification data</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Full name</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Date of birth</li>
                  </ul>
                </div>
                <div className="bg-dark-50 rounded-xl p-4">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-2">Contact data</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Email address</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Phone number</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Residential address</li>
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 ring-1 ring-primary-200">
                  <h4 className="font-heading font-semibold text-sm text-primary-700 mb-2">Sensitive data for flight safety</h4>
                  <ul className="space-y-1 text-sm text-dark-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Weight and height</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Relevant medical conditions</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />Use of medications</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-dark-500 italic bg-dark-50 rounded-lg px-4 py-3">Health-related data will be treated with special protection and solely to ensure your safety during the activity.</p>
            </>
          ),
        },
        {
          icon: FileText,
          title: '3. Purposes of Data Processing',
          content: (
            <>
              <div className="mt-2 space-y-4">
                <div className="bg-dark-50 rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Primary purposes</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>Registration and confirmation of reservations</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>Physical fitness assessment for paragliding</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>Issuance of payment receipts and invoicing</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>Medical emergency attention during the activity</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>Compliance with legal obligations regarding sport aviation</li>
                  </ul>
                </div>
                <div className="bg-dark-50 rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Secondary purposes</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">a</span>Sending promotions and news about our services</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">b</span>Satisfaction surveys</li>
                    <li className="flex items-start gap-2"><span className="w-5 h-5 rounded-full bg-dark-200 text-dark-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">c</span>Use of flight photographs and videos (with express consent)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">If you do not wish your data to be used for secondary purposes, you may express this by sending an email to <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a>.</p>
            </>
          ),
        },
        {
          icon: Send,
          title: '4. Data Transfer',
          content: (
            <>
              <p>Your data may be transferred to:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Health and emergency authorities in case of an accident</li>
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Government authorities when required by law</li>
                <li className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-primary-600 text-xs font-bold">+</span></span>Insurance companies for coverage management</li>
              </ul>
              <p className="mt-3 text-sm text-dark-500">We do not make transfers for commercial purposes without your consent.</p>
            </>
          ),
        },
        {
          icon: Lock,
          title: '5. ARCO Rights',
          content: (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3">
              {['Access', 'Rectify', 'Cancel', 'Oppose'].map((right) => (
                <div key={right} className="bg-primary-50 rounded-xl p-4 text-center ring-1 ring-primary-100">
                  <span className="font-heading font-bold text-primary-700 text-lg">{right.charAt(0)}</span>
                  <p className="text-xs text-dark-600 mt-1">{right}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          icon: Cookie,
          title: '6. Use of Cookies',
          content: <p>Our website uses cookies to improve the user experience and analyze traffic. You may disable them from your browser settings, although this may affect some functionalities.</p>,
        },
        {
          icon: RefreshCw,
          title: '7. Changes to This Notice',
          content: <p>We reserve the right to modify this Notice at any time. Changes will be published on our website and will take effect upon publication.</p>,
        },
        {
          icon: Mail,
          title: '8. Contact',
          content: (
            <div className="bg-dark-50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Email:</span> <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Phone:</span> +52 722 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Send className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Address:</span> Valle de Bravo, State of Mexico, 51200</span>
              </div>
            </div>
          ),
        },
      ];

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Aviso de Privacidad | VuelaValle' : 'Privacy Policy | VuelaValle'}
        description={lang === 'es' ? 'Aviso de privacidad de VuelaValle. Información sobre el tratamiento de datos personales conforme a la LFPDPPP.' : 'Privacy policy for VuelaValle. Information about personal data processing in compliance with Mexican data protection law.'}
        pathEs="/aviso-de-privacidad"
        pathEn="/en/privacy-policy"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-20 sm:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/20 mb-6">
              <Lock className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                {lang === 'es' ? 'Protección de datos' : 'Data protection'}
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-white"
          >
            {lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Policy'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-dark-300 text-lg"
          >
            {lang === 'es' ? 'Vuelos en Parapente' : 'Paragliding Flights'}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-sm text-dark-500"
          >
            {lang === 'es' ? 'Fecha de última actualización: 12 de junio de 2026' : 'Last updated: June 12, 2026'}
          </motion.p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white border-b border-dark-100">
        <div className="container-custom max-w-3xl py-6">
          <FadeIn>
            <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wide mb-3">
              {lang === 'es' ? 'Contenido' : 'Contents'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((s, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="px-3 py-1.5 bg-dark-50 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-xs font-medium text-dark-600 transition-colors"
                >
                  {s.title.replace(/^\d+\.\s/, '')}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <section id={`section-${i}`} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-4">
                  <SectionIcon icon={section.icon} />
                  <h2 className="font-heading font-semibold text-lg sm:text-xl text-dark-900 leading-snug">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-14 text-dark-600 leading-relaxed">
                  {section.content}
                </div>
              </section>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="border-t border-dark-200 pt-8 text-center">
              <p className="text-sm text-dark-400 italic">
                {lang === 'es'
                  ? 'Este aviso fue elaborado conforme a la LFPDPPP y su Reglamento.'
                  : 'This notice was prepared in accordance with the LFPDPPP and its Regulations.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
