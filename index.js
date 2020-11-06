import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


// gsap.ticker.fps(30);
// gsap.ticker.lagSmoothing(500, 16);

var image = document.getElementById("mainimg");
var load = image.complete;

if (load == true) {
	console.log("sds");
	document.getElementById("block").style.display = "none";
	gsap.timeline().from(".sec1text span", { opacity: 0, duration: 0.6, x: -50,stagger: 0.5})
				.to(".contact", {opacity: 0.15, duration: 0.3, x: 0})
				.from(".scroll", { opacity: 0, duration: 0.3, y: -50 });
}

if (document.getElementById("block").style.display != "none") {
	
	document.getElementById("mainimg").addEventListener("load", () => {
		
		document.getElementById("block").style.display = "none";
		gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80 })
			.to(".contact", {opacity:  0.15, duration: 0.5,x: 0})
			.from(".scroll", { opacity: 0, duration: 0.5, y: -50 });
	});

}





gsap.registerPlugin( ScrollTrigger);

//text flot
for (let i = 2; i < 6; i++) {

	gsap.from(".sec" + i + "text", {
		y: 250,
		ease: "none",
		scrollTrigger: {
			trigger: ".section" + i,
			scrub: 0.5
		},
	});
};

//parallex effect
gsap.from(".sec2img", {
	ease: "power4.out",
	backgroundPositionY: "0%",
	duration: 1,
	delay: 0.2,
	scrollTrigger: {
		trigger: ".sec2img",
		toggleActions: "play reset play reset",
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


