/* Custom Script */

// Scroll To Top Button
$(document).ready(function() {
    "use strict";
    var offSetTop = 200;
    var $scrollToTopButton = $('<button class="scrollToTop">↑</button>').appendTo('body');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });
  
    // Scroll to Top functionality
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });
  });
  
  // Initialize Animations (AOS)
  AOS.init({
    duration: 1200,  // Set duration for animations
    once: true,  // Animation occurs only once
  });
  
  // Example of adding smooth scroll animation for footer
  $(document).ready(function() {
    $("#site-footer").addClass("aos-init");
  }); 