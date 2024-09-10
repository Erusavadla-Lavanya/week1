let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = ()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrolly>0){
        document.querySelector('.header').classList.add('active');    
    }else{
        document.querySelector('.header').classList.remove('active');

    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
window.onload = () =>{
if(window.scrolly>0){
    document.querySelector('.header').classList.add('active');    
}else{
    document.querySelector('.header').classList.remove('active');

}
}
document.querySelector('.home').onmousemove=(e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{

    
    let speed = elm.getAttribute('data-speed');
    let x =(window.innerwidth - e.pageX * speed)/90;
    let y =(window.innerHeight - e.pageY * speed)/90;
    elm.computedStyleMap.transform = 'translateX(${y}px) translateY(${x}px)';
    })
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabcursor: true,
  qutoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
     
    },
    991: {
      slidesPerView: 3,
    
    },
  },
});



