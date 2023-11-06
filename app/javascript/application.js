// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"


// require ("jquery")
// require ("jquery_ujs")
// require ("turbolinks")
// // require_tree .")
// require ("carousel.js")
// import "carousel"

// console.log('Hello world3');
import { initCarousel } from "./controllers/carousel";
document.addEventListener("turbo:reload", () => {
  initCarousel();
});

import { initJetTimeline } from "./components/jet_timeline";
document.addEventListener("turbo:load", () => {
  console.log('connection jet timeline')
  initJetTimeline();
});

import { test } from "./components/test"; () => {
  console.log('test3')
  test();
}
