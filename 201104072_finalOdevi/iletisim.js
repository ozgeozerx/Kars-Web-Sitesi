$(function() {
  
    // contact form animations
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });
 
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