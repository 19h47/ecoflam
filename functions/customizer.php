<?php

/**
 * 
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function ecoflam_customize_register( $wp_customize ) {

    // Add contact_information section -----------------------------------------------------
    
    $wp_customize->add_section( 'contact_information', array(
        'title' => 'Coordonnées',
    ) );

    // Add Company settings and controls in related section
    $wp_customize->add_setting( 'contact_information_saintpierredescorps', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_setting( 'contact_information_saintpierredescorps_phone', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_setting( 'contact_information_saintpierredescorps_email', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_setting( 'contact_information_amboise', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_setting( 'contact_information_amboise_phone', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_setting( 'contact_information_amboise_email', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );
    
    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_saintpierredescorps', array(
        'label'     => 'Adresse postale de Saint-Pierre-des-Corps',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_saintpierredescorps',
        'type'      => 'textarea',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_saintpierredescorps_phone', array(
        'label'     => 'Numéro de téléphone de Saint-Pierre-des-Corps',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_saintpierredescorps_phone',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_saintpierredescorps_email', array(
        'label'     => 'Adresse email de Saint-Pierre-des-Corps',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_saintpierredescorps_email',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_amboise', array(
        'label'     => 'Adresse postale d\'Amboise',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_amboise',
        'type'      => 'textarea',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_amboise_phone', array(
        'label'     => 'Numéro de téléphone d\'Amboise',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_amboise_phone',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'contact_information_amboise_email', array(
        'label'     => 'Adresse email d\'Amboise',
        'section'   => 'contact_information',
        'settings'  => 'contact_information_amboise_email',
    ) ) );

    // Add timetable section -----------------------------------------------------

    $wp_customize->add_section( 'timetable', array(
        'title'         => 'Horaires',
        'description'   => 'Les horaires d\'ouverture',
    ) );

    // Add Timetable settings and controls in related section
    $wp_customize->add_setting( 'timetable_opening', array(
        'type'      => 'option',
        'transport' => 'postMessage',
    ) );

    $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'timetable_opening', array(
        'label'     => 'Les horaires d\'ouverture',
        'section'   => 'timetable',
        'settings'  => 'timetable_opening',
        'type'      => 'textarea',
    ) ) );
}

add_action( 'customize_register', 'ecoflam_customize_register', 11 );