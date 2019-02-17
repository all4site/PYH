$(document).ready(function () {

	var $wrapper = $('.tab-wrapper'),
		$allTabs = $wrapper.find('.tab-content > .tab-text'),
		$tabMenu = $wrapper.find('.tab-menu li');

	$allTabs.not(':first-of-type').hide();

	$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$tabMenu.click(function () {

		var dataTab = $(this).data('tab'),
			$getWrapper = $(this).closest($wrapper);


		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
	});

});


$(document).ready(function () {
	$('a[data-target="menu"]').click(function () {
		var target = $(this).attr('href');
		var wh = $(window).width();
		$('a').removeClass('active');
		$(this).addClass('active');

		if (wh < 480) {
			$('html, body').animate({
				scrollTop: $(target).offset().top - 50
			}, 700);
		} else {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 700);
		}

	});

	//Scroll Load Page
	var pos = $('.menuscroll').offset().top;
	var wh = $(window).width();
	console.log(wh);

	if (pos >= 50 && wh > 768) {
		$('.menuscroll').addClass('menuscrollback');

	}
	if (pos >=100) {
		$('.scrolltop').css('opacity', '1');
	}


	//Scroll top form botton
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 300) {
			$('.scrolltop').css('opacity', '1');
		} else {
			$('.scrolltop').css('opacity', '0');

		}

	});

	$(document).scroll(function () {
		var y = $(this).scrollTop();
		var wh = $(window).width();
		if (y > 50 && wh > 768) {
			$('.menuscroll').addClass('menuscrollback');
		} else {
			$('.menuscroll').removeClass('menuscrollback');

		}
	});

//Menu Small
	$('.cros').click(function () {
		$('.navbar').toggle('slide', {
			direction: 'up'
		},300);
	});
//Menu Small Close
	$('.navbar ul a').click(function () {
		$('.navbar').hide('slide', {
			direction: 'up'
		}, 300);
		$('.hamburger').removeClass('is-active');
	});
//Menu Cross
	$('.cros').click(function () {
		$('.hamburger').toggleClass('is-active');
	});
});


//Subscribe top
$(document).ready(function () {
	$('.headersubwrapbottom').hide();
	$('.headersubwraptop').hide();
	$('.btntwotop').click(function () {
		$showblock = $('.headersubwrap');
		$('.headersubwraptop').toggle('slide', {
			direction: 'up'
		});
	});
	$('.btntwobottom').click(function () {
		$showblock = $('.headersubwrap');
		$('.headersubwrapbottom').toggle('slide', {
			direction: 'up'
		});
	});

});
