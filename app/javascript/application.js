// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
// import Swal from 'sweetalert2';




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


//sweetalert2
// $('#submit-contact').click(function () {
//   console.log('connection contact')
//   Swal.fire({
//     title: 'Success',
//     text: 'You are connected',
//     icon: 'success'})
// });
// $('#contact-form').submit(function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: $(this).attr('action'),
//     type: 'POST',
//     dataType: 'json',
//     data: $(this).serialize(),
//     success: function(response) {
//       if (response.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Message envoyé',
//           text: 'Merci pour votre message'
//         });
//         // Réinitialiser le formulaire si nécessaire
//         $('#contact-form')[0].reset();
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Erreur',
//           html: response.errors.join('<br>')
//         });
//       }
//     },
//     error: function(xhr, status, error) {
//       console.error(xhr.responseText);
//       Swal.fire({
//         icon: 'error',
//         title: 'Une erreur s\'est produite',
//         text: 'Veuillez réessayer plus tard'
//       });
//     }
//   });
// });
