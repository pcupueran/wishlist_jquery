//Extending the Jquery prototype

(function ($) {
	$.fn.switchClass = function(previousClass, currentClass) {
		this.removeClass(previousClass);
		this.addClass(currentClass);
	};
})(jQuery);
