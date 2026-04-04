import './style.css'
import { nav } from './sections/nav.js'
import { hero } from './sections/hero.js'
import { problem } from './sections/problem.js'
import { solution } from './sections/solution.js'
import { how } from './sections/how.js'
import { benefits } from './sections/benefits.js'
import { cta } from './sections/cta.js'
import { footer } from './sections/footer.js'
import { initAnimations } from './animations.js'

document.querySelector('#app').innerHTML = `
  ${nav()}
  <main>
    ${hero()}
    ${problem()}
    ${solution()}
    ${how()}
    ${benefits()}
    ${cta()}
  </main>
  ${footer()}
`

initAnimations()
