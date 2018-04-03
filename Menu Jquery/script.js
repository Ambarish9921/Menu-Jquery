( function( $ ) {
$( document ).ready(function() {
$('#mainmenu').prepend('<div id="menu-button">Menu</div>');
	$('#mainmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
