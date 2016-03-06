var nav_toggled = false;
$('#nav-toggle').click(function(e) {
    e.preventDefault();
    $('#mobile-nav').animate({ left: 0 });
    $('#mobile-wrapper').animate({ left: 250 }, {
        complete: function() { nav_toggled = true; }
    });
});


$('#mobile-wrapper').click(function(e) {
    e.preventDefault();
    if (nav_toggled) {
        $('#mobile-wrapper').animate({ left: 0 });
        $('#mobile-nav').animate({ left: -250 }, {
            complete: function() { nav_toggled = false; }
        });
    }
});


var nav_large = true;
if ($(window).scrollTop() > 0) {
    var scrollTop = $(window).scrollTop();
    var height = 570;
    $('#landing').css({
        'opacity': ((height - 2*scrollTop) / (height)),
        'height': (height-scrollTop)
    });
}

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var height = 570;

    if (scrollTop <= 570) {
        $('#landing').css({
            'opacity': ((height - scrollTop) / (height))
        });
        if ( !nav_large ) {
            $('.logo').stop(false, true).animate({ zoom: 1, margin: '5em 0' }, 100);
            $('.navigation').stop(false, true).animate({ padding: '1.75em 4em' }, 100);
            nav_large = true;
        }
    }
    if (scrollTop > 650 && nav_large) {
        $('.logo').stop(false, true).animate({ zoom: 0.5, margin: '2.5em 0' }, 100);
        $('.navigation').stop(false, true).animate({ padding: '1em 4em' }, 100);
        nav_large = false;
    }
});

$('#contact').click(function(e) {
    e.preventDefault();
    $('#overlay').fadeIn(100);
    $('#contact-card').fadeIn(100);
});

$('#close').click(function(e) {
    e.preventDefault();
    $('#overlay').fadeOut(100);
    $('#contact-card').fadeOut(100);
});

$('#overlay').click(function(e) {
    e.preventDefault();
    $('#overlay').fadeOut(100);
    $('#contact-card').fadeOut(100);
});
