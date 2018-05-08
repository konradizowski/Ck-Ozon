$(function()	{

    $(".dropdown-btn").on('click',	function(e)	{
        e.preventDefault();
        $(".submenu").toggleClass('show');

    });




    function timer () {
        setInterval(function(){

                alert("Hello"); },


            3000);
    }

});