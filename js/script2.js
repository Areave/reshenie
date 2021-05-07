window.addEventListener('DOMContentLoaded', () => {

    console.log("owefnhowi");

    const header = document.querySelector('.header');
    const clientsSection = document.querySelector('.clients ');
    const clients = document.querySelector('.clients-wrapper-outer');


    $('.your-class').slick({
        // arrows: false,
        prevArrow: '',
        nextArrow: '<div class="slider-footer-next">nennnenext</div>',

    });

    const next = document.querySelector('.slider-footer-next');
    next.remove();
    document.querySelector('.slider-footer').appendChild(next);




    // header.classList.remove('hide');

    let markArr = [];
    let g = 56;
    const sections = document.querySelectorAll('.toScroll');

    sections.forEach(item => {
        markArr.push(item.offsetTop);
    })

    console.log(markArr);



    // mousemove
    clientsSection.addEventListener('mousemove', (e) => {

        const coordX = e.pageX;
        windowWidth = document.documentElement.clientWidth;
        const clientsWidth = clients.clientWidth;
        const overFlow = 300;
        const right = (2 / 3) * windowWidth;
        const left = windowWidth / 3;
        const curValue = window.getComputedStyle(clients).transform;
        console.log(curValue);

        if (coordX > left && coordX < right) {
            clients.style.transform = `translateX(0px)`;
        }

        if (coordX > right) {
            clients.style.transform = `translateX(${-overFlow}px)`;
        }
        if (coordX < left) {
            clients.style.transform = `translateX(${overFlow}px)`;
        }
        console.log(coordX)

    })

    // window.addEventListener('scroll', () => {

    //     const curScroll = window.pageYOffset;

    //     for (let i = 0; i < markArr.length; i++) {
    //         const mark = markArr[i];
    //         const dif = curScroll - mark;
    //         if (Math.abs(dif) < 200) {

    //             window.scrollTo({
    //                 top: mark - 100,
    //                 behavior: 'smooth'
    //             });

    //             return;
    //         }
    //     }
    // })

    // setTimeout(()=>{
    //     header.style.position = 'fixed';
    // }, 1600)


    // invert
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

    // fixed header
    window.addEventListener('scroll', () => {
        const curScroll = window.pageYOffset;
        console.log(curScroll);




        if (curScroll > 10) {
            // header.classList.remove('static');
            // header.classList.add('fixed');
            header.style.position = 'fixed';
        }







    });







})