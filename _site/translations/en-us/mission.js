document.write('\
\
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
				      <p> This site was founded by Sanjay and Arvind Seshan from First Lego League (FLL) Team Not the Droids You Are Looking For in Pittsburgh, Pennsylvania, USA in 2014. You can read more about them on the Contributors Page. The tutorials and resources on this site are intended for all students in classrooms learning robotics, robotics clubs, scouts, and robotics teams.</p>\
\
				      <p>Our primary mission is to provide all robotics students with a good starting point for coding well. If you start right, you can learn more and do more. We think learning-by-doing is important and so we have included challenges at the end of each lesson. We also provide a complete set of lessons, from Beginner through Advanced, in a format that is concise and easy-to-use.</p>\
\
				      <p>A second mission is related to our tag line "Let`s Learn Together". Our goal is to create an environment where EV3 users (FLL teams or individuals) can share their designs, code and ideas. As a result, EV3Lessons has a growing list of international collaborators from the Netherlands, Brazil, Canada, Mexico and the United States. For First Lego League teams, this is a website where the idea of Gracious Professionalism and Coopertition can be put into practice every day. Anyone who would like to make a contribution to the site is welcome.</p>\
\
\
				       <p>If you are a robotics team, your season will be successful because of the work you put into it. We do not provide solutions to any First Lego League or World Robot Olympiad missions. We want students to take the lessons on this site, learn from them, adapt them, add to them, and then solve your challenges by combining concepts and ideas. We provide only the building blocks for you to build upon.</p>\
\
				\
				      <p>It is okay to:\
				      <ol>\
				       <li>Learn how to code</li>\
				       <li>Cite the person or team that showed you the technique</li>\
				       <li>Learn a new technique from someone else</li>\
				       <li>Learn something and make it even better</li>\
				      </ol></p>\
\
				      \
\
				      <p class="indent"><strong>- EV3Lessons Founders</strong></p>\
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
