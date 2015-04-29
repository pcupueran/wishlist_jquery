(function ($) {
	$.fn.switchClass = function(startClass, finalClass) {
		this.removeClass(startClass);
		this.addClass(finalClass);
	}
}(jQuery));