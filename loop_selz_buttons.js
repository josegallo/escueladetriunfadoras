//loop for selz buttons

jQuery(document).ready(function ($) {
        $=jQuery;
        // ASTC = Array of widgets Selz and Thim Press Codes
        var ASTC = [[7203,"VyvbVY$YM"],[6892,"Vk9hw87-f"],[6023,"VyIFUC$OG"]];
        for (var i = ASTC.length - 1; i >= 0; i--) {

            //remove prices
            $("article#post-" + ASTC[i][0] +  " .course-payment .course-price ").remove();
            $("article#post-" + ASTC[i][0] +  " .thim-course-menu-landing .thim-course-landing-button .course-price ").remove();
            
            //remove woocommerce buttons and add selz widgets
            var PayButton1 = "article#post-" + ASTC[i][0] +  " .course-payment form.purchase-course.form-purchase-course";
            var adding = '<script data-selz-t="_selz-btn-default" data-selz-b="http://selz.co/' + ASTC[i][1] + '" data-text="Inscríbete" data-selz-a="modal" data-selz-checkout="true" data-selz-cb="b81974" data-selz-ct="ffffff" data-selz-chbg="b81974" data-selz-chtx="ffffff" data-selz-lg="true">if (typeof _$elz === "undefined") { var _$elz = {}; } if (typeof _$elz.b === "undefined") { _$elz.b = { e: document.createElement("script") }; _$elz.b.e.src = "https://selz.com/embed/button"; document.body.appendChild(_$elz.b.e); }<\/script>';
            $(PayButton1).html(adding);

            var PayButton2 = "article#post-" + ASTC[i][0] +  " .thim-course-menu-landing form.purchase-course.form-purchase-course";
            $(PayButton2).html(adding);
            };
});