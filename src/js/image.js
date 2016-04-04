var image = {

	_classImageOpen: 'image--is-open',
	_toggleImage: 'toggle.image',

	_$body: null,

	init: function(){

		this._$body = $('body');

		this._initEvents();
	},

	_initEvents: function(){
		var _this = this;

	    // TOGGLE IMAGE
	    $(document).on('click', '.js-toggle-image', function(e){
	    	
	    	e.stopPropagation();
	    	$(this).trigger( _this._toggleImage );

	        // GET URL http://stackoverflow.com/a/23784236
	        var backgroundImage = 
	        	$(this)
	        		.children()
					.css("background-image")
					.replace( /.*\s?url\([\'\"]?/, '')
					.replace( /[\'\"]?\).*/, ''),

				// GET TITLE
				_title = $(this ).children('.js-title').text(),

				// GET CAT
				_category = $( this ).children( '.js-category').text();

	    	if( !$(this).children().attr('style') ){

	    		$(_this._box).toggleClass('show');
				$('.js-image-overlay-image').hide();
				$('.js-image-overlay-text').empty().append( _title );
				$('.js-image-overlay-category').empty().append( _category );

				// return;

			} else {

				$(_this._box).toggleClass( 'show' );
				$( '.js-image-overlay-image' ).show().attr( 'src', backgroundImage );
				$( '.js-image-overlay-text' ).empty().append( _title );
				$( '.js-image-overlay-category' ).empty().append( _category );
			}
	        
	    });

	    _this._$body
	        .on( this._toggleImage , function(e) {

	            // console.log( $( e.target ) );

	            _this._$body.toggleClass(_this._classImageOpen);
		     
	        })

	        .on( 'click', '.js-image-close', function(e){
	        	_this.close();
	        }) 

	        .on('click', function(e){
	        
		        // e.preventDefault();

		        // console.log( e.target );

		        if( _this._$body.hasClass( _this._classImageOpen ) && !$(e.target).closest('.js-image-overlay').length ) {

		            _this.close();

		        } 
		    });
	},

	close: function(){
		this._$body.removeClass(this._classImageOpen);
	}
};

$(function(){

	image.init();

})