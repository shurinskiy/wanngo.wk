(() => {
	$('.s-filters__title').on('click', function(e) {
		$(this)
			.toggleClass('opened')
			.next('.s-filters__items')
			.slideToggle();
	});

	$('.s-filters__block').each(function() {
		let $self = $(this);
		let $count = $self.find('.s-filters__title-selected');

		$self.on('click', 's-filters__item checkbox', function(e) {
			
		});
	});

})();
