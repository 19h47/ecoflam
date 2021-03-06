<div class="inner has-padding">

	<div class="inner-wrapper js-inner row">
		<div class="col-xs-10 col-xs-offset-1 position-relative">
			
			<!-- OVERLAY -->
			<div id="js-image-overlay" class="row center-xs middle-xs page-section__overlay-image">
				<div class="col-xs-10 col-xs-offset-1 page-section__overlay-image__inner">
					<span id="js-image-close" class="page-section__overlay-image__close">
						<img class="svg" src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__close.svg" alt="" width="12px" height="12px">
					</span>
					<span id="js-next" class="page-section__overlay-image__next"></span>
					<span id="js-previous" class="page-section__overlay-image__previous"></span>
					<img id="js-image-overlay-image" class="page-section__overlay-image__img" src="">
					<p id="js-image-overlay-category" class="page-section__text__category text-left color-grey">
						Categorie
					</p>
					<p id="js-image-overlay-title" class="page-section__text__title text-left color-text-black">
						Titre
					</p>

					<p id="js-image-overlay-description" class="page-section__text__description text-left color-text-black">
						Description
					</p>	
				</div>
			</div>

			<div class="row">

				<?php $paged = get_query_var('paged') ? get_query_var('paged') : 1; ?>
				<?php if( is_tax( ) ){

					$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
					
					$currentterm = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); 
					$args = array(
						'post_type' 		=> $term_name, 
						'posts_per_page' 	=> 12, 
						'paged' 			=> $paged,
						'tax_query' => array(
							array(
								'taxonomy' => $term_name .'_category',
								'field'    => 'slug',
								'terms'    => $term->name,
							),
						)
					);
				} else {
					$args = array(
						'post_type' 		=> $term_name, 
						'posts_per_page' 	=> 12, 
						'paged' 			=> $paged,
					);
				}

				$loop = new WP_Query( $args );
				
				?>
				<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
				
				<?php $url = wp_get_attachment_url( get_post_thumbnail_id( $post->ID ) ); ?>

				<div class="col-xs-12 col-sm-6 col-md-4 page-section js-toggle-image">
					<div<?php if( $url ){ ?>
							style="background-image: url('<?php echo $url; ?>');"
						<?php } else { ?>
							class="background-color-grey page-section__inner"
						<?php } ?> class="page-section__inner js-image">
						
						<div class="page-section__text text-left">
							<p class="js-category page-section__text__category color-white">
								<?php $term_list = wp_get_post_terms( $post->ID, $taxonomy, array( "fields" => "names" ) );
								echo $term_list[0]; ?>
							</p>
							<p class="js-title page-section__text__title color-white">
								<?php the_title(); ?>
							</p>
							
							<?php if ( get_field('description') ){ ?>
					
							<p class="js-description display-none">
								
								<?php the_field('description'); ?></h2>
								
							</p>

							<?php } ?>

							<button class="page-section__text__button h4 text-left display-inline-block">
								Voir
							</button>
						</div>

						<div class="page-section__overlay"></div>
					</div>
				</div>
				<?php endwhile; ?>

			</div>
		</div>
	</div>
</div>

<?php

$big = 999999999; // need an unlikely integer
$paginate_links = paginate_links( 
	array(
		'base' 			=> str_replace( $big, '%#%', get_pagenum_link( $big ) ),
		'format' 		=> '?paged=%#%',
		'current' 		=> max( 1, get_query_var('paged') ),
		'total' 		=> $loop->max_num_pages,
		'prev_text'     => __('<'),
		'next_text'     => __('>'),
	)
);
?>
<?php if( $paginate_links ){ ?>
<div class="inner has-padding">
	<div class="inner-wrapper js-inner row center-xs">
		<div class="col-xs-12 text-center">
			<?php echo $paginate_links; ?>
		</div>
	</div>
</div>
<?php } ?>
