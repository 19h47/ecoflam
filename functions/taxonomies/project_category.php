<?php 

// Register Custom Taxonomy
function ecoflam_project_custom_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Catégories', 'Taxonomy General Name', 'ecoflam' ),
		'singular_name'              => _x( 'Catégorie', 'Taxonomy Singular Name', 'ecoflam' ),
		'menu_name'                  => __( 'Catégorie', 'ecoflam' ),
		'all_items'                  => __( 'Toutes les catégories', 'ecoflam' ),
		'parent_item'                => __( 'Catégorie parent', 'ecoflam' ),
		'parent_item_colon'          => __( 'Cétgorie parent :', 'ecoflam' ),
		'new_item_name'              => __( 'Nom de la nouvelle catégorie', 'ecoflam' ),
		'add_new_item'               => __( 'Ajouter une nouvelle catégorie', 'ecoflam' ),
		'edit_item'                  => __( 'Éditer la nouvelle catégorie', 'ecoflam' ),
		'update_item'                => __( 'Mettre à jour la catégorie', 'ecoflam' ),
		'view_item'                  => __( 'Voir la catégorie', 'ecoflam' ),
		'separate_items_with_commas' => __( 'Séparez les catégories avec des virgules', 'ecoflam' ),
		'add_or_remove_items'        => __( 'Ajouter ou supprimer les catégories', 'ecoflam' ),
		'choose_from_most_used'      => __( 'Choisir parmi les plus utilisées', 'ecoflam' ),
		'popular_items'              => __( 'Catégories populaires', 'ecoflam' ),
		'search_items'               => __( 'Chercher une catégorie', 'ecoflam' ),
		'not_found'                  => __( 'Aucun résultat trouvé', 'ecoflam' ),
		'no_terms'                   => __( 'Pas de catégorie', 'ecoflam' ),
		'items_list'                 => __( 'Liste des catégories', 'ecoflam' ),
		'items_list_navigation'      => __( 'Liste de navigation des catégories', 'ecoflam' ),
	);

	$rewrite = array(
        'slug'          => 'nos-realisations',
        // 'hierarchical'  => true,
    );

	$args = array(
		'labels'                     => $labels,
        'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
        'rewrite'                    => $rewrite,
	);
	register_taxonomy( 'project_category', array( 'project' ), $args );

}
add_action( 'init', 'ecoflam_project_custom_taxonomy', 0 );