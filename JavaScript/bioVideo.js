const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h6");

//End_Section
const section = document.querySelector("section");
const end = section.querySelector("h6");

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let videoScene = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text_Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video_Animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

videoScene.on("update", e => {
  scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  console.log(scrollPos, delay);

  video.currentTime = delay;
}, 41.66);