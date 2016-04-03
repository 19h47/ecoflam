<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
	    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<?php wp_head(); ?>
	</head>
	<body>
		<div id="js-wrapper">
			<div <?php body_class( $class ); ?>>
				<?php if( is_page() || is_tax() ) { ?>
					<main class="page-wrapper">
				<?php } ?>

				<!-- <svg width="0" height="0">
				  <defs>
				    <clipPath id="clip-shape-rtl" clipPathUnits="objectBoundingBox">
				      <polygon points="0 1, 1 0, 1 1" />
				    </clipPath>
				    <clipPath id="clip-shape-ltr" clipPathUnits="objectBoundingBox">
				      <polygon points="0 0, 1 1, 0 1" />
				    </clipPath>
				  </defs>
				</svg> -->
				
				<header class="site-header">
					<div class="inner">
						<div class="inner-wrapper row middle-xs">

							<div class="site-header__logo col-xs-4 start-xs">
								<div class="box">
									<a href="<?php echo home_url( '/' ) ?>">
										<img class="svg" alt="Écoflam logo" src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__logo.svg" width="290" height="33">
									</a>
								</div>
							</div>

							<button id="js-toggle-menu" class="hidden-from-m">Menu</button>

							<nav class="site-header__nav col-xs-12 col-sm-offset-1 col-sm-7 end-xs">

									<?php
										$args = array(
											'theme_location'	=> 'primary',
											'container'			=> false,
											'menu_class'		=> 'menu menu-inline',
										);

										wp_nav_menu( $args );
									?>
								
							</nav>
								<div class="site-header__nav__overlay hidden-from-m">
									
								</div>
						</div>

						<?php if( is_front_page() ){ ?>

						<div class="site-header__content inner">
							<div class="inner-wrapper row center-xs">
								<div class="box">
									
									<div class="col-xs-12">
										<h1 class="site-header__content__title">
											<span>Faites</span>
											brûler la flamme
											<span>de vos envies</span>
										</h1>						
									</div>

								</div>
							</div>
						</div>

						<?php } ?>
					</div>
				</header><!-- /site-header -->