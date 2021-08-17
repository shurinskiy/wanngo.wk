import { disablePageScroll, enablePageScroll } from 'scroll-lock';

(() => {
	let $shell = $('.header__navi');
	let $toggle = $('.header__toggle');
	let $search = $('.header__search');

	$search.on('click', function(e) {
		let $self = $(this);

		if (parseInt(getComputedStyle(this).width) < 40) {
			$self
				.not('.opened')
				.addClass('opened')
				.find('input[type="text"]')
				.trigger('focus');
		}
	});

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$shell.toggleClass('opened');
		$(this).toggleClass('opened');

		if($shell.hasClass('opened')) {
			disablePageScroll();
			return;
		}

		enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($search.hasClass('opened') && !e.target.closest('.header__search')) {
			e.preventDefault();
			$search.removeClass('opened');
		}

		if(($shell.hasClass('opened') && !e.target.closest('.header__navi')) || e.which == 27) {
			e.preventDefault();
			$toggle.removeClass('opened');
			$shell.toggleClass('opened');
			enablePageScroll();
		}
	});
})();