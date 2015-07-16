$(document).ready(function(){
	
	$('.hide-td-button').on('click', function(){

		if ($(this).hasClass('btn1')) {
			$('.hidden-tr-1').toggleClass('hide');
		} else if ($(this).hasClass('btn2')) {
			$('.hidden-tr-2').toggleClass('hide');
		} else {
			$('.hidden-tr-3').toggleClass('hide');
		}

	});

});
