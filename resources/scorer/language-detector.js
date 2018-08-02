  //langs=['en-us:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt-br:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','de:Germany:Deutsche']

  //  langs=['en-us:United States:English (USA)']
  
 

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


  function deleteAllCookies() {
    if (navigator.cookieEnabled = true) {
      var c = document.cookie.split("; ");
      for (i in c)
      document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }


  function createCookie(lang){
    localStorage.lang = "ev3cookie"+lang
  }

  var browser = navigator.appName;
  var version = get_browser_version();

  if (browser=="Microsoft Internet Explorer") {
    if (version<="9.0")
    document.location.href="http://classic.ev3lessons.com/"
  }

  if (getParameterByName('lang') != null) {
    var language = getParameterByName('lang');
    //if (getParameterByName('langsave') != 'no') {
    localStorage.lang = "ev3cookie"+language;
    //}
  } else {
    var language = 'en-us'

    navlang=navigator.language.split('-')[0]
    //str =localStorage.lang
    var i;
    for (i = 0; i < langs.length; i++) {
      str=langs[i].split(':')[0]
      tmp =str.search(navlang)
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }
  }

  document.cookie=""

  str =localStorage.lang
  if (localStorage.lang && window.location.hash == "") {
    var i;
    for (i = 0; i < langs.length; i++) {
      tmp =str.search('ev3cookie'+langs[i].split(':')[0])
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }

  }
  //langs=['en-us:United States:English','es:Spain:Español','nl:Netherlands:Nederlands','ar:Saudi Arabia:العَرَبِيةُ‎‎','pt-br:Brazil:Portugues','el:Greece:Ελληνικά','fr:France:français','ct:../ct:català','he:Israel:עברית','de:Germany:Deutsche']

  //  langs=['en-us:United States:English (USA)']
  
  langs=['en-us:United States:English','pt-br:Brazil:Portugues','de:Germany:Deutsche','es:Spain:Español','sk:Slovakia:Slovenský','nl:Netherlands:Nederlands','el:Greece:ελληνικά','hu:Hungary:Magyar','he:Israel:עִבְרִית‎','fr:France:français']

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


  function deleteAllCookies() {
    if (navigator.cookieEnabled = true) {
      var c = document.cookie.split("; ");
      for (i in c)
      document.cookie =/^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }


  function createCookie(lang){
    localStorage.lang = "ev3cookie"+lang
  }

  var browser = navigator.appName;
  var version = get_browser_version();

  if (browser=="Microsoft Internet Explorer") {
    if (version<="9.0")
    document.location.href="http://classic.ev3lessons.com/"
  }

  if (getParameterByName('lang') != null) {
    var language = getParameterByName('lang');
    //if (getParameterByName('langsave') != 'no') {
    localStorage.lang = "ev3cookie"+language;
    //}
  } else {
    var language = 'en-us'

    navlang=navigator.language.split('-')[0]
    //str =localStorage.lang
    var i;
    for (i = 0; i < langs.length; i++) {
      str=langs[i].split(':')[0]
      tmp =str.search(navlang)
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }
  }

  document.cookie=""

  str =localStorage.lang
  if (localStorage.lang && window.location.hash == "") {
    var i;
    for (i = 0; i < langs.length; i++) {
      tmp =str.search('ev3cookie'+langs[i].split(':')[0])
      if (tmp != -1) {
        //window.location.hash = "#"+langs[i].split(':')[0]
        //  setTimeout(function(){location.reload(true);},100);
        var language = langs[i].split(':')[0];

      }
    }

  }
