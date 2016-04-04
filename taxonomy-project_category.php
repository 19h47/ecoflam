<?php get_header(); ?>
<section class="site-section">
	<div class="inner has-padding">
		<div class="inner-wrapper row center-xs">
			<div class="col-xs-12">
		
				<h2 class="site-section__title has-no-count">
					<?php $term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );?>
					<?php echo $term->name; ?>
				</h2>

			</div>
		</div>
	</div>
	<?php $params = array(
		'terms' 	=> get_terms("project_category"),
		'term_name'	=> 'project',
	);
	?>
	<?php get_partial( 'components/content', 'navigation', $params ); ?>
	<?php get_partial( 'components/content', 'page', $params ); ?>
</section>
<?php get_footer(); ?>