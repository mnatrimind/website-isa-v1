export function nav() {
  return `
    <header class="nav" id="nav">
      <div class="container nav-inner">
        <a class="brand" href="#top" aria-label="ISA Concilia">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAIAAABKoV4MAAAFGklEQVR42u2Ya2wUVRTHz33M7KvLPvpg6VZMKwWxYsEEyztViRpKI5rg4wOJoh/wizExRCQxpgmkH0xUxGhEIioEX6gYFRQwDYFWU9G0WHmUPgO73ba72+7O7Gtm7j1+oBgUpIttJCY9nyYzN/d37j/nf87kEikl3LigcENjCj+F/z/iEQAnhuf/AikREQgjQMnYK4EgASgAJYAoAYAQlk9uJM+2gwCIAABsjAkAmBPSRHAyQsmYipYUnDIAkChIHtLme3pKCBAAgOGs2RTRDw+lz+UkUZmdUUtiwMbmu5VVxepct6s1sq99aO+K4NNzClcJaVHCJoRHAAoQSuUupMwBLfvq75FjMaG6bXOLXDIHZU54ZY6vNWEciumfDMByT9id2hlKtddVNADAWMoTLD0EaLqgHT0/0tjS5wfLp8DNNjY0mplvx0QqV+1WOAi/UlQ77VxL//qlM9a8fFeT314OAITQiYpPABDQq7KqoDudMvZ2xs2cPBfWvNNdH66Zve10JGZYabPg3bY964JfPDtro1OpKytgUiIiTo7xEGF1uc9FOZPQM2IoWaNxWfB+vzqaNdACibbjPbtWepsfKt3acLKqNR5BlCI/S+aFJ4QIRK9TAdO6p8gGWbFpSXlNoepWVcXM3PfR1mIltbpk8wsnmKnmlpR4CKF0EtsOAUCJJQW2VNZcPN1Ryg09Z/kUx67WX3e3ffbIrGolU/9cy2DGQYOc3+FzICIlJK+d8/S9RGSUngwn1r/3y/ql/rZYf3ckpqi5h6tqPu4QTVHdX+rVTPlGTWBDddAUktNJxQOAkMgZbdjfsedI7zOrSwzUjHTRthNDcU78fmfcxJWljoOPLyCE5Ie+TjwCSImc0Sff+emDI+dvv2namVTW7ncwlY1mxYKg89sn7gy4nRJlnsrni5cIEoARAAQLUWGk8atTW/afzSAFTphKHls4Y9vaef4CuyGkkj88Tzwhl2bLWCECAIzEkm/90BNKGmuXzLz7tsBfjYqTg5cADKB91Pg5aq6ZaXdzeiCc7UxalsQCh+JTSWUBXey3CYk5KT8P5bIW1JYolQVc5GeqcbqelMAY+bIv3dA0Ur0u8PbZzK7OXF2FnRMEsIY164EydaFX4ZRuP6VvOpYASmrK+I91AZAABCY+8RCATMvmeHSYmUWnumLQN1I/O+DgTAJ6fMryCjundEDPbTnQv2GBv27OtPr3uz+tUB+dW2gJycbzQF4Dl6XSGB4kRuXu+rKdx+F4bxIRJNDmzrhDGB1ba18/3Kd39N9SZYMhUjwSa9yXenDzYhuliHDtOuTjt3sAHE6I9h4wauL96cq0VlvqQgmEkJGWoTMh/fvm3h1vNi+71dfc0tckcIULvj7422ul/MWnFgkp2TX5/B+gePlzud9WP6/Qo9Jv2i58d7RH4UQICYhep23H84u6eqL3lru2v1Q7I+ADAJBio3Ko9/SAnso6HaqU8pJx/nTQNSufXIdvr/M/8QpD8r99ppRqmtbd3U0IoZQmk0mPx8PYxfktPV5vKBQuKS5OJBKcc0KolKKwqDA6HEXEsrJgLBYTQtjsDssy7TbVMExd1znnqqq6XK5gMDj+xCOEIKJlWfF43Ol0RiKR3t7eTCaNiKqiCMsMh0NCWMlkwjRzQliJ0dHCQr+mJYUQAKBpWkrXdE0bHBzSdR0ApJTRaLSrq+vizjdG/Ku2Qn7VdZcvvTzlK9PPP656KjJ1vTCFn8JP4f/b+ANw5JsAgC62iQAAAABJRU5ErkJggg==" alt="ISA" width="36" height="36" class="brand-logo">
          <span class="brand-text">
            <strong>ISA Concilia</strong>
            <small>Conciliação contábil com IA</small>
          </span>
        </a>
        <nav class="nav-links" role="navigation">
          <a href="#solucao">Solução</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
        </nav>
        <div class="nav-actions">
          <a href="#cta" class="btn btn-outline btn-sm">Falar com especialista</a>
          <a href="#cta" class="btn btn-primary btn-sm">Agendar demo</a>
        </div>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-overlay" aria-hidden="true"></div>
    <aside class="mobile-nav" aria-hidden="true">
      <nav>
        <a href="#solucao">Solução</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#cta" class="btn btn-primary" style="margin-top:16px;width:100%;text-align:center;">Agendar demo</a>
      </nav>
    </aside>
  `
}
