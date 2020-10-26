import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

var image = document.getElementById("mainimg");
var load = image.complete;

if (load == true) {
	console.log("test");
	document.getElementById("block").style.display = "none";
	gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80, stagger: 0.3, delay: 0.5 })
		.from(".mainimg", { opacity: 0, duration: 1, y: -50 }, "-=0.8")
		.to(".contact", {opacity: 0.2, duration: 0.5,x: 0}, "-=0.5")
		.from(".scroll", { opacity: 0, duration: 0.5, y: -50 });
}

if (document.getElementById("block").style.display != "none") {
	document.getElementById("mainimg").addEventListener("load", () => {
		document.getElementById("block").style.display = "none";
		gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1.5, x: -80, stagger: 0.3, delay: 0.5 })
			.from(".mainimg", { opacity: 0, duration: 1, y: -50 }, "-=0.9")
			.to(".contact", {opacity: 0.2, duration: 0.5,x: 0}, "-=0.5")
			.from(".scroll", { opacity: 0, duration: 0.5, y: -50 });
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


gsap.from(".arrow", {
	scrollTrigger: {
		trigger: ".sec4img",
		toggleActions: "play complete complete complete",
		once: true,
	}, // start the animation when ".box" enters the viewport (once)
	x: "45%", duration:1,delay:0.5,
});

gsap.from(".sec3next", {
	scrollTrigger: {
		trigger: ".fleximgsec3",
		toggleActions: "play complete complete complete",
		once: true,
	}, // start the animation when ".box" enters the viewport (once)
	x: "-55%", duration: 1, delay:0.8,
});

var j = 0;

document.querySelector(".sec3next").addEventListener("click", () => {
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

// document.querySelector(".round").addEventListener("click", () => {
// 	document.getElementById("temp").className = "anim";
// 	document.getElementById("temp1").className = "anim";
// 	setTimeout(function(){ 
// 		document.getElementById("temp").className = "";
// 		document.getElementById("temp1").className = "";

// 	 }, 8000);
// });