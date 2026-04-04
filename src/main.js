import './style.css';
import nav from './sections/nav.js';
import hero from './sections/hero.js';
import proof from './sections/proof.js';
import problem from './sections/problem.js';
import showcase from './sections/showcase.js';
import trust from './sections/trust.js';
import cta from './sections/cta.js';
import footer from './sections/footer.js';
import { initAnimations } from './animations.js';

const app = document.getElementById('app');
app.innerHTML = [
  nav(),
  hero(),
  proof(),
  problem(),
  showcase(),
  trust(),
  cta(),
  footer(),
].join('');

initAnimations();
