
if (language == 'en-us') {
var nav = [
    "none", "none","none","none","none","none","none","none","none","none",//10
    "none", "none","none","none","none","none","none","none","none","none",//20
    "none", "none","none","none","none","none","none","none","none","none",//30
    "none", "none","none","none","none","none","none","none","none","none",//40
    "none", "none","none","none","none","none","none","none","none","none",//50
    "none", "none","none","none","none","none","none","none","none","none",//60
]
}
if (language == 'es') {
var nav = [
    "none", "Inicio", "none","none","none","none","none","none","none","none",//10
    "Lecciones", "todas las lecciones","diseños de robots","none","none","none","none","none","none","none",//20
    "recursos", "Convertidor de ruedas","none","otros recurso","none","none","none","none","none","none",//30
    "acerca de nosotros", "nuestra misión","Contribuyentes","FAQ de contribuyentes","none","none","none","none","none","none",//40
    "Foro", "none","none","none","none","none","none","none","none","none",//50
    "Contáctanos", "none","none","none","none","none","none","none","none","none",//60
]
}
if (language == 'br') {
var nav = [
    "none", "página inicial", "none","none","none","none","none","none","none","none",//10
    "lições", "lições","projeto robô","none","none","none","none","none","none","none",//20
    "recursos", "conversor de roda","sketcher interativo","none","outros recursos","none","none","none","none","none",//30
    "sobre nós", "nossa missão","contribuidores","contribuidor FAQ","none","none","none","none","none","none",//40
    "Fórum", "none","none","none","none","none","none","none","none","none",//50
    "entre em contato conosco", "none","none","none","none","none","none","none","none","none",//60
]
}
if (language == 'ar') {
var nav = [
    "none", "none","none","none","none","none","none","none","none","none",//10
    "الدروس", "none","none","none","none","none","none","none","none","none",//20
    "none", "none","none","none","none","none","none","none","none","none",//30
    "none", "none","none","none","none","none","none","none","none","none",//40
    "none", "none","none","none","none","none","none","none","none","none",//50
    "none", "none","none","none","none","none","none","none","none","none",//60
]
}
if (language == 'nl') {
var nav = [
    "none", "none","none","none","none","none","none","none","none","none",//10
    "Lessen", "Lessen","Robot Ontwerp","none","none","none","none","none","none","none",//20
    "Bronnen", "Wiel Omvormer","Interactief Schetsen","none","Andere Bronnen","none","none","none","none","none",//30
    "Over Ons", "Onze Missie","Contribuanten","Contribuanten FAQ","none","none","none","none","none","none",//40
    "none", "none","none","none","none","none","none","none","none","none",//50
    "Contacteer Ons", "none","none","none","none","none","none","none","none","none",//60
    ]
}
if (language == 'el') {
var nav = [
    "none", "none","none","none","none","none","none","none","none","none",//10
    "Μαθήματα","Όλα τα μαθήματα","Σχεδιασμός ρομπότ","none","none","none","none","none","none","none",//20
    "none", "none","none","none","none","none","none","none","none","none",//30
    "none", "none","none","none","none","none","none","none","none","none",//40
    "none", "none","none","none","none","none","none","none","none","none",//50
    "none", "none","none","none","none","none","none","none","none","none",//60
]
}
document.write('\
                    <!-- START NAV -->\
                    <div id="nav" class="group">\
                        <ul id="menu-main-nav" class="level-1">\
                            \
                            <li>\
                                <a id="m1" href="index.html#'+language+'">Home</a>\
                            </li>\
                            \
                            <li>\
                                <a id="m10" href="lessons.html#'+language+'"></i>Lessons</a>\
                                <ul class="sub-menu">\
                                    <li><a id="m11" href="lessons.html#'+language+'">All Lessons</a></li>\
                                    <li><a id="m12" href="robots.html#'+language+'">Robot Design</a></li>\
                                </ul>\
                            </li>\
                            \
                            <li>\
                                <a id="m20" href="resources.html#'+language+'">Resources</a>\
                                <ul class="sub-menu">\
                                    <li><a id="m21" href="resources/wheelconverter/">Wheel Converter</a></li>\
                                    <li><a id="m22" href="resources/drawplan/">Interactive Sketcher</a></li>\
                                    <li><a id="m23" href="challenges.html#'+language+'">Challenges</a></li>\
                                    <li><a id="m24" href="resources.html#'+language+'">All Resources</a></li>\
                                    <li><a id="m25" href="archive/2015/resources/">Resources Archive</a></li>\
                                </ul>\
                            </li>\
                            \
                            <li>\
                                <a id="m30" href="mission.html#'+language+'">About Us</a>\
                                <ul class="sub-menu">\
                                    <li><a id="m31" href="mission.html#'+language+'">Our Mission</a></li>\
                                    <li><a id="m32" href="contributors.html#'+language+'">Contributors</a></li>\
                                    <li><a id="m33" href="contributorfaq.html#'+language+'">Contributor FAQ</a></li>\
                                </ul>\
                            </li>\
                            \
                            <li>\
                                <a id="m40" href="http://www.ev3lessons.com/forum">Forum</a>\
                            </li>\
                            \
                            <li>\
                                <a id="m50" href="contact.html#'+language+'">Contact Us</a>\
                            </li>\
                            \
                        </ul>\
                    </div>\
                    <!-- END NAV -->     \
');
if (nav[1] != 'none'){document.getElementById('m1').innerHTML = nav[1];}
if (nav[10] != 'none'){document.getElementById('m10').innerHTML = nav[10];}
if (nav[11] != 'none'){	document.getElementById('m11').innerHTML = nav[11];}
if (nav[12] != 'none'){	document.getElementById('m12').innerHTML = nav[12];}
if (nav[13] != 'none'){	document.getElementById('m13').innerHTML = nav[13];}
if (nav[20] != 'none'){	document.getElementById('m20').innerHTML = nav[20];}
if (nav[21] != 'none'){	document.getElementById('m21').innerHTML = nav[21];}
if (nav[22] != 'none'){	document.getElementById('m22').innerHTML = nav[22];}
if (nav[23] != 'none'){	document.getElementById('m23').innerHTML = nav[23];}
if (nav[24] != 'none'){	document.getElementById('m24').innerHTML = nav[24];}
if (nav[25] != 'none'){	document.getElementById('m25').innerHTML = nav[25];}
if (nav[26] != 'none'){	document.getElementById('m26').innerHTML = nav[26];}
if (nav[30] != 'none'){	document.getElementById('m30').innerHTML = nav[30];}
if (nav[31] != 'none'){	document.getElementById('m31').innerHTML = nav[31];}
if (nav[32] != 'none'){	document.getElementById('m32').innerHTML = nav[32];}
if (nav[33] != 'none'){	document.getElementById('m33').innerHTML = nav[33];}
if (nav[34] != 'none'){	document.getElementById('m34').innerHTML = nav[34];}
if (nav[40] != 'none'){	document.getElementById('m40').innerHTML = nav[40];}
if (nav[50] != 'none'){	document.getElementById('m50').innerHTML = nav[50];}
