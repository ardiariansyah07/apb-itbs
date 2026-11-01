/* Preserve 16:9 slides while allowing long explanations to be read by scrolling. */
(() => {
  const slides = [...document.querySelectorAll('.slide-container')];
  if (!slides.length) return;
  const style = document.createElement('style');
  style.textContent = '.slide-container.content-overflow{overflow-y:auto!important;overflow-x:hidden!important}.slide-container.content-overflow>.flex-grow-center{flex-shrink:0;justify-content:flex-start}.slide-container p,.slide-container li{overflow-wrap:break-word}.slide-container.content-overflow::after{content:"Gulir untuk membaca lanjutan";display:block;flex-shrink:0;font:14px Arial,sans-serif;color:#64748b;padding:10px 0;}';
  document.head.appendChild(style);
  let scheduled = false;
  function update() {
    scheduled = false;
    for (const s of slides) {
      if (!s.classList.contains('active')) continue;
      if (s.scrollHeight > s.clientHeight + 2 && !s.classList.contains('content-overflow')) s.classList.add('content-overflow');
    }
  }
  const observer = new MutationObserver(() => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  });
  for (const s of slides) observer.observe(s, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style', 'open'] });
  window.addEventListener('resize', update);
  document.fonts.ready.then(update);
  update();
})();
