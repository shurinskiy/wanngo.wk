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
		let $checks = $self.find('.s-filters__item input[type="checkbox"]');

		$self.on('change', $checks, function(e) {
			let ids = [];

			$checks.each(function(index) {
				if ($(this).is(':checked')) {
					ids.push(index);
				}
			});

			if($.isEmptyObject(ids)) {
				$count
					.removeAttr('style')
					.find('span')
					.empty();
			} else {
				$count
					.show()
					.find('span')
					.text(ids.length);
			}

		});
	});

})();
