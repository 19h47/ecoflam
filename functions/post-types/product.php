<?php

// Register Custom Post Type
function ecoflam_product_post_type() {

    $labels = array(
        'name'                => _x( 'Produits', 'Projet Nom pluriel', 'ecoflam' ),
        'singular_name'       => _x( 'Produit', 'Projet Nom singulier', 'ecoflam' ),
        'menu_name'           => __( 'Produits', 'ecoflam' ),
        'menu_admin_bar'      => __( 'Produit', 'ecoflam' ),
        'parent_item_colon'   => __( '', 'ecoflam' ),
        'all_items'           => __( 'Tous les produits', 'ecoflam' ),
        'add_new'             => __( 'Ajouter', 'ecoflam' ),
        'add_new_item'        => __( 'Ajouter un nouveau produit', 'ecoflam' ),
        'edit_item'           => __( 'Modifier le produit', 'ecoflam' ),
        'new_item'            => __( 'Nouveau produit', 'ecoflam' ),
        'view_item'           => __( 'Voir le produit', 'ecoflam' ),
        'search_items'        => __( 'Chercher parmi les produits', 'ecoflam' ),
        'not_found'           => __( 'Aucun produit trouvé.', 'ecoflam' ),
        'not_found_in_trash'  => __( 'Aucun produit trouvé dans la corbeille.', 'ecoflam' ),
        // 'update_item'         => __( 'Mettre à jour', 'ecoflam' ),
    );
    $rewrite = array(
        'slug'                => 'produits',
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
        'label'               => __( 'Produit', 'ecoflam' ),
        'description'         => __( 'Les produits', 'ecoflam' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'thumbnail', 'custom-fields' ),
        'taxonomies'          => array( 'product_category' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_nav_menus'   => true,
        'show_in_menu'        => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-products',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'rewrite'             => $rewrite,
        'capability_type'     => 'post',
    );
    register_post_type( 'product', $args );

}

// Hook into the 'init' action
add_action( 'init', 'ecoflam_product_post_type', 0 );

// -----------------------------------------------------------------------------