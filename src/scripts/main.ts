import { initHeroVideo } from './modules/heroVideo.ts';
import { initMarquee } from './modules/marquee.ts';
import { initReveal } from './modules/reveal.ts';
import { initSauce } from './modules/sauce.ts';
import { initCounters } from './modules/counter.ts';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

initHeroVideo();
initMarquee();
initReveal(reduce);
initSauce(reduce);
initCounters(reduce);
