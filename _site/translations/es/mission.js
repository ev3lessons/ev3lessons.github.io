document.write('\
            <div id="page_meta" class="home-section">\
			    <div class="inner group">\
			        <div class="meta-left">\
			            <h2 class="page-title">Our Mission</h2>\
			        </div>\
			    </div>\
			</div>\
			\
			<div id="primary" class="layout-sidebar-right home-section">\
		    <div class="inner group">\
		        <!-- START CONTENT -->                \
		        <div id="content" class="group">\
		            <div class="clear"></div>\
		            <div class="posts">\
		                <div class="portfolio type-portfolio status-publish hentry hentry-post group portfolio-post internal-post">\
		                    <div class="post_header portfolio_header group">\
		                        <img width="700" height="260" src="images/slider-flash/ev3lessons.jpg" class="internal wp-post-image" alt="EV3Lessons.com" title="EV3Lessons.com" />                                \
\
		                    </div>\
		                    <div class="post_content group  no-skills ">\
\
				      <p> Éste sitio ha sido fundado por integrantes del equipo de FIRST Lego League (FLL) Not the Droids You Are Looking For en Pittsburgh, Pennsylvania, USA en 2014. Éste sitio fue creado como parte de la temporada “World Class” para ayudar a mejorar la manera en la que aprendemos a programar el EV3. Los tutoriales y recursos en este sitio están dirigidos a los estudiantes en los salones aprendiendo robótica, talleres de robótica, scouts, y equipos de robótica.</p>\
\
				      <p>Nuestra misión principal es la de proveer a todos los estudiantes de robótica un buen punto de partida para programar bien. Si empiezas adecuadamente, puedes aprender más y más. Pensamos que “aprender haciendo” es importante, por lo que hemos incluido retos al final de cada lección. Así mismo proveemos una colección completa de lecciones, desde principiantes a avanzados , en un formato que es conciso y sencillo de usar.</p>\
\
				     \
\
				      <p>Una segunda misión está relacionada con nuestro lema “Aprendamos juntos”. Nuestro objetivo es el de crear un ambiente en donde los usuarios de EV3 (Equipos FLL o individuos) puedan compartir sus diseños, códigos e ideas. Como resultado, EV3Lessons tiene una lista que se aumenta con colaboradores internacionales de los Países Bajos, Brasil, Canadá, México y los Estados Unidos. Para los equipos de FIRST Lego League, éste es un sitio en donde las ideas de Coopertition™ y Gracious Professionalism™ pueden ser aplicadas día con día, Cualquiera que quiera hacer una contribución al sitio es bienvenido.</p>\
\
\
				       <p>Si eres un equipo de FLL, tu temporada será mejor por el trabajo que le inviertas. Nosotros no proveemos soluciones a ninguna de las misiones de FLL. Queremos que los estudiantes tomen las lecciones en el sitio, aprendan de ellas, las adapten, las añadan, y luego resuelvan los retos combinando conceptos e ideas.</p>\
\
				\
				      <p>Está bien:\
				      <ol>\
				       <li>Aprender a programar.</li>\
				       <li>Citar a la persona o equipo que te enseñó la técnica.</li>\
				       <li>Aprender una técnica de alguien más.</li>\
				       <li>Aprender algo e incluso hacerlo mejor.</li>\
				      </ol></p>\
\
				      \
\
				      <p class="indent"><strong>- Los fundadores de EV3Lessons</strong></p>\
\
\
		                    </div>\
		                </div>\
		            </div>\
		        </div>\
		        <!-- END CONTENT -->                                  \
		        <div id="sidebar" class="group one-fourth last">\
		            <div id="more_projects-2" class="widget-1 widget-first widget-last widget more_projects">\
		                <h2>Quick Links</h2>\
		                <div class="more-projects-widget">\
		                    <div class="top"><a class="prev" href="#">Prev</a></div>\
		                    <div class="sliderWrap">\
		                        <ul>\
		                            <li class="work-item group">\
		                                <a class="work-thumb" href="contact.html"><img width="86" height="86" src="images/icons/set_icons/bulb32.png" class="attachment-thumb_more_projects wp-post-image" alt="work" title="work" /></a>\
		                                <a class="meta work-title" href="contact.html">Have an idea?\
		                                <p class="meta categories">Submit a lesson</a></p>\
		                            </li>\
		                            <li class="work-item group">\
		                                <a class="work-thumb" href="contact.html"><img width="86" height="86" src="images/icons/set_icons/testimonial32.png" class="attachment-thumb_more_projects wp-post-image" alt="work2" title="work2" /></a>\
		                                <a class="meta work-title" href="contact.html">What"s new?\
		                                <p class="meta categories">Sign up for Updates</a></p>\
		                            </li>\
		                            <li class="work-item group">\
		                                <a class="work-thumb" href="contact.html"><img width="86" height="86" src="images/icons/set_icons/coffee32.png" class="attachment-thumb_more_projects wp-post-image" alt="x5-700x295" title="x5-700x295" /></a>\
		                                <a class="meta work-title" href="contact.html">Love EV3lessons?\
		                                <p class="meta categories">Tell us your story</a></p>\
		                            </li>\
		                        </ul>\
		                    </div>\
		                    <div class="controls"><a class="next" href="#">Next</a></div>\
		                </div>\
		                <script type="text/javascript">\
		                    jQuery(document).ready(function($){\
		                        var slider_wrap = $(".more-projects-widget");\
		                        var height_item = $("li", slider_wrap).outerHeight();\
		                        var height_ul   = $("ul", slider_wrap).height();\
		                        var height_wrap = $(".sliderWrap", slider_wrap).height();\
		                        var n_items     = $("li", slider_wrap).length;\
		                        var visible     = 4;\
		                    \
		                        $(".controls, .top", slider_wrap).show();\
		                    \
		                        // adjust height, according to visible item\
		                        $(".sliderWrap", slider_wrap).css("height", height_item * visible - 6);\
		                    \
		                        function check_position() {    \
		                            var margin_top_ul = $("ul", slider_wrap).css("margin-top");\
		                            var max_offset  = ( n_items - visible ) * height_item * -1;\
		                    \
		                            if ( margin_top_ul == "0px" ) {\
		                                $(".prev", slider_wrap).addClass("disabled");\
		                            }\
		                    \
		                            if ( margin_top_ul == max_offset+"px" ) {\
		                                $(".next", slider_wrap).addClass("disabled");\
		                            }\
		                        }\
		                    \
		                        check_position();\
		                    \
		                        $(".next:not(.disabled)", slider_wrap).live("click",function(){\
		                            $("ul", slider_wrap).animate( {marginTop:"-="+height_item}, 200, function(){ check_position(); } );\
		                            $(".prev", slider_wrap).removeClass("disabled");\
		                            return false;\
		                        });\
		                    \
		                        $(".prev:not(.disabled)", slider_wrap).live("click",function(){\
		                            $("ul", slider_wrap).animate( {marginTop:"+="+height_item}, 200, function(){ check_position(); } );\
		                            $(".next", slider_wrap).removeClass("disabled");\
		                            return false;\
		                        });\
		                    \
		                        $(".disabled", slider_wrap).live("click", function(){\
		                            return false;\
		                        });\
		                    });\
		                </script>\
		            </div>\
		        </div>\
		    </div>\
		</div>\
		<div class="clear"></div>\
		</div>     \
		<!-- END WRAPPER -->\
');
