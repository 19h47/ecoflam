<?php get_header(); ?>

	<section class="site-section center-xs oblic-rtl background-white">
		<div class="inner has-padding">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12">
					<h2 class="site-section__title">
						L'entreprise
					</h2>
				</div>
			</div>
		</div>
	</section>

	<section class="site-section entreprise background-white">
		<div class="inner has-padding">
			<div class="inner-wrapper js-inner row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2">
					<div class="row">
						<div class="display-table fixed w100">
						
							<div class="display-table-cell text-center entreprise__cell">
								<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-poeles-bois.svg" width="31" height="73" alt="Poêles à bois">
								<p class="entreprise__description hidden-from-m">
									Poêles à bois
								</p>
							</div>
					
							<div class="display-table-cell text-center entreprise__cell">
								<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-poeles-granules.svg" width="31" height="73" alt="Poêles à granulés">
								<p class="entreprise__description hidden-from-m">
									Poêles à granulés
								</p>
							</div>
						
							<div class="display-table-cell text-center entreprise__cell">
								<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-cheminees.svg" width="57" height="74" alt="Cheminées">
								<p class="entreprise__description hidden-from-m">
									Cheminées
								</p>
							</div>					
						
							<div class="display-table-cell text-center entreprise__cell">
								<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-foyers-gaz.svg" width="71" height="39" alt="Foyers gaz">
								<p class="entreprise__description hidden-from-m">
									Foyers gaz
								</p>
							</div>
				
							<div class="display-table-cell text-center entreprise__cell">
								<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-inserts.svg" width="50" height="44" alt="Inserts">
								<p class="entreprise__description hidden-from-m">
									Inserts
								</p>
							</div>
						
						</div>

						<div class="display-table fixed w100 hidden-to-s">
							<div class="display-table-cell text-center">
								<p class="entreprise__description">
									Poêles à bois
								</p>
							</div>
								<div class="display-table-cell text-center">
								<p class="entreprise__description">
									Poêles à granulés
								</p>
							</div>
							<div class="display-table-cell text-center">
								<p class="entreprise__description">
									Cheminées
								</p>
							</div>
							<div class="display-table-cell text-center">
								<p class="entreprise__description">
									Foyers gaz
								</p>
							</div>
							<div class="display-table-cell text-center">
								<p class="entreprise__description">
									Inserts
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="site-section background-white">
		<div class="inner is-last">
			<div class="inner-wrapper js-inner row top-xs">
				<div class="site-section__text col-xs-12 col-sm-4">
		
					<?php if ( get_field( 'introduction_text-left' ) ) : ?>
					
					<p class="color-red text-20">
						<?php the_field( 'introduction_text-left' ) ?>
					</p>

					<?php endif ?>

				</div>

				<div class="site-section__text col-xs-12 col-sm-8 text-16 color-grey text-multiple-column">
					
					<?php if ( get_field('introduction_text-center') ) : ?>
					
					<p class="display-inline-block">
						<?php the_field('introduction_text-center'); ?>
					</p>
					<?php endif; ?>

					<?php if ( get_field('introduction_text-right') ) : ?>
					
					<p class="display-inline-block">
						<?php the_field('introduction_text-right'); ?>
					</p>
					<?php endif; ?>

				</div>
			</div>
		</div>
	</section>

	<section class="site-section oblic-ltr background-light-grey center-xs position-relative">
		<div class="inner has-padding">
			<div class="inner-wrapper js-inner row">
				<div class="col-xs-12">
					<h2 class="site-section__title">
						Nos produits
					</h2>
				</div>
			</div>
		</div>
		
		<div class="inner">
			<div class="row inner-wrapper js-inner insert center-xs">
				<div class="insert__inner col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
					<div class="insert__title color-white">
						Certification | Agrément | Label
					</div>
					<div class="insert__content">
						<ul class="insert__content__list">
							<li class="insert__content__list__item">
								Flamme Verte
							</li>
							<li class="insert__content__list__item">
								Garantie décennale
							</li>
							<li class="insert__content__list__item">
								Distributeur, installateur officiel Poujoulat
							</li>
							<li class="insert__content__list__item">
								RGE Quali'bois
							</li>
							<li class="insert__content__list__item">
								Expert chaleur bois
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="inner">
			<div class="inner-wrapper js-inner row start-xs">	
				<div class="col-xs-12 col-sm-6 inner-wrapper__image">
					<a class="display-block" href="<?php echo home_url( '/les-produits/poeles-a-bois/' ) ?>">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-01.jpg" alt="Poêles" width="440" height="535">
					</a>
				</div>
				<div class="col-xs-12 col-sm-6 inner-wrapper__image">
					<p class="products__title h3">Poêles</p>
					<a href="<?php echo home_url( '/les-produits/poeles-a-bois/' ) ?>" class="products__link hoverable">Voir</a>
					<a class="display-block" href="<?php echo home_url( '/les-produits/cheminees/' ) ?>">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-02.jpg" alt="Cheminées" width="443" height="296">
					</a>
					<p class="products__title h3">Cheminées</p>
					<a href="<?php echo home_url( '/' ) ?>les-produits/cheminees/" class="products__link hoverable">Voir</a>
				</div>
			</div>
		</div>

		<div class="inner is-last">
			<div class="row inner-wrapper js-inner center-xs">
				<div class="col-xs-12 col-md-9 inner-wrapper__image">
					<a class="display-block" href="<?php echo home_url( '/les-produits/inserts/' ) ?>">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-03.jpg" alt="Inserts" width="700" height="284">
					</a>
				</div>
			</div>
			<div class="row inner-wrapper js-inner center-xs">
				<div class="col-xs-12 col-md-9 text-left-m text-center-xs">
					<p class="products__title h3">Inserts</p>
					<a href="<?php echo home_url( '/les-produits/inserts/' ) ?>" class="products__link text-left-m text-center-xs hoverable">Voir</a>
				</div>
			</div>
		</div>

	</section>

	<section class="site-section center-xs oblic-rtl background-white">
		<div class="inner has-padding">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12">
					<h2 class="site-section__title">
						Nos marques
					</h2>
				</div>
			</div>
		</div>
		
		<div class="inner is-last">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12 col-md-10 col-md-offset-1">
					
					<div class="row center-xs brands">
						
						<a class="col-xs-6 col-sm-3" href="http://www.altechpoeles.com" target="_blank">
							<img alt="altechpoeles" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__altechpoeles.svg"  width="58" height="23">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.bgfires.com" target="_blank">
							<img alt="bgfires" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__bgfires.svg"  width="90" height="27">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.poujoulat.fr/fr/" target="_blank">
							<img alt="poujoulat" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__poujoulat.svg" width="86" height="47">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.danskan.be" target="_blank">
							<img alt="danskan" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__danskan.svg" width="46" height="46">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.dixneuf.com" target="_blank">
							<img alt="dixneuf" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__dixneuf.svg" width="89" height="26">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.scan-line.fr" target="_blank">
							<img alt="scan-line" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__scan-line.svg" width="77" height="41">
						</a>
				
						<a class="col-xs-6 col-sm-3" href="http://www.kal-fire.com/fr" target="_blank">
							<img alt="kal-fire" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__kal-fire.svg" width="99" height="31">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://nordpeis.fr" target="_blank">
							<img alt="nordpeis" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__nordpeis.svg" width="92" height="31">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.olsberg.com/poeles/fr/" target="_blank">
							<img src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__olsberg.svg" width="87" height="34" alt="Olsberg">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.spartherm.com/fr/accueil/" target="_blank">
							<img alt="spartherm" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__spartherm.svg" width="126" height="58">
						</a>
						<a class="col-xs-6 col-sm-3" href="http://stuv.com/fr" target="_blank">
							<img alt="stuv" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__stuv.svg" width="59" height="19">
						</a>
						<a class="col-xs-6 col-sm-3" href="http://www.thermorossi.fr" target="_blank">
							<img alt="thermorossi" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__thermorossi.svg" width="123" height="18">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.traforart.net" target="_blank">
							<img alt="traforart" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__traforart.svg" width="126" height="11">
						</a>

						<a class="col-xs-6 col-sm-3" href="http://www.tulp.eu" target="_blank">
							<img alt="tulp" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__tulp.svg" width="86" height="40">
						</a>
					</div>
				</div>
			</div>
		</div>

	</section>

	<section class="site-section oblic-ltr background-light-grey center-xs">
		<div class="inner has-padding">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12">
					<h2 class="site-section__title">
						Nos services
					</h2>
				</div>
			</div>	
		</div>
	</section>

	<section class="site-section background-light-grey">
		<div class="inner is-last">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12 color-grey text-16">
					<p>
						<strong>Des produits sélectionnés :</strong> des appareils répondant à des critères techniques pointus, choisis pour leurs qualités et leur durabilité.<br>
						<strong>La connaissance des matériaux :</strong> depuis des décennies l’expérience acquise a permis à ECOFLAM de s’entourer de partenaires sélectionnés pour leur expertise, afin de fournir les meilleurs matériaux pour chaque type de création.<br>
						<strong>Une équipe commerciale à l’écoute :</strong> des conseils personnalisés proposés par une équipe commerciale expérimentée.<br>
						<strong>Des techniciens qualifiés :</strong> Une étude technique approfondie réalisée par notre équipe, nos techniciens sont formés en continue aux évolutions des normes et techniques en vigueur (DTU 24.1 et 24.2).<br>
						<strong>Un service après-vente</strong> réactif exclusivement réservé aux clients ECOFLAM qui assure le suivi et l’entretien des cheminées à foyer fermés, inserts, poêles à bois, poêles à granulés et foyer gaz.<br>
					</p>
				</div>
			</div>

			<div class="row inner-wrapper js-inner top-xs">
				<div class="col-xs-12 color-red text-16">
					<ul class="list-multiple-column">
						<li>
							Étude personnalisée et gratuite.
						</li>
						<li>
							Visite préalable effectuée par notre équipe.
						</li>
						<li>
							Installation de conduit de fumée Poujoulat.
						</li>
						<li>
							Vente et installation de cheminées, foyers fermés bois, gaz et éthanol, inserts, poêles à bois et granulés, feu de jardin.
						</li>
						<li>
							Tubage des conduits de fumée.
						</li>
						<li>
							Entretiens et maintenances de nos installations.
						</li>
						<li>
							Vente d’accessoires divers.
						</li>
						<li>
							Ramonage.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- ÉVÈNEMENTS ET ACTUALITÉS-->
	<section class="site-section oblic-rtl background-white background-dark-grey center-xs">
		<div class="inner has-padding">
			<div class="row inner-wrapper js-inner">
				<div class="col-xs-12">
					<h2 class="site-section__title color-white">
						Évènements et actualités
					</h2>
				</div>
			</div>
		</div>

		<div class="inner has-padding">
			<div class="js-event-slider event row inner-wrapper js-inner event--slide">
			  	<div class="event-list start-xs">

			  		<?php
			  		$args = array(
			  			'posts_per_page' => -1,
			  		);
					// The Query
					query_posts( $args );

					// The Loop
					while ( have_posts() ) : the_post(); ?>
					    
				    <div class="event-item">
				    	<?php if( get_post_meta( $post->ID, 'date', true ) == true ){ ?>
				    	<p class="event-item__date h3">
							<?php echo get_post_meta( $post->ID, 'date', true); ?>
				    	</p>
				    	<?php } ?>
				    	<p class="event-item__place color-red h3">
				    		<?php the_title() ?>
				    	</p>
				    	<p class="event-item__description">
				    		<?php the_excerpt() ?>
				    		
				    	</p>
				    </div>

					<?php endwhile; ?>


			  	</div>
			  	<?php 

			  	$i = 0;
				
				while ( have_posts() ) : the_post(); 
					$i++;

					if( $i >= 1) : ?>

					<nav class="row end-xs">
						<div class="event-nav col-xs-12">
			  				<button class="event-buttonPrevious">
			  					<img class="svg" src="<?php echo get_template_directory_uri('') ?>/img/svg/ecoflam__nav-previous.svg" alt="" width="12" height="15">
			  				</button>
			  				<button class="event-buttonNext">
			  					<img class="svg" src="<?php echo get_template_directory_uri('') ?>/img/svg/ecoflam__nav-next.svg" alt="" width="12" height="15">
			  				</button>
			  			</div>
			  		</nav>
					
					<?php 

					endif;
		  			
		  		endwhile;
				
				wp_reset_query(); 

				?>
			</div>	
		</div>
	</section>
<?php get_footer() ?>