/* =====================================================================
   DATOS DEL PORTAFOLIO
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar tu
   portafolio. Cada sección es una lista entre [ ]. Para agregar algo
   nuevo, copia un bloque { ... }, pégalo debajo (separado por una coma)
   y cambia los textos.

   - Si un campo no aplica, déjalo vacío: ""  (el botón no aparecerá).
   - Archivos locales: guárdalos en la carpeta assets/ y escribe la ruta,
     por ejemplo "assets/certificados/mi-diploma.pdf".
   - Enlaces externos: pega la URL completa, por ejemplo
     "https://drive.google.com/..."
   ===================================================================== */

window.PORTAFOLIO = {

  /* ---------- PERFIL ---------- */
  perfil: {
    nombre: "Edgar Anguiano Rangel",
    titulo: "Innovador educativo y coordinador académico internacional",
    roles: ["Diseño instruccional", "Programas internacionales", "Docencia en Ciencias Sociales", "Mentoría juvenil"],
    resumen:
      "Más de 8 años diseñando experiencias de aprendizaje, coordinando programas académicos internacionales y acompañando a jóvenes en contextos multiculturales de Europa, Asia y Latinoamérica. Creo en la educación como herramienta de transformación social, diálogo intercultural y ciudadanía global.",
    ubicacion: "México",
    disponibilidad: "Abierto a nuevas oportunidades",
    email: "anguiano271197@gmail.com",
    whatsapp: "",            // Ejemplo: "523511245073" (sin + ni espacios). Vacío = no se muestra.
    foto: "",                // Ejemplo: "assets/img/foto.jpg". Vacío = se muestran tus iniciales.
    cv: [
      { etiqueta: "CV en español", archivo: "assets/docs/CV_Edgar_Anguiano_ES.pdf" },
      { etiqueta: "CV in English", archivo: "assets/docs/CV_Edgar_Anguiano_EN.pdf" }
    ],
    idiomas: [
      { idioma: "Español", nivel: "Nativo" },
      { idioma: "Inglés", nivel: "C1" },
      { idioma: "Francés", nivel: "C1" }
    ]
  },

  /* ---------- REDES Y ENLACES ----------
     icono disponible: linkedin, github, web, youtube, instagram, drive, behance, x, correo */
  enlaces: [
    { nombre: "LinkedIn", url: "", icono: "linkedin" },   // Pega aquí tu URL de LinkedIn
    { nombre: "Correo", url: "mailto:anguiano271197@gmail.com", icono: "correo" }
  ],

  /* ---------- CIFRAS DESTACADAS ---------- */
  cifras: [
    { valor: "8+", etiqueta: "años en educación" },
    { valor: "7", etiqueta: "destinos internacionales coordinados" },
    { valor: "20", etiqueta: "asignaturas impartidas" },
    { valor: "3", etiqueta: "idiomas" }
  ],

  /* ---------- ÁREAS DE ESPECIALIDAD ---------- */
  especialidades: [
    "Programas académicos internacionales",
    "Innovación educativa",
    "Diseño instruccional",
    "Mentoría y desarrollo juvenil",
    "Docencia interdisciplinaria",
    "Educación para la ciudadanía global",
    "Diseño de proyectos educativos",
    "Gestión de procesos educativos",
    "Tecnología educativa y aprendizaje híbrido"
  ],

  /* ---------- TRABAJOS Y PROYECTOS ----------
     categoria: úsala para los filtros (puedes inventar nuevas).
     autoria: "Autoría propia" o "Trabajo en equipo" (aparece como etiqueta).
     imagen: opcional, por ejemplo "assets/trabajos/edupan.jpg"
     enlace: URL o archivo principal. Vacío = sin botón.
     evidencias: lista de documentos que se ven con el botón "Ver evidencias".
       - grupo: opcional, agrupa los documentos dentro de la ventana.
       - nota: opcional, texto pequeño (por ejemplo, el peso del archivo). */
  trabajos: [
    {
      titulo: "Programas de estudio de Informática – MEDUCA",
      organizacion: "EDUPAN · Ministerio de Educación de Panamá",
      categoria: "Diseño curricular",
      autoria: "Trabajo en equipo",
      anio: "2022–2024",
      descripcion: "Diseño del marco curricular nacional de Tecnología e Informática para educación básica: programas de estudio de Primaria y Premedia 2024.",
      etiquetas: ["Currículo", "Educación básica", "Tecnología"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Programa de estudio de Informática – Primaria 2024", archivo: "https://drive.google.com/file/d/1CQYPc6_df5QIRzitkuBIp1kquXLwTcrZ/view?usp=sharing" },
        { titulo: "Programa de estudio de Informática – Premedia 2024", archivo: "https://drive.google.com/file/d/1B6xgLf2BHYdHdinqsSTuXZqR6s3nwGt0/view?usp=sharing" }
      ]
    },
    {
      titulo: "Proyectos y guías didácticas STEAM",
      organizacion: "EDUPAN · Panamá",
      categoria: "Diseño instruccional",
      autoria: "Trabajo en equipo",
      anio: "2022–2024",
      descripcion: "Cuadernillos de proyectos STEAM para estudiantes y guías pedagógicas para docentes de Ciencias Naturales y Ciencias Sociales, de Primaria a Premedia.",
      etiquetas: ["STEAM", "Aprendizaje por proyectos", "Materiales didácticos"],
      imagen: "",
      enlace: "",
      evidencias: [
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 1° Primaria", archivo: "https://drive.google.com/file/d/18YDmPPLlJzHptmW-V5Bq3OhAagZ1KgRS/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 2° Primaria", archivo: "https://drive.google.com/file/d/1dRoFRepjg7XEinEMZEkbALurNcezq9zL/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 3° Primaria", archivo: "https://drive.google.com/file/d/1umjBrJfq3akNaUYQKo5FVG3OB7MBV5TS/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 7° Premedia", archivo: "https://drive.google.com/file/d/1xNt6qWZ8mcFIh0GEGul80GaeSbrnPpcq/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 8° Premedia", archivo: "https://drive.google.com/file/d/1SKo7PNGTdBC7Nu3E9mBjgV-LVuxn6WST/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 9° Premedia", archivo: "https://drive.google.com/file/d/1dSW4IgVADTeJ1sTefq0_7jt_bDZmPPPC/view?usp=sharing", nota: "Archivo pesado (≈180 MB)" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 1° Primaria", archivo: "https://drive.google.com/file/d/1hQEqcJcI74pNMzG2x3WLwxDycj3zG5ZS/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 2° Primaria", archivo: "https://drive.google.com/file/d/1n6rvpvsW9lf24zEm9CUe3XgKD34jybaq/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 3° Primaria", archivo: "https://drive.google.com/file/d/1sJo2QMXBpVdmmJaYU-mnxz3qQdDJi7_o/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 7° Premedia", archivo: "https://drive.google.com/file/d/1C_Mr0ioL9ZaPiMeLUqBxUQFAeqLvhkSj/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 8° Premedia", archivo: "https://drive.google.com/file/d/1jXhhmi1yRU79h6mJMwg1Tzra4Hm98b6v/view?usp=sharing" },
        { grupo: "Ciencias Naturales · Guías docentes", titulo: "Guía pedagógica – 9° Premedia", archivo: "https://drive.google.com/file/d/1lXDamJqDxlI7V_HqXiNZbV6bTdYuxq76/view?usp=sharing" },
        { grupo: "Ciencias Sociales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 1° Primaria", archivo: "https://drive.google.com/file/d/1ED_g5r0vSw8tz7dNxrlb8cwjvdApY1jR/view?usp=sharing", nota: "Archivo pesado (≈85 MB)" },
        { grupo: "Ciencias Sociales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 2° Primaria", archivo: "https://drive.google.com/file/d/1MkvuzhIsfg35-9vD5pmzafLHZVORxvHZ/view?usp=sharing", nota: "Archivo pesado (≈300 MB)" },
        { grupo: "Ciencias Sociales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 4° Primaria", archivo: "https://drive.google.com/file/d/1Cg8rfQTQfOwVKB-u4P891qeQTuZqGswt/view?usp=sharing", nota: "Archivo pesado (≈360 MB)" },
        { grupo: "Ciencias Sociales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 5° Primaria", archivo: "https://drive.google.com/file/d/1u7mtD3iJhGysWFxaKslPwDaKa2srPdg4/view?usp=sharing", nota: "Archivo pesado (≈500 MB)" },
        { grupo: "Ciencias Sociales · Proyectos para estudiantes", titulo: "Proyecto STEAM – 6° Primaria", archivo: "https://drive.google.com/file/d/1Rlj0xbXDDM-t_Uu-cGmuXc-Xjo9iMsRI/view?usp=sharing", nota: "Archivo pesado (≈380 MB)" },
        { grupo: "Ciencias Sociales · Guías docentes", titulo: "Guía para docentes – 1° Primaria", archivo: "https://drive.google.com/file/d/1VKejil439wntIGQhUFvwdkxzgmYcm7Pu/view?usp=sharing", nota: "≈65 MB" },
        { grupo: "Ciencias Sociales · Guías docentes", titulo: "Guía para docentes – 2° Primaria", archivo: "https://drive.google.com/file/d/1tWTsJzSvL8aUUIiKp2IEQBSEkZFOL2GR/view?usp=sharing", nota: "≈65 MB" },
        { grupo: "Ciencias Sociales · Guías docentes", titulo: "Guía para docentes – 4° Primaria", archivo: "https://drive.google.com/file/d/1K6tergv75g6zWiIfNuSPJ9pZwSQ2tYA9/view?usp=sharing", nota: "≈65 MB" },
        { grupo: "Ciencias Sociales · Guías docentes", titulo: "Guía para docentes – 5° Primaria", archivo: "https://drive.google.com/file/d/1vgnyX1ajGYYIeyrI2h6qfV3fPcoYxdjT/view?usp=sharing", nota: "≈65 MB" },
        { grupo: "Ciencias Sociales · Guías docentes", titulo: "Guía para docentes – 6° Primaria", archivo: "https://drive.google.com/file/d/1N-UFgTb9CLYwWIgNFO7K0eapenmTsXEP/view?usp=sharing", nota: "≈65 MB" }
      ]
    },
    {
      titulo: "Diplomados y cursos de formación docente",
      organizacion: "Grupo SER · UAQ · Universidad Veracruzana",
      categoria: "Formación docente",
      autoria: "Autoría propia",
      anio: "2021",
      descripcion: "Diseño y facilitación de programas para docentes: Diplomado de habilidades docentes para modelos híbridos (Facultad de Ciencias Políticas, UAQ) y curso de Aula invertida y gamificación (Universidad Veracruzana).",
      etiquetas: ["Flipped classroom", "Gamificación", "Modelos híbridos", "Diseño instruccional"],
      imagen: "",
      enlace: "",
      evidencias: [
        { grupo: "Diplomado en habilidades docentes para modelos híbridos · UAQ", titulo: "Propuesta del diplomado (Facultad de Ciencias Políticas)", archivo: "https://drive.google.com/file/d/1UzrQOu3ysQSnpVz4_ikBx_irtNUBtD-j/view?usp=sharing" },
        { grupo: "Aula invertida y gamificación · Universidad Veracruzana", titulo: "Programa de la experiencia educativa", archivo: "https://drive.google.com/file/d/1KgiePKDEasodH2a0JnPlw3-03IkWfpxs/view?usp=sharing", nota: "Coautoría con Bárbara M. Pérez Moo" },
        { grupo: "Aula invertida y gamificación · Universidad Veracruzana", titulo: "Diseño instruccional – Aula invertida", archivo: "https://drive.google.com/file/d/1uxaoN0Vw6MW3Lqv53fWBuOERaLDAoWAh/view?usp=sharing" },
        { grupo: "Aula invertida y gamificación · Universidad Veracruzana", titulo: "Diseño instruccional – Gamificación", archivo: "https://drive.google.com/file/d/1B9hRPpzlpWmpdSEYHQGon9_a-TQYvaji/view?usp=sharing" }
      ]
    },
    {
      titulo: "Certificación en Liderazgo Positivo",
      organizacion: "Mundua · Universitarios en Latinoamérica",
      categoria: "Formación docente",
      autoria: "Autoría propia",
      anio: "2022",
      descripcion: "Diseño e impartición de una certificación de 12 sesiones sobre psicología positiva, inteligencia emocional y liderazgo resiliente en equipos de trabajo.",
      etiquetas: ["Liderazgo", "Psicología positiva", "Educación en línea"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Diseño de la materia y políticas de clase", archivo: "https://drive.google.com/file/d/1WlvAxLEVaEnGMqc_jF1OdQaG66fSsCtI/view?usp=sharing" },
        { titulo: "Cronograma de sesiones", archivo: "https://drive.google.com/file/d/1wDK85rnW-tN7KxBgGOvADlFX2m2lrzjT/view?usp=sharing" }
      ]
    },
    {
      titulo: "Programa de experiencias académicas internacionales",
      organizacion: "Tecnológico de Monterrey · Prepatec",
      categoria: "Programas internacionales",
      autoria: "Autoría propia",
      anio: "2023–2026",
      descripcion: "Coordinación de estancias académicas en Francia, Austria, República Checa y Japón: calendarios, horarios, itinerarios culturales, capacitación a docentes aliados, acompañamiento estudiantil y evaluación del equipo docente a mi cargo.",
      etiquetas: ["Movilidad", "Mentoría", "Liderazgo de equipos", "Logística académica"],
      imagen: "",
      enlace: "",
      evidencias: [
        { grupo: "Lyon, Francia", titulo: "Réunion de lancement: contextualización cultural y pedagógica para docentes del ILCF (AD25)", archivo: "https://drive.google.com/file/d/13dQC7dgoUtVBxvQeF4vVYkcp28hegoe1/view?usp=sharing" },
        { grupo: "Lyon, Francia", titulo: "Calendario académico del semestre AD25", archivo: "https://drive.google.com/file/d/143EZ_lcRjUCe7m9qXEphwV9ikKH5BZDG/view?usp=sharing" },
        { grupo: "Lyon, Francia", titulo: "Itinerario – Viaje a París (EM26)", archivo: "https://drive.google.com/file/d/1fgsYukM6zPiPQRra2D778gEorY8SF7B2/view?usp=sharing" },
        { grupo: "Lyon, Francia", titulo: "Itinerario – Viaje de extensión Francia, Italia y Suiza (EM26)", archivo: "https://drive.google.com/file/d/1H6hrDoPp0PxMCYnGaspsENBWtJSTrg7g/view?usp=sharing" },
        { grupo: "Lyon, Francia", titulo: "Running Club: proyecto de bienestar para la comunidad internacional (AD25)", archivo: "https://drive.google.com/file/d/1i2ISuSIQMbxhP_BJ0DM3TVfkcf7ZPChd/view?usp=sharing" },
        { grupo: "Viena y Praga", titulo: "Horario del grupo Viena – Semestre de primavera 2025", archivo: "https://drive.google.com/file/d/12W2B7Txjtbr7VyqCetJY-guAcq6bcfK3/view?usp=sharing" },
        { grupo: "Viena y Praga", titulo: "Itinerario – Praga, primavera 2025", archivo: "https://drive.google.com/file/d/1EV91YEfM-D1L860mOUGAjTuwad4ZrzB3/view?usp=sharing" },
        { grupo: "Fukuoka, Japón", titulo: "Programa de viajes de fin de semana – Genki TEC 2025", archivo: "https://drive.google.com/file/d/1iciRt3xkNn5ZbKrsYlThlUV-YsbB4cOY/view?usp=sharing" },
        { grupo: "Fukuoka, Japón", titulo: "Lista de actividades culturales (mayo–junio 2025)", archivo: "https://drive.google.com/file/d/16-Ci4eZwd0dWRw6h9CNpZmysqCUtXdBl/view?usp=sharing" },
        { grupo: "Fukuoka, Japón", titulo: "Logística – Visita a Osaka (14 de junio)", archivo: "https://drive.google.com/file/d/1WEA7GfDl35jQ09CHVQvSagpvU8LcBLca/view?usp=sharing" },
        { grupo: "Acompañamiento y evaluación del equipo docente", titulo: "Retroalimentación final a la profesora Lili – Programa Lyon EM23", archivo: "https://drive.google.com/file/d/1xZmOBtZuq2mIydAJVAKPe7EsSv1S1WWk/view?usp=sharing" },
        { grupo: "Evaluación del equipo docente a mi cargo (ene–abr 2026)", titulo: "Evaluación del docente de México en la Agenda Global", archivo: "https://drive.google.com/file/d/17dI6CWq8KE2Hc1rUySB1xcj8-CadH7Oh/view?usp=sharing" },
        { grupo: "Evaluación del equipo docente a mi cargo (ene–abr 2026)", titulo: "Evaluación del docente de Matter & Sustainability", archivo: "https://drive.google.com/file/d/19Fd6n7FVm5tcqSm02uvFOhC0yhRoSAy0/view?usp=sharing" },
        { grupo: "Evaluación del equipo docente a mi cargo (ene–abr 2026)", titulo: "Evaluación del docente de Trigonometry", archivo: "https://drive.google.com/file/d/1BszoRWBT0JRcBP5Hf5cGUrZy0iHnW-Wo/view?usp=sharing" },
        { grupo: "Evaluación del equipo docente a mi cargo (ene–abr 2026)", titulo: "Evaluación del docente de Artistic and Literary Interpretation", archivo: "https://drive.google.com/file/d/1_wkj2V9pjHtd5oAtZ0XJEFiAk6XyC0Nx/view?usp=sharing" }
      ]
    },
    {
      titulo: "Antología «Yo después de Francia»",
      organizacion: "Prepatec · Programa Internacional Montpellier",
      categoria: "Programas internacionales",
      autoria: "Trabajo en equipo",
      anio: "2024",
      descripcion: "Libro de disertaciones en el que estudiantes de distintos estados de México reflexionan sobre sus aprendizajes durante el semestre en Montpellier, Francia.",
      etiquetas: ["Escritura reflexiva", "Publicación estudiantil"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Yo después de Francia (libro completo)", archivo: "https://drive.google.com/file/d/1kKsspYtDF42jFmTWHw2dVDa-lht4_V7O/view?usp=sharing", nota: "≈32 MB" }
      ]
    },
    {
      titulo: "¡Mi palabra transforma! Sociedades y Asambleas de Alumnos",
      organizacion: "Pastoral Juvenil Marista · Provincia México Central",
      categoria: "Juventud y derechos",
      autoria: "Trabajo en equipo",
      anio: "2021",
      descripcion: "Ruta de reactivación, acompañamiento y seguimiento de las Sociedades y Asambleas de Alumnos en los colegios de la provincia, en seis momentos: conformación, planeación, formación, seguimiento, incidencia y evaluación.",
      etiquetas: ["Participación estudiantil", "Liderazgo juvenil", "Acompañamiento"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "¡Mi palabra transforma! – Ruta de reactivación y acompañamiento", archivo: "https://drive.google.com/file/d/17-xoWMpFLsFpOYbnVSj3TZ7f1jPIc5u3/view?usp=sharing", nota: "≈16 MB" }
      ]
    },
    {
      titulo: "Fichas de formación en los ODS",
      organizacion: "Instituto Marista · Agenda 2030",
      categoria: "Educación para la ciudadanía global",
      autoria: "Trabajo en equipo",
      anio: "2022–2023",
      descripcion: "Serie de ocho fichas formativas sobre los Objetivos de Desarrollo Sostenible con la metodología Ver – Pensar – Actuar, notas de enseñanza y mensajes clave.",
      etiquetas: ["ODS", "Agenda 2030", "Ciudadanía global"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Ficha 1 · Introducción a los ODS", archivo: "https://drive.google.com/file/d/1df_2-no6gdhIcQo1I3YBLoi6-jRbgqRR/view?usp=sharing" },
        { titulo: "Ficha 2 · Hambre, pobreza y desigualdad", archivo: "https://drive.google.com/file/d/1YnMHZGqiVo7Uv1yhe1NiagiviyjXi1Pp/view?usp=sharing" },
        { titulo: "Ficha 3", archivo: "https://drive.google.com/file/d/1lNKRVJQvGm6HK2gQK63-FvYSTCNg7rd4/view?usp=sharing" },
        { titulo: "Ficha 4", archivo: "https://drive.google.com/file/d/1scw3jUmTfTngvBoM2xR8ZGrltYqT3pOK/view?usp=sharing" },
        { titulo: "Ficha 5", archivo: "https://drive.google.com/file/d/1CpX44ZGzITtC3hqCZqTAfOllbyeXvd3f/view?usp=sharing" },
        { titulo: "Ficha 6", archivo: "https://drive.google.com/file/d/1GqxYWub95pUO864RwEgdgqeIK722v6ar/view?usp=sharing" },
        { titulo: "Ficha 7", archivo: "https://drive.google.com/file/d/1YUBzkaxR0kuDTYdKybcM3QlcyVDICFTc/view?usp=sharing" },
        { titulo: "Ficha 8", archivo: "https://drive.google.com/file/d/1dwlQtXHjA9Z8Euk84kWGKHPCd_kQj7G_/view?usp=sharing" }
      ]
    },
    {
      titulo: "Guía sobre el derecho a la participación infantil y juvenil",
      organizacion: "Instituto Marista · Secretariado de Educación y Evangelización",
      categoria: "Juventud y derechos",
      autoria: "Trabajo en equipo",
      anio: "2021",
      descripcion: "Guía internacional para promover la participación de niñas, niños y jóvenes en la comunidad marista desde el enfoque de derechos humanos.",
      etiquetas: ["Derechos de la infancia", "Participación juvenil"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Guía de participación v4.0", archivo: "https://drive.google.com/file/d/1tUI7ULIQh_yhv70ow6uCIoCaSwHaLXxS/view?usp=sharing" }
      ]
    },
    {
      titulo: "Plan Estratégico de Pastoral Juvenil Marista 2021–2026",
      organizacion: "Pastoral Juvenil Marista · Provincia México Central",
      categoria: "Juventud y derechos",
      autoria: "Trabajo en equipo",
      anio: "2021",
      descripcion: "Plan estratégico y operativo provincial elaborado por la Comisión de Pastoral Juvenil, donde participé como acompañante del eje Nuevos Escenarios.",
      etiquetas: ["Planeación estratégica", "Gestión educativa", "Liderazgo juvenil"],
      imagen: "",
      enlace: "",
      evidencias: [
        { titulo: "Plan Estratégico 2021–2026", archivo: "https://drive.google.com/file/d/1gYP9CCX7inolJkbubWakpXywDIio29yd/view?usp=sharing", nota: "≈50 MB" }
      ]
    }
  ],

  /* ---------- CERTIFICACIONES, CURSOS Y DIPLOMAS ----------
     tipo: se usa para los filtros (Diplomado, Diploma, Certificación, Curso, Webinar, Constancia…).
     archivo: ruta a tu PDF o imagen, o URL de verificación. Vacío = sin botón "Ver certificación".
     Ordenados del más reciente al más antiguo. */
  credenciales: [
    { titulo: "Claude 101", emisor: "Anthropic", fecha: "", tipo: "Certificación", archivo: "Evidencias/0. Diplomas digitales/24. certificate-44jom4rhnuv4-1780728662.pdf" },
    { titulo: "Reglamentación para experiencias en el extranjero (Módulo 1)", emisor: "Tecnológico de Monterrey", fecha: "Mayo 2025", tipo: "Constancia", archivo: "Evidencias/Programas Internacionales/Certificado PI Módulo 1.pdf" },
    { titulo: "Rol del coordinador en el extranjero (Módulo 2)", emisor: "Tecnológico de Monterrey", fecha: "Mayo 2025", tipo: "Constancia", archivo: "Evidencias/Programas Internacionales/Certificado PI Módulo 2.pdf" },
    { titulo: "Mi realidad en el contexto internacional (Módulo 3)", emisor: "Tecnológico de Monterrey", fecha: "Mayo 2025", tipo: "Constancia", archivo: "Evidencias/Programas Internacionales/Certificado PI Módulo 3.pdf" },
    { titulo: "Inteligencia Artificial y productividad", emisor: "Google", fecha: "Febrero 2025", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/23. Google Inteligencia Artificial.pdf" },
    { titulo: "Introducción a las Tecnologías Emergentes", emisor: "Emtech Institute & Santander Open Academy", fecha: "Mayo 2024", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/21. Introducción a las Tecnologías Emergentes.pdf" },
    { titulo: "Reafirmando mi compromiso con la integridad", emisor: "Tecnológico de Monterrey", fecha: "Abril 2024", tipo: "Constancia", archivo: "Evidencias/0. Diplomas digitales/22. TEC Reafirmando mi compromiso con la Integridad 2024.pdf" },
    { titulo: "Trabajo comunitario y defensa del territorio", emisor: "Grupo Xcaret", fecha: "2024", tipo: "Curso", archivo: "" },
    { titulo: "Cours de français – Semester in France + Cultural immersion", emisor: "Alpadia Language Schools · Lyon", fecha: "Febrero–mayo 2023", tipo: "Certificación", archivo: "Evidencias/0. Diplomas digitales/20. Certificado Francés.pdf" },
    { titulo: "COIL – Collaborative Online International Learning", emisor: "Insignia digital (Badgr)", fecha: "", tipo: "Certificación", archivo: "https://api.badgr.io/public/assertions/84jUyzmnRHSMhPgSMGnMkg" },
    { titulo: "Conversatorio «Pacto Educativo Global» (reconocimiento como ponente)", emisor: "Universidad Marista de San Luis Potosí", fecha: "Octubre 2021", tipo: "Constancia", archivo: "Evidencias/0. Diplomas digitales/19. Conversatorio - Pacto Educativo Global.pdf" },
    { titulo: "Misión Marista en la Educación Superior (como instructor, 2021)", emisor: "Universidad Marista de Querétaro", fecha: "Ago–sep 2021", tipo: "Constancia", archivo: "Evidencias/0. Diplomas digitales/18. CONSTANCIA_Edgar Fernando Anguiano Rangel.pdf" },
    { titulo: "Flipped Classroom – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Diciembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/13. Flipped Classroom.pdf" },
    { titulo: "Gamificación en entorno virtual – Nivel avanzado (2.º certificado)", emisor: "Campus Maecenas Singularity School", fecha: "Diciembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/15. Gamificación en entornos virtuales 2.pdf" },
    { titulo: "Gamificación en entorno virtual – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Noviembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/14. Gamificación en entorno virtual.pdf" },
    { titulo: "Aprendizaje basado en retos y problemas en entorno virtual – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Noviembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/8. Aprendizaje basado en retos y problemas.pdf" },
    { titulo: "Coeducación en entornos virtuales – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Septiembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/10. Coeducación.pdf" },
    { titulo: "Aprendizaje basado en proyectos en entorno virtual – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Septiembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/7. Aprendizaje Basado en Proyectos.pdf" },
    { titulo: "Aprendizaje cooperativo en entorno virtual – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Septiembre 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/9. Aprendizaje cooperativo.pdf" },
    { titulo: "Estrategias y herramientas de evaluación online – Nivel avanzado", emisor: "Campus Maecenas Singularity School", fecha: "Agosto 2020", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/12. Estrategias y Herramientas de Evaluación.pdf" },
    { titulo: "Aprendizaje cooperativo 2: organizar el contexto y diseñar tareas cooperativas", emisor: "Progrentis Fórum", fecha: "Junio 2020", tipo: "Webinar", archivo: "Evidencias/0. Diplomas digitales/17. Diploma Webinar - 5055.pdf" },
    { titulo: "Competencias y destrezas digitales", emisor: "Progrentis Fórum", fecha: "Mayo 2020", tipo: "Webinar", archivo: "Evidencias/0. Diplomas digitales/16. Diploma Webinar - 1500.pdf" },
    { titulo: "Diplomado en Innovación Educativa (96 h)", emisor: "Tecnológico de Monterrey", fecha: "Marzo 2020", tipo: "Diplomado", archivo: "Evidencias/0. Diplomas digitales/6. Diplomado en Innovación Educativa.pdf" },
    { titulo: "Misión Marista en la Educación Superior (como instructor, 2019)", emisor: "Universidad Marista de Querétaro", fecha: "Noviembre 2019", tipo: "Constancia", archivo: "Evidencias/0. Diplomas digitales/5. Misión Marista en la ES.pdf" },
    { titulo: "Neuroventas: la venta inteligente", emisor: "COPARMEX Querétaro", fecha: "Agosto 2018", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/2. Neuroventas.pdf" },
    { titulo: "Project Based Learning (taller de 15 h)", emisor: "PBL", fecha: "Agosto 2018", tipo: "Certificación", archivo: "Evidencias/0. Diplomas digitales/3. Project Based Learning.pdf" },
    { titulo: "Taller de Microenseñanza (40 h)", emisor: "Universidad Marista de Querétaro", fecha: "Julio 2018", tipo: "Diploma", archivo: "Evidencias/0. Diplomas digitales/4. Microenseñanza.pdf" },
    { titulo: "Aula invertida (30 h)", emisor: "Universidad Marista de Querétaro", fecha: "Mayo 2018", tipo: "Curso", archivo: "Evidencias/0. Diplomas digitales/1. Aula invertida.pdf" },
    { titulo: "Educación para la paz y los derechos humanos", emisor: "", fecha: "", tipo: "Curso", archivo: "" },
    { titulo: "Pastoral juvenil y liderazgo educativo", emisor: "", fecha: "", tipo: "Curso", archivo: "" }
  ],

  /* ---------- FORMACIÓN ACADÉMICA ---------- */
  formacion: [
    { titulo: "Maestría en Emprendimiento Educativo", institucion: "Tecnológico de Monterrey", periodo: "En curso", archivo: "" },
    { titulo: "Licenciatura en Educación Media Superior – Ciencias Sociales", institucion: "Universidad Marista de Querétaro", periodo: "Cédula profesional", archivo: "" }
  ],

  /* ---------- EXPERIENCIA ---------- */
  experiencia: [
    {
      puesto: "Coordinador de Programas Académicos Internacionales",
      organizacion: "Tecnológico de Monterrey – Prepatec",
      periodo: "2023 – 2026",
      descripcion: "Gestión de programas internacionales y estancias en el extranjero, mentoría y bienestar estudiantil, y colaboración con instituciones y docentes aliados."
    },
    {
      puesto: "Profesor de Preparatoria – Ciencias Sociales, Humanidades y Liderazgo",
      organizacion: "Tecnológico de Monterrey – Prepatec",
      periodo: "2022 – 2026",
      descripcion: "Aprendizaje basado en proyectos, pensamiento interdisciplinario y currículo IB en materias como México en la agenda global, Pensamiento sistémico y Proyecto ciudadano aplicado."
    },
    {
      puesto: "Diseño y consultoría educativa",
      organizacion: "EDUPAN – Panamá",
      periodo: "2022 – 2024",
      descripcion: "Diseñador curricular del marco nacional de Tecnología e Informática y diseñador de proyectos educativos STEAM."
    },
    {
      puesto: "Profesor universitario – Educación y Pedagogía",
      organizacion: "Universidad Marista de Querétaro",
      periodo: "2020 – 2022",
      descripcion: "Formación de futuros docentes en diseño instruccional, práctica docente, didáctica de la geografía y formación cívica y ética."
    },
    {
      puesto: "Coordinador de Procesos Educativos",
      organizacion: "Pastoral Juvenil Marista – Provincia México Central",
      periodo: "2021 – 2022",
      descripcion: "Liderazgo de equipos y desarrollo de programas de formación para educadores y líderes juveniles, de preescolar a universidad."
    },
    {
      puesto: "Diseñador y facilitador de diplomados",
      organizacion: "Grupo SER",
      periodo: "2021",
      descripcion: "Diplomados en Ciencia Política, Aula Invertida y Gamificación en la educación."
    },
    {
      puesto: "Profesor de Preparatoria – Ciencias Sociales",
      organizacion: "Colegio Marcelina de Querétaro",
      periodo: "2018 – 2021",
      descripcion: "Metodología de la investigación, Historia de México y Universal, Geografía y Estructura socioeconómica de México."
    },
    {
      puesto: "Coordinador de Promoción y Vinculación",
      organizacion: "Universidad Marista de Querétaro",
      periodo: "2016 – 2021",
      descripcion: "Comunicación, vinculación y promoción institucional; coordinación del área durante dos años."
    }
  ],

  /* ---------- DESTINOS INTERNACIONALES ---------- */
  destinos: [
    { ciudad: "Lyon", pais: "Francia", institucion: "Université Catholique de Lyon & Alpadia" },
    { ciudad: "Cambridge", pais: "Reino Unido", institucion: "St. Andrew's College" },
    { ciudad: "Viena", pais: "Austria", institucion: "The College of Central Europe" },
    { ciudad: "Zúrich", pais: "Suiza", institucion: "Italk Sprachschule" },
    { ciudad: "Berlín", pais: "Alemania", institucion: "Humboldt-Institut" },
    { ciudad: "Montpellier", pais: "Francia", institucion: "LCF KLF Group" },
    { ciudad: "Fukuoka", pais: "Japón", institucion: "Genki Japanese & Culture School" }
  ],

  /* ---------- PUBLICACIONES ---------- */
  publicaciones: [
    {
      titulo: "Método CACE: Autoetnografía para líderes educativos",
      rol: "Autor colaborador",
      editorial: "Editorial Nómada",
      anio: "2023",
      enlace: ""
    }
  ]
};
