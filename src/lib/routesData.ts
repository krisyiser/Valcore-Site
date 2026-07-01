export interface RouteDetail {
  title: string;
  category: string;
  description: string;
  keywords: string[];
  content: string;
  features: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export const routesData: Record<string, RouteDetail> = {
  // CRM Subsolutions
  "crm-para-hoteles": {
    title: "CRM para Hoteles",
    category: "CRM Hospitality",
    description: "Infraestructura de control de huéspedes, perfiles de reserva y automatizaciones de seguimiento pre y post estancia.",
    keywords: ["crm para hoteles", "gestion de clientes hoteles", "software crm"],
    content: "Optimice el embudo de reservas directas, administre el historial de huéspedes de múltiples propiedades y envíe confirmaciones automatizadas.",
    features: [
      "Perfil de huésped unificado con historial de consumos.",
      "Motor de correo automatizado para campañas de pre-arribo.",
      "Integración nativa con sistemas PMS y motores de reserva.",
      "Mapeo de satisfacción de cliente inmediato."
    ],
    specs: [
      { label: "Sincronización PMS", value: "Latencia < 1 segundo" },
      { label: "Canales Soportados", value: "WhatsApp, Email, Teléfono" },
      { label: "Escalabilidad", value: "Soporte multi-propiedad" }
    ],
    faqs: [
      { q: "¿Se integra con sistemas PMS de terceros?", a: "Sí, poseemos conectores listos para los principales PMS hoteleros del mercado internacional." }
    ]
  },
  "crm-para-laboratorios": {
    title: "CRM para Laboratorios Clínicos",
    category: "CRM Health",
    description: "Sistemas de gestión de pacientes, envío automatizado de resultados e integración de agendas de toma de muestras.",
    keywords: ["crm para laboratorios", "software para laboratorios", "gestion de pacientes"],
    content: "Automatice el envío de resultados de laboratorio de forma segura. Integre el control de citas y envíe notificaciones automatizadas vía SMS y correo electrónico.",
    features: [
      "Envío seguro y cifrado de PDFs de resultados.",
      "Control de agenda para tomas de muestras a domicilio.",
      "Historial clínico estructurado por paciente.",
      "Recordatorios de seguimiento automático para chequeos recurrentes."
    ],
    specs: [
      { label: "Seguridad de Datos", value: "Cumplimiento de estándares de salud" },
      { label: "Canales de Notificación", value: "SMS, Email, WhatsApp Business API" },
      { label: "Redundancia", value: "Base de datos con triple réplica activa" }
    ],
    faqs: [
      { q: "¿Los resultados son enviados automáticamente?", a: "Sí, una vez liberados por el área química, el motor de Valcore los encripta, genera el PDF y los envía al paciente." }
    ]
  },
  "crm-para-asociaciones": {
    title: "CRM para Asociaciones y Cámaras",
    category: "CRM Membership",
    description: "Plataforma de control de afiliados, cobranza recurrente y portal de membresías corporativas.",
    keywords: ["crm empresarial", "gestion de afiliados", "software de membresias"],
    content: "Mantenga la visibilidad de su comunidad empresarial, agilice el cobro de cuotas anuales y automatice convocatorias a asambleas.",
    features: [
      "Control de membresías con renovación automática y pasarelas de pago.",
      "Directorio empresarial público/privado auto-administrable.",
      "Envío masivo de boletines y convocatorias con métricas de lectura.",
      "Registro de asistencia digital a eventos mediante códigos QR."
    ],
    specs: [
      { label: "Pasarelas de Pago", value: "Stripe, PayPal, Terminales Bancarias" },
      { label: "Directorio de Socios", value: "Filtros por sector, tamaño y ubicación" },
      { label: "API Integración", value: "Conexión a sistemas contables ERP" }
    ],
    faqs: [
      { q: "¿Se pueden emitir recibos deducibles automáticamente?", a: "Sí, al procesarse la renovación, el sistema conecta con el módulo de facturación para timbrar el documento." }
    ]
  },
  "crm-para-educacion": {
    title: "CRM para Instituciones Educativas",
    category: "CRM Education",
    description: "Seguimiento de aspirantes, control de inscripción escolar y retención académica automatizada.",
    keywords: ["crm para educacion", "gestion escolar", "software administrativo educativo"],
    content: "Incremente el porcentaje de conversión de aspirantes en alumnos. Monitoree las interacciones de los asesores de admisiones y analice cuellos de botella.",
    features: [
      "Seguimiento de prospectos por campus, carrera y ciclo.",
      "Asignación de asesores y medición de tiempos de respuesta (SLAs).",
      "Automatización de recordatorios de exámenes de admisión.",
      "Tablero analítico de efectividad de campañas publicitarias."
    ],
    specs: [
      { label: "Canales de Admisión", value: "Formularios web, Redes Sociales, WhatsApp" },
      { label: "Capacidad", value: "Hasta 50,000 admisiones por ciclo" },
      { label: "Reportes", value: "Embudo de conversión en tiempo real" }
    ],
    faqs: [
      { q: "¿Permite el cobro de fichas de admisión en línea?", a: "Sí, integra la generación de referencias bancarias OXXO, SPEI y pagos con tarjeta de crédito/débito." }
    ]
  },
  "crm-personalizado": {
    title: "CRM Personalizado e Industrial",
    category: "CRM Custom",
    description: "Desarrollo y adaptación de flujos comerciales específicos para industrias de alto valor y B2B complejo.",
    keywords: ["crm empresarial", "software personalizado", "gestion de clientes"],
    content: "Para organizaciones cuyas transacciones requieren autorizaciones complejas, cotizaciones técnicas estructuradas y flujos de aprobación multinivel.",
    features: [
      "Modelado de datos a la medida sin restricciones de campos estándar.",
      "Generador de cotizaciones complejas (CPQ) integrado.",
      "Módulo de firma de contratos digitales integrado.",
      "Soporte de flujos comerciales multilenguaje y multimoneda."
    ],
    specs: [
      { label: "Ajuste de Campos", value: "100% dinámico" },
      { label: "API de Integración", value: "REST / Webhooks" },
      { label: "Despliegue", value: "On-Premise o Cloud Privado" }
    ],
    faqs: [
      { q: "¿Quién posee los derechos del código?", a: "El software es licenciado con acceso total a su infraestructura y control soberano de los datos." }
    ]
  },

  // ERP Subsolutions
  "erp-para-hoteles": {
    title: "ERP para Hoteles y Cadenas",
    category: "ERP Hospitality",
    description: "Control administrativo integrado, inventarios de insumos, compras centralizadas e integración contable.",
    keywords: ["erp", "sistema erp", "software administrativo", "gestion empresarial"],
    content: "Evite mermas en restaurantes, controle las compras de insumos operativos y mantenga la contabilidad de múltiples centros de costos unificada.",
    features: [
      "Auditoría nocturna integrada y cuadre de cajas.",
      "Control de inventario de almacén general e insumos de cocina.",
      "Ordenamiento automático de compras basado en máximos y mínimos.",
      "Módulo de nómina y asignación de propinas integrado."
    ],
    specs: [
      { label: "Centros de Costo", value: "Ilimitados por propiedad" },
      { label: "Sincronización Contable", value: "Diaria automatizada" },
      { label: "Control Físico", value: "Mapeo de inventarios mediante código de barras" }
    ],
    faqs: [
      { q: "¿Ayuda a controlar el costo de recetas?", a: "Sí, el módulo ERP descuenta ingredientes del inventario automáticamente con cada comanda vendida." }
    ]
  },
  "erp-para-educacion": {
    title: "ERP para Colegios y Universidades",
    category: "ERP Education",
    description: "Gestión escolar, facturación recurrente de colegiaturas, cobranza e informes presupuestales.",
    keywords: ["sistema erp", "software administrativo", "gestion empresarial"],
    content: "Administre de forma segura los cobros recurrentes de mensualidades, facturación automatizada y controle el presupuesto de egresos operativos.",
    features: [
      "Portal del alumno para consulta de estados de cuenta y facturación.",
      "Conciliación de pagos referenciados bancarios automatizada.",
      "Generación de reportes de morosidad y recargos dinámicos.",
      "Control presupuestal por departamento académico."
    ],
    specs: [
      { label: "Conciliación Bancaria", value: "99.2% de precisión automática" },
      { label: "Capacidad de Alumnos", value: "Escala hasta 100,000 matriculados" },
      { label: "Seguridad", value: "Cumplimiento estricto de datos financieros" }
    ],
    faqs: [
      { q: "¿Los alumnos pueden facturar autónomamente?", a: "Sí, el portal de autofacturación permite emitir el comprobante fiscal introduciendo su RFC y referencia de pago." }
    ]
  },
  "erp-para-gobierno": {
    title: "ERP para Gobierno y Entidades Públicas",
    category: "ERP Government",
    description: "Sistemas de contabilidad gubernamental, control presupuestal y auditoría pública bajo normativas oficiales.",
    keywords: ["erp", "sistema erp", "software administrativo", "gestion gubernamental"],
    content: "Garantice la transparencia, controle el ejercicio del gasto y cumpla cabalmente con las normas oficiales de contabilidad gubernamental.",
    features: [
      "Contabilidad gubernamental integrada en tiempo real.",
      "Control de adquisiciones, licitaciones y contratos de proveedores.",
      "Auditoría inmutable de cada transacción presupuestal.",
      "Generación automática de estados financieros públicos oficiales."
    ],
    specs: [
      { label: "Normativa Contable", value: "Alineación total con normativas nacionales de fiscalización" },
      { label: "Auditoría", value: "Logs criptográficos inmutables" },
      { label: "Seguridad de Acceso", value: "Integración Active Directory / LDAP" }
    ],
    faqs: [
      { q: "¿Soporta presupuestos plurianuales?", a: "Sí, el motor permite programar y etiquetar recursos por partidas presupuestarias anuales con proyección." }
    ]
  },
  "erp-personalizado": {
    title: "ERP Personalizado Corporativo",
    category: "ERP Custom",
    description: "Sistemas modulares administrativos diseñados a la medida para cadenas productivas complejas.",
    keywords: ["erp", "sistema erp", "software administrativo", "gestion empresarial"],
    content: "Unifique sus operaciones administrativas sin forzar a su organización a adaptarse a un software rígido. Construimos su ERP a la medida exacta de su modelo de negocio.",
    features: [
      "Base de datos dedicada con redundancia de hardware.",
      "Módulos específicos de manufactura, logística o finanzas avanzadas.",
      "Alertas de riesgos de liquidez o desabasto automáticas.",
      "Soporte técnico directo de nivel de ingeniería 24/7."
    ],
    specs: [
      { label: "Adaptación", value: "100% modular y modificable" },
      { label: "Despliegue", value: "Nube privada dedicada u On-Premise" },
      { label: "SLA de Soporte", value: "Garantía de respuesta < 30 minutos" }
    ],
    faqs: [
      { q: "¿Es escalable para nuevos países?", a: "Sí, nuestro core arquitectónico soporta multi-divisas, husos horarios y regulaciones impositivas internacionales." }
    ]
  },

  // POS Subsolutions
  "pos-para-tiendas-de-abarrotes": {
    title: "POS para Tiendas de Abarrotes",
    category: "POS Retail",
    description: "Sistema punto de venta rápido, compatibilidad con periféricos e inventario de miles de códigos de barra.",
    keywords: ["sistema punto de venta", "software pos", "punto de venta para abarrotes"],
    content: "Agilice las filas en caja, controle las mermas por caducidad y mantenga existencias óptimas mediante sugerencias automatizadas de compra.",
    features: [
      "Búsqueda instantánea de productos con latencia menor a 5ms.",
      "Integración nativa con básculas, lectores de códigos y cajones de dinero.",
      "Venta de productos a granel o por paquetes agrupados.",
      "Soporte para cobro de servicios y tiempo aire telefónico."
    ],
    specs: [
      { label: "Capacidad de Catálogo", value: "Soporta 100,000+ artículos sin ralentizarse" },
      { label: "Compatibilidad", value: "Básculas USB/RS232 comunes" },
      { label: "Corte de Caja", value: "Cierre ciego con bitácora digital" }
    ],
    faqs: [
      { q: "¿Cómo maneja la velocidad de cobro?", a: "El software está optimizado en memoria para que las lecturas de código e impresión de tickets ocurran al instante sin colas de espera." }
    ]
  },
  "pos-para-farmacias": {
    title: "POS para Farmacias y Boticas",
    category: "POS Health",
    description: "Control de recetas médicas, lotes, caducidades y cumplimiento sanitario estricto.",
    keywords: ["sistema punto de venta", "software pos", "punto de venta para farmacia"],
    content: "Cumpla con las normativas sanitarias. Controle medicamentos controlados registrando folio de receta y cédula profesional del médico emisor.",
    features: [
      "Control de lotes y fechas de caducidad con alertas preventivas.",
      "Registro estructurado de venta de antibióticos y controlados.",
      "Búsqueda por sustancia activa e indicador genérico/patente.",
      "Importación rápida de catálogos de distribuidores farmacéuticos."
    ],
    specs: [
      { label: "Cumplimiento Regulatorio", value: "Alineado con normativas de salud" },
      { label: "Sustancias Activas", value: "Catálogo de 15,000+ componentes" },
      { label: "Búsqueda", value: "Instantánea por patente o genérico" }
    ],
    faqs: [
      { q: "¿Evita la venta de productos caducados?", a: "Sí, el sistema bloquea automáticamente el escaneo de lotes cuya fecha de caducidad ha expirado." }
    ]
  },
  "pos-para-restaurantes": {
    title: "POS para Restaurantes y Cafeterías",
    category: "POS Hospitality",
    description: "Comandero digital, control de mesas, recetas y asignación de propinas.",
    keywords: ["sistema punto de venta", "software pos", "punto de venta para restaurante"],
    content: "Acelere la comunicación entre meseros y cocina. Visualice el estado de las mesas en tiempo real y divida cuentas de forma sencilla.",
    features: [
      "Comandero móvil compatible con tablets y smartphones de meseros.",
      "Control de recetas con descuento automático de insumos en cocina.",
      "Manejo de modificadores, términos de carne y extras de platillos.",
      "Pantalla de visualización para producción de cocina (KDS)."
    ],
    specs: [
      { label: "Velocidad de Envío", value: "<100ms de mesa a cocina" },
      { label: "Hardware Soportado", value: "Impresoras térmicas de red, pantallas KDS" },
      { label: "División de Cuentas", value: "Por persona, equitativo o por platillos" }
    ],
    faqs: [
      { q: "¿Qué pasa si se desconecta la red local?", a: "Los comanderos cambian a modo local y continúan enviando las comandas vía red local de respaldo sin perder datos." }
    ]
  },
  "pos-para-hoteles": {
    title: "POS para Hoteles y Centros de Consumo",
    category: "POS Hospitality",
    description: "Cargos directos a habitación, control de restaurantes de hotel, alberca y spa con sincronización PMS.",
    keywords: ["sistema punto de venta", "software pos", "pos para hoteles"],
    content: "Unifique los cargos de todas las áreas del hotel. Permita a sus huéspedes firmar consumos en restaurantes, bares o spa directamente a su folio de habitación.",
    features: [
      "Validación de habitación y nombre de huésped en tiempo real.",
      "Control de múltiples cajas de cobro distribuidas por zona del hotel.",
      "Manejo de tarifas de propinas e impuestos hoteleros específicos.",
      "Sincronización total de cargos al PMS central."
    ],
    specs: [
      { label: "Handshake PMS", value: "Verificación de estatus en tiempo real" },
      { label: "Seguridad", value: "Firma digital de folio por consumo" },
      { label: "Zonas de Operación", value: "Restaurante, Spa, Tienda, Alberca" }
    ],
    faqs: [
      { q: "¿El cargo a la habitación es inmediato?", a: "Sí, el sistema valida que la habitación esté activa (In-House) y carga el monto al folio al instante." }
    ]
  },
  "pos-para-cafeterias": {
    title: "POS para Cafeterías y Fast Food",
    category: "POS Hospitality",
    description: "Ventas rápidas en barra, modificadores de bebidas y combos dinámicos.",
    keywords: ["sistema punto de venta", "software pos"],
    content: "Diseñado para alta velocidad de cobro en barra. Configure combos promocionales, modificadores de tamaño y agregados en pocos clics.",
    features: [
      "Interfaz táctil optimizada para cobros rápidos en menos de 3 clics.",
      "Pantalla de turno para aviso de bebidas listas a clientes.",
      "Control de mermas de leche, granos de café y jarabes.",
      "Módulo de programas de lealtad y acumulación de puntos."
    ],
    specs: [
      { label: "Tiempo promedio de cobro", value: "<15 segundos" },
      { label: "Modificadores por artículo", value: "Ilimitados" },
      { label: "Alertas de Merma", value: "Descuento por mililitros en receta" }
    ],
    faqs: [
      { q: "¿Soporta lectores de tarjetas integrados?", a: "Sí, se conecta con terminales bancarias inteligentes para agilizar la transacción de cobro sin doble captura." }
    ]
  },

  // BI Subsolutions
  "dashboard-para-asociaciones": {
    title: "Dashboard Analítico para Asociaciones",
    category: "Analytics",
    description: "Tableros de control para el análisis de retención de miembros y flujos de ingreso.",
    keywords: ["business intelligence", "dashboard empresarial", "indicadores de productividad"],
    content: "Monitoree la salud financiera de su organización. Observe tasas de renovación de membresías y efectividad de convocatorias.",
    features: [
      "Métricas de deserción y permanencia de socios en tiempo real.",
      "Monitoreo de ingresos por cuotas y patrocinios.",
      "Análisis de asistencia a seminarios y eventos corporativos.",
      "Exportación rápida de datos para informes de consejo."
    ],
    specs: [
      { label: "Actualización de Datos", value: "Cada 15 minutos" },
      { label: "Exportación", value: "PDF, Excel estructurado" },
      { label: "Seguridad", value: "Acceso limitado por token y rol" }
    ],
    faqs: [
      { q: "¿Es difícil configurar las fuentes de información?", a: "No, el conector Valcore extrae automáticamente la información desde su base de datos CRM de forma transparente." }
    ]
  },
  "dashboard-para-camaras-empresariales": {
    title: "Dashboard para Cámaras Empresariales",
    category: "Analytics",
    description: "Tablero macro y microeconómico de productividad sectorial.",
    keywords: ["business intelligence", "dashboard empresarial", "analitica empresarial"],
    content: "Consolide datos de agremiados para generar estadísticas de empleo, crecimiento de sector y representatividad industrial.",
    features: [
      "Filtros de información geográfica por municipio y zona industrial.",
      "Indicadores de generación de empleo y tamaño de agremiados.",
      "Tablero de reportes de comercio exterior del sector.",
      "Generador automático de comunicados de prensa basados en datos."
    ],
    specs: [
      { label: "Fuentes de Datos", value: "CRM de cámara, bases públicas homologadas" },
      { label: "Visualizaciones", value: "Mapas de calor, gráficas de barras comparativas" },
      { label: "Garantía de Anonimato", value: "Algoritmos de agregación segura" }
    ],
    faqs: [
      { q: "¿Es seguro el manejo de datos confidenciales de empresas?", a: "Sí, aplicamos técnicas de agregación para asegurar que la información individual nunca sea expuesta en los tableros públicos." }
    ]
  },
  "dashboard-ejecutivo": {
    title: "Dashboard Ejecutivo Directivo",
    category: "Analytics",
    description: "Telemetría de alto nivel para consejos de administración y directores corporativos.",
    keywords: ["business intelligence", "dashboard empresarial", "indicadores de productividad"],
    content: "El centro de control de su empresa. Unifique métricas financieras de ERP, avances comerciales de CRM e inventarios del POS en un solo panel de control.",
    features: [
      "Cálculo automático de EBITDA, liquidez y rotación de inventarios.",
      "Semáforos de desviación presupuestaria automáticos.",
      "Visualización móvil optimizada para directivos en movimiento.",
      "Acceso de seguridad multinivel cifrado."
    ],
    specs: [
      { label: "Origen de Datos", value: "ERP + CRM + POS Valcore o Legacy" },
      { label: "Alertas de Desviación", value: "Notificaciones inmediatas push/correo" },
      { label: "Latencia", value: "Datos consolidados al cierre del día o en tiempo real" }
    ],
    faqs: [
      { q: "¿El tablero es personalizable por director?", a: "Sí, cada perfil puede organizar sus Widgets de KPI clave de acuerdo con su área de responsabilidad." }
    ]
  },
  "dashboard-operativo": {
    title: "Dashboard Operativo en Tiempo Real",
    category: "Analytics",
    description: "Tableros de control para gerentes de planta, almacén y logística.",
    keywords: ["business intelligence", "analitica empresarial"],
    content: "Monitoree el pulso de la operación al minuto. Detecte cuellos de botella en producción, retrasos en surtido y fallas logísticas.",
    features: [
      "Monitoreo de órdenes de compra pendientes de surtir.",
      "Productividad de personal de empaque y reparto al minuto.",
      "Tiempos promedio de carga y descarga de unidades.",
      "Alarmas de desabasto crítico de insumos."
    ],
    specs: [
      { label: "Tasa de Refresco", value: "<15 segundos via WebSockets" },
      { label: "Indicadores", value: "Eficiencia General de los Equipos (OEE), Productividad" },
      { label: "Integrabilidad", value: "Bases de datos de planta / ERP" }
    ],
    faqs: [
      { q: "¿Se puede proyectar en pantallas dentro del almacén?", a: "Sí, posee un modo de pantalla completa auto-ajustable diseñado específicamente para televisiones industriales." }
    ]
  },

  // Specialized Subsolutions
  "gestion-documental": {
    title: "Sistema de Gestión Documental",
    category: "Specialized Systems",
    description: "Indexación inteligente, resguardo digital inmutable y flujos de firma electrónica.",
    keywords: ["sistema de gestion documental", "software personalizado", "automatizacion empresarial"],
    content: "Elimine el papel de su organización. Archive expedientes digitales, automatice la retención de documentos y valide firmas electrónicas seguras.",
    features: [
      "Firma electrónica con validez legal e inmutabilidad.",
      "Indexación automática de contenidos mediante extracción estructurada OCR.",
      "Búsqueda por palabras clave dentro del texto de archivos escaneados.",
      "Control de vigencias con alertas automáticas de renovación."
    ],
    specs: [
      { label: "Motor OCR", value: "Reconocimiento multilenguaje de alta precisión" },
      { label: "Cifrado Documental", value: "AES-256 a nivel de archivo" },
      { label: "Capacidad", value: "Repositorios de millones de expedientes" }
    ],
    faqs: [
      { q: "¿Las firmas electrónicas cumplen con la ley?", a: "Sí, integramos sellos digitales y firmas con estampa de tiempo conforme a normativas de comercio y fiscales." }
    ]
  },
  "sistema-de-ticketing": {
    title: "Sistema de Ticketing y Mesa de Ayuda",
    category: "Specialized Systems",
    description: "Soporte corporativo interno y externo con medición de niveles de servicio (SLAs).",
    keywords: ["sistema de ticketing", "software personalizado", "automatizacion empresarial"],
    content: "Gestione las incidencias de clientes o personal interno. Asigne prioridades de forma automática y evalúe la calidad de atención de su área de soporte.",
    features: [
      "Creación de tickets por múltiples canales (correo, portal, chat).",
      "Asignación inteligente basada en carga de trabajo del agente.",
      "Alertas automáticas al aproximarse al vencimiento de un SLA.",
      "Encuestas de satisfacción automáticas al cerrar incidentes."
    ],
    specs: [
      { label: "Canales de Entrada", value: "API, Email, Web Portal, WhatsApp" },
      { label: "Soporte SLAs", value: "Matriz de tiempos de respuesta y solución" },
      { label: "Reportes", value: "Tasa de resolución al primer contacto (FCR)" }
    ],
    faqs: [
      { q: "¿El portal de clientes requiere licencias por usuario?", a: "No, las licencias son de infraestructura; el acceso de sus clientes finales al portal es ilimitado." }
    ]
  },
  "sistema-de-solicitudes": {
    title: "Sistema de Solicitudes y Aprobaciones",
    category: "Specialized Systems",
    description: "Flujos de aprobación jerárquica para viáticos, compras y autorizaciones corporativas.",
    keywords: ["automatizacion empresarial", "workflow empresarial"],
    content: "Automatice las solicitudes internas. Asegúrese de que cada gasto, viático o contratación cuente con las autorizaciones digitales de los gerentes correspondientes.",
    features: [
      "Creador de flujos de aprobación visuales basados en jerarquía de organigrama.",
      "Autorizaciones rápidas de directivos vía correo o WhatsApp.",
      "Control estricto de presupuestos autorizados por área.",
      "Integración directa al ERP para generación automática de cuentas por pagar."
    ],
    specs: [
      { label: "Canal de Aprobación", value: "Botones interactivos en Email/WhatsApp" },
      { label: "Flexibilidad", value: "Flujos dinámicos condicionados por monto" },
      { label: "Trazabilidad", value: "Log inalterable de firmas de aprobación" }
    ],
    faqs: [
      { q: "¿Qué ocurre si un aprobador no responde?", a: "Se pueden configurar reglas de escalamiento automático de tickets para reasignar la aprobación tras N horas." }
    ]
  },
  "control-de-proyectos": {
    title: "Sistema de Control de Proyectos",
    category: "Specialized Systems",
    description: "Planificación de hitos, asignación de tareas técnicas y medición de rentabilidad por proyecto.",
    keywords: ["control de proyectos", "software personalizado", "automatizacion empresarial"],
    content: "Ideal para empresas constructoras, consultoras o firmas de ingeniería que requieren un control estricto de horas, recursos asignados y márgenes financieros.",
    features: [
      "Cronogramas Gantt interactivos con dependencias de tareas.",
      "Registro de hojas de tiempo (Timesheets) por ingeniero/técnico.",
      "Comparativa automática entre presupuesto planeado vs ejercido.",
      "Módulo de entrega de bitácoras de avance de obra/hitos."
    ],
    specs: [
      { label: "Vistas Disponibles", value: "Gantt, Kanban, Lista de Tareas" },
      { label: "Cálculo de Costo", value: "Por hora de personal configurado" },
      { label: "Reportes", value: "Margen bruto por proyecto" }
    ],
    faqs: [
      { q: "¿Soporta adjuntar archivos pesados a las tareas?", a: "Sí, se integra con el almacenamiento inmutable en la nube de Valcore para archivos CAD, PDFs o fotografías." }
    ]
  },
  "control-operativo": {
    title: "Sistema de Control Operativo Industrial",
    category: "Specialized Systems",
    description: "Telemetría de incidentes de planta, mantenimiento predictivo y control de producción.",
    keywords: ["control operativo", "automatizacion empresarial", "workflow empresarial"],
    content: "Lleve el control del mantenimiento de su maquinaria pesada y registre las bitácoras operativas de sus técnicos directamente en campo.",
    features: [
      "Programación de planes de mantenimiento preventivo y calibración.",
      "Registro inmediato de fallos de maquinaria con alertas al staff de soporte.",
      "Bitácoras digitales de control de rondas de seguridad e higiene.",
      "Integración de sensores mediante pasarelas IoT industriales."
    ],
    specs: [
      { label: "Protocolos Soportados", value: "OPC UA, MQTT, HTTP REST" },
      { label: "Operación de Campo", value: "App progresiva compatible con terminales robustas" },
      { label: "Alertas de Seguridad", value: "Canales de mensajería críticos instantáneos" }
    ],
    faqs: [
      { q: "¿Funciona en áreas sin señal de red?", a: "Sí, el técnico realiza su bitácora de mantenimiento de forma local en su terminal y se sincroniza al detectar cobertura." }
    ]
  },

  // Industry Mappings
  "software-para-gobierno": {
    title: "Sistemas para Gobierno y Municipios",
    category: "Government Systems",
    description: "Infraestructura de software para recaudación catastral, trámites ciudadanos y contabilidad gubernamental.",
    keywords: ["software para gobierno", "gestion gubernamental", "sistema administrativo"],
    content: "Digitalice trámites municipales, centralice la recaudación del impuesto predial y asegure la total transparencia en las finanzas de su administración municipal o estatal.",
    features: [
      "Pasarela de pago de predial, multas y licencias ciudadanas.",
      "Expediente ciudadano único para trámites simplificados.",
      "Contabilidad gubernamental armonizada (CONAC) nativa.",
      "Gestión e inventario de patrimonio público."
    ],
    specs: [
      { label: "Seguridad y Accesibilidad", value: "Estándares gubernamentales de encriptación" },
      { label: "Integridad de Pagos", value: "Conciliación directa con tesorerías estatales" },
      { label: "Acceso Ciudadano", value: "Diseño inclusivo de alta accesibilidad" }
    ],
    faqs: [
      { q: "¿Ayuda a reducir las filas de trámites en oficinas?", a: "Sí, más del 70% de los trámites recaudatorios pueden completarse en línea de manera segura en menos de 5 minutos." }
    ]
  },
  "software-para-educacion": {
    title: "Sistemas para Educación y Universidades",
    category: "Education Systems",
    description: "Control de alumnos, cobro de colegiaturas, portal de calificaciones y CRM de inscripciones.",
    keywords: ["software para educacion", "control escolar", "erp educativo"],
    content: "Modernice la administración escolar de su universidad, bachillerato o colegio privado con una solución integrada de CRM y ERP escolar.",
    features: [
      "Portal interactivo del estudiante y padres de familia.",
      "Control de inscripciones, reinscripciones e historial de calificaciones.",
      "Generación masiva y automática de colegiaturas con referencias de pago.",
      "Módulo de biblioteca digital y control de inventarios físicos de laboratorios."
    ],
    specs: [
      { label: "Escalabilidad Académica", value: "Soporte para múltiples planteles y planes de estudio" },
      { label: "Autoservicio del Alumno", value: "Consulta de boletas, pagos y autofacturación" },
      { label: "Redundancia de Calificaciones", value: "Resguardo histórico inmutable de kardex" }
    ],
    faqs: [
      { q: "¿Se conecta con plataformas de aprendizaje (LMS)?", a: "Sí, poseemos integraciones nativas para sincronizar grupos y calificaciones con Moodle, Canvas y Google Classroom." }
    ]
  },
  "software-para-hoteles": {
    title: "Sistemas para Hoteles y Cadenas de Hospitalidad",
    category: "Hospitality Systems",
    description: "Sincronización PMS, CRM de lealtad, ERP contable y POS de restaurantes hoteleros.",
    keywords: ["software para hoteles", "gestion hotelera", "pos para hoteles"],
    content: "Garantice la excelencia en el servicio controlando todas las áreas operativas de su hotel: reservas, ama de llaves, almacén de alimentos y bebidas, y cargos integrados.",
    features: [
      "Control de asignación de habitaciones y estatus de ama de llaves.",
      "Integración total de consumos en restaurantes y bares al folio del huésped.",
      "CRM para programas de huéspedes frecuentes y promociones dinámicas.",
      "ERP administrativo y control de costos de recetas de cocina."
    ],
    specs: [
      { label: "Integración PMS", value: "Conexión bidireccional estable" },
      { label: "Auditoría Operativa", value: "Reportes de ocupación y tarifa promedio (ADR)" },
      { label: "Control de Sucursales", value: "Consolidación de cadenas hoteleras" }
    ],
    faqs: [
      { q: "¿Maneja tarifas y temporadas dinámicas?", a: "Sí, el motor ERP/CRM permite configurar esquemas de precios basados en temporadas, convenios empresariales y agencias." }
    ]
  },
  "software-para-restaurantes": {
    title: "Sistemas para Cadenas de Restaurantes",
    category: "Food and Beverage Systems",
    description: "POS comandero, control de recetas, almacén central, compras y reportes financieros.",
    keywords: ["software para restaurante", "punto de venta para restaurante", "gestion de restaurantes"],
    content: "Ideal para franquicias o cadenas restauranteras. Controle las recetas e inventarios de todos sus puntos de venta desde una consola centralizada de administración.",
    features: [
      "Comanderas en tablet y celular con envío directo a cocina.",
      "Explosión de insumos en tiempo real basada en recetas de platillos vendidos.",
      "Control de compras integrando autorizaciones de gerentes de sucursal.",
      "Dashboard de ventas, margen de ganancia y mermas por sucursal."
    ],
    specs: [
      { label: "Plataformas", value: "PWA compatible con iOS, Android y Windows" },
      { label: "Sincronización de Costos", value: "Costo promedio e inventario PEPS" },
      { label: "Seguridad de Caja", value: "Arqueo ciego para evitar fugas" }
    ],
    faqs: [
      { q: "¿Cómo controla el inventario de recetas complejas?", a: "El ERP desglosa cada receta en ingredientes base (ej. gramos de carne, mililitros de salsa) y los descuenta del almacén al instante al pagar la cuenta." }
    ]
  },
  "software-para-laboratorios": {
    title: "Sistemas para Laboratorios de Diagnóstico",
    category: "Medical Systems",
    description: "CRM de pacientes, control de entrega de resultados y agenda de toma de muestras.",
    keywords: ["crm para laboratorios", "software para laboratorios", "gestion de clinicas"],
    content: "Mejore el servicio al paciente. Automatice la distribución segura de reportes clínicos y reduzca fallos de captura de datos demográficos.",
    features: [
      "Envío automatizado de resultados vía WhatsApp y Correo.",
      "Portal del paciente y médicos referentes para consulta histórica de estudios.",
      "Control de tomas de muestras con código de barras para evitar errores.",
      "Módulo de cobro rápido de estudios clínicos y facturación."
    ],
    specs: [
      { label: "Seguridad de Expedientes", value: "Cifrado SSL de punta a punta" },
      { label: "Integridad", value: "Validaciones de coincidencia de folio" },
      { label: "Conectores LIS", value: "Sincronización con equipos de análisis clínico" }
    ],
    faqs: [
      { q: "¿Es compatible con equipos analizadores automáticos?", a: "Sí, podemos integrar las lecturas de los analizadores para capturar resultados directamente en el CRM clínico." }
    ]
  },
  "software-para-clinicas": {
    title: "Sistemas para Clínicas y Consultorios Médicos",
    category: "Medical Systems",
    description: "Expediente clínico electrónico, control de consultas, recetas y caja administrativa.",
    keywords: ["gestion de clinicas", "software para clinicas", "expediente clinico"],
    content: "Lleve el control clínico de sus pacientes de forma segura y optimice el flujo de citas y cobros de su centro médico.",
    features: [
      "Expediente clínico digital bajo estrictas normas de confidencialidad médica.",
      "Agenda médica compartida con alertas de recordatorio a pacientes.",
      "Control de recetas médicas emitidas y plantillas de diagnóstico rápido.",
      "Módulo de cobros integrando facturación electrónica."
    ],
    specs: [
      { label: "Confidencialidad", value: "Acceso RBAC con token de seguridad" },
      { label: "Disponibilidad", value: "Nube de alta disponibilidad con failover" },
      { label: "Plataforma", value: "Acceso web seguro multidispositivo" }
    ],
    faqs: [
      { q: "¿Los datos de pacientes están seguros?", a: "Absolutamente, todos los datos médicos son almacenados encriptados y el acceso está auditado bajo normativas de privacidad." }
    ]
  },
  "software-para-tiendas": {
    title: "Sistemas para Tiendas y Cadenas de Retail",
    category: "Retail Systems",
    description: "Punto de venta POS, inventarios consolidados, compras de almacén y facturación.",
    keywords: ["software para tiendas", "sistema punto de venta", "software pos"],
    content: "Administre y controle su cadena de tiendas de retail. Conecte sus sucursales, automatice resurtidos y controle las mermas.",
    features: [
      "Cobros ultra rápidos con soporte para múltiples formas de pago.",
      "Inventario en tiempo real con alertas de stock mínimo.",
      "Portal centralizado para fijar precios y ofertas globales.",
      "Bitácoras de arqueo y movimientos de efectivo en cajas."
    ],
    specs: [
      { label: "Sincronización", value: "Datos centralizados inmediatos" },
      { label: "Hardware", value: "Escáneres de códigos, impresoras y terminales de cobro" },
      { label: "Soporte", value: "Modo offline híbrido en cajas" }
    ],
    faqs: [
      { q: "¿Soporta transferencias de stock entre tiendas?", a: "Sí, el ERP asiste el traspaso de mercancía entre tiendas generando las guías de salida y entrada correspondientes." }
    ]
  },
  "software-para-farmacias": {
    title: "Sistemas para Farmacias y Droguerías",
    category: "Retail Systems",
    description: "Control de sustancias, lotes, caducidades y registro sanitario obligatorio.",
    keywords: ["punto de venta para farmacia", "software pos", "sistema punto de venta"],
    content: "Administre sus farmacias de forma segura. Integre el control de caducidades de lotes y el registro obligatorio de recetas de antibióticos.",
    features: [
      "Alertas preventivas de caducidad de medicamentos.",
      "Búsqueda rápida por ingrediente activo.",
      "Registro electrónico de medicamentos controlados y antibióticos.",
      "Reportes de rotación de productos por sucursal."
    ],
    specs: [
      { label: "Cumplimiento Sanitario", value: "Totalmente alineado a leyes de salud" },
      { label: "Seguridad de Lote", value: "Validación por código de barras de lote" },
      { label: "Bases de Datos", value: "Resguardadas local y centralmente" }
    ],
    faqs: [
      { q: "¿El sistema asiste en la auditoría sanitaria?", a: "Sí, genera los reportes de entradas y salidas de antibióticos en el formato oficial de salubridad de forma automática." }
    ]
  },
  "software-para-abarrotes": {
    title: "Sistemas para Tiendas de Abarrotes y Minisupers",
    category: "Retail Systems",
    description: "Punto de venta ágil, soporte de báscula de pesaje e inventarios masivos.",
    keywords: ["punto de venta para abarrotes", "software pos", "sistema punto de venta"],
    content: "Agilice las transacciones del negocio, evite pérdidas por mermas o robos hormiga y mantenga una administración clara de su caja diaria.",
    features: [
      "Lectura instantánea de códigos de barras.",
      "Integración nativa con básculas de pesaje en caja.",
      "Venta de tiempo aire telefónico e ingresos adicionales.",
      "Registro rápido de compras y catálogo precargado."
    ],
    specs: [
      { label: "Básculas compatibles", value: "Modelos estándar USB y Serial" },
      { label: "Velocidad de carga", value: "Búsqueda en base de datos en <3ms" },
      { label: "Operación de caja", value: "Cierres ciegos auditados" }
    ],
    faqs: [
      { q: "¿Se pueden cargar miles de productos fácilmente?", a: "Sí, el sistema incluye plantillas de importación masiva y un catálogo base de abarrotes listo para usarse." }
    ]
  },
  "software-para-asociaciones": {
    title: "Sistemas para Asociaciones y Federaciones",
    category: "Membership Systems",
    description: "Gestión de asociados, cobros de membresías recurrentes, portal privado y convocatorias.",
    keywords: ["software para asociaciones", "crm para asociaciones", "gestion de agremiados"],
    content: "Administre eficientemente la base de datos de agremiados de su asociación, organice convocatorias y automatice las solicitudes de afiliación y renovación.",
    features: [
      "Módulo de cobros recurrentes de anualidades con tarjeta y SPEI.",
      "Portal privado del miembro con directorio de socios y beneficios.",
      "Emisión automatizada de constancias de afiliación.",
      "Control de asistencia a seminarios con validación QR."
    ],
    specs: [
      { label: "Seguridad de Pagos", value: "Tokens bancarios encriptados" },
      { label: "Portal Autogestionable", value: "Actualización de datos por el socio" },
      { label: "Escalabilidad", value: "Administración de miles de asociados activos" }
    ],
    faqs: [
      { q: "¿Los socios reciben recordatorios de pago?", a: "Sí, el sistema envía recordatorios automáticos parametrizados por correo y WhatsApp antes de expirar la membresía." }
    ]
  },
  "software-para-camaras-empresariales": {
    title: "Sistemas para Cámaras Empresariales",
    category: "Membership Systems",
    description: "Control de agremiados, directorio industrial, tableros de indicadores económicos y eventos.",
    keywords: ["software para camaras empresariales", "business intelligence", "gestion empresarial"],
    content: "Potencie la representatividad de su cámara empresarial. Centralice las comunicaciones con afiliados y obtenga métricas sobre el impacto de su sector.",
    features: [
      "Directorio de socios auto-administrado con buscador de servicios.",
      "Módulo de recaudación y cobro recurrente de cuotas de afiliación.",
      "Dashboard de datos sectoriales y generación de informes de empleo.",
      "Gestión integral de eventos corporativos, patrocinios e inscripciones."
    ],
    specs: [
      { label: "Manejo de Datos", value: "Encriptado y segmentado" },
      { label: "Portal Web", value: "Responsive, optimizado para SEO corporativo" },
      { label: "Facturación", value: "Generación de complementos fiscales automática" }
    ],
    faqs: [
      { q: "¿Es compatible con la facturación de cuotas?", a: "Sí, conecta nativamente con las APIs tributarias para emitir comprobantes de cuotas de afiliación exentas o gravadas." }
    ]
  }
};
