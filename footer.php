			<?php if( is_page() || is_tax() ) { ?>
				</main>
			<?php } ?>
			</div>
			<footer class="site-footer site-section">
				<div class="inner has-padding">
					<div class="row inner-wrapper js-inner center-xs">
						<div class="col-xs-12 col-s-4">
							<h2 class="site-section__title">
								<img class="svg" alt="Écoflam logo" src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__logo.svg" width="290" height="33">
							</h2>
						</div>
					</div>
				</div>
				<div class="inner">
					<div class="row inner-wrapper js-inner">
						<div class="col-xs-12 col-md-4">
							<p class="site-footer__title">
								Nous Contacter
							</p>
							<div class="site-footer__text row">
								<div class="col-xs-12 col-sm-6 col-md-12 site-footer__text__inner">
									<a href="https://www.google.fr/maps/place/E.Leclerc+La+Ville+aux+Dames/@47.3958611,0.7853845,15z/data=!4m5!3m4!1s0x0:0xe54ff8b11c57ab82!8m2!3d47.3958611!4d0.7853845" target="_blank">
										<span class="color-red uppercase">
											<?php echo _e( 'La Ville-aux-Dames', 'ecoflam' ) ?>
										</span>
										<br>
										<br>
										<?php echo nl2br( get_option( 'contact_information_saintpierredescorps' ) ) ?>
				 						<br>
									</a>
									<br>
									<!-- http://stackoverflow.com/a/2109339 -->
									Tél. : <?php echo get_option( 'contact_information_saintpierredescorps_phone' ); ?><br> 
									Mail : <a href="mailto:<?php echo get_option( 'contact_information_saintpierredescorps_email' ) . '">' . get_option( 'contact_information_saintpierredescorps_email' ); ?></a><br>
									<br>
									</span>
									<span class="hidden-to-m">—</span> <br>
									<br>
								</div>
								<!-- <div class="col-xs-12 col-sm-6 col-md-12 site-footer__text__inner">
									<a href="https://goo.gl/maps/Jnd2Vd9Psqz" target="_blank">
										<span class="color-red uppercase">
											La Ville-aux-Dames
										</span>
										<br>
										<br> -->
										<?php // echo nl2br( get_option( 'contact_information_amboise' ) ); ?>
										<!-- <br>
									</a>
									<br> -->
									<!-- http://stackoverflow.com/a/2109339 -->
									<!-- Tél. : <a href="tel:<?php // echo preg_replace( '/\s+/', '', get_option( 'contact_information_amboise_phone' ) ) . '">' . get_option( 'contact_information_amboise_phone' ); ?></a><br> 
									Mail : <a href="mailto:<?php // echo get_option( 'contact_information_amboise_email' ) . '">' . get_option( 'contact_information_amboise_email' ); ?></a><br>
								</div> -->
							</div>
						</div>

						<div class="col-xs-12 col-md-8">
							<p class="site-footer__title">
								Nous rendre visite
							</p>
							<p class="site-footer__text">
								<?php echo nl2br( get_option( 'timetable_opening' ) ) ?>
							</p>

							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10803.297164198348!2d0.7853845!3d47.3958611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe54ff8b11c57ab82!2sE.Leclerc+La+Ville+aux+Dames!5e0!3m2!1sfr!2sfr!4v1490297251633" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen></iframe>
						</div>
					</div>
				</div>

				<div class="inner site-footer__copyright">
					<div class="row inner-wrapper js-inner center-xs">
						<div class="col-xs-12">
							<p class="site-footer__copyright__text">
								© 2016 <a href="<?php echo home_url( '/' ) ?>" class="hoverable uppercase color-white"><?php echo get_bloginfo ('name'); ?></a> — Tous droits réservés  |  <a class="hoverable" href="<?php echo home_url(  ) ?>/mentions-legales">Mentions légales</a>  |  Conception : <a class="hoverable color-white" href="http://www.mokacreation.com/" target='_blank'>MOKA creation</a> — <a class="hoverable color-white" href="http://www.19h47.fr" target='_blank'>19h47</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div><!-- /#js-wrapper -->
		    <?php
		    if ( is_page('contact') && function_exists( 'wpcf7_enqueue_scripts' ) ) {
		        wpcf7_enqueue_scripts();
		    }
		?>
		<?php wp_footer(); ?>
		<script>

        	// tell Tocca.js to add custom events like 'tap' only on touch devices
        	var JUST_ON_TOUCH_DEVICES = true;

    	</script>
	</body><!-- /body -->
</html><!-- /html -->