import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {

	let $c_toggles = $('.catalog__toggle, .s-filters__close');
	let $s_filters = $('.s-filters');

	$c_toggles.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$s_filters.toggleClass('opened');
		// $s_filters.slideToggle('slow');
		

		if($s_filters.is(':hidden')) {
			enablePageScroll();
			return;
		}

		disablePageScroll();
	})

	$('.catalog__items').on({
		mouseenter: function() {
			let $self = $(this);
			$self
				.height($self.find(':first-child').outerHeight())
				.addClass('hover');
		},
		mouseleave: function() {
			$(this)
				.removeAttr('style')
				.removeClass('hover');
		}
	}, '.catalog__item');


})();
