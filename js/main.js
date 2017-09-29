// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

function showonlyone(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
      for(var x=0; x<newboxes.length; x++) {
            name = newboxes[x].getAttribute("class");
            if (name == 'newboxes') {
                  if (newboxes[x].id == thechosenone) {
                        if (newboxes[x].style.display == 'block') {
                              newboxes[x].style.display = 'none';
                        }
                        else {
                              newboxes[x].style.display = 'block';
                        }
                  }else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}

$(function(){
	 
		$('.goto').click(function(){
		var id = $(this).attr('href');
        
            var top = $(id).offset().top;
            $('html,body').animate({scrollTop: top}, 1000, 'easeInOutQuad');
            return false;
        
    });
	 
	 
});

$('.expand').click(function(){
		$('html,body').animate({scrollTop: $('#inner-showcase').offset().top}, 500, 'easeInOutQuad');
		if (screen.width <= 767 || window.innerWidth <=767) {
		$('#newboxes').animate({opacity:'1', height:'650px'},500).css('display', 'block');
		$('#newboxes').css('display', 'block');
		
		}
		else{
			$('#newboxes').animate({opacity:'1', height:'500px'},500).css('display', 'block');
			$('#inner-showcase').css('display', 'block');
			$('#inner-showcase').hide().fadeIn(1000);}
	});

$('.expand1').click(function(){
		$('html,body').animate({scrollTop: $('#inner-showcase1').offset().top}, 500, 'easeInOutQuad');
		if (screen.width <= 767 || window.innerWidth <=767) {
		$('#newboxes').animate({opacity:'1', height:'650px'},500).css('display', 'block');
		$('#newboxes').css('display', 'block');
		
		}
		else{
			$('#newboxes').animate({opacity:'1', height:'500px'},500).css('display', 'block');
			$('#inner-showcase1').css('display', 'block');
			$('#inner-showcase1').hide().fadeIn(1000);}
	});

	