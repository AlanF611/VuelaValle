export interface BlogPost {
  slug: string;
  lang: 'es' | 'en';
  title: string;
  excerpt: string;
  categoryEs: string;
  categoryEn: string;
  authorId: string;
  readTime: number;
  date: string;
  image: string;
  sections: { heading: string; content: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'es-seguro-el-parapente',
    lang: 'es',
    title: '\u00bfEs seguro el parapente? Todo lo que debes saber antes de volar',
    excerpt: 'La seguridad es la preocupaci\u00f3n n\u00famero uno de quienes quieren volar. Aqu\u00ed respondemos todas tus dudas con datos reales.',
    categoryEs: 'Seguridad',
    categoryEn: 'Safety',
    authorId: 'carlos',
    readTime: 6,
    date: '2025-01-20',
    image: '/img/safety.jpeg',
    sections: [
      {
        heading: 'El parapente t\u00e1ndem es una actividad segura',
        content: 'El parapente t\u00e1ndem es considerada una actividad de riesgo moderado, comparable a otros deportes al aire libre como el ciclismo de monta\u00f1a o el esqu\u00ed. Seg\u00fan datos de la FAI (Federaci\u00f3n Aeron\u00e1utica Internacional), la tasa de incidentes en vuelos t\u00e1ndem comerciales es extremadamente baja cuando se cuenta con pilotos certificados y protocolos de seguridad adecuados.\n\nEn VuelaValle, nuestra prioridad n\u00famero uno es tu seguridad. Todos nuestros pilotos est\u00e1n certificados por la AVLM (Asociaci\u00f3n de Vuelo Libre de M\u00e9xico) y APPI (Association of Paragliding Pilots and Instructors), las dos organizaciones m\u00e1s importantes del sector. Adem\u00e1s, contamos con seguro de vuelo para cada pasajero.',
      },
      {
        heading: 'Qu\u00e9 hace que un vuelo sea seguro',
        content: 'La seguridad en parapente depende de tres factores principales: el piloto, el equipo y las condiciones meteorol\u00f3gicas.\n\nEl piloto: Nuestros instructores tienen m\u00e1s de 1,000 vuelos de experiencia cada uno. Carlos Mendoza, nuestro piloto principal, ha completado m\u00e1s de 2,400 vuelos sin incidentes. La experiencia es el factor de seguridad m\u00e1s importante.\n\nEl equipo: Revisamos cada pieza del equipo antes de cada vuelo. Las alas se inspeccionan cada 100 horas de vuelo, las cuerdas se cambian seg\u00fan el calendario del fabricante, y los arneses tienen reserva de emergencia (paraca\u00eddas de emergencia) que se repacking cada 6 meses.\n\nLas condiciones: Solo volamos cuando las condiciones meteorol\u00f3gicas son favorables. Si el viento est\u00e1 fuera de rango, si hay riesgo de tormenta o si las t\u00e9rmicas son demasiado fuertes, cancelamos el vuelo. Sin excepciones.',
      },
      {
        heading: 'Preguntas frecuentes sobre seguridad',
        content: '\u00bfQu\u00e9 pasa si el viento cambia durante el vuelo? Los pilotos experimentados saben leer las condiciones en el aire y ajustar el vuelo. Si las condiciones cambian de forma inesperada, el piloto tiene protocolos para aterrizar de forma segura en zonas alternativas.\n\n\u00bfEl equipo puede fallar? Es extremadamente raro. El equipo moderno de parapente est\u00e1 dise\u00f1ado con m\u00faltiples sistemas de redundancia. En caso de un problema con el ala principal, existe un paraca\u00eddas de emergencia independiente.\n\n\u00bfHay restricciones por peso o edad? El peso m\u00e1ximo es de 110 kg por razones de seguridad aerodin\u00e1mica. No hay l\u00edmite de edad superior \u2014 nuestro pasajero m\u00e1s longevo ten\u00eda 82 a\u00f1os. La edad m\u00ednima es 6 a\u00f1os con autorizaci\u00f3n de un padre o tutor.',
      },
    ],
  },
  {
    slug: 'mejor-epoca-parapente-valle-de-bravo',
    lang: 'es',
    title: 'Mejor \u00e9poca para volar en parapente en Valle de Bravo',
    excerpt: 'Valle de Bravo tiene condiciones de vuelo todo el a\u00f1o, pero hay temporadas que ofrecen experiencias excepcionales.',
    categoryEs: 'Gu\u00eda',
    categoryEn: 'Guide',
    authorId: 'daniela',
    readTime: 5,
    date: '2025-02-15',
    image: '/img/best.jpeg',
    sections: [
      {
        heading: 'Todo el a\u00f1o se puede volar',
        content: 'Una de las grandes ventajas de Valle de Bravo es que ofrece condiciones de vuelo durante todo el a\u00f1o. Sin embargo, la experiencia var\u00eda significativamente seg\u00fan la temporada, y conocer estas diferencias te ayudar\u00e1 a elegir el momento perfecto para tu vuelo.',
      },
      {
        heading: 'Temporada alta: octubre a mayo',
        content: 'De octubre a mayo, las condiciones t\u00e9rmicas en Valle de Bravo son excepcionales. Los d\u00edas son soleados, las t\u00e9rmicas son consistentes y predecibles, y las condiciones de vuelo son ideales tanto para vuelos t\u00e1ndem como para cross-country.\n\nDentro de esta temporada, destacan dos momentos especiales:\n\nNoviembre a enero: Esta es la temporada en la que Valle de Bravo recibe a pilotos de todo el mundo. Las condiciones t\u00e9rmicas permiten vuelos largos, y el ambiente en el despegue es incre\u00edble. Es cuando se realizan las competencias nacionales e internacionales.\n\nFebrero a abril: La primavera ofrece las t\u00e9rmicas m\u00e1s fuertes del a\u00f1o, lo que permite vuelos de mayor duraci\u00f3n y distancia. Los atardeceres son especialmente hermosos durante estos meses.',
      },
      {
        heading: 'Temporada de lluvias: junio a septiembre',
        content: 'Durante la temporada de lluvias, volamos con menos frecuencia pero sigue siendo posible. Las ma\u00f1anas suelen tener condiciones flyables antes de que se formen las nubes de lluvia por la tarde. Los vuelos matutinos durante esta temporada ofrecen una atm\u00f3sfera especial con nubes dram\u00e1ticas y vegetaci\u00f3n exuberante.\n\nEs importante tener flexibilidad en las fechas durante esta temporada, ya que podemos necesitar reprogramar si las condiciones no son seguras.',
      },
    ],
  },
  {
    slug: 'como-llegar-valle-de-bravo-cdmx',
    lang: 'es',
    title: 'Gu\u00eda completa: C\u00f3mo llegar a Valle de Bravo desde CDMX',
    excerpt: 'Todo lo que necesitas saber para viajar de la Ciudad de M\u00e9xico a Valle de Bravo, incluyendo opciones de transporte y tiempos.',
    categoryEs: 'Gu\u00eda',
    categoryEn: 'Guide',
    authorId: 'rodrigo',
    readTime: 4,
    date: '2025-03-01',
    image: '/img/VALLE.jpeg',
    sections: [
      {
        heading: 'Valle de Bravo est\u00e1 m\u00e1s cerca de lo que piensas',
        content: 'Valle de Bravo se encuentra a solo 156 km de la Ciudad de M\u00e9xico, lo que lo convierte en un destino accesible para una escapada de fin de semana o incluso un viaje de un d\u00eda. El viaje por carretera toma entre 2 y 2.5 horas dependiendo de la ruta y el tr\u00e1fico.',
      },
      {
        heading: 'Opciones de transporte',
        content: 'En autom\u00f3vil: La ruta m\u00e1s com\u00fan es tomar la autopista M\u00e9xico-Toluca (carretera 15D) hasta Toluca, y luego la carretera 130 hacia Valle de Bravo. El costo de peaje es aproximadamente $150 MXN. Recomendamos salir temprano por la ma\u00f1ana para evitar tr\u00e1fico.\n\nEn autob\u00fas: Desde la Terminal de Autobuses de Pasajeros de Oriente (TAPO) salen autobuses directos a Valle de Bravo con la l\u00ednea Zinacantepec. El viaje toma unas 3 horas y cuesta alrededor de $250 MXN.\n\nTransporte privado: Si prefieres no preocuparte por la log\u00edstica, algunos de nuestros paquetes incluyen transporte privado desde puntos de encuentro en la Ciudad de M\u00e9xico.',
      },
      {
        heading: 'Qu\u00e9 hacer adem\u00e1s de volar',
        content: 'Valle de Bravo es un Pueblo M\u00e1gico con mucho que ofrecer adem\u00e1s del parapente. Te recomendamos llegar un d\u00eda antes de tu vuelo para disfrutar del pueblo, sus restaurantes, y el lago. Hay opciones de hospedaje para todos los presupuestos, desde hostales hasta hoteles boutique.\n\nDespu\u00e9s de tu vuelo, puedes disfrutar de la comida local en los restaurantes del centro, dar un paseo en lancha por el lago, o simplemente relajarte con las vistas incre\u00edbles que ofrece este Pueblo M\u00e1gico.',
      },
    ],
  },
  {
    slug: 'is-paragliding-safe',
    lang: 'en',
    title: 'Is Paragliding Safe? Everything You Need to Know',
    excerpt: 'Safety is the number one concern for anyone considering a paragliding flight. Here we answer all your questions with real data.',
    categoryEs: 'Seguridad',
    categoryEn: 'Safety',
    authorId: 'carlos',
    readTime: 6,
    date: '2025-01-20',
    image: '/img/safety.jpeg',
    sections: [
      {
        heading: 'Tandem paragliding is a safe activity',
        content: 'Tandem paragliding is considered a moderate-risk activity, comparable to other outdoor sports like mountain biking or skiing. According to data from the FAI (F\u00e9d\u00e9ration A\u00e9ronautique Internationale), the incident rate in commercial tandem flights is extremely low when you have certified pilots and proper safety protocols.\n\nAt VuelaValle, our number one priority is your safety. All our pilots are certified by AVLM (Mexican Free Flight Association) and APPI (Association of Paragliding Pilots and Instructors), the two most important organizations in the field. We also carry flight insurance for every passenger.',
      },
      {
        heading: 'What makes a flight safe',
        content: 'Safety in paragliding depends on three main factors: the pilot, the equipment, and weather conditions.\n\nThe pilot: Our instructors each have over 1,000 flights of experience. Carlos Mendoza, our lead pilot, has completed over 2,400 incident-free flights. Experience is the most important safety factor.\n\nThe equipment: We inspect every piece of equipment before each flight. Wings are inspected every 100 flight hours, lines are replaced according to the manufacturer schedule, and harnesses have emergency reserves (reserve parachutes) that are repacked every 6 months.\n\nThe conditions: We only fly when weather conditions are favorable. If the wind is out of range, if there\'s a risk of storms, or if thermals are too strong, we cancel the flight. No exceptions.',
      },
      {
        heading: 'Frequently asked safety questions',
        content: 'What happens if the wind changes during the flight? Experienced pilots can read conditions in the air and adjust the flight. If conditions change unexpectedly, the pilot has protocols to land safely at alternative landing zones.\n\nCan the equipment fail? It\'s extremely rare. Modern paragliding equipment is designed with multiple redundant systems. In case of a problem with the main wing, there is an independent emergency parachute.\n\nAre there weight or age restrictions? The maximum weight is 110 kg for aerodynamic safety reasons. There is no upper age limit \u2014 our oldest passenger was 82 years old. The minimum age is 6 years with parent or guardian authorization.',
      },
    ],
  },
  {
    slug: 'best-season-paragliding-valle-de-bravo',
    lang: 'en',
    title: 'Best Season for Paragliding in Valle de Bravo',
    excerpt: 'Valle de Bravo has flyable conditions year-round, but certain seasons offer exceptional experiences. Here\'s your complete guide.',
    categoryEs: 'Gu\u00eda',
    categoryEn: 'Guide',
    authorId: 'daniela',
    readTime: 5,
    date: '2025-02-15',
    image: '/img/best.jpeg',
    sections: [
      {
        heading: 'You can fly year-round',
        content: 'One of the great advantages of Valle de Bravo is that it offers flying conditions throughout the year. However, the experience varies significantly depending on the season, and understanding these differences will help you choose the perfect time for your flight.',
      },
      {
        heading: 'Peak season: October to May',
        content: 'From October to May, thermal conditions in Valle de Bravo are exceptional. Days are sunny, thermals are consistent and predictable, and flying conditions are ideal for both tandem flights and cross-country.\n\nWithin this season, two special periods stand out:\n\nNovember to January: This is the season when Valle de Bravo receives pilots from around the world. Thermal conditions allow long flights, and the atmosphere at the launch site is incredible. This is when national and international competitions take place. Valle de Bravo has hosted the Paragliding World Cup 5 times.\n\nFebruary to April: Spring offers the strongest thermals of the year, enabling longer duration and distance flights. Sunsets are especially beautiful during these months, making it the perfect time for our Sunset Flight.',
      },
      {
        heading: 'Rainy season: June to September',
        content: 'During the rainy season, we fly less frequently but it\'s still possible. Mornings often have flyable conditions before rain clouds develop in the afternoon. Morning flights during this season offer a special atmosphere with dramatic clouds and lush green vegetation.\n\nIt\'s important to have flexible dates during this season, as we may need to reschedule if conditions aren\'t safe.',
      },
    ],
  },
  {
    slug: 'getting-to-valle-de-bravo-from-mexico-city',
    lang: 'en',
    title: 'Complete Guide: Getting to Valle de Bravo from Mexico City',
    excerpt: 'Everything you need to know about traveling from Mexico City to Valle de Bravo, including transport options and travel times.',
    categoryEs: 'Gu\u00eda',
    categoryEn: 'Guide',
    authorId: 'rodrigo',
    readTime: 4,
    date: '2025-03-01',
    image: '/img/VALLE.jpeg',
    sections: [
      {
        heading: 'Valle de Bravo is closer than you think',
        content: 'Valle de Bravo is only 156 km from Mexico City, making it an accessible destination for a weekend getaway or even a day trip. The drive takes between 2 and 2.5 hours depending on the route and traffic.',
      },
      {
        heading: 'Transportation options',
        content: 'By car: The most common route is to take the Mexico-Toluca highway (highway 15D) to Toluca, then highway 130 to Valle de Bravo. Toll costs are approximately $150 MXN. We recommend leaving early in the morning to avoid traffic.\n\nBy bus: Direct buses to Valle de Bravo depart from the Terminal de Autobuses de Pasajeros de Oriente (TAPO) with the Zinacantepec line. The trip takes about 3 hours and costs around $250 MXN.\n\nPrivate transport: If you prefer not to worry about logistics, some of our packages include private transport from meeting points in Mexico City.',
      },
      {
        heading: 'What to do besides flying',
        content: 'Valle de Bravo is a Pueblo M\u00e1gico with plenty to offer beyond paragliding. We recommend arriving a day before your flight to enjoy the town, its restaurants, and the lake. Accommodation options range from hostels to boutique hotels for all budgets.\n\nAfter your flight, you can enjoy local food at downtown restaurants, take a boat ride on the lake, or simply relax with the incredible views this Pueblo M\u00e1gico offers.',
      },
    ],
  },
];
