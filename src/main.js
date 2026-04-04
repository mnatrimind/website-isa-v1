import './style.css';
import nav from './sections/nav.js';
import hero from './sections/hero.js';
import { initAnimations } from './animations.js';

// Placeholder sections (to be built)
function problem() { return ''; }
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
  problem(),
  solution(),
  howItWorks(),
  benefits(),
  testimonials(),
  cta(),
  footer(),
].join('');

initAnimations();
