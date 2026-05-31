const phrases: readonly string[] = [
  'Milano Lurida e bellissima',
  'Se non è su Google è Luridone',
  'Milano Lurida non si scusa',
];

export function initMarquee(): void {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  // Build one unit of phrases, duplicate for seamless -50% translateX loop
  const unit = phrases.map((p) => `<span>${p}</span><span class="sep">·</span>`).join('');
  track.innerHTML = unit + unit;
}
