<?php

function thim_child_enqueue_styles() {
    if ( is_multisite() ) {
        wp_enqueue_style( 'thim-child-style', get_stylesheet_uri() );
    } else {
        wp_enqueue_style( 'thim-parent-style', get_template_directory_uri() . '/style.css' );
    }
}

add_action( 'wp_enqueue_scripts', 'thim_child_enqueue_styles', 100 );

/* Unset fields of billing woocommerce page */

add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
 
function custom_override_checkout_fields( $fields ) {
    unset($fields['billing']['billing_first_name']);
    unset($fields['billing']['billing_last_name']);
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_address_1']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_city']);
    unset($fields['billing']['billing_postcode']);
    unset($fields['billing']['billing_country']);
    unset($fields['billing']['billing_state']);
    unset($fields['billing']['billing_phone']);
    unset($fields['order']['order_comments']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_postcode']);
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_last_name']);
    unset($fields['billing']['billing_email']);
    unset($fields['billing']['billing_city']);
    return $fields;
}

/* WooCommerce: orders to completed automatically */
/* WooCommerce: and redirection to course after purchase */

add_action( 'woocommerce_thankyou', 'custom_woocommerce_auto_complete_order' );
function custom_woocommerce_auto_complete_order( $order_id ) {
    global $woocommerce;

    if ( !$order_id )
        return;
    $order = new WC_Order( $order_id );
    $order->update_status( 'completed' );

    global $wp;
    if ( is_checkout() && ! empty( $wp->query_vars['order-received'] ) ) {
        wp_redirect( 'http://escueladetriunfadoras.com/course/carino-tu-vales-mucho/' );
        exit;
    }

}


