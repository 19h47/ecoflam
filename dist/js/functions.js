/**
* Wallop.js
*
* @fileoverview Minimal JS library to show & hide things
*
* @author Pedro Duarte
* @author http://pedroduarte.me/wallop
*
*/
(function(global){
  function Wallop(selector, options) {
    if (!selector) { throw new Error('Missing selector. Refer to Usage documentation: https://github.com/peduarte/wallop#javascript'); }

    for (var i = 0; i < selectorPool.length; i++) {
      if (selectorPool[i] === selector) {
        throw new Error('An instance of Wallop with this selector already exists.');
      }
    }

    this.options = {
      buttonPreviousClass: 'Wallop-buttonPrevious',
      buttonNextClass: 'Wallop-buttonNext',
      itemClass: 'Wallop-item',
      currentItemClass: 'Wallop-item--current',
      showPreviousClass: 'Wallop-item--showPrevious',
      showNextClass: 'Wallop-item--showNext',
      hidePreviousClass: 'Wallop-item--hidePrevious',
      hideNextClass: 'Wallop-item--hideNext',
      carousel: true
    };

    if (selector.length > 0) {
      throw new Error('Selector cannot be an array, Refer to Usage documentation: https://github.com/peduarte/wallop#javascript');
    } else {
      this.$selector = selector;
    }

    this.options = extend(this.options, options);
    this.event = null;

    // "Global vars"
    this.allItemsArray = Array.prototype.slice.call(this.$selector.querySelectorAll(' .' + this.options.itemClass));
    this.currentItemIndex = this.allItemsArray.indexOf(this.$selector.querySelector(' .' + this.options.currentItemClass));
    this.lastItemIndex = this.allItemsArray.length - 1;
    this.buttonPrevious = this.$selector.querySelector(' .' + this.options.buttonPreviousClass);
    this.buttonNext = this.$selector.querySelector(' .' + this.options.buttonNextClass);

    this.bindEvents();
    this.createCustomEvent();

    // If there is no active item, start at 0
    if (this.currentItemIndex === -1) {
      this.currentItemIndex = 0;
      addClass(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass);
    }

    // Update button states to make sure the correct state is set on initialization
    this.updateButtonStates();

    // Wrapped in timeout function so event can
    // be listened from outside at anytime
    var _this = this;
    setTimeout(function() {
      _this.event.detail.currentItemIndex = _this.currentItemIndex;
      _this.$selector.dispatchEvent(_this.event);
    }, 0);
  }

  var selectorPool = [];

  var WS = Wallop.prototype;

  // Update prev/next disabled attribute
  WS.updateButtonStates = function () {
    if ((!this.buttonPrevious && !this.buttonNext) || this.options.carousel) { return; }

    if (this.currentItemIndex === this.lastItemIndex) {
      this.buttonNext.setAttribute('disabled', 'disabled');
    } else if (this.currentItemIndex === 0) {
      this.buttonPrevious.setAttribute('disabled', 'disabled');
    }
  };

  // Reset all settings by removing classes and attributes added by goTo() & updateButtonStates()
  WS.removeAllHelperSettings = function () {
    removeClass(this.allItemsArray[this.currentItemIndex], this.options.currentItemClass);
    removeClass($$(this.options.hidePreviousClass)[0], this.options.hidePreviousClass);
    removeClass($$(this.options.hideNextClass)[0], this.options.hideNextClass);
    removeClass($$(this.options.showPreviousClass)[0], this.options.showPreviousClass);
    removeClass($$(this.options.showNextClass)[0], this.options.showNextClass);

    if (!this.buttonPrevious && !this.buttonNext) { return; }

    this.buttonPrevious.removeAttribute('disabled');
    this.buttonNext.removeAttribute('disabled');
  };

  // Method to add classes to the right elements depending on the index passed
  WS.goTo = function (index) {
    if (index === this.currentItemIndex) { return; }

    // Fix the index if it's out of bounds and carousel is enabled
    index = index === -1 && this.options.carousel ? this.lastItemIndex : index;
    index = index === this.lastItemIndex + 1 && this.options.carousel ? 0 : index;

    // Exit when index is out of bounds
    if (index < 0 || index > this.lastItemIndex) { return; }

    this.removeAllHelperSettings();

    var isForwards = (index > this.currentItemIndex || index === 0 && this.currentItemIndex === this.lastItemIndex) && !(index === this.lastItemIndex && this.currentItemIndex === 0);
    addClass(this.allItemsArray[this.currentItemIndex], isForwards ? this.options.hidePreviousClass : this.options.hideNextClass);
    addClass(this.allItemsArray[index], this.options.currentItemClass + ' ' + (isForwards ? this.options.showNextClass : this.options.showPreviousClass));

    this.currentItemIndex = index;

    this.updateButtonStates();

    this.event.detail.currentItemIndex = this.currentItemIndex;
    this.$selector.dispatchEvent(this.event);
  };

  // Previous item handler
  WS.previous = function () {
    this.goTo(this.currentItemIndex - 1);
  };

  // Next item handler
  WS.next = function () {
    this.goTo(this.currentItemIndex + 1);
  };

  // Attach click handlers
  WS.bindEvents = function () {
    selectorPool.push(this.$selector);

    var _this = this;

    if (this.buttonPrevious) {
      this.buttonPrevious.addEventListener('click', function (event) {
        event.preventDefault();
        _this.previous();
      });
    }

    if (this.buttonNext) {
      this.buttonNext.addEventListener('click', function (event) {
        event.preventDefault();
        _this.next();
      });
    }

  };

  // Method to bind custom event
  WS.on = function (eventName, callback) {
    this.$selector.addEventListener(eventName, callback, false);
  };

  // Method to unbind custom event
  WS.off = function (eventName, callback) {
    this.$selector.removeEventListener(eventName, callback, false);
  };

  // Create custom Event
  WS.createCustomEvent = function () {
    var _this = this;
    this.event = new CustomEvent('change', {
      detail: {
        wallopEl: _this.$selector,
        currentItemIndex: Number(_this.currentItemIndex)
      },
      bubbles: true,
      cancelable: true
    });
  };

  // Helper functions
  function $$(element) {
    if (!element) { return; }
    return document.querySelectorAll('.' + element);
  }

  function addClass(element, className) {
    if (!element) { return; }
    element.className = (element.className + ' ' + className).trim();
  }

  function removeClass(element, className) {
    if (!element) { return; }
    element.className = element.className.replace(className, '').trim();
  }

  function extend(origOptions, userOptions){
    var extendOptions = {}, attrname;
    for (attrname in origOptions) { extendOptions[attrname] = origOptions[attrname]; }
    for (attrname in userOptions) { extendOptions[attrname] = userOptions[attrname]; }
    return extendOptions;
  }

  // Pollyfill for CustomEvent() Constructor - thanks to Internet Explorer
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.CustomEvent ? window.CustomEvent.prototype : {};
  window.CustomEvent = CustomEvent;

  // Exports to multiple environments
  if(typeof define === 'function' && define.amd){ //AMD
    define(function () { return Wallop; });
  } else if (typeof module !== 'undefined' && module.exports){ //node
    module.exports = Wallop;
  } else { // browser
    // use string because of Google closure compiler ADVANCED_MODE
    /* jslint sub:true */
    global['Wallop'] = Wallop;
  }
}(this));

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/**
 * smoothState.js is a jQuery plugin to stop page load jank.
 *
 * This jQuery plugin progressively enhances page loads to
 * behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     https://github.com/miguel-perez/jquery.smoothState.js
 *
 */

;(function ( $, window, document, undefined ) {
  'use strict';

  /** Abort if browser does not support pushState */
  if(!window.history.pushState) {
    // setup a dummy fn, but don't intercept on link clicks
    $.fn.smoothState = function() { return this; };
    $.fn.smoothState.options = {};
    return;
  }

  /** Abort if smoothState is already present **/
  if($.fn.smoothState) { return; }

  var
    /** Used later to scroll page to the top */
    $body = $('html, body'),

    /** Used in debug mode to console out useful warnings */
    consl = window.console,

    /** Plugin default options, will be exposed as $fn.smoothState.options */
    defaults = {

      /** If set to true, smoothState will log useful debug information instead of aborting */
      debug: false,

      /** jQuery selector to specify which anchors smoothState should bind to */
      anchors: 'a',

      /** jQuery selector to specify which forms smoothState should bind to */
      forms: 'form',

      /** A selector that defines what should be ignored by smoothState */
      blacklist: '.no-smoothState',

      /** If set to true, smoothState will prefetch a link's contents on hover */
      prefetch: false,

      /** The number of pages smoothState will try to store in memory */
      cacheLength: 0,

      /** Class that will be applied to the body while the page is loading */
      loadingClass: 'is-loading',

      /**
       * A function that can be used to alter the ajax request settings before it is called
       * @param  {Object} request jQuery.ajax settings object that will be used to make the request
       * @return {Object}         Altered request object
       */
      alterRequest: function (request) {
        return request;
      },

      /** Run before a page load has been activated */
      onBefore: function ($currentTarget, $container) {},

      /** Run when a page load has been activated */
      onStart: {
        duration: 0,
        render: function ($container) {}
      },

      /** Run if the page request is still pending and onStart has finished animating */
      onProgress: {
        duration: 0,
        render: function ($container) {}
      },

      /** Run when requested content is ready to be injected into the page  */
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          $container.html($newContent);
        }
      },

      /** Run when content has been injected and all animations are complete  */
      onAfter: function($container, $newContent) {}
    },

    /** Utility functions that are decoupled from smoothState */
    utility = {

      /**
       * Checks to see if the url is external
       * @param   {string}    url - url being evaluated
       * @see     http://stackoverflow.com/questions/6238351/fastest-way-to-detect-external-urls
       *
       */
      isExternal: function (url) {
        var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
          return true;
        }
        if (typeof match[2] === 'string' &&
          match[2].length > 0 &&
          match[2].replace(new RegExp(':(' + {'http:': 80, 'https:': 443}[window.location.protocol] +
            ')?$'), '') !== window.location.host) {
          return true;
        }
        return false;
      },

      /**
       * Strips the hash from a url and returns the new href
       * @param   {string}    href - url being evaluated
       *
       */
      stripHash: function(href) {
        return href.replace(/#.*/, '');
      },

      /**
       * Checks to see if the url is an internal hash
       * @param   {string}    href - url being evaluated
       * @param   {string}    prev - previous url (optional)
       *
       */
      isHash: function (href, prev) {
        prev = prev || window.location.href;

        var hasHash = (href.indexOf('#') > -1) ? true : false,
            samePath = (utility.stripHash(href) === utility.stripHash(prev)) ? true : false;

        return (hasHash && samePath);
      },

      /**
       * Translates a url string into a $.ajax settings obj
       * @param  {Object|String} request url or settings obj
       * @return {Object}        settings object
       */
      translate: function(request) {
          var defaults = {
            dataType: 'html',
            type: 'GET'
          };
          if(typeof request === 'string') {
            request = $.extend({}, defaults, { url: request });
          } else {
            request = $.extend({}, defaults, request);
          }
          return request;
      },

      /**
       * Checks to see if we should be loading this URL
       * @param   {string}    url - url being evaluated
       * @param   {string}    blacklist - jquery selector
       *
       */
      shouldLoadAnchor: function ($anchor, blacklist) {
        var href = $anchor.prop('href');
        // URL will only be loaded if it's not an external link, hash, or blacklisted
        return (!utility.isExternal(href) && !utility.isHash(href) && !$anchor.is(blacklist) && !$anchor.prop('target'));
      },

      /**
       * Resets an object if it has too many properties
       *
       * This is used to clear the 'cache' object that stores
       * all of the html. This would prevent the client from
       * running out of memory and allow the user to hit the
       * server for a fresh copy of the content.
       *
       * @param   {object}    obj
       * @param   {number}    cap
       *
       */
      clearIfOverCapacity: function (cache, cap) {
        // Polyfill Object.keys if it doesn't exist
        if (!Object.keys) {
          Object.keys = function (obj) {
            var keys = [],
              k;
            for (k in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, k)) {
                keys.push(k);
              }
            }
            return keys;
          };
        }

        if (Object.keys(cache).length > cap) {
          cache = {};
        }

        return cache;
      },

      /**
       * Stores a document fragment into an object
       * @param   {object}    object - object where it will be sotred
       * @param   {string}    url - name of the entry
       * @param   {string|document}    doc - entire html
       * @param   {string}    id - the id of the fragment
       *
       */
      storePageIn: function (object, url, doc, id) {
        var $newDoc = $(doc);

        object[url] = { // Content is indexed by the url
          status: 'loaded',
          // Stores the title of the page, .first() prevents getting svg titles
          title: $newDoc.filter('title').first().text(),
          html: $newDoc.filter('#' + id), // Stores the contents of the page
        };
        return object;
      },

      /**
       * Triggers an 'allanimationend' event when all animations are complete
       * @param   {object}    $element - jQuery object that should trigger event
       * @param   {string}    resetOn - which other events to trigger allanimationend on
       *
       */
      triggerAllAnimationEndEvent: function ($element, resetOn) {

        resetOn = ' ' + resetOn || '';

        var animationCount = 0,
          animationstart = 'animationstart webkitAnimationStart oanimationstart MSAnimationStart',
          animationend = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
          eventname = 'allanimationend',
          onAnimationStart = function (e) {
            if ($(e.delegateTarget).is($element)) {
              e.stopPropagation();
              animationCount++;
            }
          },
          onAnimationEnd = function (e) {
            if ($(e.delegateTarget).is($element)) {
              e.stopPropagation();
              animationCount--;
              if(animationCount === 0) {
                $element.trigger(eventname);
              }
            }
          };

        $element.on(animationstart, onAnimationStart);
        $element.on(animationend, onAnimationEnd);

        $element.on('allanimationend' + resetOn, function(){
          animationCount = 0;
          utility.redraw($element);
        });
      },

      /** Forces browser to redraw elements */
      redraw: function ($element) {
        $element.height();
      }
    },

    /** Handles the popstate event, like when the user hits 'back' */
    onPopState = function ( e ) {
      if(e.state !== null) {
        var url = window.location.href,
          $page = $('#' + e.state.id),
          page = $page.data('smoothState');

        if(page.href !== url && !utility.isHash(url, page.href)) {
          page.load(url, false);
        }
      }
    },

    /** Constructor function */
    Smoothstate = function ( element, options ) {
      var
        /** Container element smoothState is run on */
        $container = $(element),

        /** ID of the main container */
        elementId = $container.prop('id'),

        /** If a hash was clicked, we'll store it here so we
         *  can scroll to it once the new page has been fully
         *  loaded.
         */
        targetHash = null,

        /** Used to prevent fetching while we transition so
         *  that we don't mistakenly override a cache entry
         *  we need.
         */
        isTransitioning = false,

        /** Variable that stores pages after they are requested */
        cache = {},

        /** Url of the content that is currently displayed */
        currentHref = window.location.href,

        /**
         * Clears a given page from the cache, if no url is provided
         * it will clear the entire cache.
         * @param  {String} url entry that is to be deleted.
         */
        clear = function(url) {
          url = url || false;
          if(url && cache.hasOwnProperty(url)) {
            delete cache[url];
          } else {
            cache = {};
          }
          $container.data('smoothState').cache = cache;
        },

        /**
         * Fetches the contents of a url and stores it in the 'cache' variable
         * @param  {String|Object}   request  url or request settings object
         * @param  {Function} callback function that will run as soon as it finishes
         */
        fetch = function (request, callback) {

          // Sets a default in case a callback is not defined
          callback = callback || $.noop;

          // Allows us to accept a url string or object as the ajax settings
          var settings = utility.translate(request);

          // Don't prefetch if we have the content already or if it's a form
          if(cache.hasOwnProperty(settings.url) && typeof settings.data === 'undefined') {
            return;
          }

          // Check the length of the cache and clear it if needed
          cache = utility.clearIfOverCapacity(cache, options.cacheLength);

          // Let other parts of the code know we're working on getting the content
          cache[settings.url] = { status: 'fetching' };

          // Make the ajax request
          var ajaxRequest = $.ajax(settings);

          // Store contents in cache variable if successful
          ajaxRequest.success(function (html) {
            utility.storePageIn(cache, settings.url, html, elementId);
            $container.data('smoothState').cache = cache;
          });

          // Mark as error to be acted on later
          ajaxRequest.error(function () {
            cache[settings.url].status = 'error';
          });

          // Call fetch callback
          if(callback) {
            ajaxRequest.complete(callback);
          }
        },

        repositionWindow = function(){
          // Scroll to a hash anchor on destination page
          if(targetHash) {
            var $targetHashEl = $(targetHash, $container);
            if($targetHashEl.length){
              var newPosition = $targetHashEl.offset().top;
              document.body.scrollTop = newPosition;
            }
            targetHash = null;
          }
        },

        /** Updates the contents from cache[url] */
        updateContent = function (url) {
          // If the content has been requested and is done:
          var containerId = '#' + elementId,
              $newContent = cache[url] ? $(cache[url].html.html()) : null;

          if($newContent.length) {

            // Update the title
            document.title = cache[url].title;

            // Update current url
            $container.data('smoothState').href = url;

            // Remove loading class
            if(options.loadingClass) {
              $body.removeClass(options.loadingClass);
            }

            // Call the onReady callback and set delay
            options.onReady.render($container, $newContent);

            $container.one('ss.onReadyEnd', function(){

              // Allow prefetches to be made again
              isTransitioning = false;

              // Run callback
              options.onAfter($container, $newContent);

              repositionWindow();

            });

            window.setTimeout(function(){
              $container.trigger('ss.onReadyEnd');
            }, options.onReady.duration);

          } else if (!$newContent && options.debug && consl) {
            // Throw warning to help debug in debug mode
            consl.warn('No element with an id of ' + containerId + ' in response from ' + url + ' in ' + cache);
          } else {
            // No content availble to update with, aborting...
            window.location = url;
          }
        },

        /**
         * Loads the contents of a url into our container
         * @param   {string}    url
         * @param   {bool}      push - used to determine if we should
         *                      add a new item into the history object
         */
        load = function (request, push) {

          var settings = utility.translate(request);

          /** Makes this an optional variable by setting a default */
          if(typeof push === 'undefined') {
            push = true;
          }

          var
            /** Used to check if the onProgress function has been run */
            hasRunCallback = false,

            callbBackEnded = false,

            /** List of responses for the states of the page request */
            responses = {

              /** Page is ready, update the content */
              loaded: function () {
                var eventName = hasRunCallback ? 'ss.onProgressEnd' : 'ss.onStartEnd';

                if(!callbBackEnded || !hasRunCallback) {
                  $container.one(eventName, function(){
                    updateContent(settings.url);
                  });
                } else if(callbBackEnded) {
                  updateContent(settings.url);
                }

                if(push) {
                  window.history.pushState({ id: elementId }, cache[settings.url].title, settings.url);
                }
              },

              /** Loading, wait 10 ms and check again */
              fetching: function () {

                if(!hasRunCallback) {

                  hasRunCallback = true;

                  // Run the onProgress callback and set trigger
                  $container.one('ss.onStartEnd', function(){

                    // Add loading class
                    if(options.loadingClass) {
                      $body.addClass(options.loadingClass);
                    }

                    options.onProgress.render($container);

                    window.setTimeout(function (){
                      $container.trigger('ss.onProgressEnd');
                      callbBackEnded = true;
                    }, options.onProgress.duration);

                  });
                }

                window.setTimeout(function () {
                  // Might of been canceled, better check!
                  if(cache.hasOwnProperty(settings.url)){
                    responses[cache[settings.url].status]();
                  }
                }, 10);
              },

              /** Error, abort and redirect */
              error: function (){
                if(options.debug && consl) {
                  consl.log('There was an error loading: ' + settings.url);
                } else {
                  window.location = settings.url;
                }
              }
            };

          if (!cache.hasOwnProperty(settings.url)) {
            fetch(settings);
          }

          // Run the onStart callback and set trigger
          options.onStart.render($container);

          window.setTimeout(function(){
            $body.scrollTop(0);
            $container.trigger('ss.onStartEnd');
          }, options.onStart.duration);

          // Start checking for the status of content
          responses[cache[settings.url].status]();
        },

        /**
         * Binds to the hover event of a link, used for prefetching content
         * @param   {object}    event
         */
        hoverAnchor = function (event) {
          var request,
              $anchor = $(event.currentTarget);

          if (utility.shouldLoadAnchor($anchor, options.blacklist) && !isTransitioning) {
            event.stopPropagation();
            request = utility.translate($anchor.prop('href'));
            request = options.alterRequest(request);
            fetch(request);
          }
        },

        /**
         * Binds to the click event of a link, used to show the content
         * @param   {object}    event
         */
        clickAnchor = function (event) {
          var $anchor = $(event.currentTarget);

          // Ctrl (or Cmd) + click must open a new tab
          if (!event.metaKey && !event.ctrlKey && utility.shouldLoadAnchor($anchor, options.blacklist)) {
            var request = utility.translate($anchor.prop('href'));

            // stopPropagation so that event doesn't fire on parent containers.
            isTransitioning = true;
            event.stopPropagation();
            event.preventDefault();
            targetHash = $anchor.prop('hash');

            // Allows modifications to the request
            request = options.alterRequest(request);

            options.onBefore($anchor, $container);

            load(request);
          }
        },

        /**
         * Binds to form submissions
         * @param  {Event} event
         */
        submitForm = function (event) {
          var $form = $(event.currentTarget);

          if(!$form.is(options.blacklist)){
            event.preventDefault();
            event.stopPropagation();

            var request = {
                  url: $form.prop('action'),
                  data: $form.serialize(),
                  type: $form.prop('method')
                };

            isTransitioning = true;

            request = options.alterRequest(request);

            if(request.type.toLowerCase() === 'get') {
              request.url = request.url + '?' + request.data;
            }

            // Call the onReady callback and set delay
            options.onBefore($form, $container);

            load(request);
          }
        },

        /**
         * Binds all events and inits functionality
         * @param   {object}    event
         */
        bindEventHandlers = function ($element) {

          $element.on('click', options.anchors, clickAnchor);

          $element.on('submit', options.forms, submitForm);

          if (options.prefetch) {
            $element.on('mouseover touchstart', options.anchors, hoverAnchor);
          }
        },

        /** Restart the container's css animations */
        restartCSSAnimations = function () {
          var classes = $container.prop('class');
          $container.removeClass(classes);
          utility.redraw($container);
          $container.addClass(classes);
        };

      /** Merge defaults and global options into current configuration */
      options = $.extend( {}, $.fn.smoothState.options, options );

      /** Sets a default state */
      if(window.history.state === null) {
        window.history.replaceState({ id: elementId }, document.title, currentHref);
      }

      /** Stores the current page in cache variable */
      utility.storePageIn(cache, currentHref, document.documentElement.outerHTML, elementId);

      /** Bind all of the event handlers on the container, not anchors */
      utility.triggerAllAnimationEndEvent($container, 'ss.onStartEnd ss.onProgressEnd ss.onEndEnd');

      /** Bind all of the event handlers on the container, not anchors */
      bindEventHandlers($container);

      /** Public methods */
      return {
        href: currentHref,
        cache: cache,
        clear: clear,
        load: load,
        fetch: fetch,
        restartCSSAnimations: restartCSSAnimations
      };
    },

    /** Returns elements with smoothState attached to it */
    declaresmoothState = function ( options ) {
      return this.each(function () {
        var tagname = this.tagName.toLowerCase();
        // Checks to make sure the smoothState element has an id and isn't already bound
        if(this.id && tagname !== 'body' && tagname !== 'html' && !$.data(this, 'smoothState')) {
          // Makes public methods available via $('element').data('smoothState');
          $.data(this, 'smoothState', new Smoothstate(this, options));
        } else if (!this.id && consl) {
          // Throw warning if in debug mode
          consl.warn('Every smoothState container needs an id but the following one does not have one:', this);
        } else if ((tagname === 'body' || tagname === 'html') && consl) {
          // We dont support making th html or the body element the smoothstate container
          consl.warn('The smoothstate container cannot be the ' + this.tagName + ' tag');
        }
      });
    };

  /** Sets the popstate function */
  window.onpopstate = onPopState;

  /** Makes utility functions public for unit tests */
  $.smoothStateUtility = utility;

  /** Defines the smoothState plugin */
  $.fn.smoothState = declaresmoothState;

  /* expose the default options */
  $.fn.smoothState.options = defaults;

})(jQuery, window, document);

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
jQuery(window).load(function() {
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
		this.$body = jQuery('body');
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
		
		_slider_container = jQuery( element )[0];

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
		jQuery( document )
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
        this._$sections = $( '.site-section' );

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

        TweenMax.set(this._$sections.find('.js-inner'), {y: 115, autoAlpha: 0});
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

$( function() {

    page.init();

});
var menu = {

	_classMenuOpen: 'menu--is-open',
    _toggleMenu: 'toggle.menu',
    _$body: null,

    init: function() {

    	this._$body = $('body');

    	this._initEvents();
    },

    _initEvents: function() {
    	var _this = this;

    	// TOGGLE MENU RESPONSIVE
        // Between click and function, we can pass a sort of filter selector
	    $(document).on('click', '#js-toggle-menu', function(e) {
	        // AVOID PROPAGATION OF EVENT IN DOM
	        e.stopPropagation();
            
	        // BUBBLE UP
	        // When an event is triggered, it spreads throughout his parents until it reaches the root.
	        $(this).trigger(_this._toggleMenu);
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

$( function() {

    menu.init();

});
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
					.replace( /[\'\"]?\).*/, '');

				// GET TITLE
				var _title = $(this).find('.js-title').text();

				// GET CAT
				var _category = $(this).find( '.js-category').text();

	    	if( !$(this).children().attr('style') ){

	    		$(_this._box).toggleClass('show');
				$('.js-image-overlay-image').hide();
				$('.js-image-overlay-text').empty().append(_title);
				$('.js-image-overlay-category').empty().append(_category);

				// return;

			} else {

				$(_this._box).toggleClass( 'show' );
				$( '.js-image-overlay-image' ).show().attr( 'src', backgroundImage );
				$( '.js-image-overlay-text' ).html(_title);
				$( '.js-image-overlay-category' ).html(_category);
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
	        

		        // console.log( e.target );
		        	// e.preventDefault();

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
});