// GSAP EASE VISUALIZER ( http://greensock.com/ease-visualizer )

var page = {
	// PRIVATE
	// Here go the private variables
	_classImageOpen: 'image--is-open',
    _body: $(window),
    _toggleImage: 'toggle.image',
    _box: '.js-image-overlay',
    _waypoints: null,
    _$sections: null,

	// PUBLIC
	// Here go the public variables

	// DOM public elements


	// DOM private elements

	// FUNCTIONS
	init: function( ) {

        this._$sections = $( '.site-section' );

		this._setContents();

        this._initPlugins();
	},


	enable: function() {

        
    },
	
	_initPlugins: function(){
		var _this = this;		
		
		_this.imageZoom();
		_this.inlineSVG();

		this._waypoints = this._$sections.waypoint({
            offset: '75%',
            handler: function( direction ) {
                _this._showSection( this.element );
            }
        });

	},

	destroy: function() {
		var _this = this;
	},

	_initEvents: function(){

	},

	_showSection: function( section ){
		
		var _this = this;

        var $content = $( section ).find('.js-inner');

        TweenMax.to( 
        	$content, 
        	0.6, 
        	{ 
        		y: 0, 
        		autoAlpha: 1 
        	}
        );
	},

	_setContents: function() {
        // console.info('agence._setContents');

        if (this._ready || !this._$sections || !this._$sections.length) {
            return;
        }

        TweenMax.set( this._$sections.find('.js-inner'), { y: 115, autoAlpha: 0 } );
    },

	imageZoom: function(){
		var _this = this;

	    // TOGGLE MENU RESPONSIVE
	    $('.js-toggle-image').on('click', function(e){
	    	
	    	e.stopPropagation();

	        // GET URL
	        var backgroundImage = 
	        	$(this)
	        		.children()
					.css("background-image")
					.replace( /.*\s?url\([\'\"]?/, '')
					.replace( /[\'\"]?\).*/, ''),

				// GET TITLE
				_title = $( this ).children('.js-title').text(),

				// GET CAT
				_category = $( this ).children( '.js-category').text();

	    	if( !$(this).children().attr('style') ){

	    		$(_this._box).toggleClass('show');
				$('.js-image-overlay-image').hide();
				$('.js-image-overlay-text').append( _title );
				$('.js-image-overlay-category').append( _category );

				// return;

			} else {

				$(_this._box).toggleClass( 'show' );
				$( '.js-image-overlay-image' ).show().attr( 'src', backgroundImage );
				$( '.js-image-overlay-text' ).append( _title );
				$( '.js-image-overlay-category' ).append( _category );
			}
	        
	       
	        $(this).trigger( _this._toggleImage );

	    });

	    _this._body

	        .on( _this._toggleImage , function(e) {

	            // console.log( $( e.target ) );

	            $('body').addClass( _this._classImageOpen );
		        


	        })  

	        .on('click', function(e){
	        
		        // e.preventDefault();

		        // console.log( e.target );

		        if( $('body' ).hasClass( _this._classImageOpen ) ) {

		            $(_this._box).removeClass('show');
		            $(this).trigger( _this._toggleImage );

		        } 
		    });
	},

	/*
     * Replace all SVG images with inline SVG
     * http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
     */
    inlineSVG: function() {
        $('img.svg').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            var imgWidth = $img.attr('width');
            var imgHeight = $img.attr('height');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Give SVG dimensions from image
                if (imgWidth && imgHeight) {
                    $svg.attr({
                        'width': imgWidth,
                        'height': imgHeight
                    });
                }

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }
	
};