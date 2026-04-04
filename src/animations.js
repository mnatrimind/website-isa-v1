export function initAnimations() {
  // Nav scroll effect
  const nav = document.getElementById('nav')
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20)
    }, { passive: true })
  }

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle')
  const mobileNav = document.querySelector('.mobile-nav')
  const overlay = document.querySelector('.mobile-overlay')

  if (toggle && mobileNav && overlay) {
    const open = () => {
      mobileNav.classList.add('active')
      overlay.classList.add('active')
      toggle.setAttribute('aria-expanded', 'true')
    }
    const close = () => {
      mobileNav.classList.remove('active')
      overlay.classList.remove('active')
      toggle.setAttribute('aria-expanded', 'false')
    }
    toggle.addEventListener('click', () => {
      mobileNav.classList.contains('active') ? close() : open()
    })
    overlay.addEventListener('click', close)
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close))
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}
