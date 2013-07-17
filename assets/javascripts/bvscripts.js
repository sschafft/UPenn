/*
 * Misc jqueries - Slidetoggle to show mobile menu
 */
  $('#showmenu').click(function() {
    $('nav#main ul').slideToggle('fast', function() {
    });
  });

/*
 * Misc jqueries - Pin nav
 */
  $("div#main").pin({
      containerSelector: ".content",
      minWidth: 768
  });

/*
 * Header resize function
 */
$('nav#main').affix()

$(window).scroll(function(){
  var screenW = $(window).width();
  if(screenW > 768) {
    n = Math.ceil($("body").scrollTop() / 3);
    $("#banner").css("-webkit-transform", "translateY(-" + n + "px)");
  	$("#banner").css("-moz-transform", "translateY(-" + n + "px)");
  	m = Math.ceil($("body").scrollTop() / 5);
  	$("header").css("-webkit-transform", "translateY(" + n + "px)");
  	$("header").css("-moz-transform", "translateY(" + n + "px)");
  	o = Math.ceil($("body").scrollTop() / 3);
  	$("footer").css("-webkit-transform", "translateY(" + n + "px)");
  	$("footer").css("-moz-transform", "translateY(" + n + "px)");
  }
});

$(window).scroll(function(){
  var windowScroll = $(window).scrollTop();
    if($(window).width() > 768 && windowScroll > ($(window).height() - 50)){
    $("nav#main").animate({
      "padding-top": "20px",
      "padding-bottom": "20px"
    });
  } else if ($(window).width() > 768 && windowScroll < ($(window).height() - 50)) {
		$("nav#main").animate({
      "padding-top": "0px",
      "padding-bottom": "0px"
    });
	} else if($(window).width() > 768 && windowScroll > ($(window).height() - 50)){
		$("nav#main").css({
      "padding-top": "20px",
      "padding-bottom": "20px"
    });
	}
});

