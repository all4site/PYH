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
//Video bottom page
$(document).ready(function () {
	var $wrapper = $('.tab-wrapper'),
		$allTabs = $wrapper.find('.videoblock-active img'),
		$cross = $wrapper.find('.videoblock-active').before(),
		$tabMenu = $wrapper.find('.videoblock > .imgvideoblock');

	$allTabs.hide();
	$cross.hide();

	$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab-' + i);
	});

	$tabMenu.click(function () {
		$cross.show();
		var dataTab = $(this).data('tab'),
			$getWrapper = $(this).closest($wrapper);


		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
	});
	$cross.click(function () {
		$allTabs.hide();
		$cross.hide();
	});
});