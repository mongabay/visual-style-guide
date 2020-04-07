// Show the Code
function sourceCode() {
  var codeButton = $('.sg_helper_code.button');
  codeButton.click(function(){
    $(this).parents('.sg_pattern').toggleClass('active');
    $(this).parents('.sg_pattern').children('.sg_code').slideToggle();
    // If the pattern is open don't scroll
    if($(this).parents('.sg_pattern').hasClass('active')) {
      $('html, body').animate({
          scrollTop: $(this).parents('.sg_pattern').offset().top
      }, 500);
    }
  })
}

//Functions that run when all HTML is loaded
$(document).ready(function() {
  sourceCode();
});
