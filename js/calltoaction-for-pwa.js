(function() {

  var stickyBar = document.getElementById("pwaforwp-sticky-bar");
  var stickyCtaButtonBox = document.getElementsByClassName("pwaforwp-add-via-class")[0];  

  function sticky_on_desktop() {
    if(pwa_cta_assets.add_to_home_sticky_cta == 1 && pwa_cta_assets.a2h_sticky_on_desktop_cta==0 && screen.availWidth>520){
    	console.log(screen.availWidth);
			  stickyCtaButtonBox.style.display = 'none';
	  }	
	}

	function ctaPWAApp_function(argument) {
		if( window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: minimal-ui)').matches) { 
	    stickyCtaButtonBox.style.display = 'none';
	  } 
	}

  setTimeout(function(){  
  	if(stickyCtaButtonBox) {
    	stickyCtaButtonBox.style.display="inline-block"; 
	    if(stickyBar !== null && pwa_cta_assets.add_to_home_sticky_cta == 1 && pwa_cta_assets.a2h_banner_delay_cta == 1){
	      stickyBar.style.display="none";
       	stickyCtaButtonBox.style.display = 'none';
	      var delayTime = pwa_cta_assets.a2h_banner_delay_sec_cta * 1000;
	      setTimeout(function(){ 
	        stickyBar.style.display="flex";
          stickyCtaButtonBox.style.display= "inline-block";
         	sticky_on_desktop();
				  ctaPWAApp_function();
	      }, delayTime);
	    }
	  }
	    ctaPWAApp_function();
		  sticky_on_desktop();
	}, 1000);

	if(navigator.userAgent.match('CriOS') && window.navigator.standalone !== true){
		var a2hsviashortcode = document.getElementById("pwaforwp-sticky-bar");
		if(a2hsviashortcode !== null && checkbarClosedOrNot()){
			var prestyle = a2hsviashortcode.getAttribute('data-style');
			a2hsviashortcode.style="display: flex;"+prestyle; 
		}

		var a2hsviashortcode = document.querySelectorAll(".pwaforwp-add-via-class");
	    if(a2hsviashortcode !== null && checkbarClosedOrNot()){
	        for (var i = 0; i < a2hsviashortcode.length; i++) {
	          a2hsviashortcode[i].style.display= "inline-block"; 
	      	}
	    }
	}
	//For all other browsers
	if (window.matchMedia('(display-mode: fullscreen)').matches || (navigator.userAgent.match('CriOS') && window.navigator.standalone === true)){
		var a2hsviashortcode = document.querySelectorAll(".pwaforwp-add-via-class");
	    if(a2hsviashortcode !== null){
	        for (var i = 0; i < a2hsviashortcode.length; i++) {
	          a2hsviashortcode[i].style.display= "none"; 
	      	}
	    }

	    var a2hsviashortcode = document.getElementById("pwaforwp-sticky-bar");
		if(a2hsviashortcode !== null){
			a2hsviashortcode.style="display: none;"; 
		}
	}

	var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	    
	if (isSafari && iOS && window.navigator.standalone !== true) {
		console.log("You are using Safari on iOS!");
		var a2hsviashortcode = document.getElementById("pwaforwp-sticky-bar");
		if(a2hsviashortcode !== null && checkbarClosedOrNot()){
			var prestyle = a2hsviashortcode.getAttribute('data-style');
			a2hsviashortcode.style="display: flex;"+prestyle; 

			a2hsviashortcode.addEventListener('click', function(){
				document.getElementById("iossafari-a2h-banner").classList.add('iossafari-popup-buzz');
				setTimeout(function(){ document.getElementById("iossafari-a2h-banner").classList.remove('iossafari-popup-buzz'); }, 1000);
			});
		}
		

		var a2hsviashortcode = document.querySelectorAll(".pwaforwp-add-via-class");
	    if(a2hsviashortcode !== null && checkbarClosedOrNot()){
	        for (var i = 0; i < a2hsviashortcode.length; i++) {
	        	a2hsviashortcode[i].style.display= "inline-block"; 
	         	a2hsviashortcode[i].addEventListener("click", safaripopupshow); 
	      }
	    }

	    //To resolve #502 issue
	    if(window.innerHeight > window.innerWidth && window.matchMedia('(display-mode: fullscreen)').matches){
		    //alert("Please use Landscape!");
		    document.getElementsByTagName("html")[0].style.marginTop = "-5px";
		}

	} else if(isSafari) {
		console.log("You are using Safari.");
	}



	var iospopupbar = document.querySelectorAll(".pwaforwp_iossafari_close");
	if(iospopupbar !== null){
		for (var i = 0; i < iospopupbar.length; i++) {
	    iospopupbar[i].addEventListener("click", safaripopuphide); 
		}
	}
	if(pwa_cta_assets.a2h_banner_without_scroll_cta=="1"){
		var stickybar = document.getElementById("pwaforwp-sticky-bar");
		var iossafaribar = document.getElementById("iossafari-a2h-banner")
		if(stickybar) {
			var stickyPos = stickybar.getAttribute('data-position')
			if(stickyPos==='bottom'){
				stickybar.style.bottom = "0"; 
			}else if(stickyPos=='top'){
		    	stickybar.style.top = "0"; 
			}
		}
		if(iossafaribar){ iossafaribar.style.bottom = "14px"; }
	}else{

		var prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;

	        if(!checkbarClosedOrNot()){
	            return false;
	        }
	        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);   
	        if(pwa_cta_assets.a2h_sticky_on_desktop_cta==0 && !isMobile){
	        	return false; 
	        }
		
			var stickybar = document.getElementById("pwaforwp-sticky-bar");
			var iossafaribar = document.getElementById("iossafari-a2h-banner")
			
			if (prevScrollpos > currentScrollPos) {
				if(stickybar) {
					var stickyPos = stickybar.getAttribute('data-position')
					if(stickyPos==='bottom'){
						stickybar.style.bottom = "0"; 
					}else if(stickyPos=='top'){
				    	stickybar.style.top = "0"; 
					}
				}
			    if(iossafaribar){ iossafaribar.style.bottom = "14px"; }
			} else {
				if(stickybar) {
					var stickyPos = stickybar.getAttribute('data-position')
					if(stickyPos==='bottom'){
						stickybar.style.bottom = "-90px";
					}else if(stickyPos=='top'){
				    	stickybar.style.top = "-90px";
					}
				}
			    if(iossafaribar){ iossafaribar.style.bottom = "-130px"; }
			}
		  	prevScrollpos = currentScrollPos;
		}
	}

setTimeout(function(){
	var banner = document.getElementsByClassName('pwaforwp-sticky-banner');
	if(banner[0]){
		if(banner[0].style.display!='none' && banner[0].style.top=='0px'){
			var height = banner[0].offsetHeight;
			var previousMargin = document.getElementsByTagName("html")[0].style.marginTop;
			previousMargin = previousMargin? previousMargin:0;
			document.getElementsByTagName("html")[0].style.marginTop =  (parseInt(height) + parseInt(previousMargin))+'px';
		}else{
			var height = banner[0].style.offsetHeight;
			var previousMargin = document.getElementsByTagName("html")[0].style.marginTop;
			document.getElementsByTagName("html")[0].style.marginTop = (parseInt(previousMargin) - parseInt(height))+'px';
		}
	}
}, 3000);
	

	var crossButton = document.getElementsByClassName("pwaforwp_add_home_close")
	for(i=0; i<crossButton.length; i++ ){
		crossButton[i].addEventListener("click", function(){
			this.parentNode.style.display='none';
			document.cookie = "pwaforwp_prompt_close="+new Date();
			document.getElementsByTagName("html")[0].style.marginTop = 0;
		})
	}


})();
function safaripopuphide(e){
	e.preventDefault();
	document.getElementById("iossafari-a2h-banner").style.display = 'none';
}

function safaripopupshow(e){
	e.preventDefault();
	document.getElementById("iossafari-a2h-banner").style.display = 'block';
}

function PWAforwpreadCookieCta(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==" ") c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function checkbarClosedOrNot(){
	var closedTime = PWAforwpreadCookieCta("pwaforwp_prompt_close")
    if(closedTime){
      var today = new Date();
      var closedTime = new Date(closedTime);
      var diffMs = (today-closedTime);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      if(diffMs){//diffMins<4
        return false;
      }
    }
    return true;
}
