<?php 
/**
 * Template Name: Nos Réalisations
 */ 
?>
<?php get_header(); ?>
<section class="site-section">
	<div class="inner has-padding">
		<div class="inner-wrapper row center-xs">
			<div class="col-xs-12">
				<h2 class="site-section__title">
						<?php the_title(); ?>
				</h2>
			</div>
		</div>
	</div>
	<?php $params = array(
		'terms' 	=> get_terms('project_category'),
		'term_name'	=> 'project',
		'taxonomy' 	=> 'project_category',
	); ?>
	<?php get_partial( 'components/content', 'navigation', $params ); ?>
	<?php get_partial( 'components/content', 'page', $params ); ?>

</section>
<?php get_footer(); ?>