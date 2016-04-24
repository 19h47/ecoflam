$(window).load(function() {
      // console.log("window load occurred!");
      "use strict";
});

// GSAP EASE VISUALIZER ( http://greensock.com/ease-visualizer )

var home = {
	// PRIVATE
	// Here go the private variables
	_slider_container: null,

	// PUBLIC
	// Here go the public variables

	// DOM public elements


	// DOM private elements

	// FUNCTIONS
	init: function() {
		this.$body = $('body');
		this._initPlugins();
	},

	destroy: function() {
		var _this = this;

		_this.slideEvents.off();
	},
	
	_initPlugins: function(){
		var _this = this;

		// WALLOP
		_this.slideEvents('.js-event-slider');
		
				
	},

	_initEvents: function(){

	},
	
	slideEvents: function ( element ){
		// This variable refers to the application itself
		var _this = this;
		
		_slider_container = $( element )[0];

		if( !_slider_container ){

		 	console.log( 'Slider: Heck, it seems that there is no selector.' );

			return;

		}

		// https://github.com/peduarte/wallop
		var options = 
		{ 
	        showPreviousClass: 'event-item--showPrevious',
	        showNextClass: 'event-item--showNext',
	        hidePreviousClass: 'event-item--hidePrevious',
	        hideNextClass: 'event-item--hideNext',
			currentItemClass: 'current', 
			// Carousel option is for a loop in slide
			carousel: true,
			itemClass: 'event-item',
			buttonPreviousClass: 'event-buttonPrevious',
      		buttonNextClass: 'event-buttonNext',
		},
			wallopEl = _slider_container,
			slider = new Wallop( wallopEl, options );

		// KEYDOWN
		// SRC: http://codepen.io/peduarte/pen/wKwbYJ
		$( document )
			.on( 'keydown keyup', function( event ) {
				
				if( _this._is_animating === true ){
	            	
		            console.log( 'Aha, don\'t feed the troll!' );
		            return;
		          
				}

			    switch ( event.keyCode ) {
			    	case 32:
			    		// SPACEBAR
			    	break;

			    	case 33:
			    		// PAGE UP
			    	break;

			    	case 34:
			    		// PAGE DOWN
			    	break;

			    	case 37:

			    		// LEFT ARROW
			    		console.log( 'Letf arrow is pressed.' );
				    		
						slider.previous();

			      	break;

			      	case 38:

			      		// UP ARROW
			      		console.log( 'Up arrow is pressed.' );
	      				
			      				
			      	break;

			    	case 39:
			    		
			    		// RIGHT ARROW
			    		console.log( 'Right arrow is pressed.' );
				   	
						slider.next();
					
			      	break;

					case 40:
						// DOWN ARROW
						console.log( 'Down arrow is pressed.' );
						
					break;

					default:
						// Exit this handler for other keys
						return;

			  	}
			});	

		slider.on( 'change', function( event, callback ) {
			
			console.log( 'The tile change.' );

		});
	},
};