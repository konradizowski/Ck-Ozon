$(function()	{

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








    $(".box1 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box1 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    })


    $(".box2 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box2 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    })


    $(".box3 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box3 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    })



    $(".box4 a ").on('mouseover', function() {
        $(this).siblings().slideUp('slow');
    });

    $(".box4 a ").on('mouseout', function() {
        $(this).siblings().slideDown('slow');
    })








    /*  for (var i = 0; i < imgProduct.length; i++) {
          imgProduct[i].addEventListener("mouseover", function(){
              var label = this.nextElementSibling;
              label.style.display ="none";
          });
          imgProduct[i].addEventListener("mouseout", function(){

              var label = this.nextElementSibling;
              label.style.display ="block";
          })
      }*/

/*

    const box = $(".box");
    console.log(box);

   for (var i = 0; i < box.length; i++) {
       .on('mouseover', function () {

           console.log('hai');
          /!* var label = this.parent.lastElementChild;
           label.style.display = "none";*!/
       });
   }
*/


   /* const images= ['./img/adult-19033_640.jpg','./img/kitchen-2165756_640.jpg','./img/13712347603_fe51b02579_b.jpg'];
    var nextimage=0;

    doSlideshow();

    function doSlideshow()
    {
        if($('.site-hero').length!=0)
        {
            $('.site-hero').fadeOut(5000,function(){slideshowFadeIn();$(this).remove()});
        }
        else
        {
            slideshowFadeIn();
        }
    }
    function slideshowFadeIn()
    {
        $('.site-hero').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,1000);}));
        if(nextimage>=images.length)
            nextimage=0;
    }*/

   /* function timer () {
        setInterval(function(){

                $('.site-hero').css('background-image', "url('./img/adult-19033_640.jpg')") },


            3000);
    }
    timer()*/
});