(function(){
  var els = document.querySelectorAll('.rv-el');
  if (!window.IntersectionObserver || !els.length) {
    els.forEach(function(el){ el.classList.add('vis'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('vis');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin:'0px 0px -32px 0px' });
  els.forEach(function(el){ io.observe(el); });
})();

/* ─── Nav background on scroll ──────── */
(function(){
  var nav = document.querySelector('nav');
  if(!nav) return;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 20){
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.07)';
    } else {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
    }
  }, { passive: true });
})();

/* ─── Eyebrow line grow on reveal ───── */
(function(){
  var style = document.createElement('style');
  style.textContent = '.rv-el.vis .s-eyebrow::before { animation: lineGrow 0.5s ease 0.1s both; }';
  document.head.appendChild(style);
})();
