var app = {
	// PRIVATE
	// Here go the private variables
    _$body: null,

	// PUBLIC
	// Here go the public variables

	// DOM public elements


	// DOM private elements

	// FUNCTIONS
	init: function() {
		this._$body = $( 'body' );
		this._initPlugins();

        home.init();
        page.init('main');
        
	},

	
    _reload: function(){
        var _this = this;
        console.log('Matrix: Reloaded')

        app.init();
    },

	_initPlugins: function(){
		var _this = this;

        // SMOOTHSTATE
		_this._transitionPage( '#js-wrapper' );
				
	},

	_initEvents: function(){

	},

    _transitionPage: function( element ){
        var _this = this;

        if(!$(element).length){
            return true;
        }

        $(element).smoothState({
            prefetch: true,
            cacheLength: 3,
            scroll: true,
            onStart: {
                duration: 500, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class

                    _this._$body.addClass('is-loading');

                    // Restart your animation
                    // _this.smoothState.restartCSSAnimations();

                    $($container).fadeOut();
                    
                    image.close();
                    // Ensure menu is closed
                    menu.close();
                }
            },
            onProgress: {
                duration: 250,
                render: function ($container) {

                

                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    
                   
                    // Remove your CSS animation reversing class
                    _this._$body.removeClass('is-exiting');

                    

                    // Inject the new content
                    $container.html($newContent);
                    
                }
            },
            onAfter: function($container, $newContent){
                // Reload script
                _this._reload();
                
                // if( $('div.wpcf7 > form').length ){
                //     console.log('wpcf7 selector exist');
                //     // $('div.wpcf7 > form').wpcf7InitForm();
                // } else {
                //     console.log('wpcf7 selector doesn\'t exist');
                // }

                $($container).fadeIn();

                console.log( information.page_slug );
                

            }
        });
    }
};

$(function() {

    app.init();
    
});