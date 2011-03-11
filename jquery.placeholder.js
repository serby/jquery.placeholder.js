/**
 * Allows text inputs to display a placeholder message until it gets focus, at which point the input
 * is set to empty.
 *
 * This simulated the placeholder attribute in html5.
 * http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute
 *
 * @copyright Clock Limited 2010
 * @license http://opensource.org/licenses/bsd-license.php New BSD License
 * @author Paul Serby <paul.serby@clock.co.uk>
 * @version 1.0
 */
(function($) {
	$.fn.placeholder = function(text) {

		function onBlur(event) {
			checkIfEmpty(jQuery(this));
		}

		function checkIfEmpty(control) {
			if (control.val() == "") {
				control.val(text);
			}
		}

		function onFocus(event) {
			if (jQuery(this).val() == text) {
				jQuery(this).val("");
			}
		}

		return this.each(function() {
			checkIfEmpty(jQuery(this).blur(onBlur).focus(onFocus));
		});
	};
})(jQuery);