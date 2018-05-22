//  submenu functionality

$(function() {

    $(".dropdown-btn").on('mouseover', function() {
        $(".submenu").slideDown('slow');

    });
    $(".submenu").on('mouseleave', function() {
        $(".submenu").slideUp('slow');

    });
    $(".uslugi").on('mouseover', function() {
        $(".submenu").slideUp('slow');

    });
    $(".kontakt").on('mouseover', function() {
        $(".submenu").slideUp('slow');

    });
    $(".galeria").on('mouseover', function() {
        $(".submenu").slideUp('slow');

    });
    $("p, h1, h2").on('mouseover', function() {
        $(".submenu").slideUp('slow');

    });



// headlines sliding

    $(".ozon-info").on('mouseover', function() {
        $('.ozon-head').slideDown('slow');
    });

    $(".ozonowanie-info").on('mouseover', function() {
        $('.ozonowanie-head').slideDown('slow');
    });


    $("header").on('mouseover', function() {
        $('.name-big').slideDown('slow');
    });
    $(".site-hero").on('mouseover', function() {
        $('.name-phone').slideDown('slow');
    });
    $("section").on('mouseover', function() {
        $('.name-big').slideDown('slow');

    });

    $("header").on('mouseover', function() {
        $('h1').slideDown('slow');
    });

    $(".about-us").on('mouseover', function() {
        $('h1').slideDown('slow');
    });

// boxes fuctionality in index.html

    $(".box1 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box1 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    });


    $(".box2 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box2 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    });


    $(".box3 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box3 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    });



    $(".box4 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box4 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    });


});





//Background change in index.html

$(function() {
    var bi = $('.site-hero');
    var backgrounds = ['url(./img/tutka2.png)','url(./img/tutka44.png)', 'url(./img/tutka33.png)', 'url(./img/tutka222.png)'];
    var current = 0;

    function nextBackground() {
        bi.css(
            'background-image',
            backgrounds[current = ++current % backgrounds.length]
        );
    bi.css('background-repeat', 'no-repeat');
    bi.css('background-size', 'cover');

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    bi.css('background', backgrounds[0]);
    bi.css('background-repeat', 'no-repeat');
    bi.css('background-size', 'cover');
});


