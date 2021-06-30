window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if(document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("botaoTopo").style.display = "block"
  } else {
    document.getElementById("botaoTopo").style.display = "none"
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
