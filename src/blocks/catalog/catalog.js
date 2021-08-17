(() => {

	$('.catalog__toggle, .s-filters__close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$('.s-filters').slideToggle('slow');
		$('.catalog__toggle').toggle();
	})

})();
