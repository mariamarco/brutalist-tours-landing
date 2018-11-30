// Add smooth scrolling with jQuery 
// Works int IE and Safari
// Alternative just for Firefox + Chrome >>> css {scroll-behavior: smooth}


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});