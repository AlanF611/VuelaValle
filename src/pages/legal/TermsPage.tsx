import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle,
  Plane,
  AlertTriangle,
  CreditCard,
  XCircle,
  ShieldAlert,
  Baby,
  Camera,
  Settings,
  Scale,
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

export default function TermsPage() {
  const { i18n: i18nInstance } = useTranslation();
  const lang = i18nInstance.language as 'es' | 'en';

  const sections = lang === 'es'
    ? [
        {
          icon: CheckCircle,
          title: '1. Aceptación de los Términos',
          content: <p>Al reservar, contratar o participar en cualquier vuelo en parapente ofrecido por <span className="font-semibold text-dark-800">VuelaValle</span> (en adelante "la Empresa"), el usuario (en adelante "el Cliente") declara haber leído, entendido y aceptado íntegramente los presentes Términos y Condiciones, así como nuestro Aviso de Privacidad.</p>,
        },
        {
          icon: Plane,
          title: '2. Descripción del Servicio',
          content: (
            <>
              <p>La Empresa ofrece servicios de vuelos en parapente biplaza (tándem) con pilotos certificados, incluyendo:</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { text: 'Vuelos tándem con instructor certificado', highlight: true },
                  { text: 'Equipo de seguridad homologado (casco, arnés, parapente)', highlight: true },
                  { text: 'Briefing de seguridad previo al vuelo', highlight: false },
                  { text: 'Traslado al punto de despegue (cuando aplique)', highlight: false },
                  { text: 'Servicio fotográfico y/o de video (opcional)', highlight: false },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl p-3 flex items-center gap-3 ${item.highlight ? 'bg-primary-50 ring-1 ring-primary-200' : 'bg-dark-50'}`}>
                    <CheckCircle className={`w-4 h-4 shrink-0 ${item.highlight ? 'text-primary-500' : 'text-dark-400'}`} />
                    <span className="text-sm text-dark-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          icon: AlertTriangle,
          title: '3. Requisitos para el Vuelo',
          content: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 rounded-xl p-5 ring-1 ring-red-100">
                  <h4 className="font-heading font-semibold text-sm text-red-700 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Restricciones físicas
                  </h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Peso máximo: 100 kg (sujeto a condiciones del día)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Peso mínimo: 40 kg</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Edad mínima: 12 años (menores requieren autorización escrita del tutor)</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />No padecer enfermedades cardíacas, epilepsia, vértigo severo u otras condiciones incompatibles</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />No estar bajo los efectos de alcohol o sustancias psicoactivas</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />No estar embarazada</li>
                  </ul>
                </div>
                <div className="bg-primary-50 rounded-xl p-5 ring-1 ring-primary-100">
                  <h4 className="font-heading font-semibold text-sm text-primary-700 mb-3">Indumentaria recomendada</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Ropa cómoda y abrigadora</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Zapatos cerrados con suela antiderrapante (no sandalias ni tacones)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Cabello recogido</li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          icon: CreditCard,
          title: '4. Reservaciones y Pagos',
          content: (
            <ul className="space-y-4">
              {[
                { num: '4.1', text: 'Las reservaciones pueden realizarse a través del sitio web, por teléfono o de manera presencial.' },
                { num: '4.2', text: 'Se requiere pago total o anticipo para confirmar la reservación.' },
                { num: '4.3', text: 'Los precios incluyen IVA y están sujetos a cambio. El precio confirmado al momento de la reservación será el aplicable.' },
                { num: '4.4', text: 'Métodos de pago aceptados: tarjeta de crédito/débito, transferencia bancaria y efectivo.' },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">{item.num}</span>
                  <span className="text-sm text-dark-700 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          icon: XCircle,
          title: '5. Cancelaciones y Reembolsos',
          content: (
            <>
              <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Cancelación por parte del Cliente:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { time: '72h+', refund: '100%', color: 'bg-green-50 ring-green-200 text-green-700' },
                  { time: '24-72h', refund: '50%', color: 'bg-amber-50 ring-amber-200 text-amber-700' },
                  { time: '<24h', refund: '0%', color: 'bg-red-50 ring-red-200 text-red-700' },
                ].map((tier) => (
                  <div key={tier.time} className={`rounded-xl p-4 text-center ring-1 ${tier.color}`}>
                    <p className="text-2xl font-heading font-bold">{tier.refund}</p>
                    <p className="text-xs mt-1 opacity-80">
                      {tier.time === '72h+' && 'Más de 72 horas antes'}
                      {tier.time === '24-72h' && 'Entre 24 y 72 horas antes'}
                      {tier.time === '<24h' && 'Menos de 24 horas antes'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-primary-50 rounded-xl p-4 ring-1 ring-primary-100">
                <p className="text-sm text-dark-700"><span className="font-semibold text-primary-700">Cancelación por condiciones climáticas:</span> Si la Empresa cancela por condiciones meteorológicas adversas, el Cliente puede reprogramar sin costo o recibir reembolso completo.</p>
                <p className="text-sm text-dark-500 mt-2">El piloto tiene autoridad para cancelar el vuelo por razones de seguridad en cualquier momento.</p>
              </div>
            </>
          ),
        },
        {
          icon: ShieldAlert,
          title: '6. Riesgos y Responsabilidad',
          content: (
            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.1</span>
                <span className="text-sm text-dark-700 leading-relaxed">El parapente es una actividad deportiva que conlleva riesgos inherentes, incluyendo lesiones graves o muerte. La Empresa adopta todas las medidas de seguridad razonables, pero no puede garantizar la ausencia total de riesgos.</span>
              </li>
              <li className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.2</span>
                <span className="text-sm text-dark-700 leading-relaxed">El Cliente declara conocer y aceptar los riesgos asociados mediante la firma del Deslinde de Responsabilidad previo al vuelo.</span>
              </li>
              <li className="bg-dark-50 rounded-xl p-4">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.3</span>
                  <span className="text-sm text-dark-700 leading-relaxed">La Empresa no será responsable por daños derivados de:</span>
                </div>
                <ul className="mt-3 ml-12 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />Incumplimiento de instrucciones del piloto por parte del Cliente</li>
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />Condiciones climáticas imprevistas o fuerza mayor</li>
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />Condiciones médicas preexistentes no declaradas por el Cliente</li>
                </ul>
              </li>
            </ul>
          ),
        },
        {
          icon: Baby,
          title: '7. Menores de Edad',
          content: (
            <div className="bg-primary-50 rounded-xl p-5 ring-1 ring-primary-100">
              <p>Los menores de 18 años solo podrán realizar el vuelo con <span className="font-semibold text-primary-700">autorización escrita</span> de su padre, madre o tutor legal, quien deberá estar presente el día del vuelo y firmar el Deslinde de Responsabilidad.</p>
            </div>
          ),
        },
        {
          icon: Camera,
          title: '8. Fotografías y Videos',
          content: (
            <ul className="space-y-4">
              {[
                { num: '8.1', text: 'El servicio fotográfico/video es opcional y tiene costo adicional.' },
                { num: '8.2', text: 'La Empresa podrá usar imágenes del vuelo con fines promocionales únicamente con consentimiento expreso del Cliente.' },
                { num: '8.3', text: 'El Cliente no podrá usar imágenes del personal o equipo de la Empresa con fines comerciales sin autorización previa por escrito.' },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">{item.num}</span>
                  <span className="text-sm text-dark-700 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          icon: Settings,
          title: '9. Modificaciones al Servicio',
          content: <p>La Empresa se reserva el derecho de modificar estos Términos y los servicios en cualquier momento. Los cambios serán publicados en el sitio web oficial.</p>,
        },
        {
          icon: Scale,
          title: '10. Legislación Aplicable',
          content: <p>Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes de Valle de Bravo, Estado de México, renunciando las partes a cualquier otro fuero.</p>,
        },
        {
          icon: Mail,
          title: '11. Contacto',
          content: (
            <div className="bg-dark-50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Correo:</span> <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Plane className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Teléfono:</span> +52 722 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Dirección:</span> Valle de Bravo, Estado de México, 51200</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Horario de atención:</span> Lunes a Domingo, 7:00 am - 6:00 pm</span>
              </div>
            </div>
          ),
        },
      ]
    : [
        {
          icon: CheckCircle,
          title: '1. Acceptance of Terms',
          content: <p>By booking, contracting, or participating in any paragliding flight offered by <span className="font-semibold text-dark-800">VuelaValle</span> (hereinafter "the Company"), the user (hereinafter "the Customer") declares having read, understood, and fully accepted these Terms and Conditions, as well as our Privacy Policy.</p>,
        },
        {
          icon: Plane,
          title: '2. Service Description',
          content: (
            <>
              <p>The Company offers tandem paragliding flight services with certified pilots, including:</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { text: 'Tandem flights with a certified instructor', highlight: true },
                  { text: 'Approved safety equipment (helmet, harness, paraglider)', highlight: true },
                  { text: 'Pre-flight safety briefing', highlight: false },
                  { text: 'Transfer to the launch site (when applicable)', highlight: false },
                  { text: 'Photography and/or video service (optional)', highlight: false },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl p-3 flex items-center gap-3 ${item.highlight ? 'bg-primary-50 ring-1 ring-primary-200' : 'bg-dark-50'}`}>
                    <CheckCircle className={`w-4 h-4 shrink-0 ${item.highlight ? 'text-primary-500' : 'text-dark-400'}`} />
                    <span className="text-sm text-dark-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          icon: AlertTriangle,
          title: '3. Flight Requirements',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-red-50 rounded-xl p-5 ring-1 ring-red-100">
                <h4 className="font-heading font-semibold text-sm text-red-700 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Physical restrictions
                </h4>
                <ul className="space-y-2 text-sm text-dark-600">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Maximum weight: 100 kg (subject to daily conditions)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Minimum weight: 40 kg</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Minimum age: 12 years (minors require written guardian authorization)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />No heart disease, epilepsy, severe vertigo, or other incompatible conditions</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Not under the influence of alcohol or psychoactive substances</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />Not pregnant</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-5 ring-1 ring-primary-100">
                <h4 className="font-heading font-semibold text-sm text-primary-700 mb-3">Recommended attire</h4>
                <ul className="space-y-2 text-sm text-dark-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Comfortable and warm clothing</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Closed shoes with non-slip soles (no sandals or heels)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />Hair tied back</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          icon: CreditCard,
          title: '4. Reservations and Payments',
          content: (
            <ul className="space-y-4">
              {[
                { num: '4.1', text: 'Reservations can be made through the website, by phone, or in person.' },
                { num: '4.2', text: 'Full payment or a deposit is required to confirm the reservation.' },
                { num: '4.3', text: 'Prices include VAT and are subject to change. The price confirmed at the time of booking will apply.' },
                { num: '4.4', text: 'Accepted payment methods: credit/debit card, bank transfer, and cash.' },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">{item.num}</span>
                  <span className="text-sm text-dark-700 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          icon: XCircle,
          title: '5. Cancellations and Refunds',
          content: (
            <>
              <h4 className="font-heading font-semibold text-sm text-dark-900 mb-3">Cancellation by the Customer:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { time: '72h+', refund: '100%', color: 'bg-green-50 ring-green-200 text-green-700' },
                  { time: '24-72h', refund: '50%', color: 'bg-amber-50 ring-amber-200 text-amber-700' },
                  { time: '<24h', refund: '0%', color: 'bg-red-50 ring-red-200 text-red-700' },
                ].map((tier) => (
                  <div key={tier.time} className={`rounded-xl p-4 text-center ring-1 ${tier.color}`}>
                    <p className="text-2xl font-heading font-bold">{tier.refund}</p>
                    <p className="text-xs mt-1 opacity-80">
                      {tier.time === '72h+' && 'More than 72 hours in advance'}
                      {tier.time === '24-72h' && 'Between 24 and 72 hours before'}
                      {tier.time === '<24h' && 'Less than 24 hours in advance'}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-primary-50 rounded-xl p-4 ring-1 ring-primary-100">
                <p className="text-sm text-dark-700"><span className="font-semibold text-primary-700">Cancellation due to weather conditions:</span> If the Company cancels due to adverse weather conditions, the Customer may reschedule at no cost or receive a full refund.</p>
                <p className="text-sm text-dark-500 mt-2">The pilot has the authority to cancel the flight for safety reasons at any time.</p>
              </div>
            </>
          ),
        },
        {
          icon: ShieldAlert,
          title: '6. Risks and Liability',
          content: (
            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.1</span>
                <span className="text-sm text-dark-700 leading-relaxed">Paragliding is a sporting activity that carries inherent risks, including serious injury or death. The Company takes all reasonable safety measures but cannot guarantee the total absence of risk.</span>
              </li>
              <li className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.2</span>
                <span className="text-sm text-dark-700 leading-relaxed">The Customer acknowledges and accepts the associated risks by signing the Liability Waiver prior to the flight.</span>
              </li>
              <li className="bg-dark-50 rounded-xl p-4">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">6.3</span>
                  <span className="text-sm text-dark-700 leading-relaxed">The Company shall not be liable for damages arising from:</span>
                </div>
                <ul className="mt-3 ml-12 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />The Customer's failure to follow the pilot's instructions</li>
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />Unforeseen weather conditions or force majeure</li>
                  <li className="flex items-start gap-2 text-sm text-dark-600"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />Pre-existing medical conditions not disclosed by the Customer</li>
                </ul>
              </li>
            </ul>
          ),
        },
        {
          icon: Baby,
          title: '7. Minors',
          content: (
            <div className="bg-primary-50 rounded-xl p-5 ring-1 ring-primary-100">
              <p>Minors under 18 years of age may only fly with <span className="font-semibold text-primary-700">written authorization</span> from their father, mother, or legal guardian, who must be present on the day of the flight and sign the Liability Waiver.</p>
            </div>
          ),
        },
        {
          icon: Camera,
          title: '8. Photography and Videos',
          content: (
            <ul className="space-y-4">
              {[
                { num: '8.1', text: 'The photography/video service is optional and carries an additional cost.' },
                { num: '8.2', text: 'The Company may use flight images for promotional purposes only with the Customer\'s express consent.' },
                { num: '8.3', text: 'The Customer may not use images of the Company\'s staff or equipment for commercial purposes without prior written authorization.' },
              ].map((item) => (
                <li key={item.num} className="flex items-start gap-4 bg-dark-50 rounded-xl p-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0">{item.num}</span>
                  <span className="text-sm text-dark-700 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          ),
        },
        {
          icon: Settings,
          title: '9. Modifications to the Service',
          content: <p>The Company reserves the right to modify these Terms and services at any time. Changes will be published on the official website.</p>,
        },
        {
          icon: Scale,
          title: '10. Applicable Legislation',
          content: <p>These Terms are governed by the laws of the United Mexican States. Any dispute shall be submitted to the competent courts of Valle de Bravo, State of Mexico, with the parties waiving any other jurisdiction.</p>,
        },
        {
          icon: Mail,
          title: '11. Contact',
          content: (
            <div className="bg-dark-50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Email:</span> <a href="mailto:info@vuelavalle.mx" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">info@vuelavalle.mx</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Plane className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Phone:</span> +52 722 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Address:</span> Valle de Bravo, State of Mexico, 51200</span>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-sm"><span className="font-medium text-dark-800">Business hours:</span> Monday to Sunday, 7:00 am - 6:00 pm</span>
              </div>
            </div>
          ),
        },
      ];

  return (
    <main className="pt-16 lg:pt-20">
      <SEOHead
        title={lang === 'es' ? 'Términos y Condiciones | VuelaValle' : 'Terms and Conditions | VuelaValle'}
        description={lang === 'es' ? 'Términos y condiciones del servicio de vuelos en parapente de VuelaValle en Valle de Bravo.' : 'Terms and conditions for VuelaValle paragliding flight services in Valle de Bravo.'}
        pathEs="/terminos-y-condiciones"
        pathEn="/en/terms-and-conditions"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom py-20 sm:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full border border-accent-500/20 mb-6">
              <Scale className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                {lang === 'es' ? 'Términos legales' : 'Legal terms'}
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-5xl text-white"
          >
            {lang === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-dark-300 text-lg"
          >
            {lang === 'es' ? 'Servicio de Vuelos en Parapente' : 'Paragliding Flight Services'}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-sm text-dark-500"
          >
            {lang === 'es' ? 'Vigentes a partir de: 12 de junio de 2026' : 'Effective as of: June 12, 2026'}
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
                  ? 'Al utilizar nuestros servicios, confirma haber leído y aceptado estos Términos y Condiciones en su totalidad.'
                  : 'By using our services, you confirm having read and accepted these Terms and Conditions in their entirety.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
