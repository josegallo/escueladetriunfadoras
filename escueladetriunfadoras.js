    jQuery(document).ready(function ($) {
        $=jQuery;
        //+ enviar button color coorporative, no longer needed
        //$("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
        var widthW = $(window).width();
        //console.log(widthW);
$("form#registerform div").css({"display":"none"});
        if (widthW < 750) {
            //+ delete header-escuela-desktop on mobile dispositives, no longer needed
            //$("div#toolbar").css({"display":"none"});
            //remove stiky logo
            //add logo on mobile dispositives
            var newLogoMob = $( '<a href = "http://escueladetriunfadoras.com/"> <img src = "http://escueladetriunfadoras.com/wp-content/uploads/2017/01/Escuela-de-Triunfadora-color.png" style="min-width:255px;" height="50px" width="300px" id = "newLogoMobId"> </a>');
            //max width
            newLogoMob.prependTo( "header#masthead .header_v3_container").css({"max-width":"250px"});
            if( !$("#newLogoMobId").length ) {
                return;
            }
            //move logo 
            var xPos = parseInt($("#newLogoMobId").position().left);
            var delta = - xPos; 
            console.log(delta);
            $("#newLogoMobId").css({"margin-left":delta + "px"});
            //make responsive escuela-triunfadoras-block
            //1st if mobile, hide desktop block escuela-triunfadoras-desktop-mark
            //and show mobile-block
            $("#escuela-triunfadoras-desktop-mark").hide();
            $("#escuela-triunfadoras-mobile-mark").show();
            //show adela-pereira-desktop-mark for mobiles and hides for desktop
            $("#adela-pereira-desktop-mark").hide();
            $("#adela-pereira-mobile-mark").show;
            //show soy-adela-text for mobiles 
            $("#soy-Adela-mobile-mark").show();
            //show ojo-mobile-mark and hides ojo-desktop-mark
            $("#ojo-mobile-mark").show();
            $("#ojo-desktop-mark").hide();
            //shows recursos-gratuitos-desktop-mark and hides recursos-gratuitos-desktop-mark 
            $("#recursos-gratuitos-mobile-mark").show();
            $("#recursos-gratuitos-desktop-mark").hide();
        } else {
            //re-position logo desktop
            $("header#masthead .width-logo.table-cell.sm-logo").css({"top": "30px", "left": "-90px", "min-width": "350px"});  
            $("header#masthead img").css({"width": "75%", "margin-top": "1.35%", "min-width": "250px"});  
            $("header#masthead img").attr("src","http://escueladetriunfadoras.com/wp-content/uploads/2017/01/Escuela-de-Triunfadora-color.png");
            //re-appear the escuela-triunfadoras-desktop-mark block
            $("#escuela-triunfadoras-desktop-mark").show();
            $("#escuela-triunfadoras-mobile-mark").hide();
            //show adela-periera-desktop-mark for desktop and hide for mile
            $("#adela-pereira-desktop-mark").show();
            $("#adela-pereira-mobile-mark").hide();
            //hide soy-adela-text for desktops
            $("#soy-Adela-mobile-mark").hide();
            //hide ojo-mobile-mark and shows ojo-desktop-mark
            $("#ojo-desktop-mark").show();
            $("#ojo-mobile-mark").hide();
            //hides recursos-gratuitos-desktop-mark and shows recursos-gratuitos-desktop-mark 
            $("#recursos-gratuitos-mobile-mark").hide();
            $("#recursos-gratuitos-desktop-mark").show();
        }
    }); 
//hide students and comments from http://escueladetriunfadoras.com/register/lp-courses/

jQuery(document).ready(function ($) {
        $=jQuery;
        $("div#thim-course-archive div#post-6892 .course-students, div#thim-course-archive div#post-6892 .course-comments-count, div#thim-course-archive div#post-6023 .course-students, div#thim-course-archive div#post-6023 .course-comments-count").hide();
}); 

//hide students and comments from each course
//http://escueladetriunfadoras.com/course/carino-tu-vales-mucho-premium/
jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-6892 div#lp-single-course .course-review").hide();
        $("div#tab-course-description .thim-course-info li.students-feature").hide();
        $("div#lp-single-course div#course-landing li:nth-child(4)").hide();
        $("div#lp-single-course .course-students, div#lp-single-course .course-comments-count").hide();
        $("div#lp-single-course .course-review").hide();
$("div#thim-course-archive div#post-6892 .course-review , div#thim-course-archive div#post-6023 .course-review").hide();
}); 


jQuery(document).ready(function ($) {
        $=jQuery;
        $("ul.curriculum-sections .meta-left").hide();
}); 

jQuery(document).ready(function ($) {
        $=jQuery;
        //autoestudio 
        //$("div#tab-course-curriculum div#learn-press-course-curriculum li#section-214 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-214 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-215 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-216 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-222 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-225 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-230 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-234 h4.section-header").css({"color":"#ff765b"});
        //premiun
        $("ul.curriculum-sections li#section-191 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-192 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-193 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-199 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-207 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-211 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-212 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-213 h4.section-header").css({"color":"#ff765b"});
    }); 

//show hidden units
jQuery(document).ready(function ($) {
        $=jQuery;

        //autoestudio
        $("ul.curriculum-sections li#section-218 li.course-lesson.course-item.course-item-6355.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-219 li.course-lesson.course-item.course-item-6360.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-223 li.course-lesson.course-item.course-item-6801.item-has-status.item-viewed.viewable").css({"display":"block"});

        $("ul.curriculum-sections li#section-224 li.course-lesson.course-item.course-item-6805.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-224 ul.section-content li.course-lesson.course-item.course-item-6805.viewable").css({"display":"block"});

        $("ul.curriculum-sections li#section-229 li.course-lesson.course-item.course-item-6810.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-229 ul.section-content li.course-lesson.course-item.course-item-6810.viewable").css({"display":"block"});

        $("ul.curriculum-sections li#section-231 ul.section-content li.course-lesson.course-item.course-item-6816.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-231 ul.section-content li.course-lesson.course-item.course-item-6816.viewable").css({"display":"block"});

        //premium
        $("div#learn-press-course-curriculum ul.curriculum-sections li#section-195 ul.section-content li.course-lesson.course-item.course-item-7063.viewable").css({"display":"block"});
        //M1. T2. U4. desactivarla
        $("ul.curriculum-sections li#section-196 li.course-lesson.course-item.course-item-6904.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-196 ul.section-content li.course-lesson.course-item.course-item-6904.viewable").css({"display":"block"});
        //M2 T1 U4. no es lo mismo
        $("ul.curriculum-sections li#section-200 li.course-lesson.course-item.course-item-6911.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-200 ul.section-content li.course-lesson.course-item.course-item-6911.viewable").css({"display":"block"});
        //M2 T2 U4 visualizacion
        $("div#learn-press-course-curriculum  ul.curriculum-sections li#section-201 ul.section-content li.course-lesson.course-item.course-item-6915.viewable").css({"display":"block"});
        //M3 T4 U4  
        $("div#learn-press-course-curriculum  ul.curriculum-sections li#section-206 ul.section-content li.course-lesson.course-item.course-item-6923.viewable").css({"display":"block"});
        //M4 T1 U4 sin ansiedad de rendimiento
        $("div#learn-press-course-curriculum  ul.curriculum-sections li#section-208 ul.section-content li.course-lesson.course-item.course-item-6929.viewable").css({"display":"block"});
        //$("ul.curriculum-sections li#section-208 ul.section-content li.course-lesson.course-item.course-item-6929.viewable").css({"display":"block"});
        //bonus1  U4 saber si tienes sueldo justo
        $("div#learn-press-course-curriculum  ul.curriculum-sections li#section-212 ul.section-content li.course-lesson.course-item.course-item-6942.viewable").css({"display":"block"});
    }); 
