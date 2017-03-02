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
        //hide stud and comment in programs
        $("div#thim-course-archive div#post-6892 .course-students, div#thim-course-archive div#post-6892 .course-comments-count, div#thim-course-archive div#post-6023 .course-students, div#thim-course-archive div#post-6023 .course-comments-count, div#thim-course-archive div#post-7203 .course-comments-count, div#thim-course-archive div#post-7203 .course-students ").hide();
}); 

//hide students and comments from each course
jQuery(document).ready(function ($) {
        $=jQuery;
        //hide at the botton of the panel in proposal courses
        $("div#tab-course-description .thim-course-info li.students-feature").hide();
        $("div#lp-single-course .course-students, div#lp-single-course .course-comments-count").hide();
        $("div#lp-single-course .course-review").hide();
        //hide opiniones sections in panel
        $("article#post-7203 .course-summary div#course-landing .course-tabs ul.nav.nav-tabs li:nth-child(4)").hide();
        $("article#post-6892 .course-summary div#course-landing .course-tabs ul.nav.nav-tabs li:nth-child(4)").hide();
        $("article#post-6023 .course-summary div#course-landing .course-tabs ul.nav.nav-tabs li:nth-child(4)").hide();
        //hide opiniones sections in footer banner
        $("ul.thim-course-landing-tab li:nth-child(4)").hide();

}); 

//hide numbers of units
jQuery(document).ready(function ($) {
        $=jQuery;
        $("ul.curriculum-sections .meta-left").hide();
}); 

//color modules
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

//insert selz button
jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-7203 .course-payment .course-price ").remove();
        var PayButtonBye = "article#post-7203 .course-payment form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/VyvbVY$YM" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true"> if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e);} <\/script>';
        $(PayButtonBye).html(adding);
});

//insert selz button on footer banner

jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-7203 .thim-course-menu-landing .thim-course-landing-button .course-price ").remove();
        var PayButtonBye2 = "article#post-7203 .thim-course-menu-landing form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/VyvbVY$YM" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true"> if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e);} <\/script>';
        $(PayButtonBye2).html(adding);
});

//insert selz button on cariño premium panel
jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-6892 .course-payment .course-price ").remove();
        var PayButtonBye = "article#post-6892 .course-payment form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/Vk9hw87-f" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true">if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e); }<\/script>';
        $(PayButtonBye).html(adding);
});

//insert selz button on cariño premium footer banner 

jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-6892 .thim-course-menu-landing .thim-course-landing-button .course-price ").remove();
        var PayButtonBye2 = "article#post-6892 .thim-course-menu-landing form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/Vk9hw87-f" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true">if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e); }<\/script>';
        $(PayButtonBye2).html(adding);
});

//insert selz button on cariño autoestudio panel
jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-6023 .course-payment .course-price ").remove();
        var PayButtonBye = "article#post-6023 .course-payment form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/VyIFUC$OG" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true">if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e); }<\/script>';
        $(PayButtonBye).html(adding);
});

//insert selz button on cariño autoestudio footer banner 

jQuery(document).ready(function ($) {
        $=jQuery;
        $("article#post-6023 .thim-course-menu-landing .thim-course-landing-button .course-price ").remove();
        var PayButtonBye2 = "article#post-6023 .thim-course-menu-landing form.purchase-course.form-purchase-course";
        var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/VyIFUC$OG" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true">if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e); }<\/script>';
        $(PayButtonBye2).html(adding);
});



