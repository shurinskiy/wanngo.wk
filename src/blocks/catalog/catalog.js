(() => {

	$('.catalog__toggle, .s-filters__close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		$('.s-filters').slideToggle('slow', function() {
			let $self = $(this);
			
			if ($self.is(':hidden'))
				$self.removeAttr('style');
		});

		$('.catalog__toggle').toggle();
	})

})();