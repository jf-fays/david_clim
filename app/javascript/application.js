// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"




// require jquery.waitforimages.min.js

// require ("jquery")
// require ("jquery_ujs")
// require ("turbolinks")
// // require_tree .")

import { initNavbar } from "./controllers/navbar_scroll_fixed";
document.addEventListener("turbo:load", function() {
  console.log('connection navbar')
  initNavbar();
});

// import { initAccordion2 } from "./controllers/accordion2";
// document.addEventListener("turbo:load", () => {
//   console.log('connection Accordion2')
//   initAccordion2();
// });

import { initCarousel2 } from "./controllers/carousel2";
document.addEventListener("turbo:load", () => {
  console.log('connection Carousel2')
  initCarousel2();
});

import { initJetTimeline } from "./controllers/jet_timeline";
document.addEventListener("turbo:load", function() {
  console.log('connection timeline')
  initJetTimeline();
});


// import { initAccordion } from "./controllers/accordion";
// document.addEventListener("turbo:load", function() {
//   console.log('connection accordion')
//   initAccordion();
// });
