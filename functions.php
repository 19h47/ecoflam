<?php

// includes necessary files
include get_template_directory() . '/functions/_includes.php';

// -----------------------------------------------------------------------------

/**
 * Theme setup.
 */
function ecoflam_setup() {

    // set every component HTML5 friendly
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
    ) );

    // new way to handle <title> since WP 4.1
    add_theme_support( 'title-tag' );

    // register 2 menus used in the theme
    register_nav_menus( array(
        'primary'   => 'Navigation principale (header)',
        // 'secondary' => 'Navigation secondaire (footer)',
    ) );

    // enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1600 );

    // add custom sizes
    // add_image_size( 'page-header', 600 );

}
add_action( 'after_setup_theme', 'ecoflam_setup' );

// -----------------------------------------------------------------------------


/**
 * Add scripts and stylesheets in theme.
 */
function ecoflam_add_custom_assets() {
    if ( ! is_admin() ) {

        // register STYLESHEETS ------------------------------------------------

        wp_register_style( 'ecoflam-global', get_template_directory_uri() . '/dist/css/global.css', false, null );
        
        // register SCRIPTS ----------------------------------------------------

        // global $wp_scripts;
        
        // remove wp-embed script from WordPress
        wp_deregister_script( 'wp-embed' );
        // remove contact-form-7 script from CF7
        // wp_deregister_script( 'contact-form-7' );

        // remove native version of jQuery
        wp_deregister_script( 'jquery' );
        // use custom CDN version
        wp_register_script( 'jquery', '//code.jquery.com/jquery-2.2.0.min.js', false, null, true );

        // GSAP - https://greensock.com/tweenmax
        wp_register_script( 'gsap-tweenmax', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', false, null, true );
        wp_register_script( 'gsap-timelinemax', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js', false, null, true );
        // wp_register_script( 'gsap-easepack', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/easing/EasePack.min.js', false, null, true );
        // wp_register_script( 'gsap-draggable', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/utils/Draggable.min.js', false, null, true );
        // wp_register_script( 'gsap-cssplugin', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js', false, null, true );

        // Global functions
        wp_register_script( 'ecoflam-functions', get_template_directory_uri() . '/dist/js/min/functions.min.js', array( 'jquery', 'gsap-tweenmax', 'gsap-timelinemax' ), null, true );
        // wp_localize_script( 'ecoflam-functions', 'wp', array(
        //     'template_directory_uri'    => get_template_directory_uri(),
        //     'home_url'                  => home_url( '/' ),
        //     'base_url'                  => site_url(),
        //     'is_front_page'             => is_front_page(),
        // ) );
        // wp_register_script( 'ecoflam-app', get_template_directory_uri() . '/dist/js/min/functions.min.js',  array( 'jquery' ), null, true );

        // homepage
        // wp_register_script( 'ecoflam-home', get_template_directory_uri() . '/js/min/home.min.js', array( 'ecoflam-functions' ), null, true );
        // projects
        // wp_register_script( 'ecoflam-projects', get_template_directory_uri() . '/js/min/projects.min.js', array( 'ecoflam-functions' ), null, true );
        // project
        // wp_register_script( 'ecoflam-project', get_template_directory_uri() . '/js/min/project.min.js', array( 'ecoflam-functions' ), null, true );
        // contact
        // wp_register_script( 'ecoflam-contact', get_template_directory_uri() . '/js/min/contact.min.js', array( 'ecoflam-functions' ), null, true );
        // 404
        // wp_register_script( 'ecoflam-404', get_template_directory_uri() . '/js/min/404.min.js', array( 'ecoflam-functions' ), null, true );
		// app
		// should always be the last
        // wp_register_script( 'ecoflam-app', get_template_directory_uri() . '/js/min/functions.min.js', array( 'ecoflam-home', 'ecoflam-projects', 'ecoflam-project', 'ecoflam-contact', 'ecoflam-404' ), null, true );


        // then load -----------------------------------------------------------

        wp_enqueue_style( 'ecoflam-global' );
        // wp_enqueue_script( 'ecoflam-app' );
        wp_enqueue_script( 'ecoflam-functions' );

    }
}
add_action( 'wp_enqueue_scripts', 'ecoflam_add_custom_assets', 11 );

// -----------------------------------------------------------------------------