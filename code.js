$(document).ready(function() {
	$(function() {
		$(".toolbox").draggable();
	});
	$(function() {
		$( "#slider" ).slider({
			range: "min",
			value: 34,
			min: 1,
			max: 500,
			slide: function( event, ui ) {
				$( "#line-height" ).val(  ui.value );
				var height = ui.value + 'px';
				$('#thebox').css({
					'line-height': height
				});
			}
		});
				
	});

	$(function() {
		$( "#sliderfonts" ).slider({
			range: "min",
			value: 30,
			min: 10,
			max: 180,
			slide: function( event, ui ) {
				$( "#font-size" ).val(  ui.value );
				var size = ui.value + 'px';
				$('#thebox').css({
					'font-size': size
				});
			}
		});
				
	});	
	
	$('#box-width').blur(function() {
		var width = ($(this).val() - 40) + 'px';
		$('#thebox').css({
			'width': width
		});
	});
	$('#box-height').blur(function() {
		var height = ($(this).val() - 40) + 'px';
		$('#thebox').css({
			'height': height
		});
	});
	$('#aleft').click(function() {
		$('#thebox').css({
			'text-align': 'left'
		});
	});
	$('#acenter').click(function() {
		$('#thebox').css({
			'text-align': 'center'
		});
	});
	$('#aright').click(function() {
		$('#thebox').css({
			'text-align': 'right'
		});
	});
	$('#ajustify').click(function() {
		$('#thebox').css({
			'text-align': 'justify'
		});
	});
	$('#closewarning').click(function() {
		$('#warning').fadeOut();
	});

	$('#fonts').change(function() {
		var family = $(this).val();
		$('#thebox').css({
			'font-family': family
		});
	});
	
	$('#sizes').change(function() {
		var size = $(this).val();
		switch (size){
		case "Facebook Cover":
			$('#thebox').css({
				'height': '272px'
			});
			$('#thebox').css({
				'width': '811px'
			});
			$('#box-height').val('312');
			$('#box-width').val('851');		  	
		  break;
		case "Facebook Avatar":
			$('#thebox').css({
				'height': '140px'
			});
			$('#thebox').css({
				'width': '140px'
			});
			$('#box-height').val('180');
			$('#box-width').val('180');
		  break;
		case "iPhone Wallpaper":
			$('#thebox').css({
				'height': '440px'
			});
			$('#thebox').css({
				'width': '280px'
			});
			$('#box-height').val('480');
			$('#box-width').val('320');
		break;
		case "Default":
		 	$('#thebox').css({
			'height': '440'
			});
			$('#thebox').css({
				'width': '600'
			});
			$('#box-height').val('480');
			$('#box-width').val('640');
		  break;
		}	
		
	});
	$('#top-padding').blur(function() {
		if ($(this).val() !== "") {
			var padding = $(this).val();
			var bheight = $('#box-height').val() - 40;
			console.log(padding);
			if (padding <= bheight) {
				$('#thebox').css({
					'padding-top': padding + 'px'
				});
				var newheight = bheight + 20 - padding;
				$('#thebox').css({
					'height': newheight + 'px'
				});
			} else {
				alert("Padding can't be higher than the box height!");
			}
		}
	});
	
	$('#bg-1').click(function() {
		$('#thebox').css({
			'background': ' url(art/p1.jpg) center'
		});
	});
	$('#bg-2').click(function() {
		$('#thebox').css({
			'background': ' url(art/p2.jpg) center'
		});
	});
	$('#bg-3').click(function() {
		$('#thebox').css({
			'background': ' url(art/p3.jpg) center'
		});
	});
	$('#bg-4').click(function() {
		$('#thebox').css({
			'background': ' url(art/bg8.jpg) center'
		});
	});
	$('#bg-5').click(function() {
		$('#thebox').css({
			'background': ' url(art/bg13.jpg) center'
		});
	});
	$('#bg-6').click(function() {
		$('#thebox').css({
			'background': ' url(art/bg17.jpg) center'
		});
	});
	$('#bg-7').click(function() {
		$('#thebox').css({
			'background': ' url(art/bg19.jpg) center'
		});
	});
	$('#bg-8').click(function() {
		$('#thebox').css({
			'background': ' url(art/sp1.png) center'
		});
	});
	$('#bg-9').click(function() {
		$('#thebox').css({
			'background': ' url(art/sp2.jpg) center'
		});
	});
	$('#bg-w').click(function() {
		$('#thebox').css({
			'background': '#fff'
		});
	});

});
