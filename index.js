import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

var image = document.getElementById("mainimg");
var load = image.complete;

if (load == true) {
	console.log("test");
	document.getElementById("block").style.display = "none";
	gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80, stagger: 0.3, delay: 0.5 })
		.from(".mainimg", { opacity: 0, duration: 1.5, y: -50 }, "-=0.8")
		.from(".scroll", { opacity: 0, duration: 1.5, y: -50 }, "-=0.5");
}

if (document.getElementById("block").style.display != "none") {
	document.getElementById("mainimg").addEventListener("load", () => {
		document.getElementById("block").style.display = "none";
		gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80, stagger: 0.3, delay: 0.5 })
			.from(".mainimg", { opacity: 0, duration: 1.5, y: -50 }, "-=0.8")
			.from(".scroll", { opacity: 0, duration: 1.5, y: -50 }, "-=0.5");
	});

}

gsap.registerPlugin(ScrollTrigger);

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


//parallex effect

gsap.from(".sec2img", {
	ease: "none",
	backgroundPositionY: "0%",
	scrollTrigger: {
		trigger: ".section2",
		scrub: 1,
	},
});


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

});