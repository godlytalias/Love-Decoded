function song(){
var clickSound = new Audio('silentnight.mp3');
clickSound.play();
setTimeout("song()",115000);
}

function toggleVideo(state,tag) {
    var div = document.getElementById(tag);
    var object = div.getElementsByTagName("object")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    object.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('#intro-slider').flexslider({
      animation: 'fade',
      controlNav: false,
   });




});








