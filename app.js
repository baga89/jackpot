gsap.to(".spiral", {duration: 20, rotationZ: 360, transformOrigin:"center", repeat:-1, repeatDelay: 1});
gsap.from(".coins", 1, {
  y: 10,
  yoyo: true, 
  repeat: -1, 
  ease: "power1.inOut",
});


Number.prototype.numberFormat = function(decimals, dec_point, thousands_sep) {
  dec_point = typeof dec_point !== 'undefined' ? dec_point : ',';
  thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : '.';

  var parts = this.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

  return parts.join(dec_point);
}

var counter = { var: 0 };

var tal = document.querySelector(".jackpot-numbers");
  
gsap.to(counter, 3, {
    var: 5000, 
    onUpdate: function () {
        var nwc = counter.var.numberFormat(2);
        tal.innerHTML = nwc;
    },
    ease:Circ.easeOut
});

gsap.from("")