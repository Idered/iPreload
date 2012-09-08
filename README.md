# iPreload
It'a classic jQuery preloader that works great with normal images and images in href attribute of `<a>` tag.

## Usage

	(function($) {
		$('body').iPreload(options);
	})(jQuery)

## Options

* onAll : function () - called when all images are fully loaded
* onOne : function (image) - called when one image is fully loaded
* onFail : function (image) - called when an error occurred during loading
* beforeShow : function (image) - called before image is shown
* fadeTime : var(default is 500) - fade time in milliseconds
* delay : var(default is 100) - time between displaying next image
* interval : var(default is 200) - time between checking if any of images
* wrapper : var(default is 'a') - tag in which image is wrapped during loading
* preloadLinkImages: var(default is true) - preload images in href attributes?

## License

Released under MIT license.