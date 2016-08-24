$(function() {
	
	var sectionData = {};
	
	var init = (function () {
		initEventListeners();
		getPositionY();
	})();
	
	
	function getPositionY() {
		$('.content-wrapper').each(function() {
			sectionData[this.id] = [$(this).offset().top, $(this).height()];
		});
	}
	
	function initEventListeners () {
		$('a[href*="#"]:not([href="#"])').on('click', function () {
	  	setActive.call(this);
	  	smoothScroll.call(this);
	  });
    
    $('.icon-menu').on('click', function () {
      $('.header-navbar').slideToggle(400);
    });
	  
	  $(window).on('scroll', scrollSpy);
	  $(window).on('resize', getPositionY);
	}
  
  function setActive() {
  	$('.navbar-menu').find('.active').removeClass('active');
  	$(this).addClass('active');
  }
  
  function smoothScroll() {
    var id = this.href.substring(this.href.lastIndexOf('#'));
    var target = $(id);

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1000);
      return false;
    }
  }
  
  function scrollSpy() {
  	var scroll = $(document).scrollTop();
  	var hdr = $('.header');
  	var barSize = 100;
  	
  	if (scroll > barSize) {
  		if (!hdr.hasClass('header-sticky')) {
  			hdr.addClass('header-sticky');
  		}
  	} else if (hdr.hasClass('header-sticky')) {
  		hdr.removeClass('header-sticky');
  	}
  	
  	if (scroll >= sectionData.inicio[1] - barSize) {
      if (!hdr.hasClass('header-small') && $(window).width() > 768) {
  		  hdr.addClass('header-small');
      }
  	} else if (hdr.hasClass('header-small')) {
  		hdr.removeClass('header-small');
  	}
  	
  	$.each(sectionData, function(key, val) {
  		if (scroll >= (val[0] - barSize) && scroll < (val[0] + val[1]) - barSize) {
  			var elem = $('.navbar-menu').find('a[href*="#'+ key +'"]');
  			setActive.call(elem);
  		}
  	});
  }
});
