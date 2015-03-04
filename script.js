

//Scrolling

 $(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
 
// Highlight navigation

$('body').scrollspy({
    target: '.navbar-fixed-top'
})


// Navigation collapse
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});