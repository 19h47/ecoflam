<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
	    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<?php wp_head(); ?>
	</head>
	<body>
		
		<header class="site-header">
			<div class="inner">
				<div class="inner-wrapper row middle-xs">

					<div class="site-header__logo col-xs-4 start-xs">
						<div class="box">
							<img src="<?php echo get_template_directory_uri() ?>/img/svg/ecoflam__logo.svg" width="290" height="33">
						</div>
					</div>

					<nav class="site-header__nav col-xs-offset-1 col-xs-7 end-xs ">
						<div class="box">
							<?php
								$args = array(
									'theme_location'	=> 'primary',
									'container'			=> false,
									'menu_class'		=> 'menu menu-inline',
								);

								wp_nav_menu( $args );
							?>
						</div>
					</nav>
				</div>
				<div class="site-header__content row center-xs">
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
		</header><!-- /site-header -->