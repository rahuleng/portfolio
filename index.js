import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.ticker.lagSmoothing(500, 16);
var image = document.getElementById("mainimg");
var load = image.complete;

if (load == true) {

	document.getElementById("block").style.display = "none";
	gsap.timeline().from(".sec1text", { opacity: 0, duration: 1, x: -80, ease: "power4.out",})
		.from(".mainimg", { opacity: 0, duration: 0.8, y: -50 , ease: "power4.out",}, "-=0.5")
		.to(".contact", {opacity: 0.15, duration: 0.5,x: 0, ease: "power4.out",}, "-=0.5")
		.from(".scroll", { opacity: 0, duration: 0.5, y: -50, ease: "power4.out", },"-=0.5");
}

if (document.getElementById("block").style.display != "none") {
	
	document.getElementById("mainimg").addEventListener("load", () => {

		document.getElementById("block").style.display = "none";
		gsap.timeline().from(".sec1text", { opacity: 0, duration: 1, x: -80, ease: "power4.out",})
			.from(".mainimg", { opacity: 0, duration: 0.8, y: -50 , ease: "power4.out",}, "-=0.5")
			.to(".contact", {opacity: 0.15, duration: 0.5,x: 0, ease: "power4.out",}, "-=0.5")
			.from(".scroll", { opacity: 0, duration: 0.5, y: -50 , ease: "power4.out",},"-=0.5");
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