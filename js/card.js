window.addEventListener("hashchange", function () {
    var scrolledElement = document.getElementById(location.hash.substring(1));
    
    if (scrolledElement) {
        window.scrollTo({
            top: scrolledElement.offsetTop - 85, // adjust the offset as per your need
            behavior: 'smooth' // optional, for smooth scrolling effect
        });
    }
}, false);