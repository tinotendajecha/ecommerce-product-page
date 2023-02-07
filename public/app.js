const images = document.querySelectorAll('.slide');
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menu = document.getElementById('show-menu');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn')


const openMenu = () => {
    menu.style.display = 'block';
}

const closeMenu = () => {
    menu.style.display = 'none';
    menu.style.transition = '.2s ease-out'
}

openMenuBtn.addEventListener('click' , openMenu);
closeMenuBtn.addEventListener('click' , closeMenu);


let index_to_display = 0;


for(i=0;i < images.length;i++){
    images[i].style.display='none';
    images[index_to_display].style.display = 'block'
}





