$(function()	{

    $(".dropdown-btn").on('click',	function(e)	{
        e.preventDefault();
        $(".submenu").toggleClass('show');

    });



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