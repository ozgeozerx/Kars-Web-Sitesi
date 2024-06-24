const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,

	// effect: 'creative',
	// creativeEffect: {
	// 	prev: {
	// 		// will set `translateZ(-400px)` on previous slides
	// 		translate: [0, 0, -400],
	// 	},
	// 	next: {
	// 		// will set `translateX(100%)` on next slides
	// 		translate: ['100%', 0, 0],
	// 	},
	// },
	// effect: 'coverflow',
})

const toggle=document.getElementById('toggleDark');
const body =document.querySelector('body');

toggle.addEventListener('click',function(){
this.classList.toggle('bi-moon');
if(this.classList.toggle('bi-brightness-high-fill')){
	body.style.background='white';
	body.style.color='black';
	body.style.transition='2s';
}else {
	body.style.background='black';
	body.style.color='white';
	body.style.transition='2s';
}
})