var window_width = $(window).width();
$(window).resize(function() {
    window_width = $(this).width();
});

var nav_toggled = false;
function toggle_nav(open) {
    if (open) {
        $('#mobile-nav').animate({ left: 0 });
        $('header').animate({ left: 250 });
        $('#mobile-wrapper').animate({ left: 250 }, {
            complete: function() { nav_toggled = true; }
        });
    } else {
        $('#mobile-wrapper').animate({ left: 0 });
        $('header').animate({ left: 0 });
        $('#mobile-nav').animate({ left: -250 }, {
            complete: function() { nav_toggled = false; }
        });
    }
}


$('#nav-toggle').click(function(e) {
    e.preventDefault();
    toggle_nav(true);
});


$('#mobile-wrapper').click(function(e) {
    e.preventDefault();
    if (nav_toggled) {
        toggle_nav(false);
    }
});

$('#mobile-nav .nav li a').click(function() {
    if (nav_toggled) {
        toggle_nav(false);
    }
});

var nav_large = true;
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop <= 400 && window_width >= 768) {
        if ( !nav_large ) {
            $('.logo').stop(false, true).animate({ zoom: 1, margin: '5em 0' }, 100);
            $('.navigation').stop(false, true).animate({ padding: '1.75em 4em' }, 100);
            nav_large = true;
        }
    }
    if (scrollTop > 375 && nav_large && window_width >= 768) {
        $('.logo').stop(false, true).animate({ zoom: 0.5, margin: '2.5em 0' }, 100);
        $('.navigation').stop(false, true).animate({ padding: '1em 4em' }, 100);
        nav_large = false;
    }
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href.match('#.*')[0]);
    if( target.length ) {
        if (window_width < 768) {
            var top = $('#mobile-wrapper').scrollTop();
            event.preventDefault();
            $('#mobile-wrapper').animate({
                scrollTop: top + target.offset().top - 59
            }, 500);
        } else {
            var nav_height = 132;
            $('html,body').animate({
                scrollTop: target.offset().top - nav_height },
                'fast');
        }
    }
});


if (window_width >= 768) {
    $('.timeline-desc').hide();

    $('.timeline-title').mouseenter(function() {
        var self = $(this);
        self.find('img').animate({
            'opacity': 1,
            'border-bottom': '1px solid #dddddd'
        }, 100);
        self.parent().find('.timeline-desc').slideDown(200);
    });

    $('.timeline-title').mouseleave(function() {
        var self = $(this);
        self.find('img').animate({
            'opacity': 0
        }, 100);
        self.parent().find('.timeline-desc').slideUp(100);
    });

    $('.project-tile').hover(function(e) {
        $(this).find('.project-desc').stop().animate({height: 'toggle'});
    });
}
