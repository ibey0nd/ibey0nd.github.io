var AutoAnimate = {
	initPage: function() {
		AutoAnimate.txtChange();
		AutoAnimate.screenSlide();
		AutoAnimate.shdowInfo();
		AutoAnimate.navShow();
	},
	txtChange: function() {
		var i = 0;
		var Objs = document.querySelectorAll(".fademe");
		$(".fademe:first-of-type").fadeIn(1000);
		var timmer = setInterval(function() {
			$(Objs[i]).fadeOut(1000, function() {
				if(i < Objs.length - 1) {
					i++;
				} else {
					i = 0;
				}
				$(Objs[i]).fadeIn(1000)
			});
		}, 3000);
	}, //
	screenSlide: function() {
		var screenH = $(window).height();
		var ulH = $("ul.menu").height();
		$(window).scroll(function() {
			if($(this).scrollTop() >= screenH - ulH) {
				$("ul.menu").addClass('act');
				$(".top").show();
			} else {
				$("ul.menu").removeClass('act');
				$(".top").hide();
			}
		});
		$("a").click(function() {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top - 20 + "px"
			}, 500);
			return false; //不要这句会有点卡顿
		});
	},
	shdowInfo: function() {
		$(".block div").mouseenter(function() {
			$(this).find(".info").css("bottom", "10px");
		});
		$(".block div").mouseleave(function() {
			$(this).find(".info").css("bottom", "-380px");
		});
	},
	navShow: function() {
		$(".collapse-button").click(function() {
			$(".nav-show").html("");
			$(".nav-show").append($(".menu").html());
			$(".nav-show").show();
		});
		$(".nav-show").click(function(){
			$(".nav-show").hide();
		});
		$('.top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
	}
}
window.onload = function() {
	AutoAnimate.initPage();
}