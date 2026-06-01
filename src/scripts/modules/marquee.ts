const phrases: readonly string[] = [
  'Milano Lurida e bellissima',
  'Se non è su Google è Luridone',
  'Milano Lurida non si scusa',
];

function buildUnit(): DocumentFragment {
  const frag = document.createDocumentFragment();
  phrases.forEach((p) => {
    const text = document.createElement('span');
    text.textContent = p;
    frag.appendChild(text);

    const sep = document.createElement('span');
    sep.className = 'sep';
    sep.textContent = '·';
    frag.appendChild(sep);
  });
  return frag;
}

export function initMarquee(): void {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  track.appendChild(buildUnit());
  track.appendChild(buildUnit());
}
