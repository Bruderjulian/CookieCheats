if (cheats !== undefined) cheats.stop();
var cheats = {
  speedSlow: 1000,
  speedFast: 1,
  start: function () {
    var shimmers = document.getElementsByClassName("shimmer");
    var bigCookie = document.getElementById("bigCookie");
    cheats.intervalCookie = setInterval(() => {
      bigCookie.click();
    }, speedFast);
    cheats.intervalShimmer = setInterval(() => {
      for (let i = 0, l = shimmers.length; i < l; i++) {
        shimmers[i].click();
      }
    }, 1000);
  },
  stop: function () {
    if (cheats.intervalCookie) clearInterval(cheats.intervalCookie);
    if (cheats.intervalShimmer) clearInterval(cheats.intervalShimmer);
  },
};
gff
