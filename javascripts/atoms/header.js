document.addEventListener("DOMContentLoaded",
	function(){
		var full_width = window.innerWidth; 
		console.log(full_width);
		var sliderTL = new TimelineMax({ repeat: -1 });
		var slider_delay = 1;
		// sliderTL.add();
		sliderTL
			.add(TweenMax.fromTo(".slide--1", .5, {left: 0}, { left: -full_width, delay:  slider_delay  }))

			.add(TweenMax.to(".active-control", .5, { left: "+=30px", ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-1", .5, { opacity:  .38, ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-2", .5, { opacity:  1, ease: Power3.easeOut }), "-=.5")

			.add(TweenMax.fromTo(".slide--2", .5, { left: full_width  }, { left: 0 }), "-=.5")

			.add(TweenMax.fromTo(".slide--2", .5, {left: 0}, { left: -full_width, delay:  slider_delay  }))

			.add(TweenMax.to(".active-control", .5, { left: "+=30px", ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-2", .5, { opacity:  .38, ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-3", .5, { opacity:  1, ease: Power3.easeOut }), "-=.5")

			.add(TweenMax.fromTo(".slide--3", .5, { left: full_width  }, { left: 0 }), "-=.5")

			.add(TweenMax.fromTo(".slide--3", .5, {left: 0}, { left: -full_width, delay:  slider_delay  }))

			.add(TweenMax.to(".active-control", .5, { left: "+=30px", ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-3", .5, { opacity:  .38, ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-4", .5, { opacity:  1, ease: Power3.easeOut }), "-=.5")

			.add(TweenMax.fromTo(".slide--4", .5, { left: full_width  }, { left: 0 }), "-=.5")


			.add(TweenMax.fromTo(".slide--4", .5, {left: 0 }, { left: -full_width, delay:  slider_delay  }))

			.add(TweenMax.to(".active-control", .25, { left: "6px", ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".active-control", .25, { left: "6px", ease: Power3.easeOut }), "-=.25")
			.add(TweenMax.to(".control-3", .5, { opacity:  .38, ease: Power3.easeOut }), "-=.5")
			.add(TweenMax.to(".control-4", .5, { opacity:  1, ease: Power3.easeOut }), "-=.5")

			.add(TweenMax.fromTo(".slide--1", .5, {left: full_width }, { left: 0, delay:  slider_delay  }))
			// .add(TweenMax.fromTo(".slide--1", .5, { left: full_width  }, { left: 0 }), "-=.5");

		sliderTL.play();
	}
);