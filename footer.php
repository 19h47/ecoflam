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
									<a href="https://www.google.fr/maps/place/32+Avenue+Jacques+Duclos,+37700+Saint-Pierre-des-Corps/@47.3797625,0.7201911,17z/data=!3m1!4b1!4m2!3m1!1s0x47fcd410ee8eb249:0x83f10976d113fefa" target="_blank">
										<span class="color-red uppercase">
											Saint Pierre des Corps
										</span>
										<br>
										<br>
										<?php echo nl2br( get_option( 'contact_information_saintpierredescorps' ) ); ?>
				 						<br>
									</a>
									<br>
									<!-- http://stackoverflow.com/a/2109339 -->
									Tél. : <a href="tel:<?php echo preg_replace('/\s+/', '', get_option( 'contact_information_saintpierredescorps_phone' )); ?>"><?php echo get_option( 'contact_information_saintpierredescorps_phone' ); ?></a><br> 
									Mail : <a href="mailto:<?php echo get_option( 'contact_information_saintpierredescorps_email' ); ?>"><?php echo get_option( 'contact_information_saintpierredescorps_email' ); ?></a><br>
									<br>
									</span>
									<span class="hidden-to-m">—</span> <br>
									<br>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-12 site-footer__text__inner">
									<a href="https://www.google.fr/maps/place/105+Avenue+de+Tours,+37400+Amboise/@47.4050532,0.9586584,17z/data=!3m1!4b1!4m2!3m1!1s0x47fcca5f6928339d:0x930d62f145d34e9f" target="_blank">
										<span class="color-red uppercase">
											Amboise
										</span>
										<br>
										<br>
										<?php echo nl2br( get_option( 'contact_information_amboise' ) ); ?>
										<br>
									</a>
									<br>
									<!-- http://stackoverflow.com/a/2109339 -->
									Tél. : <a href="tel:<?php echo preg_replace('/\s+/', '', get_option( 'contact_information_amboise_phone' )); ?>"><?php echo get_option( 'contact_information_amboise_phone' ); ?></a><br> 
									Mail : <a href="mailto:<?php echo get_option( 'contact_information_amboise_email' ); ?>"><?php echo get_option( 'contact_information_amboise_email' ); ?></a><br>
								</div>
							</div>
						</div>

						<div class="col-xs-12 col-md-8">
							<p class="site-footer__title">
								Nous rendre visite
							</p>
							<p class="site-footer__text">
								<?php echo nl2br( get_option( 'timetable_opening' ) ); ?>
							</p>

							<iframe class="site-footer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.649320186645!2d0.7201911156226458!3d47.37976247917026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd410ee8eb249%3A0x83f10976d113fefa!2s32+Avenue+Jacques+Duclos%2C+37700+Saint-Pierre-des-Corps!5e0!3m2!1sfr!2sfr!4v1459532161811" width="100%" height="auto" style="border:0" allowfullscreen></iframe>
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
	</body><!-- /body -->
</html><!-- /html -->