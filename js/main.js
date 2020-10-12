var image = document.getElementById("mainimg");
var load = image.complete;
if (load == true) {
	console.log("test");
	document.getElementById("block").style.display = "none";
	gsap.registerPlugin(ScrollTrigger);
	gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80, stagger: 0.3, delay: 0.5 })
		.from(".mainimg", { opacity: 0, duration: 1.5, y: -50 }, "-=0.8")
		.from(".scroll", { opacity: 0, duration: 1.5, y: -50 }, "-=0.5");
}

if (document.getElementById("block").style.display != "none") {
	document.getElementById("mainimg").addEventListener("load", () => {
		document.getElementById("block").style.display = "none";
		gsap.registerPlugin(ScrollTrigger);
		gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80, stagger: 0.3, delay: 0.5 })
			.from(".mainimg", { opacity: 0, duration: 1.5, y: -50 }, "-=0.8")
			.from(".scroll", { opacity: 0, duration: 1.5, y: -50 }, "-=0.5");
	});

}

if (window.innerWidth > 1300) {
	new SmoothScroll(document, 120, 12);
	console.log(true);
}

//text flot
for (let i = 2; i < 6; i++) {

	gsap.from(".sec" + i + "text", {
		y: 270,
		ease: "none",
		scrollTrigger: {
			trigger: ".section" + i,
			scrub: 1
		},
	});
};


//zoom effect


// if (navigator.userAgent.indexOf('Chrome') != -1) { 
// 	gsap.from(".section2", {
// 		scrollTrigger: {
// 	  trigger: ".section2",   
// 	},duration: 1, transform: "scale(1.2,1.2)"});
// }


//parallex effect

gsap.from(".sec2img", {
	ease: "none",
	backgroundPositionY: "0%",
	scrollTrigger: {
		trigger: ".section2",
		scrub: 1,
	},
});

// gsap.from(".sec5img", {
// 	ease: "none",
// 	backgroundPositionY: "70%",
// 	scrollTrigger: {
// 		trigger: ".section5",
// 		scrub: 1,
// 	},
// });


// for (let i = 3; i < 5; i++) {
// 	gsap.from(".sec" + i + "img", {
// 		y: 100,
// 		ease: "none",
// 		scrollTrigger: {
// 			trigger: ".section" + i,
// 			// start: "top bottom", // the default values
// 			// end: "bottom top",
// 			scrub: 1
// 		},
// 	});
// }



var j = 0;

document.getElementById("sec3next").addEventListener("click", () => {
	if (j < 4) {
		j++;
		gsap.to(".sec3img1", { ease: "Power1.easeOut", backgroundPositionX: "+=25%", duration: 0.5 });
		gsap.to(".sec3img2", { ease: "Power1.easeOut", backgroundPositionX: "+=25%", duration: 0.5 });
	} else {
		j = 0;
		gsap.to(".sec3img1", { ease: "Power1.easeOut", backgroundPositionX: "0%", duration: 0.5 });
		gsap.to(".sec3img2", { ease: "Power1.easeOut", backgroundPositionX: "0%", duration: 0.5 });
	}

})



gsap.from("#arrow", {
	scrollTrigger: {
		trigger: "#arrow",
		start: "top center",
		toggleActions: "play none none none",
		scrub: 1,
	}, // start the animation when ".box" enters the viewport (once)
	x: 200, duration: 1.5
});

gsap.from("#sec3next", {
	scrollTrigger: {
		trigger: "#sec3next",
		start: "top center",
		toggleActions: "play none none none",
		scrub: 1,
	}, // start the animation when ".box" enters the viewport (once)
	x: -200, duration: 1.5
});




//smooth scroll


function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement
			|| document.documentElement
			|| document.body.parentNode
			|| document.body) // cross browser support for document scrolling

	var moving = false
	var pos = target.scrollTop
	var frame = target === document.body
		&& document.documentElement
		? document.documentElement
		: target // safari is the new IE

	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e) {
		if (e.detail) {
			if (e.wheelDelta)
				return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
			else
				return -e.detail / 3 // Firefox
		} else
			return e.wheelDelta / 120 // IE,Safari,Chrome
	}

	function update() {
		moving = true

		var delta = (pos - target.scrollTop) / smooth

		target.scrollTop += delta

		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function () { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
};
