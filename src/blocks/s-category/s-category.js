(() => {

	$('.s-category__items').on('click', '.s-category__item-all', function(e) {
		e.preventDefault();

		$(this)
			.parent('.s-category__items')
			.find('.s-category__item')
			.fadeIn()
			.end().end()
			.remove();
	});

})();
