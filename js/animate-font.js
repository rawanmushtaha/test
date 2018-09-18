
!function (e) {

    var n = new ScrollMagic.Controller, r = ["#slide01", "#slide02", "#slide03"], t = ["#slide01 header", "#slide02 header", "#slide03 header"], c = ["#cb01", "#cb02", "#cb03","#cb04"];
    Modernizr.touch || (t.forEach(function (e, r) {
        {
            var t = r + 1;
            new ScrollMagic.Scene({triggerElement: e, offset: -295}).setClassToggle("#slide0" + t, "is-active").addTo(n)
        }
    }), c.forEach(function (r, t) {
        {
            var c = e(r).attr("id");
            new ScrollMagic.Scene({
                triggerElement: r,
                offset: -295
            }).setClassToggle("#" + c, "is-active").on("enter", function (n) {
            }).addTo(n)
        }
    }), r.forEach(function (r, t) {
        new ScrollMagic.Scene({triggerElement: r}).on("enter", function (n) {
        }).addTo(n)
    }))

var xx=0;
$( "#colapps-nav" ).on( "click", function() {
   if(xx==0){
   $('html, body').css('overflow-y' ,'hidden');
     // alert("The paragraph was clicked.");

    $('html, body').css('overflowY', 'hidden'); 
   xx++;
   }
   else
   { 
  $('html, body').css('overflow-y' ,'auto');
	   xx=0;
   }
   
});
   


}(jQuery);

