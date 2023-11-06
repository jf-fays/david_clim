export const initJetTimeline = () => {

  $(function () {
    const agTimeline = $('.js-timeline');
    const agTimelineLine = $('.js-timeline_line');
    const agTimelineLineProgress = $('.js-timeline_line-progress');
    const agTimelinePoint = $('.js-timeline-card_point-box');
    const agTimelineItem = $('.js-timeline_item');
    let agOuterHeight = $(window).outerHeight();
    let agHeight = $(window).height();
    let f = -1;
    let agFlag = false;
    let agPosY = $(window).scrollTop();

    $(window).on('scroll', function () {
      fnOnScroll();
    });

    $(window).on('resize', function () {
      fnOnResize();
    });

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
      const agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
      const i = agTop + agPosY - $(window).scrollTop();
      const a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
      let n = agPosY - a + agOuterHeight / 2;

      if (i <= agPosY + agOuterHeight / 2) {
        n = i - a;
      }

      agTimelineLineProgress.css({ height: n + "px" });

      agTimelineItem.each(function () {
        const agTop = $(this).find(agTimelinePoint).offset().top;
        if (agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight) {
          $(this).addClass('js-ag-active');
        } else {
          $(this).removeClass('js-ag-active');
        }
      });
    }

    function fnUpdateFrame() {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
      }
      agFlag = true;
    }

    // Appeler fnUpdateWindow au chargement initial de la page
    fnUpdateWindow();
  });
};
console.log('test jet timeline')
