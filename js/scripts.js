nav_toggled = false;
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
        $('#mobile-nav').animate({ left: -250 });
        nav_toggled = false;
    }
})
