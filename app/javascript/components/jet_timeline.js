// // export const initJetTimeline = () => {

// //   $(function () {
// //     const agTimeline = $('.js-timeline');
// //     const agTimelineLine = $('.js-timeline_line');
// //     const agTimelineLineProgress = $('.js-timeline_line-progress');
// //     const agTimelinePoint = $('.js-timeline-card_point-box');
// //     const agTimelineItem = $('.js-timeline_item');
// //     let agOuterHeight = $(window).outerHeight();
// //     let agHeight = $(window).height();
// //     let f = -1;
// //     let agFlag = false;
// //     let agPosY = $(window).scrollTop();

// //     $(window).on('scroll', function () {
// //       fnOnScroll();
// //     });

// //     $(window).on('resize', function () {
// //       fnOnResize();
// //     });

// //     function fnOnScroll() {
// //       agPosY = $(window).scrollTop();
// //       fnUpdateFrame();
// //     }

// //     function fnOnResize() {
// //       agPosY = $(window).scrollTop();
// //       agHeight = $(window).height();
// //       fnUpdateFrame();
// //     }

// //     function fnUpdateWindow() {
// //       agFlag = false;

// //       agTimelineLine.css({
// //         top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
// //         bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
// //       });

// //       f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
// //     }

// //     function fnUpdateProgress() {
// //       const agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
// //       const i = agTop + agPosY - $(window).scrollTop();
// //       const a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
// //       let n = agPosY - a + agOuterHeight / 2;

// //       if (i <= agPosY + agOuterHeight / 2) {
// //         n = i - a;
// //       }

// //       agTimelineLineProgress.css({ height: n + "px" });

// //       agTimelineItem.each(function () {
// //         const agTop = $(this).find(agTimelinePoint).offset().top;
// //         if (agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight) {
// //           $(this).addClass('js-ag-active');
// //         } else {
// //           $(this).removeClass('js-ag-active');
// //         }
// //       });
// //     }

// //     function fnUpdateFrame() {
// //       if (!agFlag) {
// //         requestAnimationFrame(fnUpdateWindow);
// //       }
// //       agFlag = true;
// //     }

// //     // Appeler fnUpdateWindow au chargement initial de la page
// //     fnUpdateWindow();
// //   });
// // };
// console.log('test jet timeline')

// export const initJetTimeline = () => {
//   $(function () {
//     const agTimeline = $('.js-timeline');
//     const agTimelineLine = $('.js-timeline_line');
//     const agTimelineLineProgress = $('.js-timeline_line-progress');
//     const agTimelinePoint = $('.js-timeline-card_point-box');
//     const agTimelineItem = $('.js-timeline_item');
//     let agOuterHeight = $(window).outerHeight();
//     let agHeight = $(window).height();
//     let f = -1;
//     let agFlag = false;
//     let agPosY = $(window).scrollTop();

//     $(window).on('scroll', function () {
//       fnOnScroll();
//     });

//     $(window).on('resize', function () {
//       fnOnResize();
//     });

//     function fnOnScroll() {
//       agPosY = $(window).scrollTop();
//       fnUpdateFrame();
//     }

//     function fnOnResize() {
//       agPosY = $(window).scrollTop();
//       agHeight = $(window).height();
//       fnUpdateFrame();
//     }

//     function fnUpdateWindow() {
//       agFlag = false;

//       const $firstTimelineItem = agTimelineItem.first();
//       const $lastTimelinePoint = $firstTimelineItem.find(agTimelinePoint);

//       if ($firstTimelineItem.length > 0 && $lastTimelinePoint.length > 0) {
//         const topPosition = $lastTimelinePoint.offset().top - $firstTimelineItem.offset().top;
//         const bottomPosition = agTimeline.offset().top + agTimeline.outerHeight() - $lastTimelinePoint.offset().top;

//         agTimelineLine.css({ top: topPosition, bottom: bottomPosition });
//         f !== agPosY && (f = agPosY, fnUpdateProgress());
//       }
//     }

//     function fnUpdateProgress() {
//       const agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
//       const i = agTop + agPosY - $(window).scrollTop();
//       const a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
//       let n = agPosY - a + agOuterHeight / 2;

//       if (i <= agPosY + agOuterHeight / 2) {
//         n = i - a;
//       }

//       agTimelineLineProgress.css({ height: n + 'px' });

//       agTimelineItem.each(function () {
//         const agTop = $(this).find(agTimelinePoint).offset().top;
//         if (agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight) {
//           $(this).addClass('js-ag-active');
//         } else {
//           $(this).removeClass('js-ag-active');
//         }
//       });
//     }

//     function fnUpdateFrame() {
//       if (!agFlag) {
//         requestAnimationFrame(fnUpdateWindow);
//       }
//       agFlag = true;
//     }

//     // Appeler fnUpdateWindow au chargement initial de la page
//     fnUpdateWindow();
//   });
// };

export const initJetTimeline = () => {

(function ($) {
  $(function () {
    var agPosY = 0;

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });


    var agTimeline = $('.js-timeline'),
      agTimelineLine = $('.js-timeline_line'),
      agTimelineLineProgress = $('.js-timeline_line-progress'),
      agTimelinePoint = $('.js-timeline-card_point-box'),
      agTimelineItem = $('.js-timeline_item'),
      agOuterHeight = $(window).outerHeight(),
      agHeight = $(window).height(),
      f = -1,
      agFlag = false;

      var i, a, n;

    function fnOnScroll() {
      agPosY = $(window).scrollTop();

      fnUpdateFrame();
    }

    function fnOnResize() {
      agPosY = $(window).scrollTop();
      agHeight = $(window).height();

      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      agFlag = false;

      agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
      });

      f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
    }

    function fnUpdateProgress() {
      var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

      i = agTop + agPosY - $(window).scrollTop();
      a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      n = agPosY - a + agOuterHeight / 2;
      i <= agPosY + agOuterHeight / 2 && (n = i - a);
      agTimelineLineProgress.css({height: n + "px"});

      agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
      })
    }

    function fnUpdateFrame() {
      agFlag || requestAnimationFrame(fnUpdateWindow);
      agFlag = true;
    }


  });
})(jQuery);
console.log(agTimelineItem.first()); // Vérifiez ce que cette sélection renvoie.
console.log(agTimelineItem.first().find(agTimelinePoint)); // Vérifiez ce que cette sélection renvoie.

}

console.log("jettimeline")
