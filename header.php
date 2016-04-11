<!DOCTYPE html>
<html <?php html_class( 'no-js' ) ?> <?php language_attributes(); ?>>
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
				<!-- (Display none breaks the <defs> and visibility hidden takes space.) -->
				<!-- SVG takes some space even with height and width to 0, so we put it in absolute position -->
				<!-- http://stackoverflow.com/a/31596131 -->
				<svg width="0" height="0" class="position-absolute">
					<defs>
						<!-- RIGHT TO LEFT -->
					  	<clipPath id="oblic-rtl" clipPathUnits="objectBoundingBox">
					    	<polygon points="0 1, 1 0, 1 1">
					    	</polygon>
					  	</clipPath>
					  	<!-- LEFT TO RIGHT -->
					  	<clipPath id="oblic-ltr" clipPathUnits="objectBoundingBox">
					    	<polygon points="0 0, 1 1, 0 1">
					    	</polygon>
					  	</clipPath>
				  	</defs>
				</svg>
				
				<header class="site-header">
					<div class="inner">
						<div class="inner-wrapper row middle-xs end-xs">

							<div class="site-header__logo col-xs-9 col-sm-4">
								<div class="box">
									<a href="<?php echo home_url( '/' ) ?>">
										<img class="svg" alt="Écoflam logo" src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__logo.svg" width="290" height="33">
									</a>
								</div>
							</div>
							
							
							<button id="js-toggle-menu" class="hidden-from-l col-sm-offset-5 middle-xs col-xs-3 site-header__nav__button-open">
								Menu
							</button>

							<nav class="site-header__nav col-xs-12 col-sm-8 end-xs">
									<button id="js-menu-close" class="hidden-from-l site-header__nav__button-close">Menu</button>
									<?php
										$args = array(
											'theme_location'	=> 'primary',
											'container'			=> false,
											'menu_class'		=> 'menu menu-inline',
										);

										wp_nav_menu( $args );
									?>
								
							</nav>
							<div class="site-header__nav__overlay">
								
							</div>
						</div>

						<?php if( is_front_page() ){ ?>

						<div class="site-header__content">
							<div class="inner-wrapper row center-xs top-xs">
									
								<div class="col-xs-12">
									<h1 class="site-header__content__title">
										<span>Faites</span>
										brûler la flamme
										<span>de vos envies</span>
									</h1>						
								</div>
								
							</div>
						</div>

						<?php } ?>
					</div>
				</header><!-- /site-header -->