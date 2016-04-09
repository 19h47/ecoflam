var image = {

	_classImageOpen: 'image--is-open',
	_toggleImage: 'toggle.image',

	_$body: null,

	init: function(){

		this._$body = jQuery('body');

		this._initEvents();
	},

	_initEvents: function(){
		var _this = this;

	    // TOGGLE IMAGE
	    jQuery(document).on('click', '.js-toggle-image', function(e){
	    	
	        // GET URL http://stackoverflow.com/a/23784236
	        var backgroundImage = 
	        	$(this)
	        		.children()
					.css("background-image")
					.replace( /.*\s?url\([\'\"]?/, '')
					.replace( /[\'\"]?\).*/, '');

				// GET TITLE
				var _title = $(this).find('.js-title').text();

				// GET CAT
				var _category = $(this).find('.js-category').text();

				// GET DESCRIPTION
				var _description = $(this).find('.js-description').text();

				console.log(_description);

	    	if( !jQuery(this).children().attr('style') ){

	    		$(_this._box).toggleClass('show');
				$('.js-image-overlay-image').hide();
				$('.js-image-overlay-category').empty().append(_category);
				$('.js-image-overlay-title').empty().append(_title);

				if( _description.length )
				{
					$('.js-image-overlay-description').empty().append(_description);
				} else {
					$('.js-image-overlay-description').empty()
				}

				// return;

			} else {

				$(_this._box).toggleClass( 'show' );
				$( '.js-image-overlay-image' ).show().attr( 'src', backgroundImage );
				$( '.js-image-overlay-title' ).html(_title);
				$( '.js-image-overlay-category' ).html(_category);

				if( _description.length )
				{
					$('.js-image-overlay-description').empty().append(_description);
				} else {
					$('.js-image-overlay-description').empty()
				}
			}
	     e.stopPropagation();  
	     jQuery(this).trigger( _this._toggleImage ); 
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

jQuery(function(){

	image.init();

});