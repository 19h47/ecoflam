// GSAP EASE VISUALIZER ( http://greensock.com/ease-visualizer )

var page = {
	// PRIVATE
	// Here go the private variables
    _waypoints: null,
    _$sections: null,

	// PUBLIC
	// Here go the public variables

	// DOM public elements


	// DOM private elements

	// FUNCTIONS
	init: function( ) {
        this._$sections = jQuery( '.site-section' );

		this._setContents();

        this._initPlugins();
	},


	enable: function() {

        
    },
	
	_initPlugins: function(){
		var _this = this;		
		
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

        var $content = jQuery( section ).find('.js-inner');

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

        TweenMax.set(this._$sections.find('.js-inner'), {y: 115, autoAlpha: 0});
    },

	/*
     * Replace all SVG images with inline SVG
     * http://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
     */
    inlineSVG: function() {
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            var imgWidth = $img.attr('width');
            var imgHeight = $img.attr('height');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

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

$( function() {

    page.init();

});