window.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const clientsSection = document.querySelector('.clients ');
    // const clients = document.querySelector('.wrapper.clients-wrapper-outer');
    const clients = document.querySelector('.clients-wrapper');
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
        const dif = windowHeight - clientHeight;
        const clientDif = windowWidth - clientWidth;
        const clientRatio = (clientWidth/windowWidth);
        // console.log(clientRatio);

        
        

        if((windowWidth<600)&&(current + windowHeight> botPosition)&&(current+200<topPosition)) {

            const curDif = topPosition-current;
            const ratio = 100-(100*(curDif/dif));
            console.log(ratio);

            clients.style.transform = `translateX(-${ratio}%)`;  
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