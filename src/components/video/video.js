import Plyr from 'plyr';
import './video.scss';

const player = new Plyr('#player', {
  controls: ['play-large']
  });
window.player = player;