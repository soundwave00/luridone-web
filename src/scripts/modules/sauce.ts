export function initSauce(reduce: boolean): void {
  document.querySelectorAll<SVGElement>('.sauce').forEach((svg) => {
    const path = svg.querySelector<SVGPathElement>('path');
    if (!path) return;

    requestAnimationFrame(() => {
      const len = path.getTotalLength();
      svg.style.setProperty('--len', String(len));

      if (reduce) {
        svg.classList.add('drawn');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              svg.classList.add('drawn');
              observer.unobserve(svg);
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(svg);
    });
  });
}
