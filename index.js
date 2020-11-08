import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.ticker.deltaRatio(60);

var image = document.getElementById("mainimg");
var load = image.complete;
var loaderdiv = document.getElementById("block");



if (load == true) {

	setTimeout (()=>{
		gsap.to(loaderdiv, { duration: 0.5, y: "-100%" });
	},1000);
	
	setTimeout(function () {
		loaderdiv.style.display = "none";

		gsap.timeline().to(".sec1text span", { opacity: 0.9, x: 0, stagger: 0.1 })
			.to(".contact", { opacity: 0.15, duration: 0.2, x: 0 })
			.to(".scroll", { opacity: 1, duration: 0.2, y: 0 });


	}, 1500);

}

if (document.getElementById("block").style.display != "none") {

	document.getElementById("mainimg").addEventListener("load", () => {

		setTimeout (()=>{
			gsap.to(loaderdiv, { duration: 0.5, y: "-100%" });
		},1000);

		setTimeout(function () {
			loaderdiv.style.display = "none";


			gsap.timeline().to(".sec1text span", { opacity: 0.9, x: 0, stagger: 0.1 })
				.to(".contact", { opacity: 0.15, duration: 0.3, x: 0 })
				.to(".scroll", { opacity: 1, duration: 0.3, y: 0 });

		}, 1500);
	});

}

gsap.registerPlugin(ScrollTrigger);

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

if (window.innerWidth > 1400) {

	//parallex effect
	gsap.from(".laptop", {
		ease: "none",
		backgroundPositionY: "0%",
		scrollTrigger: {
			trigger: ".laptop",
			toggleActions: "play reset play reset",
			scrub: 0.5,
		},
	});
}





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

