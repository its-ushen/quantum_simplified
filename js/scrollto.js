window.onload = function() {
  // Get the navigation items with the classes "trigger-item" and "trigger-cta"
  var triggerElements = document.querySelectorAll('.trigger-item, .trigger-cta');
  // Get the navigation item with the class "home"
  var homeNav = document.querySelector('.nav__item.home');
  // Get the navigation item with the class "trigger-item"
  var triggerItem = document.querySelector('.trigger-item');

  // Check if the URL contains the hash '#quantum_basics'
  if (window.location.hash === '#quantum_basics') {
    // Get the target element
    var targetElement = document.querySelector('.quantum_basics');

    // If the target element exists
    if (targetElement) {
      // Scroll to the target element, offset by 85px
      var topPos = targetElement.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({top: topPos, behavior: 'smooth'});
    }

    // Find the currently active nav item and remove the 'active' class
    var activeNav = document.querySelector('.nav__item.active');
    if (activeNav) {
      activeNav.classList.remove('active');
    }

    // Add the 'active' class to the trigger-item nav item
    if (triggerItem) {
      triggerItem.classList.add('active');
    }
  }

  // Add click listeners to all trigger elements
  triggerElements.forEach(function(triggerElement) {
    triggerElement.addEventListener('click', function(event) {
      // Prevent default action
      event.preventDefault();

      // Get the target element
      var targetElement = document.querySelector('.quantum_basics');

      // If the target element exists
      if (targetElement) {
        // Scroll to the target element, offset by 85px
        var topPos = targetElement.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({top: topPos, behavior: 'smooth'});
      }

      // Find the currently active nav item and remove the 'active' class
      var activeNav = document.querySelector('.nav__item.active');
      if (activeNav && (window.location.pathname !== '/index.html' && window.location.pathname !== '/')) {
        activeNav.classList.remove('active');
      }

      // Remove 'active' class from the previously active trigger-item
      var activeTrigger = document.querySelector('.trigger-item.active');
      if (activeTrigger) {
        activeTrigger.classList.remove('active');
      }

      // Add the 'active' class to the clicked trigger-item nav item
      triggerElement.classList.add('active');
    });
  });

  // Listen for scroll event
  window.addEventListener('scroll', function() {
    // Check if triggerItem is active and scrolled up
    if (triggerItem && triggerItem.classList.contains('active') && window.scrollY < triggerItem.offsetTop) {
      // Remove 'active' class from trigger-item and add it to homeNav
      triggerItem.classList.remove('active');
      homeNav.classList.add('active');
    }
  });

  // Listen for beforeunload event
  window.addEventListener('beforeunload', function() {
    // Remove 'active' class from triggerItem and homeNav when navigating away from index.html or index.html#quantum_basics
    if (window.location.pathname !== '/index.html' && window.location.pathname !== '/' && window.location.hash !== '#quantum_basics') {
      triggerItem.classList.remove('active');
      homeNav.classList.remove('active');
    }
  });
};