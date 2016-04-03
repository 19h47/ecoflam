<?php get_header(); ?>
<section class="site-section">
	<div class="inner has-padding">
		<div class="inner-wrapper js-inner row center-xs">
			<div class="col-xs-12">
				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<h2 class="site-section__title">
					<?php the_title(); ?>
				</h2>
			</div>
		</div>
	</div>
	<div class="inner has-padding">
		<div class="inner-wrapper js-inner row <?php if( is_page( 'contact' ) ) { ?>center-xs<?php } ?>">
			<div class="<?php if( is_page( 'contact' ) ) { ?>col-xs-8<?php } else { ?>col-xs-12<?php } ?>">
				<?php the_content(); ?>
				<?php endwhile; else: ?>
				<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>

<?php if( is_page( 'contact' )) { ?>
<section class="site-section background-dark-grey">
	<div class="inner">
		<div class="inner-wrapper js-inner row center-xs">
			<div class="col-xs-10 col-offset-1 page-contact__footer">
				<span class="page-contact__footer__title">Nous nous déplaçons dans les départements</span><br>
				<span class="page-contact__footer__text">d’Indre-et-Loire, du Loir-et-Cher, de l’Indre, du Loiret, du Maine-et-Loire de la Sarthe et de la Vienne.</span>
			</div>
		</div>
	</div>
</section>
<?php } ?>
<?php get_footer(); ?>