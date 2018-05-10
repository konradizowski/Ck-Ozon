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