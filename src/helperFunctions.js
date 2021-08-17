export var navBarScroll = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;
  };
};

export const listenEnter = () => {
  document.addEventListener('keyup', e => {
    if (e.key === 'Enter' && window.scrollY === 0) {
      document.getElementById('about').scrollIntoView();
    }
  });
}

