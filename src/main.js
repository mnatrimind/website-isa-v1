import './style.css';
import nav from './sections/nav.js';
import hero from './sections/hero.js';
import proof from './sections/proof.js';
import problem from './sections/problem.js';
import showcase from './sections/showcase.js';
import { initAnimations } from './animations.js';

// Placeholder sections (to be built)
function solution() { return ''; }
function howItWorks() { return ''; }
function benefits() { return ''; }
function testimonials() { return ''; }
function cta() { return ''; }
function footer() { return ''; }

const app = document.getElementById('app');
app.innerHTML = [
  nav(),
  hero(),
  proof(),
  problem(),
  showcase(),
  solution(),
  howItWorks(),
  benefits(),
  testimonials(),
  cta(),
  footer(),
].join('');

initAnimations();
