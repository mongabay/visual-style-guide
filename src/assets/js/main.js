// Create Content List
function contentList() {
  $('#documentationArea').find('h2').each(function() {
    var $item = $(this);
    var $id = $(this).attr('id');
    var li = $('<li/>');
    var a = $('<a/>', {text: $item.text(), href: '#' + $id, title: $item.text()});
    a.appendTo(li);
    $('#nav ul').append(li);
  });
}

// SmoothScroll
function smoothScroll() {
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    var hash = this.hash;
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    console.log(target);
    // If the Target element is collapsed; expand it...
    if($(target).hasClass('collapsed')) {
      $(target).nextUntil('h1').slideDown();
      $(target).removeClass('collapsed');
    }
    // Scroll to the element
    $('html, body').animate({ scrollTop: target.offset().top }, 500, function (){
        location.hash = hash;
    });
  return false;
  });
}

// Collapse H1
function collapseH() {
  $('#documentationArea h1').click(function() {
    $(this).toggleClass('collapsed');
    $(this).nextUntil('h1').slideToggle();
  });
}

// Target External Links
function TargetExt() {
  $(".sg_doc a[href^='http']").attr("target","_blank").addClass("ext");
}


// Sidebar Button
function sidebarButton() {
  var $button = $('.sg_sidebar_button');

  $button.click(function(e) {
    e.preventDefault();
    $(this).parents('.sg-pusher').toggleClass('show_sidebar');
  });
}

function copyCode() {
  $('.highlight').each(function() {
    var $item = $(this);

    var button = $('<button/>', { type: 'button', class: 'copy-button', title: 'Copy'  });
    button.click(function () {
      var code = $item.find('code').get(0);
      var range = document.createRange();
      range.selectNode(code);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        alert('Oops, unable to copy');
      }

      window.getSelection().removeAllRanges();
    });

    var i = $('<i />', { text: 'content_copy', class: 'icon' })
    i.appendTo(button);

    $item.append(button);
  });
}

//Functions that run when all HTML is loaded
$(document).ready(function() {
  contentList();
  smoothScroll();
  collapseH();
  TargetExt();
  sidebarButton();
  copyCode();
});


