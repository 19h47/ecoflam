var menu = {

	_classMenuOpen: 'menu--is-open',
    _toggleMenu: 'toggle.menu',
    _$body: null,

    init: function() {

    	this._$body = $( 'body' );

    	this._initEvents();
    },

    _initEvents: function() {
    	var _this = this;

    	// TOGGLE MENU RESPONSIVE
	    $( '#js-toggle-menu' ).on( 'click', function( e ) {
	        // AVOID PROPAGATION OF EVENT IN DOM
	        e.stopPropagation();
            
	        // BUBBLE UP
	        // When an event is triggered, it spreads throughout his parents until it reaches the root.
	        $( this ).trigger( _this._toggleMenu );
	    });


	    this._$body
	        .on( this._toggleMenu , function( e ) {
                
                // console.log( $( e.target ) );
                // console.log( _this._$body );
                // console.log( _this._classMenuOpen );

	            _this._$body.toggleClass( _this._classMenuOpen );
                // $('body').toggleClass('menu--is-open');
	            
                // _this.mobileAnimation();


	        })  
	        .on( 'click', function( e ) {
				e.preventDefault();
                // console.log( e.target );

	            if ( _this._$body.hasClass( _this._classMenuOpen ) && !$( e.target ).closest( '.site-header__nav' ).length ) {
	                
	                _this._$body.trigger( _this._toggleMenu );
	        	}
	    });
    },
    close: function( ) {

    	this._$body.removeClass( this._classMenuOpen );
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
            	1, 
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

$( function() {

    menu.init();

});