function countUp(el: HTMLElement, reduce: boolean): void {
  const target = Number(el.dataset['target']);
  if (!Number.isFinite(target)) return;
  const suffix = el.dataset['suffix'] ?? '';

  if (reduce) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1500;
  let start: number | null = null;

  const step = (timestamp: number): void => {
    if (start === null) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function initCounters(reduce: boolean): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target as HTMLElement, reduce);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll<HTMLElement>('.num[data-target]').forEach((el) => {
    observer.observe(el);
  });
}
