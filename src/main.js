import './style.css'

const icons = {
  bed: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
  bath: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21h6"/><path d="M10 21v-7"/><path d="M14 21v-7"/><path d="M7 14h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"/><path d="M6 14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"/><path d="M4 10h16"/></svg>`,
  ruler: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5-2 2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  leaf: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>`,
  car: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68-.01C7.6 20.37 4 17.89 4 13V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  whatsapp: `<img src="/whatsapp.svg" alt="WhatsApp" width="24" height="24" />`,
  laptop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18h4"/><path d="M4 18h4"/><path d="M16 6H4"/><path d="M16 18a2 2 0 0 1 2 2"/><path d="M4 6a2 2 0 0 1 2-2"/><path d="M16 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M8 20h8"/></svg>',
  television: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M12 12v6"/></svg>',
  bed: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>'
}

const images = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&auto=format&fit=crop&q=80',
  '/fachadaFrontal.jpg',
  '/fachadaTrasera.jpg',
  '/salaComedor.jpg',
  '/fachadaCoche.jpg',
  '/recamara.jpg',
  '/bano.jpg',
]

const agentPhoto = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'

function renderPage() {
  document.querySelector('#app').innerHTML = `
    <nav class="navbar" aria-label="Principal">
      <div class="navbar__logo">Casa Flama 51</div>
      <a href="#contact" class="navbar__cta" role="button">${icons.whatsapp}<span class="navbar__cta-text">Agendar Visita</span><span class="navbar__cta-text navbar__cta-text--short">Visita</span></a>
    </nav>

    <header class="hero" id="hero">
      <div class="hero__image">
        <img src="${images[6]}" alt="Vista exterior de la casa familiar moderna The Grove Estate con jardín paisajístico" loading="eager" />
      </div>
      <div class="hero__overlay"></div>
      <div class="container">
        <div class="hero__content">
          <div class="hero__badge">${icons.check} Precio de oportunidad</div>
          <h1 class="hero__title">Flama 51</h1>
          <p class="hero__address">${icons.mapPin} Condominio Flama , Altozano, Juriquilla, Querétaro</p>
          <div class="hero__price-row">
            <span class="hero__price">$5,900,000</span>
            <span class="hero__price-note">MXN</span>
          </div>
          <div class="hero__actions">
            <a href="#contact" class="btn btn--primary">${icons.phone} Agendar Visita</a>
          </div>
        </div>
      </div>
    </header>

    <section class="stats section" aria-label="Estadísticas de la propiedad">
      <div class="container">
        <div class="stats__grid">
          <div class="stat__item">
            <div class="stat__icon">${icons.bed}</div>
            <div class="stat__value">3</div>
            <div class="stat__label">Recamaras</div>
          </div>
          <div class="stat__item">
            <div class="stat__icon">${icons.bath}</div>
            <div class="stat__value">3.5</div>
            <div class="stat__label">Baños</div>
          </div>
          <div class="stat__item">
            <div class="stat__icon">${icons.ruler}</div>
            <div class="stat__value">215</div>
            <div class="stat__label">Metros Cuadrados</div>
          </div>
          <div class="stat__item">
            <div class="stat__icon">${icons.calendar}</div>
            <div class="stat__value">2026</div>
            <div class="stat__label">Año de Construcción</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="gallery" aria-label="Galería de fotos">
      <div class="container">
        <p class="section__label">Explorar</p>
        <h2 class="section__title">Interior y Exterior</h2>
        <p class="section__subtitle">Cada detalle ha sido diseñado cuidadosamente para la vida familiar moderna.</p>
        <div style="height: 40px;"></div>
        <div class="gallery__grid">
          <div class="gallery__item gallery__item--tall" data-index="1">
            <img src="${images[8]}" alt="Amplia sala de concepto abierto con luz natural" loading="lazy" />
          </div>
          <div class="gallery__item" data-index="2">
            <img src="${images[7]}" alt="Cocina moderna con isla y electrodomésticos premium" loading="lazy" />
          </div>
          <div class="gallery__item" data-index="3">
            <img src="${images[9]}" alt="Dormitorio principal con vestidor y baño privado" loading="lazy" />
          </div>
          <div class="gallery__item gallery__item--wide" data-index="4">
            <img src="${images[10]}" alt="Patio trasero con comedor al aire libre y piscina" loading="lazy" />
          </div>
          <div class="gallery__item" data-index="5">
            <img src="${images[11]}" alt="Oficina en casa con estanterías integradas y vista al jardín" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about" aria-label="Sobre la propiedad">
      <div class="container">
        <div class="about__grid">
          <div class="about__image">
            <img src="${images[8]}" alt="Oasis trasero con patio cubierto y jardín paisajístico" loading="lazy" />
          </div>
          <div>
            <p class="section__label">La Casa</p>
            <h2 class="section__title">Diseñada para Tu Estilo de Vida</h2>
            <div class="about__body">
              <p>Esta residencia de diseño contemporáneo equilibra a la perfección sofisticación y confort familiar. Desde el acceso principal te recibe un plano abierto con un flujo continuo entre sala, comedor y cocina, ideal para el estilo de vida moderno. El diseño incluye un estudio privado perfecto para el home office y un cómodo estacionamiento para dos vehículos.</p>
              <p>El corazón del hogar es una cocina funcional con isla central y alacena independiente. En la zona privada destaca la recámara principal, un santuario con baño completo y vestidor exclusivo; las recámaras secundarias también disfrutan de total independencia con clóset y baño privado, conectadas por una acogedora sala de TV familiar.</p>
              <p>Ubicada en el exclusivo fraccionamiento Altozano Querétaro, la propiedad goza de seguridad 24/7 y amplias áreas verdes. Ofreciendo además acceso a un club deportivo de clase mundial con albercas, gimnasio y canchas de tenis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section features" id="features" aria-label="Características principales">
      <div class="container">
        <p class="section__label">Amenidades</p>
        <h2 class="section__title">Todo Lo Que Necesitas</h2>
        <p class="section__subtitle">Acabados premium y tecnología de hogar inteligente en toda la propiedad.</p>
        <div style="height: 40px;"></div>
        <div class="features__grid">
          <div class="feature__card">
            <div class="feature__icon">${icons.home}</div>
            <h3 class="feature__title">Plano Abierto</h3>
            <p class="feature__desc">Flujo continuo entre áreas de estar, comedor y cocina para la vida familiar moderna.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.car}</div>
            <h3 class="feature__title">Estacionamiento Para Dos Vehículos</h3>
            <p class="feature__desc">Un espacio amplio, seguro y de cómodo acceso diseñado para resguardar tus automóviles con total tranquilidad.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.laptop}</div>
            <h3 class="feature__title">Estudio / Oficina</h3>
            <p class="feature__desc">El entorno ideal para el home office o el estudio privado; un rincón independiente que inspira concentración y productividad.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.sun}</div>
            <h3 class="feature__title">Terraza Exterior</h3>
            <p class="feature__desc">La extensión perfecta de tu área social al aire libre, ideal para disfrutar de momentos de relajación o reuniones inolvidables.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.flame}</div>
            <h3 class="feature__title">Cocina con Isla y Alacena</h3>
            <p class="feature__desc">Un espacio amplio y funcional con una isla central perfecta para convivir y una generosa alacena independiente.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.shield}</div>
            <h3 class="feature__title">Cuarto de Lavado</h3>
            <p class="feature__desc">Un área de servicio discreta y perfectamente organizada, planeada para facilitar las tareas del hogar sin alterar la armonía del diseño.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.television}</div>
            <h3 class="feature__title">Sala de TV</h3>
            <p class="feature__desc">Tu espacio de entretenimiento ideal. Un ambiente íntimo y acogedor pensado para disfrutar de tus series, películas y videojuegos favoritos en familia.</p>
          </div>
          <div class="feature__card">
            <div class="feature__icon">${icons.bed}</div>
            <h3 class="feature__title">Recámara principal</h3>
            <p class="feature__desc">Un auténtico santuario de descanso que combina la privacidad de su baño completo exclusivo con la comodidad de un amplio vestidor.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="footer__logo">Casa Flama 51</div>
        <p class="footer__copy"> Telefono / Whatsapp: 442 123 4567</p>
        <p class="footer__copy"> Horarios de atención: Lunes a Sábado 9:00 AM - 5:00 PM</p>
      </div>
    </footer>

    <div class="lightbox" id="lightbox" role="dialog" aria-label="Vista previa de imagen" aria-hidden="true">
      <button class="lightbox__close" id="lightboxClose" aria-label="Cerrar vista previa de imagen">${icons.x}</button>
      <img id="lightboxImg" src="" alt="" />
    </div>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `
}

function initInteractions() {
  // Lightbox
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightboxImg')
  const lightboxClose = document.getElementById('lightboxClose')

  document.querySelectorAll('.gallery__item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img')
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightbox.classList.add('active')
      lightbox.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    })
  })

  const closeLightbox = () => {
    lightbox.classList.remove('active')
    lightbox.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  lightboxClose.addEventListener('click', closeLightbox)
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox()
  })

  // Form submission
  const tourForm = document.getElementById('tourForm')
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const data = new FormData(tourForm)
      const firstName = data.get('firstName')
      const email = data.get('email')

      if (!firstName || !email) {
        showToast('Por favor completa todos los campos requeridos.')
        return
      }
      showToast(`¡Gracias, ${firstName}! Te contactaremos pronto.`)
      tourForm.reset()
    })
  }

  // Toast helper
  const toast = document.getElementById('toast')
  let toastTimeout
  function showToast(message) {
    toast.textContent = message
    toast.classList.add('show')
    clearTimeout(toastTimeout)
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show')
    }, 3000)
  }

  // Smooth scroll for navbar CTA
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

renderPage()
initInteractions()
