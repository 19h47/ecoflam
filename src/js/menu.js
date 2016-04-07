var menu = {

	_classMenuOpen: 'menu--is-open',
    _toggleMenu: 'toggle.menu',
    _$body: null,

    init: function() {

    	this._$body = jQuery('body');

    	this._initEvents();
    },

    _initEvents: function() {
    	var _this = this;

    	// TOGGLE MENU RESPONSIVE
        // Between click and function, we can pass a sort of filter selector
	    jQuery(document).on('click', '#js-toggle-menu', function(e) {
	        // AVOID PROPAGATION OF EVENT IN DOM
	        e.stopPropagation();
            
	        // BUBBLE UP
	        // When an event is triggered, it spreads throughout his parents until it reaches the root.
	        jQuery(this).trigger(_this._toggleMenu);
	    });

	    this._$body
	        .on(this._toggleMenu, function(e) {

	            _this._$body.toggleClass(_this._classMenuOpen);
	            
                _this.mobileAnimation();

	        })
            .on( 'click', '#js-menu-close', function(e){
                _this.close();
            })  
	        .on('click', function(e) {
                // console.log( e.target );

	            if (_this._$body.hasClass( _this._classMenuOpen) && !$(e.target).closest('.site-header__nav').length) {
	                // e.preventDefault();
	                _this.close();
	        	}
	    });
    },

    close: function() {

    	this._$body.removeClass(this._classMenuOpen);
    },

    // MOBILE MENU ANIMATION
    mobileAnimation: function() {
        var tl = new TimelineLite({
            // paused: true
        });

        tl
            .set(
            	'.menu-item', 
            	{ 
            		opacity: 0 
            	}
            )
            .staggerFromTo(
            	'.menu-item', 
            	0.3, 
            	{ 
            		opacity: 0, 
            		x: 25 
            	}, 
            	{ 
            		opacity: 1, 
            		x: 0 
            	}, 
            	0.15, 
            	0.3
            );
    }
};

jQuery( function() {

    menu.init();

});