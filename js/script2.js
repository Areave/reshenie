window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const clientsSection = document.querySelector('.clients');
    // const clients = document.querySelector('.wrapper.clients-wrapper-outer');
    const clients = document.querySelector('.clients-wrapper');
    const clientsLogos = document.querySelector('.clients');
    const intro = document.querySelector('.intro');
    const menuBtn = document.querySelector('.menuBtn');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');


    // init slider
    $('.your-class').slick({
        prevArrow: '',
        nextArrow: '<div class="slider-footer-next">Далее</div>',

    });

    // scroll clients section

    const clientHeight = clients.clientHeight;
    const clientWidth = clients.offsetWidth;
    const topPosition = clients.offsetTop;
    const botPosition = clients.offsetTop+clientHeight;
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    window.addEventListener('scroll', ()=>{    
        const current = window.pageYOffset;
        const clientDif = clientWidth - windowWidth;   

        if((windowWidth<600)&&(current + windowHeight +120> botPosition)&&(current+clientHeight<topPosition)) {            
            const curDif = topPosition-current-clientHeight;
            const difConst = windowHeight - clientHeight -100;
            coefVert = 100- (curDif*100/difConst);
            const clientOffset = (clientWidth - windowWidth)/100;
            console.log(-1*coefVert*clientOffset);

            clients.style.transform = `translateX(-${(coefVert*clientOffset)}px)`;  
        }
    });


    // burger menu
    menuBtn.addEventListener('click', () => {
        if (menu.classList.contains('active')) {

            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.style.overflow = '';


        } else {
            menu.classList.add('active');
            menuBtn.classList.add('active');
            body.style.overflow = 'hidden';

        }
    });



    // invert header
    window.addEventListener('scroll', () => {
        const curScroll = window.pageYOffset;
        const needOffset = document.querySelector('.works').offsetTop;

        const logo = document.querySelector('.logo img');
        const menu = document.querySelector('.headerRight .menuBtn');
        const tel = document.querySelector('.headerRight .tel');

        if (curScroll + 30 > needOffset) {
            logo.classList.add('invert');
            tel.classList.add('invert');
        } else {

            logo.classList.remove('invert');
            tel.classList.remove('invert');
        }

    });

    // slider counter init and change
    const total = document.querySelector('.slider').childElementCount;
    const counterEl = document.querySelector('.slider-footer-counter');
    counterEl.textContent = `1/${total} вопрос`;

    $('.slider').on('afterChange', function(event, slick, currentSlide) {
        counterEl.textContent = `${currentSlide+1}/${total} вопрос`;
    });



    // header get fixed
    window.addEventListener('scroll', () => {
        const curScroll = window.pageYOffset;
        const headerHeight = header.clientHeight;

        if (curScroll > 0) {
            header.style.position = 'fixed';
        }
    });
})