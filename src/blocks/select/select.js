(() => {

	$('.select').each(function() {
		let $self = $(this);
		let $options = $self.find('option');

		// Добавить оболочку будущего списка, а сам селект спрятать
		$self.wrap('<div class="select__wrapper"></div>');
		$self.hide();

		// Добавить заголовок
		$('<div>', { class: 'select__head' }).insertAfter($self);
		let $head = $self.next('.select__head');

		// Добавить список
		$('<ul>', { class: 'select__list' }).insertAfter($head);
		let $list = $head.next('.select__list');

		// Добавить элементы списка
		for (let i = 0; i < $options.length; i++) {
			$('<li>', {
					class: 'select__item',
					html: $('<span>', {
						text: $options.eq(i).text()
					})
				})
				.attr('data-value', $options.eq(i).val())
				.appendTo($list);
		}
		let $items = $list.find('li');

		$head.text($options.eq(0).text());
		$items.eq(0).addClass('select__item_selected');

		// По клику по заголовку показывать список выбора
		$head.on('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('select__head_open');
		});

		// По клику по любому месту, кроме заголовка - прятать список выбора
		$(window).on('click', function(e) {
			if($head.hasClass('select__head_open') && !e.target.closest('.select__wrapper')) {
				$head.removeClass('select__head_open');
			}
		});

		// По клику по элементу списка показывать его значение в заголовке и селекте
		$list.on('click', 'li:not(.select__item_selected)', function(e) {
			$(this)
				.addClass('select__item_selected')
				.siblings()
				.removeClass('select__item_selected');

			$head.text($(this).text());
			$options
			.removeAttr('selected')
			.eq($(this).index())
			.attr('selected', 'selected')
		});	
	});
})();
