/* Lógica del portafolio. No necesitas editar este archivo:
   el contenido vive en js/datos.js y las traducciones en js/traducciones-en.js */
(function () {
  "use strict";

  var D = window.PORTAFOLIO || {};
  var P = D.perfil || {};
  var EN = window.TRADUCCIONES_EN || {};
  var $ = function (id) { return document.getElementById(id); };

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function lista(x) { return Array.isArray(x) ? x : []; }
  function esExterno(u) { return /^https?:\/\//i.test(u); }
  function esImagen(u) { return /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(u); }
  function esPdf(u) { return /\.pdf$/i.test(u); }
  /* Codifica rutas locales con espacios, acentos o símbolos para que funcionen como enlace */
  function ruta(u) {
    u = String(u || "");
    if (/^([a-z]+:|#)/i.test(u)) return u;
    return u.split("/").map(function (seg) { try { return encodeURIComponent(decodeURIComponent(seg)); } catch (e) { return encodeURIComponent(seg); } }).join("/");
  }
  function iniciales(n) {
    return String(n || "").split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (p) { return p[0]; }).join("").toUpperCase();
  }

  /* ---------- Idioma ---------- */
  /* Textos fijos de la interfaz (los del contenido están en traducciones-en.js) */
  var UI_EN = {
    "Saltar al contenido": "Skip to content",
    "Sobre mí": "About", "Trabajos": "Work", "Certificaciones": "Certifications", "Experiencia": "Experience", "Contacto": "Contact",
    "Principal": "Main", "Abrir menú": "Open menu", "Cambiar tema claro/oscuro": "Toggle light/dark theme", "Cerrar": "Close",
    "Especialidades": "Expertise", "Idiomas": "Languages",
    "Trabajos y proyectos": "Work and projects",
    "Una selección de proyectos curriculares, programas y recursos educativos.": "A selection of curriculum projects, programs and educational resources.",
    "Programas internacionales": "International programs",
    "Destinos y aliados académicos de los programas que he coordinado.": "Destinations and academic partners of the programs I have coordinated.",
    "Formación, certificaciones y cursos": "Education, certifications and courses",
    "Buscar": "Search", "Buscar curso o institución…": "Search course or institution…",
    "No hay resultados para esa búsqueda.": "No results for that search.",
    "Publicaciones": "Publications",
    "¿Construimos algo juntos?": "Shall we build something together?",
    "Hablemos de educación, proyectos y nuevas oportunidades.": "Let's talk about education, projects and new opportunities.",
    "Volver arriba ↑": "Back to top ↑",
    "Cada documento se abre en una pestaña nueva.": "Each document opens in a new tab.",
    "Abrir en pestaña nueva": "Open in new tab",
    "Filtrar trabajos": "Filter work", "Filtrar credenciales": "Filter credentials",
    "Todos": "All", "Ver trabajos": "See my work", "Ver evidencias": "View evidence", "Ver certificación": "View certificate",
    "Ver documento": "View document", "Ver proyecto": "View project", "Leer": "Read", "Proyecto": "Project",
    "Imagen": "Image", "Enlace": "Link", "Archivo": "File",
    "Fotografía de": "Photo of", "Portafolio": "Portfolio",
    "Ver en inglés": "View in English", "Ver en español": "View in Spanish"
  };
  var MESES_EN = {
    enero: "January", febrero: "February", marzo: "March", abril: "April", mayo: "May", junio: "June",
    julio: "July", agosto: "August", septiembre: "September", octubre: "October", noviembre: "November", diciembre: "December",
    ene: "Jan", feb: "Feb", mar: "Mar", abr: "Apr", may: "May", jun: "Jun", jul: "Jul", ago: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dic: "Dec"
  };
  var lang = "es";
  try {
    var qs = new URLSearchParams(location.search).get("lang");
    lang = qs === "en" || qs === "es" ? qs : (localStorage.getItem("idioma") || "es");
  } catch (e) {}
  if (lang !== "en") lang = "es";

  /* Traduce un texto: busca en el diccionario; si no está, traduce meses; si no, lo deja igual */
  function t(s) {
    if (lang !== "en" || s == null || s === "") return s;
    var k = String(s);
    if (Object.prototype.hasOwnProperty.call(EN, k)) return EN[k];
    if (Object.prototype.hasOwnProperty.call(UI_EN, k)) return UI_EN[k];
    return k.replace(/\b(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)\b/gi, function (m) {
      var r = MESES_EN[m.toLowerCase()];
      return r ? (m[0] === m[0].toUpperCase() ? r : r.toLowerCase()) : m;
    });
  }

  /* ---------- Iconos ---------- */
  var ICONOS = {
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm7 0h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z" fill="currentColor" stroke="none"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    drive: '<path d="M8 3h8l6 10-4 7H6l-4-7 6-10Z"/><path d="m8 3 6 10H2m14-10-6 10m12 0H10l-4 7"/>',
    behance: '<path d="M3 6h5.5a3 3 0 0 1 0 6H3V6Zm0 6h6a3 3 0 0 1 0 6H3v-6Zm12-5h5M14.5 14h7a3.5 3.5 0 1 0-1 2.5"/>',
    x: '<path d="M4 4l16 16M20 4 4 20"/>',
    correo: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    whatsapp: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2Z" fill="currentColor" stroke="none"/>',
    descargar: '<path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14"/>',
    flecha: '<path d="M7 17 17 7M8 7h9v9"/>',
    ver: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    luna: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    cerrar: '<path d="M6 6l12 12M18 6 6 18"/>',
    carpeta: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>',
    sello: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    libro: '<path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h14"/>',
    birrete: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    globo: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
  };
  function icono(n, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONOS[n] || ICONOS.web) + "</svg>";
  }

  /* ---------- Filtros reutilizables (el valor interno siempre es el texto en español) ---------- */
  function crearFiltros(cont, valores, activo, alCambiar) {
    var unicos = ["Todos"].concat(valores.filter(function (v, i, a) { return v && a.indexOf(v) === i; }));
    if (unicos.length <= 2) { cont.hidden = true; return; }
    cont.innerHTML = unicos.map(function (v) {
      return '<button type="button" class="filtro" aria-pressed="' + (v === activo) + '" data-valor="' + esc(v) + '">' + esc(t(v)) + "</button>";
    }).join("");
    cont.onclick = function (e) {
      var b = e.target.closest(".filtro"); if (!b) return;
      cont.querySelectorAll(".filtro").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      alCambiar(b.dataset.valor);
    };
  }

  function botonDocumento(url, texto, titulo) {
    if (!url) return "";
    var vis = esImagen(url) || esPdf(url);
    var attrs = vis
      ? ' data-visor="' + esc(url) + '" data-titulo="' + esc(titulo) + '"'
      : ' target="_blank" rel="noopener"';
    return '<a class="enlace" href="' + esc(ruta(url)) + '"' + attrs + ">" + esc(t(texto)) + " " + icono(vis ? "ver" : "flecha") + "</a>";
  }

  /* ---------- Estado ---------- */
  var trabajos = lista(D.trabajos);
  var creds = lista(D.credenciales);
  var filtroTrabajos = "Todos";
  var estadoCred = { tipo: "Todos", q: "" };
  function normal(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  /* ---------- Textos fijos del HTML ---------- */
  function traducirFijos() {
    document.querySelectorAll("[data-t]").forEach(function (el) {
      if (el.dataset.es == null) el.dataset.es = el.textContent;
      el.textContent = t(el.dataset.es);
    });
    document.querySelectorAll("[data-t-aria]").forEach(function (el) {
      if (el.dataset.esAria == null) el.dataset.esAria = el.getAttribute("aria-label");
      el.setAttribute("aria-label", t(el.dataset.esAria));
    });
    document.querySelectorAll("[data-t-ph]").forEach(function (el) {
      if (el.dataset.esPh == null) el.dataset.esPh = el.getAttribute("placeholder");
      el.setAttribute("placeholder", t(el.dataset.esPh));
    });
  }

  /* ---------- Perfil / hero ---------- */
  function pintarPerfil() {
    document.title = (P.nombre || t("Portafolio")) + " · " + t("Portafolio");
    $("marca").innerHTML = '<span class="marca__mono">' + esc(iniciales(P.nombre)) + "</span><span class=\"marca__txt\">" + esc(P.nombre) + "</span>";
    $("nombre").textContent = P.nombre || "";
    $("titulo").textContent = t(P.titulo) || "";
    $("resumen").textContent = t(P.resumen) || "";
    $("pieNombre").textContent = "© " + new Date().getFullYear() + " " + (P.nombre || "");

    if (P.disponibilidad) {
      $("disponibilidad").innerHTML = '<span class="punto"></span>' + esc(t(P.disponibilidad)) + (P.ubicacion ? " · " + esc(t(P.ubicacion)) : "");
    } else { $("disponibilidad").hidden = true; }

    $("roles").innerHTML = lista(P.roles).map(function (r) { return "<li>" + esc(t(r)) + "</li>"; }).join("");

    $("retrato").innerHTML = (P.foto
      ? '<img src="' + esc(ruta(P.foto)) + '" alt="' + esc(t("Fotografía de")) + " " + esc(P.nombre) + '">'
      : '<div class="retrato__iniciales" aria-hidden="true">' + esc(iniciales(P.nombre)) + "</div>") +
      "<figcaption>" + lista(P.idiomas).map(function (i) { return esc(t(i.idioma)); }).join(" · ") + "</figcaption>";

    /* En inglés, el CV en inglés aparece primero */
    var cvs = lista(P.cv).filter(function (c) { return c.archivo; });
    if (lang === "en") cvs = cvs.slice().sort(function (a, b) { return /EN/i.test(b.archivo) - /EN/i.test(a.archivo); });
    var botonesCv = cvs.map(function (c, i) {
      return '<a class="btn ' + (i === 0 ? "btn--primario" : "btn--secundario") + '" href="' + esc(ruta(c.archivo)) + '" download>' + icono("descargar") + esc(c.etiqueta) + "</a>";
    }).join("");
    $("accionesHero").innerHTML = botonesCv + '<a class="btn btn--texto" href="#trabajos">' + esc(t("Ver trabajos")) + " " + icono("flecha") + "</a>";

    $("cifras").innerHTML = lista(D.cifras).map(function (c) {
      return '<div class="cifra"><dt>' + esc(t(c.etiqueta)) + "</dt><dd>" + esc(c.valor) + "</dd></div>";
    }).join("");

    $("especialidades").innerHTML = lista(D.especialidades).map(function (e) { return "<li>" + esc(t(e)) + "</li>"; }).join("");
    $("idiomas").innerHTML = lista(P.idiomas).map(function (i) {
      return "<li><span>" + esc(t(i.idioma)) + "</span><span class=\"idiomas__nivel\">" + esc(t(i.nivel)) + "</span></li>";
    }).join("");
  }

  /* ---------- Trabajos ---------- */
  function pintarTrabajos() {
    var items = trabajos.filter(function (x) { return filtroTrabajos === "Todos" || x.categoria === filtroTrabajos; });
    $("listaTrabajos").innerHTML = items.map(function (x) {
      var idx = trabajos.indexOf(x);
      var nEv = lista(x.evidencias).length;
      var acciones = [
        nEv ? '<button type="button" class="btn btn--primario btn--chico" data-evidencias="' + idx + '">' + icono("carpeta") + esc(t("Ver evidencias")) + ' <span class="contador">' + nEv + "</span></button>" : "",
        x.enlace ? botonDocumento(x.enlace, x.textoEnlace || "Ver proyecto", t(x.titulo)) : ""
      ].join("");
      var media = x.imagen
        ? '<img src="' + esc(ruta(x.imagen)) + '" alt="" loading="lazy">'
        : '<div class="tarjeta__placeholder" data-n="' + ((idx % 4) + 1) + '"><span>' + esc(t(x.categoria || "Proyecto")) + "</span></div>";
      return '<article class="tarjeta">' +
        '<div class="tarjeta__media">' + media + (x.autoria ? '<span class="autoria">' + esc(t(x.autoria)) + "</span>" : "") + "</div>" +
        '<div class="tarjeta__cuerpo">' +
          '<p class="tarjeta__meta">' + esc(t(x.categoria)) + (x.anio ? " · " + esc(x.anio) : "") + "</p>" +
          "<h3>" + esc(t(x.titulo)) + "</h3>" +
          (x.organizacion ? '<p class="tarjeta__org">' + esc(t(x.organizacion)) + "</p>" : "") +
          "<p>" + esc(t(x.descripcion)) + "</p>" +
          (lista(x.etiquetas).length ? '<ul class="etiquetas">' + x.etiquetas.map(function (e) { return "<li>" + esc(t(e)) + "</li>"; }).join("") + "</ul>" : "") +
          (acciones ? '<div class="tarjeta__pie">' + acciones + "</div>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ---------- Destinos ---------- */
  function pintarDestinos() {
    if (!lista(D.destinos).length) { $("destinos").hidden = true; return; }
    $("listaDestinos").innerHTML = lista(D.destinos).map(function (d, i) {
      return '<li class="destino revelar visible">' +
        '<span class="destino__n">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<span class="destino__ciudad">' + esc(t(d.ciudad)) + "</span>" +
        '<span class="destino__pais">' + esc(t(d.pais)) + "</span>" +
        '<span class="destino__inst">' + esc(t(d.institucion)) + "</span></li>";
    }).join("");
  }

  /* ---------- Formación ---------- */
  function pintarFormacion() {
    $("listaFormacion").innerHTML = lista(D.formacion).map(function (f) {
      return '<div class="grado">' + icono("birrete", "grado__ico") +
        "<div><h3>" + esc(t(f.titulo)) + "</h3><p>" + esc(t(f.institucion)) + (f.periodo ? ' <span class="grado__periodo">' + esc(t(f.periodo)) + "</span>" : "") + "</p>" +
        botonDocumento(f.archivo, "Ver documento", t(f.titulo)) + "</div></div>";
    }).join("");
  }

  /* ---------- Credenciales ---------- */
  function pintarCred() {
    var q = normal(estadoCred.q);
    var items = creds.filter(function (c) {
      var okTipo = estadoCred.tipo === "Todos" || c.tipo === estadoCred.tipo;
      var texto = [c.titulo, c.emisor, c.tipo, t(c.titulo), t(c.emisor), t(c.tipo)].join(" ");
      return okTipo && (!q || normal(texto).indexOf(q) > -1);
    });
    $("listaCred").innerHTML = items.map(function (c) {
      return '<li class="cred">' +
        '<span class="cred__ico">' + icono("sello") + "</span>" +
        '<div class="cred__txt"><span class="cred__tipo">' + esc(t(c.tipo)) + "</span>" +
        "<h3>" + esc(t(c.titulo)) + "</h3>" +
        "<p>" + esc([t(c.emisor), t(c.fecha)].filter(Boolean).join(" · ")) + "</p></div>" +
        botonDocumento(c.archivo, "Ver certificación", t(c.titulo)) + "</li>";
    }).join("");
    $("credVacio").hidden = items.length > 0;
  }
  $("buscarCred").addEventListener("input", function (e) { estadoCred.q = e.target.value; pintarCred(); });

  /* ---------- Experiencia ---------- */
  function pintarExperiencia() {
    $("listaExperiencia").innerHTML = lista(D.experiencia).map(function (x) {
      return '<li class="hito revelar visible">' +
        '<span class="hito__periodo">' + esc(t(x.periodo)) + "</span>" +
        '<div class="hito__txt"><h3>' + esc(t(x.puesto)) + "</h3>" +
        '<p class="hito__org">' + esc(t(x.organizacion)) + "</p>" +
        (x.descripcion ? "<p>" + esc(t(x.descripcion)) + "</p>" : "") + "</div></li>";
    }).join("");
  }

  /* ---------- Publicaciones ---------- */
  function pintarPublicaciones() {
    var pubs = lista(D.publicaciones);
    if (!pubs.length) { $("publicaciones").hidden = true; return; }
    $("listaPublicaciones").innerHTML = pubs.map(function (p) {
      return '<li class="pub revelar visible">' + icono("libro", "pub__ico") +
        "<div><h3>" + esc(t(p.titulo)) + "</h3><p>" + esc([t(p.rol), t(p.editorial), p.anio].filter(Boolean).join(" · ")) + "</p></div>" +
        (p.enlace ? botonDocumento(p.enlace, "Leer", t(p.titulo)) : "") + "</li>";
    }).join("");
  }

  /* ---------- Contacto y redes ---------- */
  function pintarContacto() {
    var accC = "";
    if (P.email) accC += '<a class="btn btn--primario btn--grande" href="mailto:' + esc(P.email) + '">' + icono("correo") + esc(P.email) + "</a>";
    if (P.whatsapp) accC += '<a class="btn btn--secundario btn--grande" href="https://wa.me/' + esc(String(P.whatsapp).replace(/\D/g, "")) + '" target="_blank" rel="noopener">' + icono("whatsapp") + "WhatsApp</a>";
    $("accionesContacto").innerHTML = accC;
    $("redes").innerHTML = lista(D.enlaces).filter(function (l) { return l.url; }).map(function (l) {
      var ext = esExterno(l.url);
      return '<li><a href="' + esc(l.url) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + icono(l.icono) + esc(t(l.nombre)) + "</a></li>";
    }).join("");
  }

  /* ---------- Botón de idioma ---------- */
  function pintarBotonIdioma() {
    var b = $("idioma");
    b.innerHTML = icono("globo") + "<span>" + (lang === "en" ? "ES" : "EN") + "</span>";
    b.setAttribute("aria-label", lang === "en" ? UI_EN["Ver en español"] : "Ver en inglés");
    b.title = b.getAttribute("aria-label");
  }

  /* ---------- Pintar todo ---------- */
  function render() {
    document.documentElement.lang = lang;
    traducirFijos();
    pintarBotonIdioma();
    pintarPerfil();
    crearFiltros($("filtrosTrabajos"), trabajos.map(function (x) { return x.categoria; }), filtroTrabajos, function (v) { filtroTrabajos = v; pintarTrabajos(); });
    pintarTrabajos();
    pintarDestinos();
    pintarFormacion();
    crearFiltros($("filtrosCred"), creds.map(function (c) { return c.tipo; }), estadoCred.tipo, function (v) { estadoCred.tipo = v; pintarCred(); });
    pintarCred();
    pintarExperiencia();
    pintarPublicaciones();
    pintarContacto();
  }
  render();

  $("idioma").addEventListener("click", function () {
    lang = lang === "en" ? "es" : "en";
    try { localStorage.setItem("idioma", lang); } catch (e) {}
    try {
      var u = new URL(location.href);
      if (lang === "en") u.searchParams.set("lang", "en"); else u.searchParams.delete("lang");
      history.replaceState(null, "", u);
    } catch (e) {}
    render();
  });

  /* ---------- Panel de evidencias por proyecto ---------- */
  var panelEv = $("evidencias");
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-evidencias]");
    if (!b || typeof panelEv.showModal !== "function") return;
    var x = trabajos[+b.dataset.evidencias]; if (!x) return;
    var grupos = [], porGrupo = {};
    lista(x.evidencias).forEach(function (ev) {
      var g = ev.grupo || "";
      if (!porGrupo[g]) { porGrupo[g] = []; grupos.push(g); }
      porGrupo[g].push(ev);
    });
    $("evMeta").textContent = [t(x.organizacion), x.anio, t(x.autoria)].filter(Boolean).join(" · ");
    $("evTitulo").textContent = t(x.titulo);
    $("evLista").innerHTML = grupos.map(function (g) {
      return (g ? '<h4 class="ev__grupo">' + esc(t(g)) + "</h4>" : "") +
        '<ul class="ev__items">' + porGrupo[g].map(function (ev) {
          var ext = esExterno(ev.archivo);
          var tipo = /drive\.google\.com|docs\.google\.com/i.test(ev.archivo) ? "Drive" : esPdf(ev.archivo) ? "PDF" : esImagen(ev.archivo) ? t("Imagen") : ext ? t("Enlace") : t("Archivo");
          return '<li><a class="ev__item" href="' + esc(ruta(ev.archivo)) + '" target="_blank" rel="noopener">' +
            '<span class="ev__tipo">' + esc(tipo) + "</span>" +
            '<span class="ev__txt"><strong>' + esc(t(ev.titulo)) + "</strong>" + (ev.nota ? "<small>" + esc(t(ev.nota)) + "</small>" : "") + "</span>" +
            icono("flecha") + "</a></li>";
        }).join("") + "</ul>";
    }).join("");
    panelEv.showModal();
    $("evLista").scrollTop = 0;
  });
  $("evCerrar").addEventListener("click", function () { panelEv.close(); });
  panelEv.addEventListener("click", function (e) { if (e.target === panelEv) panelEv.close(); });

  /* ---------- Visor de documentos ---------- */
  var visor = $("visor");
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-visor]");
    if (!a || typeof visor.showModal !== "function") return;
    e.preventDefault();
    var url = a.dataset.visor;
    $("visorTitulo").textContent = a.dataset.titulo || "";
    $("visorAbrir").href = ruta(url);
    $("visorCuerpo").innerHTML = esImagen(url)
      ? '<img src="' + esc(ruta(url)) + '" alt="' + esc(a.dataset.titulo) + '">'
      : '<iframe src="' + esc(ruta(url)) + '" title="' + esc(a.dataset.titulo) + '"></iframe>';
    if (panelEv.open) panelEv.close();
    visor.showModal();
  });
  $("visorCerrar").addEventListener("click", function () { visor.close(); });
  visor.addEventListener("click", function (e) { if (e.target === visor) visor.close(); });
  visor.addEventListener("close", function () { $("visorCuerpo").innerHTML = ""; });

  /* ---------- Tema claro / oscuro ---------- */
  var raiz = document.documentElement;
  function temaActual() {
    return raiz.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  function pintarBotonTema() { $("tema").innerHTML = icono(temaActual() === "dark" ? "sol" : "luna"); }
  try { var g = localStorage.getItem("tema"); if (g) raiz.dataset.theme = g; } catch (e) {}
  pintarBotonTema();
  $("tema").addEventListener("click", function () {
    var nuevo = temaActual() === "dark" ? "light" : "dark";
    raiz.dataset.theme = nuevo;
    try { localStorage.setItem("tema", nuevo); } catch (e) {}
    pintarBotonTema();
  });

  /* ---------- Menú móvil ---------- */
  var toggle = $("menuToggle"), menu = $("menu");
  function setMenu(abierto) {
    menu.classList.toggle("abierto", abierto);
    toggle.setAttribute("aria-expanded", abierto);
    toggle.innerHTML = icono(abierto ? "cerrar" : "menu");
  }
  setMenu(false);
  toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("abierto")); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  /* ---------- Barra con sombra + sección activa ---------- */
  var barra = $("barra");
  function alScroll() { barra.classList.toggle("barra--scroll", window.scrollY > 12); }
  window.addEventListener("scroll", alScroll, { passive: true }); alScroll();

  if ("IntersectionObserver" in window) {
    var enlacesMenu = menu.querySelectorAll("a[href^='#']");
    var obsSec = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (!en.isIntersecting) return;
        enlacesMenu.forEach(function (a) { a.classList.toggle("activo", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { obsSec.observe(s); });

    /* Aparición suave al hacer scroll */
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".revelar:not(.visible)").forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll(".revelar").forEach(function (el) { el.classList.add("visible"); });
  }
})();
