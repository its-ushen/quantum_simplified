// const body = document.body;
// let lastScroll = 0;

const hero = document.querySelector('.hero');
console.log(hero);

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
    console.log(currentScroll);
	if (currentScroll > 0) {
		navBar.classList.add("scroll-down");
		hero.classList.add("scroll-down");
        
	} else if (currentScroll == 0) {
        navBar.classList.remove("scroll-down");
        hero.classList.remove("scroll-down");
        carousel.style.zIndex = 1;
    }
});
