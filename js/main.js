gsap.registerPlugin(ScrollTrigger);



gsap.timeline().from(".sec1text span", { opacity: 0, duration: 1, x: -80,stagger: 0.3,delay:0.2})
.from(".mainimg",{opacity: 0, duration: 1.5 ,y: -50},"-=0.8")
.from(".scroll",{opacity: 0, duration: 1.5 ,y: -50},"-=0.5");


//text flot
for (let i=2 ; i< 6 ; i++){

  gsap.from(".sec"+i+"text", {
      y: 270,
	  ease: "none",
      scrollTrigger: {
        trigger: ".section"+i,
        // start: "top bottom", // the default values
        // end: "bottom top",
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
		  // start: "top bottom", // the default values
		  //end: "bottom top",
		  scrub: 1,
		}, 
	  });

	  gsap.from(".sec5img", {
		ease: "none",
		backgroundPositionY: "70%",
		scrollTrigger: {
		  trigger: ".section5",
		  // start: "top bottom", // the default values
		  //end: "bottom top",
		  scrub: 1,
		}, 
	  });

	  
	  for (let i=3 ; i< 5 ; i++){
	  gsap.from(".sec"+i+"img", {
		y: 100,
		ease: "none",
		scrollTrigger: {
		  trigger: ".section"+i,
		  // start: "top bottom", // the default values
		  // end: "bottom top",
		  scrub: 1
		}, 
	  });
	}

const sec3next = document.getElementById("sec3next");
const sec3img1 = document.querySelector(".sec3img1");
const sec3img2 = document.querySelector(".sec3img2");


const sec3imgarray = ["/img/4.jpg","/img/5.jpg","/img/6.jpg","/img/7.jpg","/img/8.jpg"];
const sec3imgarray1 = ["/img/4c.jpg","/img/5c.jpg","/img/6c.jpg","/img/7c.jpg","/img/8c.jpg"];
let i =1;
sec3next.addEventListener("click", () =>{
	
	sec3img1.src=sec3imgarray[i];
	sec3img2.src=sec3imgarray1[i];
	i++;
	if(i==5){
		i=0
	}
})







// gsap.from(".sec3img", {
// 	ease: "none",
// 	objectPosition: "0 0%",
// 	scrollTrigger: {
// 	  trigger: ".section3",
// 	  // start: "top bottom", // the default values
// 	  //end: "bottom top",
// 	  scrub: 1,
// 	}, 
//   });





//smooth scroll
function init(){
	new SmoothScroll(document,120,12)
}

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

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
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

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
};


// //nav scroll
// document.getElementById("websectionT").addEventListener("click",(e) =>{
// 	e.preventDefault();
// 		var ele = document.getElementById("websection");   
// 		window.scrollTo({
// 			top:ele.offsetTop,
// 			behavior: 'smooth'
// 		}); 
// },false);
