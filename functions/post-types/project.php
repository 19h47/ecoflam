<?php

// Register Custom Post Type
function ecoflam_project_post_type() {

    $labels = array(
        'name'                => _x( 'Réalisations', 'Projet Nom pluriel', 'ecoflam' ),
        'singular_name'       => _x( 'Produit', 'Projet Nom singulier', 'ecoflam' ),
        'menu_name'           => __( 'Réalisations', 'ecoflam' ),
        'menu_admin_bar'      => __( 'Produit', 'ecoflam' ),
        'parent_item_colon'   => __( '', 'ecoflam' ),
        'all_items'           => __( 'Tous les réalisations', 'ecoflam' ),
        'add_new'             => __( 'Ajouter', 'ecoflam' ),
        'add_new_item'        => __( 'Ajouter une nouvelle réalisation', 'ecoflam' ),
        'edit_item'           => __( 'Modifier la réalisation', 'ecoflam' ),
        'new_item'            => __( 'Nouvelle réalisation', 'ecoflam' ),
        'view_item'           => __( 'Voir la réalisation', 'ecoflam' ),
        'search_items'        => __( 'Chercher parmi les réalisations', 'ecoflam' ),
        'not_found'           => __( 'Aucune réalisation trouvée.', 'ecoflam' ),
        'not_found_in_trash'  => __( 'Aucune réalisation trouvée dans la corbeille.', 'ecoflam' ),
        // 'update_item'         => __( 'Mettre à jour', 'ecoflam' ),
    );
    $rewrite = array(
        'slug'                => 'realisations',
        // 'with_front'          => true,
        // 'pages'               => false,
        // 'feeds'               => true,
    );

    $capabilities = array(
		'manage_terms'               => 'manage_categories',
		'edit_terms'                 => 'manage_categories',
		'delete_terms'               => 'manage_categories',
		'assign_terms'               => 'edit_posts',
	);

    $args = array(
        'label'               => __( 'Réalisation', 'ecoflam' ),
        'description'         => __( 'Nos réalisations', 'ecoflam' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', ),
        'taxonomies'          => array( 'project_category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_nav_menus'   => true,
        'show_in_menu'        => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-portfolio',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'rewrite'             => $rewrite,
        'capability_type'     => 'post',
    );
    register_post_type( 'project', $args );

}

// Hook into the 'init' action
add_action( 'init', 'ecoflam_project_post_type', 0 );

// -----------------------------------------------------------------------------