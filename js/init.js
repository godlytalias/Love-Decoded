function toggleVideo(state,tag) {
    var div = document.getElementById(tag);
    var object = div.getElementsByTagName("object")[0].contentWindow;
div.getElementsByTagName("object")[0].style.display=state=='hide'?'none':'block';
    div.style.display = state == 'hide' ? 'none' : 'block';
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








