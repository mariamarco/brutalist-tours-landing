// Show the button when the user scrolls up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos  &&currentScrollPos !== 0 ) {
    document.getElementById("btn-back-to-top").classList.add('btn-fadein');   
  } else {
    document.getElementById("btn-back-to-top").classList.remove('btn-fadein');
  }
  prevScrollpos = currentScrollPos;

}

