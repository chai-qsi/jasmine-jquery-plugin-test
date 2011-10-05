(function ($) {
	$.fn.colorAltRows = function() {
		return this.each(function (index, table) {
			$(table).find("tr:even").addClass("even");
			$(table).find("tr:odd").addClass("odd");
		});
	};
})(jQuery);