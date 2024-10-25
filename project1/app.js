

const cur = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function(event) {
    // Correct positioning relative to the viewport
    cur.style.left = event.clientX + "px";
    cur.style.top = event.clientY + "px";
    blur.style.left = (event.clientX - 125) + "px"; // Offset for blur size
    blur.style.top = (event.clientY - 125) + "px";
});

 const h4all= document.querySelectorAll(".nav h4");
 h4all.forEach((elem)=>{
     elem.addEventListener("mouseenter", function(){
         cur.style.scale = 3
         cur.style.backgroundColor = "transparent";
         cur.style.border = "0.5px solid #fff"
     })
     elem.addEventListener("mouseleave", function(){
         cur.style.scale = 1
         cur.style.backgroundColor = "#95C11E"
         cur.style.border = " ##95C11E"
     })
 })




gsap.to(".nav",{
   backgroundColor : "#000",
  height : "110px",
  duration : 0.5,
 scrollTrigger:{
     trigger: ".nav",
    scroller : "body",
  // markers : true,
  start : "top -10%",
  end : "top -11%",
  scrub:1
 }
})

gsap.to(".main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger: ".main",
        scroller : "body",
        start : "top -25%",
        end : "top -70%",
        scrub:2
    }
})

gsap.from(".about-us  img, .about-us-in",{
    y : 50,
    opacity : 0,
    duration:3,
    stagger: 0.6,
    scrollTrigger:{
        trigger: ".about-us",
        scroller : "body",
        start:"top 70%",
        end : "top 60%",
        scrub: 2
    }
})

gsap.from(".cards",{
    scale:0.8,
    // opacity :0,
    duration:0.8,
    stagger: 0.6,
    scrollTrigger:{
        trigger: ".cards",
        scroller : "body",
        start:"top 80%",
        end: "top 75%",

        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start:"top 50%",
        end : "top 40%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start:"top 50%",
        end : "top 40%",
        scrub:3
    }
})

gsap.from(".page4 h1",{
      y:50,
    scrollTrigger:{
        trigger: ".page4 h1",
        scroller:"body",
        start:"top 80%",
        end : "top 75%",
        scrub:2
    }
})
