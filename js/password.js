var id = chrome.i18n.getMessage('@@extension_id'),
	$inputs = $('input[type=password]');

$inputs.each(function(){
	var $input = $(this),
		$span = $('<span />').css({'position':'absolute', 'right':'5%', 'top': '10%', 'width': 16, 'height': 16, 'background': 'url(chrome-extension://'+id+'/images/icon.png) right top no-repeat'}),
		$wrap = $('<span />').css({'position':'relative'});
		timeoutId = 0,
		style = null;

	$input.wrap($wrap);
	$input.after($span);

	$span.mousedown(function() {
	    timeoutId = setTimeout(function(){
	    	if (style === null){
	    		style = css($input);
	    	}
	    	$input.attr('type', 'text');
	    	$input.css(style);
	    }, 100);
	}).bind('mouseup mouseleave', function() {
		$input.attr('type', 'password');
	    clearTimeout(timeoutId);
	});
});