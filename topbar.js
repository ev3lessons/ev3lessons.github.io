if (window.location.hash) {
    // Puts hash in variable, and removes the # character
    var language = window.location.hash.substring(1);
if (window.location.hash == "#br") {
  window.location.hash = "#pt-br";
  setTimeout(function(){location.reload(true);},100);
}
} else {
    // window.location.replace("#en-us");
    var language = "en-us";
    // location.reload();
}


if (window.location.hash != ""){
deleteAllCookies()

document.cookie = "ev3cookie"+window.location.hash.substring(1);
}


function deleteAllCookies() {
 var c = document.cookie.split("; ");
 for (i in c) 
  document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";    
}
document.cookie=""
//for (var it in $.cookie()) $.removeCookie(it);

//alert(document.cookie)
langs=['en-us:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt-br:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','de:Germany:Deutsche']
	
if (document.cookie && window.location.hash == "") {
str =document.cookie
var i;
for (i = 0; i < langs.length; i++) {
    tmp =str.search('ev3cookie'+langs[i].split(':')[0])
    if (tmp != -1) {
window.location.hash = "#"+langs[i].split(':')[0]
//  setTimeout(function(){location.reload(true);},100);
    var language = langs[i].split(':')[0];

}
}

//alert('a')
//window.location.hash = "#"+document.cookie.split(';')[0]
//  setTimeout(function(){location.reload(true);},100);
}
var page = window.location.href.split("#")[0] + '#';
var i;
for (i = 0; i < langs.length; i++) {
    window[langs[i].split(':')[0].split('-')[0]] = page + langs[i].split(':')[0];
}
/*
var enus = ''+ page +'#en-us';
var es = ''+ page +'#es';
var nl = ''+ page +'#nl';
var ar = ''+ page +'#ar';
var ptbr = ''+ page +'#pt-br';
var el  = ''+ page +'#el';
var fr  = ''+ page +'#fr';
var ct  = ''+ page +'#ct';
var he  = ''+ page +'#he';
var de  = ''+ page +'#de';
*/
// var page = window.location.href.split("#")[0];
// alert (page);
// var href = window.location.href;
// alert(href);

document.write('\
        <div id="topbar">\
	  <div class="inner group">\
	    <div class="widget-last widget widget_text left">\
	      <div class="" style="padding-top: 4px; z-index:100000000000;" class="textwidget">\
	   <!--    <div style="padding-top: 8px; color: #FFF; width: inherit" class="socials-default-small default ovd">\
                  Languages: \
		</div>-->\
')
var i;
for (i = 0; i < langs.length; i++) {
    window[langs[i].split(':')[0].split('-')[0]] = ''+ page +langs[i].split(':')[0];
document.write('\
		<div class="socials-default-small  default ovd">\
		  <a href="'+ window[langs[i].split(":")[0].split("-")[0]] +'" onclick="deleteAllCookies();document.cookie=\'ev3cookie'+langs[i].split(':')[0]+'\';setTimeout(function(){location.reload(true);},100)">\
		  <img src="images/icons/countries/small/'+langs[i].split(":")[1]+'.png" alt="'+langs[i].split(":")[2]+'" title="'+langs[i].split(":")[2]+'" width="26" height="26" border="0">\
		  </a>\
		</div>\
')
}



document.write('\
</div></div>\
\
	    <div class="widget-last widget widget_text right">\
	      <div style="padding-top: 8px" class="textwidget">\
	        <div class="socials-default-small default">\
		  <a href="https://www.facebook.com/ev3lessons/">\
		  <img src="images/icons/socials-new/facebook.png" alt="Facebook" title="Facebook" width="23" height="23" border="0">\
                  </a>\
		</div>\
\
		<div class="socials-default-small twitter-small default">\
		  <a href="https://twitter.com/ev3lessons">\
		  <img src="images/icons/socials-new/twitter.png" alt="Twitter" title="Twitter" width="23" height="23" border="0">\
                  </a>\
		</div>\
		<div class="socials-default-small default">\
		  <a href="https://www.youtube.com/channel/UCNolfy4KiFUZmjSHg8iJ7-As" >\
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
