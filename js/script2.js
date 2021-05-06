
window.addEventListener('DOMContentLoaded', () => {

    console.log("owefnhowi");

    const header = document.querySelector('.header');
    const clientsSection = document.querySelector('.clients ');
    const clients = document.querySelector('.clients-wrapper-outer');
    
    
    // header.classList.remove('hide');

    let markArr = [];
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
        const right = (2/3)*windowWidth;
        const left = windowWidth/3;
        const curValue = window.getComputedStyle(clients).transform;
        console.log(curValue);

        if(coordX>left && coordX<right) {
            clients.style.transform = `translateX(0px)`;
        }

        if(coordX>right) {
            clients.style.transform = `translateX(${-overFlow}px)`;
        }
        if(coordX<left) {
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

        if (curScroll + 30 > needOffset) {
            header.classList.add('invert');
        }
        else {
            header.classList.remove('invert')
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