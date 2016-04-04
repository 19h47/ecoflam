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

	<section class="site-section entreprise">
		<div class="inner">
			<div class="inner-wrapper js-inner row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2">
					<div class="row center-xs middle-xs">
						<div class="col-xs">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-poeles-bois.svg" width="31px" height="73px">
							<p class="entreprise__description hidden-from-m">
								Poêles à bois
							</p>
						</div>
						<div class="col-xs">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-poeles-granules.svg" width="31px" height="73px">
							<p class="entreprise__description hidden-from-m">
								Poêles à granulés
							</p>
						</div>
						<div class="col-xs">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-cheminees.svg" width="57px" height="74px">
							<p class="entreprise__description hidden-from-m">
								Cheminées
							</p>
						</div>
						<div class="col-xs">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-foyers-gaz.svg" width="71px" height="39px">
							<p class="entreprise__description hidden-from-m">
								Foyers gaz
							</p>
						</div>
						<div class="col-xs">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__picto-inserts.svg" width="50px" height="44px">
							<p class="entreprise__description hidden-from-m">
								Inserts
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="inner has-padding hidden-to-s">
			<div class="inner-wrapper js-inner row">
				<div class="col-xs-8 col-xs-offset-2">	
					<div class="row center-xs middle-xs">
						<div class="col-xs">
							<p class="entreprise__description">
								Poêles à bois
							</p>
						</div>
						<div class="col-xs">
							<p class="entreprise__description">
								Poêles à granulés
							</p>
						</div>
						<div class="col-xs">
							<p class="entreprise__description">
								Cheminées
							</p>
						</div>
						<div class="col-xs">
							<p class="entreprise__description">
								Foyers gaz
							</p>
						</div>
						<div class="col-xs">
							<p class="entreprise__description">
								Inserts
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="site-section">
		<div class="inner is-last">
			<div class="inner-wrapper js-inner row top-xs">
				<div class="site-section__text col-xs-12 col-sm-4">
					<p class="color-red text-20">
						Depuis plus de vingt ans, la société ECOFLAM, située dans le département de l'Indre-et-Loire, s'appuie sur une expertise affûtée afin de concevoir des solutions innovantes et personnalisées pour le confort de votre intérieur.
					</p>
				</div>
				<div class="site-section__text col-xs-12 col-sm-8 text-16 color-grey text-multiple-column">
					<p class="display-inline-block">
						De plus en plus à l'honneur, les poêles et cheminées aux lignes épurées s'imposent au cœur de votre foyer.
						<br>
						La gamme des installations commercialisées par ECOFLAM offre une grande variété de marques et de produits à la pointe de la technologie alliant style et performance, quel que soit votre budget.
						<br>
					</p>
					<p class="display-inline-block">
						Vous trouverez notamment des poêles à bois, à accumulation et à granulés.
						<br>
						<br>
						Deux showrooms sont a votre disposition au public à Amboise et à Saint-Pierre-des-Corps où notre équipe vous accueille et vous conseille... Chaleureusement !
					</p>
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
				<div class="insert__inner col-xs-10 col-md-6">
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
				<div class="col-xs-12 col-sm-6">
					<a href="<?php echo home_url( '/' ) ?>les-produits/poeles-a-bois/">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-01.jpg" alt="Poêles" width="440" height="535">
					</a>
				</div>
				<div class="col-xs-12 col-sm-6">
					<p class="products__title h3">Poêles</p>
					<a href="<?php echo home_url( '/' ) ?>les-produits/poeles-a-bois/" class="products__link hoverable">Voir</a>
					<a href="<?php echo home_url( '/' ) ?>les-produits/cheminees/">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-02.jpg" alt="Cheminées" width="443" height="296">
					</a>
					<p class="products__title h3">Cheminées</p>
					<a href="<?php echo home_url( '/' ) ?>les-produits/cheminees/" class="products__link hoverable">Voir</a>
				</div>
			</div>
		</div>

		<div class="inner is-last">
			<div class="row inner-wrapper js-inner center-xs">
				<div class="col-xs-12 col-md-9">
					<a href="<?php echo home_url( '/' ) ?>les-produits/inserts/">
						<img class="products__img grayscale" src="<?php echo get_template_directory_uri() ?>/img/ecoflam__product-03.jpg" alt="Inserts" width="700" height="284">
					</a>
				</div>
			</div>
			<div class="row inner-wrapper js-inner center-xs">
				<div class="col-xs-12 col-md-9 text-left">
					<p class="products__title h3">Inserts</p>
					<a href="<?php echo home_url( '/' ) ?>les-produits/inserts/" class="products__link text-left hoverable">Voir</a>
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
					<div class="row middle-xs center-xs brands">
						<a class="col-xs-6 col-sm" href="http://www.altechpoeles.com">
							<img alt="altechpoeles" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__altechpoeles.svg"  width="58px" height="23px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.bgfires.com">
							<img alt="bgfires" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__bgfires.svg"  width="90px" height="27px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.poujoulat.fr/fr/">
							<img alt="poujoulat" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__poujoulat.svg" width="86px" height="47px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.danskan.be">
							<img alt="danskan" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__danskan.svg" width="46px" height="46px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.dixneuf.com">
							<img alt="dixneuf" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__dixneuf.svg" width="89px" height="26px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.scan-line.fr">
							<img alt="scan-line" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__scan-line.svg" width="77px" height="41px">
						</a>
					</div>
					<div class="row middle-xs center-xs brands">
						<a class="col-xs-6 col-sm" href="http://www.kal-fire.com/fr">
							<img alt="kal-fire" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__kal-fire.svg" width="99px" height="31px">
						</a>

						<a class="col-xs-6 col-sm" href="http://nordpeis.fr">
							<img alt="nordpeis" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__nordpeis.svg" width="92px" height="31px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.olsberg.com">
							<img src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__olsberg.svg" >
						</a>

						<a class="col-xs-6 col-sm" href="http://www.spartherm.com/fr/accueil/">
							<img alt="spartherm" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__spartherm.svg" width="126px" height="58px">
						</a>
						<a class="col-xs-6 col-sm" href="http://stuv.com/fr">
							<img alt="stuv" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__stuv.svg" width="59px" height="19px">
						</a>
					</div>

					<div class="row middle-xs center-xs brands">

						<a class="col-xs-6 col-sm" href="http://www.thermorossi.fr">
							<img alt="thermorossi" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__thermorossi.svg" width="123px" height="18px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.traforart.net">
							<img alt="traforart" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__traforart.svg" width="126px" height="11px">
						</a>

						<a class="col-xs-6 col-sm" href="http://www.tulp.eu">
							<img alt="tulp" src="<?php echo get_template_directory_uri() ?>/img/brand-logo/logo__tulp.svg" width="86px" height="40px">
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
			<div class="js-event-slider event row inner-wrapper js-inner start-xs event--slide">
			  	<div class="event-list col-xs">

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
				    		<?php the_title(); ?>
				    	</p>
				    	<p class="event-item__description">
				    		<?php the_excerpt(); ?>
				    		
				    	</p>
				    </div>

					<?php endwhile; ?>

					<?php wp_reset_query(); ?>

			  	</div>
				
				<nav class="row end-xs">
					<div class="event-nav col-xs-12">
		  				<button class="event-buttonPrevious">
		  					<img class="svg" src="<?php echo get_template_directory_uri('') ?>/img/svg/ecoflam__nav-previous.svg" alt="" width="12px" height="15px">
		  				</button>
		  				<button class="event-buttonNext">
		  					<img class="svg" src="<?php echo get_template_directory_uri('') ?>/img/svg/ecoflam__nav-next.svg" alt="" width="12px" height="15px">
		  				</button>
		  			</div>
		  		</nav>
			</div>	
		</div>
	</section>
<?php get_footer(); ?>