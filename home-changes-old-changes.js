//re-position logo desktop

jQuery(document).ready(function ($) {
		$=jQuery;
 		$("header#masthead img").css({"width": "75%", "margin-top": "1.35%"});
}); 

//re-position logo desktop + enviar button color coorporative

jQuery(document).ready(function ($) {
	$=jQuery;
	$("header#masthead img").css({"width": "75%", "margin-top": "1.35%"});
    $("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
}); 


//re-position logo desktop 
//+ enviar button color coorporative
//+ delete header-escuela-desktop on mobile dispositives

jQuery(document).ready(function ($) {
	$=jQuery;
	$("header#masthead img").css({"width": "75%", "margin-top": "1.35%"});
    $("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
    var widthW = $(window).width();
    console.log(widthW);

    if (widthW < 750) {
    	$("div#toolbar").css({"display":"none"});
    	var newLogoMob = $( '<img src = "http://escueladetriunfadoras.com/wp-content/uploads/2017/01/Escuela-de-Triunfadora-color.png" height="50" width="300" id = "newLogoMobClass">');
    	newLogoMob.prependTo( "header#masthead .header_v3_container");
        $("img#newLogoMobClass").removeProp("max-width");;
    };
}); 

//re-position logo desktop 
//+ enviar button color coorporative
//+ delete header-escuela-desktop on mobile dispositives
//add logo on mobile dispositives

    jQuery(document).ready(function ($) {
        $=jQuery;
        //+ enviar button color coorporative
        $("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
        var widthW = $(window).width();
        //console.log(widthW);
        if (widthW < 750) {
            //+ delete header-escuela-desktop on mobile dispositives
            $("div#toolbar").css({"display":"none"});
            //add logo on mobile dispositives
            var newLogoMob = $( '<img src = "http://escueladetriunfadoras.com/wp-content/uploads/2017/01/Escuela-de-Triunfadora-color.png" height="50" width="300" id = "newLogoMobId">');
            //max width
            newLogoMob.prependTo( "header#masthead .header_v3_container").css({"max-width":"250px"});
            //move logo 
            var xPos = parseInt($("#newLogoMobId").position().left);
            var delta = - xPos; 
            console.log(delta);
            $("#newLogoMobId").css({"margin-left":delta + "px"});
        } else {
            //re-position logo desktop 
            $("header#masthead img").css({"width": "75%", "margin-top": "1.35%"});    
        }
    }); 

//re-position logo desktop 
//+ enviar button color coorporative
//+ delete header-escuela-desktop on mobile dispositives
//add logo on mobile dispositives
//make responsive for mobiles 

    jQuery(document).ready(function ($) {
        $=jQuery;
        //+ enviar button color coorporative
        $("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
        var widthW = $(window).width();
        //console.log(widthW);
        if (widthW < 750) {
            console.log("hi");
            //+ delete header-escuela-desktop on mobile dispositives
            $("div#toolbar").css({"display":"none"});
            //add logo on mobile dispositives
            var newLogoMob = $( '<img src = "http://escueladetriunfadoras.com/wp-content/uploads/2017/01/Escuela-de-Triunfadora-color.png" height="50" width="300" id = "newLogoMobId">');
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
            $("header#masthead img").css({"width": "75%", "margin-top": "1.35%"});  
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


//re-position logo desktop 
//+ enviar button color coorporative, no longer needed
//+ delete header-escuela-desktop on mobile dispositives, no longer needed
//add logo on mobile dispositives with min-with propierty
//make responsive for mobiles 

    jQuery(document).ready(function ($) {
        $=jQuery;
        //+ enviar button color coorporative, no longer needed
        //$("input.wpcf7-form-control.wpcf7-submit").css({"background-color": "#ff765b"});
        var widthW = $(window).width();
        //console.log(widthW);
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


//re-position logo desktop 
//+ enviar button color coorporative, no longer needed
//+ delete header-escuela-desktop on mobile dispositives, no longer needed
//add logo on mobile dispositives with min-with propierty
//make responsive for mobiles 
//hide message of apps in register form

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

//hide curriculum numbers

jQuery(document).ready(function ($) {
        $=jQuery;
        $("ul.curriculum-sections .meta-left").hide();
}); 

// color modules and 1st titles

jQuery(document).ready(function ($) {
        $=jQuery;
        //autoestudio 
        $("ul.curriculum-sections li#section-83 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-84 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-85 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-90 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-93 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-98 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-102 h4.section-header").css({"color":"#ff765b"});
        //premiun
        $("ul.curriculum-sections li#section-103 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-104 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-105 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-110 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-118 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-122 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-123 h4.section-header").css({"color":"#ff765b"});
        $("ul.curriculum-sections li#section-124 h4.section-header").css({"color":"#ff765b"});
    }); 

//problem with Tema 1. unit 4 don't showing.

jQuery(document).ready(function ($) {
        $=jQuery;
        $("ul.curriculum-sections li#section-130 li.course-lesson.course-item.course-item-6355.item-has-status.item-viewed.viewable").css({"display":"block"});
        $("ul.curriculum-sections li#section-107 li.course-lesson.course-item.course-item-7063.viewable").css({"display":"block"});      
}); 


//code in javascript /html for https://motionmailapp.com/ counter embebed in sumome 

<img  style=" display: inline-block;
    vertical-align: middle; margin-top: 15px; width: 100%; " src="http://s.mmgo.io/t/jg9" alt="motionmailapp.com" />

<script>
$(document).ready(function(){
    $("div#sumome-smartbar-popup .sumome-smartbar-close, div#sumome-smartbar-popup a.sumome-smartbar-link img.sumome-icon").hide();
}); 
</script>
