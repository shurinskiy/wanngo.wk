(() => {
	let $search = $('.header__search');

	$search.on('click', function(e) {
		let $self = $(this);

		if(parseInt($self.css('border')) < 40) {
			$self
				.not('.opened')
				.addClass('opened')
				.find('input[type="text"]')
				.trigger('focus');
		}
	});

	$(window).on('click', function(e) {
		if($search.hasClass('opened') && !e.target.closest('.header__search')) {
			e.preventDefault();
			$search.removeClass('opened');
		}
	});

})();