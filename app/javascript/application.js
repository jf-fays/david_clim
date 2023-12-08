// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

// require ("jquery")
// require ("jquery_ujs")
// require ("turbolinks")
// // require_tree .")

import { initNavbar } from "./controllers/navbar_scroll_fixed";
document.addEventListener("turbo:load", function() {
  console.log('connection navbar')
  initNavbar();
});

import { initCarousel } from "./controllers/carousel";
document.addEventListener("turbo:load", () => {
  console.log('connection carousel')
  initCarousel();
});

import { initJetTimeline } from "./controllers/jet_timeline";
document.addEventListener("turbo:load", function() {
  console.log('connection timeline')
  initJetTimeline();
});


import { initAccordion } from "./controllers/accordion";
document.addEventListener("turbo:load", function() {
  console.log('connection accordion')
  initAccordion();
});
