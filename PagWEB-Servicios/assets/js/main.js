/*=============== SHOW MENU ===============*/
const showMenu = (toggle,menu) => {
    const btn_toggle = document.getElementById(toggle);
    const list_menu = document.getElementById(menu);

    //Saber si existen los elementos
    if(btn_toggle && list_menu){
        btn_toggle.addEventListener('click',()=>{
           list_menu.classList.toggle('show-menu') 
        })
    }
}
showMenu('nav-toggle','nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const nav_link = document.querySelectorAll('.nav__link');
function action_link (){
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('show-menu');
}
nav_link.forEach(link => link.addEventListener('click',action_link));

/*=============== SCROLL SECETIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    console.log(scrollY);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        console.log('height : ' + sectionHeight);
        const sectionTop = current.offsetTop - 50;
        console.log('top : ' + sectionTop);
        const sectionId = current.getAttribute('id');
        console.log('section : ' + sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // Cuando el scroll esta en 80px de eje y se le agrega una sombra al header
    if(this.scrollY >= 80){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL TOP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 410){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== MOOD DARK LIGHT ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    document.body.classList[selectedTheme === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})






