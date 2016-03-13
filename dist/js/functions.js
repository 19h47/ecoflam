jQuery(document).ready(function(e){

	function slide(){

		var options = 
		{ 
			currentItemClass: 'current', 
			// CAROUSEL OPTION IS FOR A LOOP IN SLIDE
			carousel: true,
		},
			wallopEl = document.querySelector('.wallop'),
			slider = new Wallop( wallopEl, options );

		window.onkeydown = function(e) {
		    switch (e.keyCode) {
		    	case 37:
		      		slider.previous();
		      	break;
		    	case 39:
		      		slider.next();
		      	break;
		  	}	
		};

		slider.on('change', function(event) {

			slideAnimationEnter();
			draw();
		  	// removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');

		  	// addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');

		});
	}

	function draw() {

		var _svg = '.js-svg.current';

		// GET COLOR FOR GRADIENT FROM DATA ATTRIBUTES
		var _colorFromGradient = jQuery( _svg ).data('from-gradient'),
			_colorToGradient = jQuery( _svg ).data('to-gradient');

  		// SRC http://codepen.io/lukerichardville/pen/rOQGYE
	    var canvasElement = document.createElement('canvas'),
	      	$ = canvasElement.getContext('2d'),
	      	x, y, i;

	  	canvasElement.width = 256;
	  	canvasElement.height = 256;

	  	for (var x = 0; x < canvasElement.width; x++) {
	    	for (var y = 0; y < canvasElement.height; y++) {
		      	i = ~~(Math.random() * 255) | 0;
		      	$.fillStyle = 'rgba('+ i +','+ i +','+ i +', 1)';
		      	$.fillRect(x, y, 0.5, 0.09);
	    	}
	  	}
	  	
		// console.log( _colorFromGradient );
		// console.log( _colorToGradient );
		// console.log( _svg );
	  	
	  	jQuery( _svg )

	  		.css('background-image',  'url(' + canvasElement.toDataURL('image/png') + '), linear-gradient( to right, #'+ _colorFromGradient +' 0%, #' + _colorToGradient + ' 100% )')
	

	  		.on('mousemove', function( e ) {
		  	
		  	var _width = jQuery( _svg ).width(),
		  		_height = jQuery( _svg ).height(),

		      	// _percentageWidth = 0.1 * ( +e.pageX ) / _width,
		      	_percentageWidth = '100',
		      	_percentageHeight = 360 * ( +e.pageY ) / _height,
		      
		      	_background = 'url(' + canvasElement.toDataURL('image/png') + '), linear-gradient( ' + _percentageHeight + 'deg, #' + _colorFromGradient + ' 0%, #' + _colorToGradient + ' ' + _percentageWidth + '% )';
		     	 
		      	jQuery( _svg ).css("background-image", _background );
		});
	}
	
	function slideAnimationEnter(){
		
		var tl = new TimelineMax({
			repeat: 0,
			// yoyo: true,
			// paused: true
		});

		tl
			.fromTo( '.rectangle', 1, { attr:{ width: '0' }}, { attr:{ width: '80' }, ease: Power4.easeOut })
			.fromTo( '.site-header__title', 2, { x: '-20' }, { x: '0'}, '-=1' )
			.fromTo( '.mask', 2, { x: -5 }, { x: 0, ease: Power2.easeOut }, '-=2' )
			.fromTo( '.svg-text', 1.5, { x: '-10', opacity: '0' }, { x: '0', opacity: '1', ease: Power4.easeOut }, '-=1.7' );

			// .to('.mask-opacity', 2, { opacity: '0'}, '-=2');
			// .to('.rectangle', 5, { fill: "rgb(193, 229, 237)" }, '-=5');

	};

	function slideAnimtationExit(){

		var tl = new TimelineMax({});

		tl
			.to('.js-svg.current',1, { opacity: 0});

	};

	function resize(){

		var _timeline = new TimelineMax({

			paused: true

		});

		_timeline
			.to( '.site-content', 0.3, { scale: 0.7, width: '300%', transformOrigin: 'center center' })
			.set('.Wallop-item', { width: '25%', display: 'inline-block', visibility: 'visible', position: 'relative' })
			.to( '.site-header', 0.3, { color: 'black' }, '-=0.3' );


		jQuery(document).on('click', function(){

			var _this = $( '.Wallop-list' );
			var _clicks = _this.data( 'clicks' );



			if ( _clicks ) {
				
				_timeline.reverse();
				
		    }
		    else 
		    {
				_timeline.play();
		    	
		    }

		    _this.data('clicks', !_clicks);
			
		});
	}

	draw();
	slide();
	slideAnimationEnter();
	// resize();
});