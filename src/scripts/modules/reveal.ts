export function initReveal(reduce: boolean): void {
  // Stagger cards before observing so delay is set even in reduce mode
  document.querySelectorAll<HTMLElement>('.grid2 .card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll<HTMLElement>('.reveal, .from-left, .from-right').forEach((el) => {
    if (reduce) {
      el.classList.add('in');
    } else {
      observer.observe(el);
    }
  });
}
