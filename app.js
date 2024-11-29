window.onload = function() {
	const sublineText = document.getElementById('subline-text');
	// Make sure the subline text starts sliding in after a delay
	setTimeout(() => {
	  sublineText.style.opacity = '1'; // Make it visible
	  sublineText.style.transform = 'translateX(0)'; // Slide it into position
	}, 2000); // Delay of 2 seconds before starting the slide-in effect
  };
  

  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
const flashingText = document.getElementById("flashing-text");
const texts = ["Aditya Pratap Singh", "Software Engineer", "Web Developer"];
let index = 0;

function changeText() {
    flashingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 2000); // Changes text every 2 seconds


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});