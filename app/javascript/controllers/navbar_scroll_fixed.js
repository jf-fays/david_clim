export const initNavbar = () => {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 68) {
      $('#navbarSupportedContent').addClass('stuck');
      $('#navbarSupportedContentHome').addClass('stuck');
      $('#navbarSupportedContentHome').removeClass('navbar-transparent');
      $('#navbarSupportedContentHome').removeClass('navbar-nav-transparent');
    } else {
      $('#navbarSupportedContent').removeClass('stuck');
      $('#navbarSupportedContentHome').removeClass('stuck');
      $('#navbarSupportedContentHome').addClass('navbar-transparent');
      $('#navbarSupportedContentHome').addClass('navbar-nav-transparent');
    }

  });

  $(document).ready(function() {
    // Get the current URL path and remove the leading slash
    var path = window.location.pathname.slice(1);

    // Check if the path matches any of the navigation links
    $('.navbar-nav a').each(function() {
      var href = $(this).attr('href').slice(1);
      if (path === href) {
        // Add a class to the matching link to highlight it
        $(this).addClass('active-link');
      }
    });
  });

}
