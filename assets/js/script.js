$(document).ready(function(){
  $('input').focus(function() {  // methode focus qui permet de viser l'évenement pendant le focus
  $(this).css('border','1px solid green');
});
});

$(document).ready(function(){
  $('input').blur(function() { // méthode blur qui permet de viser l'événement après le focus
  $(this).css('border','1px solid red');
});
});
