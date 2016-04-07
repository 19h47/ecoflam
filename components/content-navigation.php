<div class="inner">
	<div class="inner-wrapper js-inner row center-xs">
		
		<div class="col-xs-10 page-section__navigation">
			<div class="row middle-xs">

				<?php 
					
					$currentterm = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); 

					$count = count( $terms ); 

					if ( $count > 0 ){ 
						foreach ( $terms as $term ) { ?>
							<?php $class = $currentterm->slug == $term->slug ? ' current' : '' ; ?>
							
							<div class="col-xs-12 col-sm">
								<a class="color-text-black hoverable page-section__navigation__link<?php echo $class; ?>" href="<?php echo get_term_link ( $term, "product_category" ); ?>"><?php echo $term->name; ?></a>
							</div>
					
						<?php } 
					} 
				?>

			</div>		
		</div>
	</div>
</div>