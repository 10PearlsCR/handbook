import fs from 'fs';

const handbookJson = {
  "meta": {
    "nav-tag": "Manual Corporativo",
    "nav-tag_en": "Corporate Manual",
    "landing-eyebrow": "10Pearls LATAM",
    "landing-eyebrow_en": "10Pearls LATAM",
    "landing-title": "Tu manual de <em>operaciones.</em>",
    "landing-title_en": "Your <em>operations manual.</em>",
    "landing-sub": "Este manual cubre las normas corporativas en <strong>tres grandes áreas: legal y seguridad, trabajo remoto y equipos, comunicación y soporte IT.</strong> Versión 1.0 — Confidencial.",
    "landing-sub_en": "This manual covers corporate standards across <strong>three areas: legal and security, remote work and devices, communication and IT support.</strong> Version 1.0 — Confidential.",
    "footer-dept": "Operations & Security",
    "footer-right": "Manual Corporativo Oficial",
    "footer-right_en": "Corporate Official Manual"
  },
  "areas": [
    {
      "id": "area1",
      "number": "01",
      "icon": "user-check",
      "title": "Legal, Seguridad<br>& Cumplimiento",
      "title_en": "Legal, Security<br>& Compliance",
      "short": "Legal & Seguridad",
      "short_en": "Legal & Security",
      "description": "Contratos, NDA, ISO 27001 y controles de seguridad obligatorios para todos.",
      "description_en": "Contracts, NDAs, ISO 27001, and mandatory security controls for everyone.",
      "owner": "Operations & Security",
      "sections": [
        {
          "id": "intro",
          "icon": "home",
          "title": "Introducción",
          "title_en": "Introduction",
          "eyebrow": "Manual Corporativo Oficial — v1.0",
          "eyebrow_en": "Corporate Official Manual — v1.0",
          "headline": "Las normas que<br><em>nos protegen a todos.</em>",
          "headline_en": "The rules that<br><em>protect us all.</em>",
          "body": "Este manual establece las normas y estándares corporativos que todos los empleados de 10Pearls LATAM deben conocer y cumplir. Es un documento interno y confidencial, aprobado por Operations & Security Directorate. Versión 1.0, efectivo a partir de marzo 2026.",
          "body_en": "This manual establishes the corporate standards that all 10Pearls LATAM employees must know and comply with. It is an internal, confidential document approved by the Operations & Security Directorate. Version 1.0, effective as of March 2026.",
          "note": "Estas políticas aplican a todos los colaboradores desde el primer día. El desconocimiento de las normas no exime de responsabilidad.",
          "note_en": "These policies apply to all employees from day one. Lack of knowledge of the rules does not exempt from responsibility.",
          "type": "standard"
        },
        {
          "id": "contratos",
          "icon": "user-check",
          "title": "Contratos",
          "title_en": "Contracts",
          "eyebrow": "NDA y Contrato de Trabajo",
          "eyebrow_en": "NDA & Employment Agreement",
          "headline": "Obligaciones firmadas<br><em>y exigibles.</em>",
          "headline_en": "Signed obligations<br><em>that are enforced.</em>",
          "body": "Todos los empleados deben cumplir con las obligaciones de confidencialidad y legales definidas en sus acuerdos firmados. Estas obligaciones son exigibles y sujetas a auditorías internas.",
          "body_en": "All employees must comply with the confidentiality and legal obligations defined in their signed agreements. These obligations are enforceable and subject to internal audits.",
          "highlight": "La información de clientes, proyectos y procesos internos es confidencial. Compartirla sin autorización constituye una violación grave.",
          "highlight_en": "Client, project, and internal process information is confidential. Sharing it without authorization constitutes a serious violation.",
          "type": "standard"
        },
        {
          "id": "iso27001",
          "icon": "settings",
          "title": "ISO 27001 & SGSI",
          "title_en": "ISO 27001 & ISMS",
          "eyebrow": "Sistema de Gestión de Seguridad",
          "eyebrow_en": "Information Security Management",
          "headline": "Seguridad con<br><em>estándar global.</em>",
          "headline_en": "Security with<br><em>global standards.</em>",
          "body": "La empresa opera bajo un Sistema de Gestión de Seguridad de la Información (SGSI) alineado con ISO 27001, garantizando protección estructurada de los activos de información en todas las operaciones.",
          "body_en": "The company operates under an Information Security Management System (ISMS) aligned with ISO 27001, ensuring structured protection of information assets across all operations.",
          "highlight": "ISO 27001 no es un trámite: es el estándar que define cómo protegemos los datos de clientes y de la empresa.",
          "highlight_en": "ISO 27001 isn't just a formality — it's the standard that defines how we protect client and company data.",
          "type": "standard"
        },
        {
          "id": "herramientas",
          "icon": "layers",
          "title": "Herramientas de Seguridad",
          "title_en": "Security Tools",
          "eyebrow": "CrowdStrike & Zscaler",
          "eyebrow_en": "CrowdStrike & Zscaler",
          "headline": "Dos capas de<br><em>protección activa.</em>",
          "headline_en": "Two layers of<br><em>active protection.</em>",
          "body": "Todos los equipos corporativos operan con dos plataformas de seguridad empresarial que actúan de forma simultánea y complementaria para garantizar la integridad de los sistemas.",
          "body_en": "All corporate devices operate with two enterprise security platforms that work simultaneously and in a complementary way to ensure system integrity.",
          "type": "list",
          "items": [
            { "title": "CrowdStrike", "title_en": "CrowdStrike", "desc": "Protección avanzada contra malware, ransomware y amenazas de día cero. Monitorea el comportamiento del sistema en tiempo real.", "desc_en": "Advanced protection against malware, ransomware, and zero-day threats. Monitors system behavior in real time." },
            { "title": "Zscaler", "title_en": "Zscaler", "desc": "Garantiza acceso seguro a aplicaciones corporativas, filtra el tráfico web y aplica políticas de protección de navegación y datos.", "desc_en": "Ensures secure access to corporate applications, filters web traffic, and enforces browsing and data protection policies." }
          ]
        },
        {
          "id": "controles",
          "icon": "star",
          "title": "Controles Obligatorios",
          "title_en": "Mandatory Controls",
          "eyebrow": "Sin excepciones",
          "eyebrow_en": "No exceptions",
          "headline": "Controles que no<br><em>son opcionales.</em>",
          "headline_en": "Controls that are<br><em>not optional.</em>",
          "body": "Todos los empleados están obligados a cumplir con los siguientes controles de seguridad. No hay excepciones.",
          "body_en": "All employees are required to comply with the following security controls. There are no exceptions.",
          "type": "list",
          "items": [
            { "title": "Agentes de seguridad siempre activos", "title_en": "Security agents always active", "desc": "Mantener CrowdStrike y Zscaler activos en todo momento. Desactivarlos — incluso temporalmente — es una violación de política.", "desc_en": "Keep both CrowdStrike and Zscaler active at all times. Disabling them — even temporarily — constitutes a policy violation." },
            { "title": "Sin software no autorizado", "title_en": "No unauthorized software", "desc": "Evitar instalar software que pueda entrar en conflicto con las herramientas de seguridad corporativas.", "desc_en": "Avoid installing software that may conflict with corporate security tools." },
            { "title": "Reportar alertas de inmediato", "title_en": "Report alerts immediately", "desc": "Cualquier alerta de seguridad debe ser reportada de inmediato al departamento de IT, sin demoras.", "desc_en": "Any security alerts must be reported immediately to the IT department, without delay." },
            { "title": "Solo redes seguras y aprobadas", "title_en": "Approved secure networks only", "desc": "Utilizar únicamente redes aprobadas y seguras para el acceso corporativo. Wi-Fi público no está permitido sin VPN.", "desc_en": "Use only approved, secure networks for corporate access. Public Wi-Fi is not permitted without VPN." }
          ]
        }
      ]
    },
    {
      "id": "area2",
      "number": "02",
      "icon": "wifi",
      "title": "Trabajo Remoto<br>& Equipos",
      "title_en": "Remote Work<br>& Devices",
      "short": "Remoto & Equipos",
      "short_en": "Remote & Devices",
      "description": "WFH, WFA y estándares de cuidado y uso de equipos corporativos.",
      "description_en": "WFH, WFA, and standards for care and use of corporate devices.",
      "owner": "People Success / IT",
      "sections": [
        {
          "id": "wfh",
          "icon": "home",
          "title": "Work From Home",
          "title_en": "Work From Home",
          "eyebrow": "Teletrabajo desde casa",
          "eyebrow_en": "Working from home",
          "headline": "Libertad con<br><em>infraestructura adecuada.</em>",
          "headline_en": "Freedom with<br><em>adequate infrastructure.</em>",
          "body": "El Work From Home permite a los empleados elegibles realizar sus funciones de forma remota bajo las condiciones de la Política de Teletrabajo. Es voluntario y requiere un acuerdo formal firmado por ambas partes.",
          "body_en": "Work From Home allows eligible employees to perform their duties remotely under the conditions of the Telework Policy. It is voluntary and requires a formal signed agreement by both parties.",
          "highlight": "La empresa puede monitorear el uso de equipos, sistemas y redes corporativas para garantizar el cumplimiento.",
          "highlight_en": "The company may monitor the use of corporate devices, systems, and networks to ensure compliance.",
          "type": "list",
          "items": [
            { "title": "Laptop corporativa en buen estado", "title_en": "Company-issued laptop in good condition", "desc": "El equipo asignado por la empresa debe mantenerse en óptimas condiciones de funcionamiento.", "desc_en": "The company-issued device must be kept in optimal working condition." },
            { "title": "Conexión a internet estable", "title_en": "Stable broadband internet connection", "desc": "Se requiere una conexión de banda ancha estable para garantizar la continuidad operativa y la calidad de las reuniones.", "desc_en": "A stable broadband connection is required to ensure operational continuity and meeting quality." },
            { "title": "Wi-Fi seguro (WPA2 o superior)", "title_en": "Secure Wi-Fi (WPA2 or higher)", "desc": "La red inalámbrica debe estar protegida con encriptación WPA2 o superior.", "desc_en": "The wireless network must be protected with WPA2 encryption or higher." },
            { "title": "Espacio ergonómico con buena iluminación", "title_en": "Ergonomic workspace with adequate lighting", "desc": "El espacio de trabajo debe permitir concentración y condiciones adecuadas para reuniones en cámara.", "desc_en": "The workspace must allow focus and adequate conditions for on-camera meetings." }
          ]
        },
        {
          "id": "wfa",
          "icon": "globe",
          "title": "Work From Anywhere",
          "title_en": "Work From Anywhere",
          "eyebrow": "Movilidad corporativa",
          "eyebrow_en": "Corporate mobility",
          "headline": "Trabajar desde<br><em>cualquier lugar.</em>",
          "headline_en": "Work from<br><em>anywhere.</em>",
          "body": "El Work From Anywhere permite realizar funciones temporalmente desde una ubicación diferente, manteniendo la continuidad operativa, los estándares de seguridad y los compromisos del proyecto.",
          "body_en": "Work From Anywhere allows employees to temporarily perform duties from a different location while maintaining operational continuity, security standards, and project commitments.",
          "note": "La empresa puede monitorear el uso de dispositivos, sistemas y comunicaciones corporativas para garantizar el cumplimiento.",
          "note_en": "The company may monitor the use of corporate devices, systems, and communications to ensure compliance.",
          "type": "list",
          "items": [
            { "title": "Antigüedad mínima: 3 meses", "title_en": "Minimum tenure: 3 months", "desc": "Se requieren al menos 3 meses de empleo con la empresa para solicitar WFA.", "desc_en": "At least 3 months of employment with the company is required to apply for WFA." },
            { "title": "Duración: 1 a 3 meses por solicitud", "title_en": "Duration: 1 to 3 months per request", "desc": "Cada solicitud aprobada permite trabajar desde otra ubicación por entre 1 y 3 meses.", "desc_en": "Each approved request allows working from another location for between 1 and 3 months." },
            { "title": "Aprobación formal requerida", "title_en": "Formal approval required", "desc": "Completar el formulario oficial de WFA y obtener la aprobación del manager y cliente cuando aplique.", "desc_en": "Complete the official WFA request form and obtain manager and client approval when applicable." },
            { "title": "Internet: mínimo 10 Mbps bajada / 3 Mbps subida", "title_en": "Internet: min. 10 Mbps download / 3 Mbps upload", "desc": "Se requiere banda ancha estable. Las conexiones móviles no están permitidas.", "desc_en": "Stable broadband is required. Mobile connections are not permitted." }
          ]
        },
        {
          "id": "cuidado-equipos",
          "icon": "server",
          "title": "Cuidado de Equipos",
          "title_en": "Device Care Standards",
          "eyebrow": "Estándares de uso y cuidado",
          "eyebrow_en": "Care and usage standards",
          "headline": "El equipo corporativo<br><em>es tu responsabilidad.</em>",
          "headline_en": "Corporate equipment<br><em>is your responsibility.</em>",
          "body": "Todos los empleados son responsables del cuidado y uso adecuado de los equipos corporativos asignados. Estos estándares aplican sin excepción.",
          "body_en": "All employees are responsible for the proper care and use of company-issued devices. These standards apply without exception.",
          "type": "list",
          "items": [
            { "title": "Sistema operativo siempre actualizado", "title_en": "Keep OS and security software updated", "desc": "Mantener el sistema operativo y el software de seguridad completamente actualizados en todo momento.", "desc_en": "Keep operating systems and security software fully updated at all times." },
            { "title": "Sin daño físico", "title_en": "Avoid physical damage", "desc": "No exponer los equipos a líquidos, temperaturas extremas ni caídas. El daño por descuido puede ser imputable al empleado.", "desc_en": "Do not expose devices to liquids, extreme temperatures, or drops. Damage from negligence may be attributed to the employee." },
            { "title": "Pantalla bloqueada al alejarse", "title_en": "Lock screen when stepping away", "desc": "Bloquear la pantalla cada vez que te alejés del equipo, aunque sea por un momento.", "desc_en": "Lock the screen whenever stepping away from the device, even momentarily." },
            { "title": "Nunca prestar el equipo", "title_en": "Never lend your device", "desc": "Está prohibido prestar el equipo corporativo a terceros, incluyendo familiares.", "desc_en": "It is prohibited to lend the corporate device to third parties, including family members." }
          ]
        },
        {
          "id": "ciclo-vida",
          "icon": "refresh",
          "title": "Ciclo de Vida del Equipo",
          "title_en": "Device Lifecycle",
          "eyebrow": "Provisión, uso y devolución",
          "eyebrow_en": "Provisioning, use, and return",
          "headline": "Cada equipo tiene<br><em>un ciclo definido.</em>",
          "headline_en": "Every device has<br><em>a defined lifecycle.</em>",
          "body": "Todos los equipos corporativos siguen un ciclo de vida estructurado desde la provisión hasta la descomisión. Los equipos se asignan según los requerimientos del rol y se devuelven al finalizar el contrato o al cumplirse el ciclo de renovación de hardware.",
          "body_en": "All corporate devices follow a structured lifecycle from provisioning through decommissioning. Devices are assigned based on role requirements and returned upon contract termination or hardware refresh cycles.",
          "highlight": "La devolución del equipo es obligatoria al finalizar la relación laboral. El no devolverlo a tiempo puede generar responsabilidades económicas.",
          "highlight_en": "Device return is mandatory upon termination of the employment relationship. Failure to return on time may result in financial liability.",
          "type": "standard"
        }
      ]
    },
    {
      "id": "area3",
      "number": "03",
      "icon": "message",
      "title": "Comunicación<br>& Soporte IT",
      "title_en": "Communication<br>& IT Support",
      "short": "Comunicación & IT",
      "short_en": "Communication & IT",
      "description": "Email, Teams, uso correcto de canales y proceso de soporte IT.",
      "description_en": "Email, Teams, correct channel use, and the IT support process.",
      "owner": "Operations / IT",
      "sections": [
        {
          "id": "email",
          "icon": "message",
          "title": "Gestión de Email",
          "title_en": "Email Management",
          "eyebrow": "Canal oficial de comunicación formal",
          "eyebrow_en": "Official formal communication channel",
          "headline": "Email: formal,<br><em>documentado, sin desvíos.</em>",
          "headline_en": "Email: formal,<br><em>documented, no forwarding.</em>",
          "body": "El correo electrónico es el canal oficial para comunicaciones formales de negocio, documentación y aprobaciones. Todo acuerdo importante debe quedar registrado por este canal.",
          "body_en": "Email is the official channel for formal business communications, documentation, and approvals. All important agreements must be recorded through this channel.",
          "highlight": "El reenvío automático de correo corporativo a cuentas personales externas está estrictamente prohibido.",
          "highlight_en": "Auto-forwarding of corporate email to external personal accounts is strictly prohibited.",
          "type": "standard"
        },
        {
          "id": "teams",
          "icon": "users",
          "title": "Microsoft Teams",
          "title_en": "Microsoft Teams",
          "eyebrow": "Plataforma oficial de colaboración",
          "eyebrow_en": "Official collaboration platform",
          "headline": "Teams: colaboración<br><em>del día a día.</em>",
          "headline_en": "Teams: day-to-day<br><em>collaboration.</em>",
          "body": "Microsoft Teams es la plataforma oficial de mensajería instantánea y colaboración para comunicación cotidiana, coordinación de equipos y consultas rápidas. No reemplaza al email para compromisos formales.",
          "body_en": "Microsoft Teams is the official instant messaging and collaboration platform for day-to-day communication, team coordination, and quick queries. It does not replace email for formal commitments.",
          "highlight": "El reenvío automático a cuentas externas también está prohibido en Teams.",
          "highlight_en": "Auto-forwarding to external accounts is also prohibited in Teams.",
          "type": "standard"
        },
        {
          "id": "canales",
          "icon": "layers",
          "title": "Uso de Canales",
          "title_en": "Channel Differentiation",
          "eyebrow": "Cuándo usar cada herramienta",
          "eyebrow_en": "When to use each tool",
          "headline": "El canal correcto<br><em>para cada mensaje.</em>",
          "headline_en": "The right channel<br><em>for every message.</em>",
          "body": "Usar el canal equivocado genera confusión, retrasos y pérdida de trazabilidad. Conocer la diferencia es parte del estándar profesional.",
          "body_en": "Using the wrong channel creates confusion, delays, and loss of traceability. Knowing the difference is part of the professional standard.",
          "type": "grid",
          "items": [
            { "letter": "MS", "title": "Microsoft Teams", "title_en": "Microsoft Teams", "desc": "Comunicación rápida, coordinación de equipos, consultas del día a día. No es el canal para aprobaciones o contratos.", "desc_en": "Quick communication, team coordination, day-to-day queries. Not the channel for approvals or contracts." },
            { "letter": "@", "title": "Correo Electrónico", "title_en": "Email", "desc": "Documentación formal, aprobaciones, contratos, reportes y comunicación externa. Queda registro permanente.", "desc_en": "Formal documentation, approvals, contracts, reports, and external communication. Permanent record is kept." }
          ]
        },
        {
          "id": "tickets",
          "icon": "target",
          "title": "Soporte IT — Tickets",
          "title_en": "IT Support — Tickets",
          "eyebrow": "Sistema oficial de soporte",
          "eyebrow_en": "Official support system",
          "headline": "Todo soporte IT<br><em>por el sistema oficial.</em>",
          "headline_en": "All IT support<br><em>through the official system.</em>",
          "body": "Todas las solicitudes de soporte IT deben ser enviadas a través del sistema oficial de tickets. Los empleados deben proporcionar una descripción clara del problema, los sistemas afectados y el nivel de urgencia.",
          "body_en": "All IT support requests must be submitted through the official ticketing system. Employees should provide a clear description of the issue, affected systems, and urgency level.",
          "highlight": "No uses canales informales para reportar incidentes IT. Solo los tickets garantizan trazabilidad y cumplimiento de SLA.",
          "highlight_en": "Do not use informal channels to report IT incidents. Only tickets guarantee traceability and SLA compliance.",
          "type": "standard"
        },
        {
          "id": "slas",
          "icon": "award",
          "title": "SLAs & Auditorías",
          "title_en": "SLAs & Audit Requirements",
          "eyebrow": "Tiempos de respuesta garantizados",
          "eyebrow_en": "Guaranteed response times",
          "headline": "Tiempos comprometidos<br><em>por prioridad.</em>",
          "headline_en": "Response times committed<br><em>by priority.</em>",
          "body": "Los siguientes SLAs aplican a todas las solicitudes de soporte IT. Todos los incidentes y resoluciones son registrados y sujetos a auditoría periódica para garantizar el cumplimiento.",
          "body_en": "The following SLAs apply to all IT support requests. All incidents and resolutions are logged and subject to periodic audit to ensure compliance.",
          "type": "list",
          "items": [
            { "title": "Incidente Crítico — P1: menos de 30 minutos", "title_en": "Critical Incident — P1: under 30 minutes", "desc": "Atención inmediata para situaciones que afecten operaciones críticas de la empresa o de clientes.", "desc_en": "Immediate attention for situations affecting critical company or client operations." },
            { "title": "Incidente Medio — P2: 4 horas", "title_en": "Medium Incident — P2: 4 hours", "desc": "Respuesta urgente para problemas que impactan la productividad sin detener operaciones por completo.", "desc_en": "Urgent response for issues impacting productivity without completely stopping operations." },
            { "title": "Solicitud Estándar — P3: 24 a 48 horas", "title_en": "Standard Request — P3: 24 to 48 hours", "desc": "Para solicitudes normales de software, hardware, accesos o configuraciones.", "desc_en": "For normal requests for software, hardware, access, or configurations." }
          ]
        }
      ]
    }
  ]
};

// Read the base Onboarding HTML (re-copy fresh)
let html = fs.readFileSync(
  'C:/Users/bruno/OneDrive/Documentos/10Pearls/10Pearls/Marketing & Comm/Onboarding/index.html',
  'utf8'
);

// 1. Title
html = html.replace(
  '<title>Corporate Onboarding — 10Pearls</title>',
  '<title>Corporate Manual — 10Pearls</title>'
);

// 2. Replace JSON content block
const jsonStart = '<script id="content-data" type="application/json">';
const jsonEnd = '\n</script>\n\n<script>';
const startIdx = html.indexOf(jsonStart);
const endIdx = html.indexOf(jsonEnd, startIdx);
if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find JSON block!');
  process.exit(1);
}
html = html.substring(0, startIdx + jsonStart.length) +
  '\n' + JSON.stringify(handbookJson, null, 2) + '\n' +
  html.substring(endIdx);

// 3. Patch renderLanding to use meta fields
html = html.replace(
  "document.getElementById('landing-eyebrow-el').textContent = isEn ? 'Welcome to' : 'Bienvenido a';",
  "document.getElementById('landing-eyebrow-el').textContent = isEn ? (m['landing-eyebrow_en']||m['landing-eyebrow']) : m['landing-eyebrow'];"
);
html = html.replace(
  "if(hlEl) hlEl.innerHTML = isEn ? 'Your onboarding <em>guide.</em>' : 'Tu guía de <em>inducción.</em>';",
  "if(hlEl) hlEl.innerHTML = isEn ? (m['landing-title_en']||m['landing-title']) : m['landing-title'];"
);
html = html.replace(
  "if(startLabel) startLabel.textContent = isEn ? 'Start Presentation' : 'Iniciar Presentación';",
  "if(startLabel) startLabel.textContent = isEn ? 'Start' : 'Iniciar';"
);
html = html.replace(
  "if(startSub)   startSub.textContent   = isEn ? 'All areas in sequence · Full screen mode' : 'Todas las áreas en secuencia · Pantalla completa';",
  "if(startSub)   startSub.textContent   = isEn ? 'All sections in sequence · Full screen' : 'Todas las secciones en secuencia · Pantalla completa';"
);

// 4. Update static HTML text
html = html.replace(
  '<span class="welcome-text" id="landing-eyebrow-el">Welcome to</span>',
  '<span class="welcome-text" id="landing-eyebrow-el">10Pearls LATAM</span>'
);
html = html.replace(
  '<div class="landing-welcome-hl" id="landing-welcome-hl-el">\n          Tu guía de <em>inducción.</em>\n        </div>',
  '<div class="landing-welcome-hl" id="landing-welcome-hl-el">\n          Tu manual de <em>operaciones.</em>\n        </div>'
);

fs.writeFileSync('./index.html', html, 'utf8');
console.log('Done! Size:', Math.round(html.length/1024), 'KB');

// Validate
const jsonBlock = html.substring(
  html.indexOf(jsonStart) + jsonStart.length,
  html.indexOf('</script>', html.indexOf(jsonStart))
);
const data = JSON.parse(jsonBlock);
data.areas.forEach(a => {
  const items = a.sections.reduce((n, s) => n + (s.items ? s.items.length : 0), 0);
  console.log(`  Area ${a.number}: ${a.sections.length} sections, ${items} items`);
});
