if (window.location.hash) {
    // Puts hash in variable, and removes the # character
    var language = window.location.hash.substring(1); 
} else {
    // window.location.replace("#en-us");
    var language = "en-us";
    // location.reload();
}
var page = window.location.href.split("#")[0];
var us = ''+ page +'#en-us';
var es = ''+ page +'#es';
var nl = ''+ page +'#nl';
var ar = ''+ page +'#ar';
var pt = ''+ page +'#br';
var el  = ''+ page +'#el';
// var page = window.location.href.split("#")[0];
// alert (page);
// var href = window.location.href;
// alert(href);

document.write('\
        <div id="topbar">\
	  <div class="inner group">\
	    <div class="widget-last widget widget_text left">\
	      <div style="padding-top: 4px" class="textwidget">\
	        <div style="padding-top: 8px; color: #FFF; width: inherit" class="socials-default-small default">\
                  Languages: \
		</div>\
		<div class="socials-default-small  default">\
		  <a href="'+ us +'" onclick="setTimeout(function(){location.reload(true);},100)">\
		  <img src="images/icons/countries/us.png" alt="English" title="English" width="26" height="26" border="0">\
		  </a>\
		</div>\
	        <div class="socials-default-small default">\
		  <a onclick="setTimeout(function(){location.reload(true);},100)" href="'+ nl +'">\
		  <img src="images/icons/countries/nl.png" alt="Nederlands" title="Nederlands" width="26" height="26" border="0">\
		  </a>\
		</div>\
                <div class="socials-default-small  default">\
		  <a onclick="setTimeout(function(){location.reload(true);},100)" href="'+ pt +'">\
		  <img src="images/icons/countries/br.png" alt="Portugues" title="Portugues" width="26" height="26" border="0">\
		  </a>\
		</div>\
		<div class="socials-default-small  default">\
		  <a onclick="setTimeout(function(){location.reload(true);},100)" href="'+ es +'">\
		  <img src="images/icons/countries/es.png" alt="Espa&ntilde;ol" title="Espa&ntilde;ol" width="26" height="26" border="0">\
		  </a>\
		</div>			                          \
		<div class="socials-default-small  default">\
		  <a onclick="setTimeout(function(){location.reload(true);},100)" href="'+ar+'">\
		  <img src="images/icons/countries/sa.png" alt="العَرَبِيةُ‎‎" title="العَرَبِيةُ‎" width="26" height="26" border="0">\
		  </a>\
		</div>\
		<div class="socials-default-small  default">\
		  <a onclick="setTimeout(function(){location.reload(true);},100)" href="'+el+'">\
		  <img src="images/icons/countries/small/Greece.png" alt="Ελληνικά" title="Ελληνικά‎" width="26" height="26" border="0">\
		  </a>\
	      </div>\
</div></div>\
\
	    <div class="widget-last widget widget_text right">\
	      <div style="padding-top: 8px" class="textwidget">\
	        <div class="socials-default-small default">\
		  <a href="http://www.facebook.com/pages/EV3-Lessons/1544442149123833">\
		  <img src="images/icons/socials-new/facebook.png" alt="Facebook" title="Facebook" width="23" height="23" border="0">\
                  </a>\
		</div>\
\
		<div class="socials-default-small twitter-small default">\
		  <a href="https://twitter.com/ev3lessons">\
		  <img src="images/icons/socials-new/twitter.png" alt="Twitter" title="Twitter" width="23" height="23" border="0">\
                  </a>\
		</div>\
		<div class="socials-default-small twitter-small default">\
		  <a href="http://droidsrobotics.tumblr.com/">\
		  <img src="images/icons/socials-new/tumblr.png" alt="Tumblr" title="Tumblr" width="23" height="23" border="0">\
                  </a>\
		</div>\
		<div class="socials-default-small flickr-small default">\
		  <a href="https://www.flickr.com/photos/50840754@N02/sets/">\
		  <img src="images/icons/socials-new/flickr.png" alt="Flickr" title="Flickr" width="23" height="23" border="0">\
                  </a>\
		</div>\
		<div class="socials-default-small default">\
		  <a href="https://www.youtube.com/user/DroidsRobotics" >\
		  <img src="images/icons/socials-new/youtube.png" alt="YouTube" title="YouTube" width="23" height="23" border="0">\
                  </a>\
		</div>\
		<div class="socials-default-small default">\
		  <a href="contact.html#' + language + '">\
		  <img src="images/icons/socials-new/email.png" alt="Email" title="Email" width="23" height="23" border="0">\
                  </a>\
		</div>\
	      </div>\
	    </div>\
	  </div>\
        </div>\
');
