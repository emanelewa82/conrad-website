/*button*/

$(function(){
	
	$('.first').click(function(){
		$('.one').show();
		$('.two').hide();
		});
		
		$('.second').click(function(){
		$('.two').show();
		$('.one').hide();
		});
		
		/*menu*/
		
		$(window).scroll(function(){
			var scroll=$(this).scrollTop();
			if(scroll>500)
			{ $('.black').slideDown();
			}
			else{
				$('.black').slideUp();
				}
			
			});
		
		
		/*fancybox*/
		$(".fancybox").fancybox();
		
		
		/*paragraph*/
		$('.one').show();
		
		$('.block h3').click(function(){
			$(this).next().slideToggle();
			$('.block p').not($(this).next()).slideUp();
			
			});
		
		/*numbers*/
		 $('.timer').countTo();
		 
		 $('.photos').mixItUp();
		 
		  $("html").niceScroll({
			  cursorcolor: "#424242",
			  cursorborder: "none"
			  });
		
	});
	

	
	
	