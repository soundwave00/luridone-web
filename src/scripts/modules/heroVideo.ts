export function initHeroVideo(reduce: boolean): void {
  const video = document.querySelector<HTMLVideoElement>('.hero video');
  if (!video) return;

  if (reduce) {
    video.pause();
    return;
  }

  const tryPlay = (): void => {
    video.play()?.catch(() => {});
  };

  tryPlay();

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlay();
  });

  window.addEventListener('pointerdown', tryPlay, { once: true });
}
