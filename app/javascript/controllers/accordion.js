// // controllers/accordion.js
// export const initAccordion = () => {
//   const accordionHeaders = document.querySelectorAll('.accordion-header');

//   accordionHeaders.forEach((header, index) => {
//     header.addEventListener('click', function() {
//       toggleAccordion(index + 1);
//     });
//   });
// };

// export const toggleAccordion = (index) => {
//   const accordionContent = document.querySelectorAll('.accordion-content');
//   const currentAccordion = accordionContent[index - 1];

//   if (currentAccordion) {
//     if (currentAccordion.style.maxHeight) {
//       currentAccordion.style.maxHeight = null;
//     } else {
//       // Fermez les autres accordéons
//       accordionContent.forEach((accordion) => {
//         accordion.style.maxHeight = null;
//       });

//       currentAccordion.style.maxHeight = currentAccordion.scrollHeight + 'px';
//     }
//   }
// };

// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js
// controllers/accordion.js

export const initAccordion = () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header, index) => {
    header.addEventListener('click', function() {
      toggleAccordion(index + 1);
    });
  });
};

export const toggleAccordion = (index) => {
  const accordionContent = document.querySelectorAll('.accordion-content');
  const currentAccordion = accordionContent[index - 1];

  if (currentAccordion) {
    if (currentAccordion.classList.contains('show')) {
      currentAccordion.classList.remove('show');
    } else {
      // Fermez les autres accordéons
      accordionContent.forEach((accordion) => {
        accordion.classList.remove('show');
      });

      currentAccordion.classList.add('show');
    }
  }
};
