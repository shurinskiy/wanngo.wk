(() => {
	$('.s-filters__title').on('click', function(e) {
		$(this)
			.toggleClass('opened')
			.next('.s-filters__items')
			.slideToggle();
	})
})();
