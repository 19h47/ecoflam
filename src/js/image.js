var image = {

	_classImageOpen: 'image--is-open',
	_toggleImage: 'toggle.image',
	_current: 'is-current',

	// DOM private elements
	_$body: null,

	_$containers: null,

	_$categories: null,
	_$titles: null,
	_$descriptions: null,

	_$next: null,
	_$previous: null,

	_$resultImage: null,
	_$resultCategory: null,
	_$resultTitle: null,
	_$resultDescription: null,
	
	init: function(){

		this._$body = $('body');

		this._$containers = $('.js-toggle-image');

		this._$categories = $('.js-category');
		this._$titles = $('.js-title');
		this._$descriptions = $('.js-description');

		this._$next = $('#js-next');
		this._$previous = $('#js-previous');

		this._$resultImage = $('#js-image-overlay-image');
		this._$resultCategory = $('#js-image-overlay-category');
		this._$resultTitle = $('#js-image-overlay-title');
		this._$resultDescription = $('#js-image-overlay-description');

		this._initEvents();
	},

	_initEvents: function(){
		var _this = this;

		_this.next();
		_this.previous();

	    // TOGGLE IMAGE
	    _this._$containers.on('click', function(e){

	    	e.stopPropagation();

	    	$(this).toggleClass(_this._current);

	    	console.log('OPEN IMAGE');
	        // GET URL http://stackoverflow.com/a/23784236
	        var backgroundImage = 
	        	$(this)
	        		.children()
					.css("background-image")
					.replace( /.*\s?url\([\'\"]?/, '')
					.replace( /[\'\"]?\).*/, '');

				_this._$title = $(this).find(_this._$titles).text();
				_this._$category = $(this).find(_this._$categories).text();
				_this._$description = $(this).find(_this._$descriptions).text();

	    	if( !$(this).children().attr('style') ){

	    		$(_this._box).toggleClass('show');
				$('#js-image-overlay-image').hide();
				$('#js-image-overlay-category').empty().append(_this._$category);
				$('#js-image-overlay-title').empty().append(_this._$title);

				if( _this._$description.length )
				{
					$('#js-image-overlay-description').empty().append(_this._$description);
				} else {
					$('#js-image-overlay-description').empty();
				}

				// return;

			} else {

				$(_this._box).toggleClass( 'show' );
				$( '#js-image-overlay-image' ).show().attr( 'src', backgroundImage );
				$( '#js-image-overlay-title' ).html(_this._$title);
				$( '#js-image-overlay-category' ).html(_this._$category);

				if( _this._$description.length )
				{
					$('#js-image-overlay-description').empty().append(_this._$description);
				} else {
					$('#js-image-overlay-description').empty();
				}
			}
	     

	     $(this).trigger( _this._toggleImage ); 
	    });

	    _this._$body
	        .on( this._toggleImage , function(e) {

	            _this._$body.toggleClass(_this._classImageOpen);
		     
	        })

	        .on( 'click', '#js-image-close', function(e){
	        	_this.close();
	        }) 

	        .on('click', function(e){

		        if( _this._$body.hasClass( _this._classImageOpen ) && !$(e.target).closest('#js-image-overlay').length ) {

		        	console.log('body');
		            _this.close();

		        } 
		    });
	},

	close: function(){
		var _this = this;
		_this._$body.removeClass(_this._classImageOpen);
		_this._$containers.removeClass(_this._current);

	},

	next: function(){
		var _this = this;

		_this._$next.on('click', function(e){
			console.log('NEXT');

			// Current slide
			var _$currentSlide = _this._$containers.filter('.' + _this._current);

			// Get index from current slide
			var _currentSlideIndex = _$currentSlide.index();

			// Remove class from current slide
			_$currentSlide.removeClass(_this._current);

			// Get next slide (based on ancient current index)
			var _nextSlideIndex = _currentSlideIndex + 1;

			// If we are on last item return to the first
			if(_nextSlideIndex == _this._$containers.length )
			{
				var _nextSlideIndex = 0;
			}

			var _$nextSlide = _this._$containers.eq(_nextSlideIndex);
			
			// Add class on next slide
			_$nextSlide.addClass(_this._current);

			// GET CATEGORY, TITLE, DESCRIPTION, IMAGE

			var _$backgroundImage = _$nextSlide
							.children()
							.css('background-image')
							.replace( /.*\s?url\([\'\"]?/, '')
							.replace( /[\'\"]?\).*/, '');

			var _$category = _$nextSlide.find(_this._$categories).text();
			var _$title = _$nextSlide.find(_this._$titles).text();
			var _$description = _$nextSlide.find(_this._$descriptions).text();

			// INJECT
			_this._$resultImage.attr( 'src', _$backgroundImage );
			_this._$resultCategory.empty().append(_$category);
			_this._$resultTitle.empty().append(_$title);
			_this._$resultDescription.empty().append(_$description);
			
		});
	},

	previous: function(){
		var _this = this;

		_this._$previous.on('click', function(e){

			// Current slide
			var _$currentSlide = _this._$containers.filter('.' + _this._current);

			// Get index from current slide
			var _currentSlideIndex = _$currentSlide.index();

			// Remove class from current slide
			_$currentSlide.removeClass(_this._current);

			// Get previous slide (based on ancient current index)
			var _previousSlideIndex = _currentSlideIndex - 1;

			// If we are on the first item return to the last
			if(_previousSlideIndex == -1 )
			{
				var _previousSlideIndex = _this._$containers.length - 1;
			}

			var _$previousSlide = _this._$containers.eq(_previousSlideIndex);
			
			// Add class on next slide
			_$previousSlide.addClass(_this._current);

			// GET CATEGORY, TITLE, DESCRIPTION, IMAGE

			var _$backgroundImage = _$previousSlide
							.children()
							.css('background-image')
							.replace( /.*\s?url\([\'\"]?/, '')
							.replace( /[\'\"]?\).*/, '');

			var _$category = _$previousSlide.find(_this._$categories).text();
			var _$title = _$previousSlide.find(_this._$titles).text();
			var _$description = _$previousSlide.find(_this._$descriptions).text();

			// INJECT
			_this._$resultImage.attr( 'src', _$backgroundImage );
			_this._$resultCategory.empty().append(_$category);
			_this._$resultTitle.empty().append(_$title);
			_this._$resultDescription.empty().append(_$description);
			
		});
	}
};

$(function(){
	image.init();
});