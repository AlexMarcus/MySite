<!--
/*$(document).ready(function() {
	$("#con-scroll").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#contact").offset().top
    	}, 800);
	});
});
$(document).ready(function() {
	$("#edu-scroll").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#education").offset().top
    	}, 1000);
	});
});
$(document).ready(function() {
	$("#we-scroll").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#work-experience").offset().top
    	}, 1000);
	});
});
$(document).ready(function() {
	$("#proj-scroll").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#projects").offset().top
    	}, 1000);
	});
}); */

$(document).ready(function(){
    $(".header-links").hover(function(){
        $(this).css("color", '#B6B6B4');
        }, function(){
        $(this).css("color", "white");
    });
});


$(document).scroll(function() {
    if ($(window).scrollTop() > 170) {
        $("#stick").addClass("fixed-div");
        $("#stick").removeClass("header-link-header");
    } else {
        $("#stick").removeClass("fixed-div");
        $("#stick").addClass("header-link-header");
    }
});
-->