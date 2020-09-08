// import { CountUp } from './countUp.js';

gsap.to(".spiral", {duration: 20, rotationZ: 360, transformOrigin:"center", repeat:-1, repeatDelay: 1});
gsap.from(".coins", 1, {
  y: 10,
  yoyo: true, 
  repeat: -1, 
  ease: "power1.inOut",
});

const options = {
  decimalPlaces: 2,
  duration: 10,
  suffix: 'kn',
};

window.onload = function() {
  var countUp = new CountUp('jackpot-numbers', 50000, options);
  countUp.start();
}