$(function(){
    wow = new WOW ({
        mobile:false
    });
    wow.init();

    function initParallax(){
        $('#home').parallax("100%", 0.1);
        $('#gallery').parallax("100%", 0.3);
        $('#menu').parallax("100%", 0.2);
        $('#team').parallax("100%", 0.3);
        $('#contact').parallax("100%", 0.1);
    }

    initParallax();


    //Hide Mobile menu after clock on a link
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    //nivo Light
    $("#gallery a").nivoLightbox({
        effect:'fadeScale'
    })
});