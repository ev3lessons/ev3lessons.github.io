---
layout: none
---


<script>
  //langs=['en:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','it:Italy:Italiano']

  langs=['{{ site.all_langs | join: "', '" }}']


function get_browser_version(){
  var N=navigator.appName, ua=navigator.userAgent, tem;
  var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
  return M[1];
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var browser = navigator.appName;
var version = get_browser_version();

if (browser=="Microsoft Internet Explorer") {
    if (version<="8.0")
        document.location.href="http://classic.ev3lessons.com/"
}



if (getParameterByName('lang') != null) {
    var language = getParameterByName('lang');
} else if (localStorage.lang) {
    var language = localStorage.lang.split('ev3cookie');
} else if (window.location.hash) {
    var language = window.location.hash.substring(1);
} else {
    var language = navigator.language.split('-')[0];
}

localStorage.lang = language;


if (language == "en-us") {
    language = "en";
} else if (language == "pt-br") {
    language = "pt";
} else if (language == "br") {
    language = "pt";
}



if ((String(langs).indexOf(language+":")) == -1) {
    language = "en";
}


if (getParameterByName('target')) {
    var page = window.location.href.split("?")[0].split("#")[0].split("index.html")[0] + ''+language + '/' + getParameterByName('target');
} else {
    var page = window.location.href.split("?")[0].split("#")[0].split("index.html")[0] + ''+language;
}

window.location.href = page;


</script>
