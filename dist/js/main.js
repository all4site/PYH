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

//Start Click on the link
	$(document).ready(function () {
		var link = $('.tab-text .resources a');
		var wrap = $('.tab-wrapper');
		link.click(function (e) {
			e.preventDefault();

			var closwrap 	= $(this).closest('.tab-content').find('.tab-video');
			var clostab 	= $(this).closest('.tab-text');
			var closall = $(this).closest('.tab-wrapper');

			clostab.hide();
			closwrap.show();
			closall.find('.tab-menu li').removeClass('active');
			closall.find(':nth-of-type(3)').addClass('active');

		});
	});
//End Click on the link
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
});
	//Scroll Load Page
	var pos = $('.menuscroll').offset().top;
	var wh = $(window).width();

	if (pos >= 50 && wh > 768) {
		$('.menuscroll').addClass('menuscrollback');

	}
	if (pos >= 100) {
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
$(document).ready(function () {
	var wh = $(window).width();
	$(window).resize(function () {
		location.reload();
	});

		if (wh <= '992') {

			$('.cros').click(function () {
				$('.navbar').toggle('slide', {
					direction: 'up'
				}, 300);
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

		}
});

//Subscribe top
$(document).ready(function () {
	$('.headersubwrapbottom').hide();
	$('.headersubwraptop').hide();
	$('.btntwotop').click(function (e) {
		e.preventDefault();
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

// Start MailChimp Subscribe
$(document).ready(function () {

	// E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail/mail.php", //Change
			data: th.serialize(),
						success: function (data) {
							if (data == 'suc') {
								alert('Дякуемо за підписку');
								$('.headersubwraptop').slideUp(500);
								th.trigger("reset");
							} else {
								$('.headersubwraptop').fadeIn(500);
								th.trigger("reset");
							}
						}
		});
		return false;
	});

});
// End MailChimp Subscribe

//Start Page Video TAB
$(document).ready(function () {
	$('.video-inner').css({
		"display":"block"
	})
	var $wrapperfull = $('.video-wrap'),
		$wrapperlink = $('.video-link'),
		$allTabs = $wrapperfull.find('.video-inner'),
		$tabMenu = $wrapperlink.find('.video-link-inner');


	$allTabs.not(':first-of-type').hide();

	$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$tabMenu.click(function () {
		$allTabs.removeClass('play');
		var dataTab = $(this).data('tab'),
			$getWrapper = $(this).closest($wrapperlink);


		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$wrapperfull.find($allTabs).hide();
		$wrapperfull.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
		$wrapperfull.find($allTabs).filter('[data-tab=' + dataTab + ']').addClass('play');
	});

});
//End Page Video TAB

//START PLAYER
$(document).ready(function () {
	var v = $('.video-inner');

	$('video').mediaelementplayer({
		pauseOtherPlayers: true,
		stretching: 'none'
	});

});

$(document).ready(function () {
	var link = $('.video-link-inner');
	var v = $('.video-inner');
link.click(function () {
	if (v.hasClass('play')) {
	var play = $('.video-wrap').find('.play video');
	play.each(function () {
		this.player.play()
	});
	}
});
});
//END PLAYER
