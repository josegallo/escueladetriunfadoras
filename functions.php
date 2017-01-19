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

//Ajax widget login-popup
add_action( 'wp_ajax_nopriv_thim_login_ajax', 'thim_login_ajax_callback' );
add_action( 'wp_ajax_thim_login_ajax', 'thim_login_ajax_callback' );
if ( !function_exists( 'thim_login_ajax_callback' ) ) {
    function thim_login_ajax_callback() {
        //ob_start();
        global $wpdb;

        //We shall SQL prepare all inputs to avoid sql injection.
        $username = $wpdb->prepare( $_REQUEST['username'], array() );
        $password = $_REQUEST['password'];//$wpdb->prepare( $_REQUEST['password'] );
        $remember = $wpdb->prepare( $_REQUEST['remember'], array() );
        $redirect = isset( $_REQUEST['redirect'] ) ? $_REQUEST['redirect'] : false;

        if ( $remember ) {
            $remember = "true";
        } else {
            $remember = "false";
        }

        $login_data                  = array();
        $login_data['user_login']    = $username;
        $login_data['user_password'] = $password;
        $login_data['remember']      = $remember;
        $user_verify                 = wp_signon( $login_data, false );


        $code = 1;

        if ( is_wp_error( $user_verify ) ) {
            $message = '<p class="message message-error">' . esc_html__( 'Wrong username or password.', 'eduma' ) . '</p>';
            $code    = - 1;
        } else {
            $message = '<p class="message message-success">' . esc_html__( 'Login successful, redirecting...', 'eduma' ) . '</p>';
        }

        $response_data = array(
            'code'    => $code,
            'message' => $message
        );

        if ( !empty( $redirect ) ) {
            $redirect_url = site_url() . '/profile';
            $response_data['redirect'] = $redirect_url;

        }

        echo json_encode( $response_data );
        die(); // this is required to return a proper result
    }
}




