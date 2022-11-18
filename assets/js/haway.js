const burger__menu = document.querySelector('.burger__menu');
        const burger = document.querySelector('.burger');
        const close__burger = document.querySelector('.close__burger');
        const header__burger_items = document.querySelectorAll('.header__burger-menu-item')
        const none1 = document.querySelector('.none-at-first-1');
        const down1 = document.querySelector('.down1');
        const hellodown1 = document.querySelector('.hellodown1');
        const none2 = document.querySelector('.none-at-first-2');
        const down2 = document.querySelector('.down2');
        const hellodown2 = document.querySelector('.hellodown2');
        const none3 = document.querySelector('.none-at-first-3');
        const down3 = document.querySelector('.down3');
        const hellodown3 = document.querySelector('.hellodown3');
        const none4 = document.querySelector('.none-at-first-4');
        const down4 = document.querySelector('.down4');
        const hellodown4 = document.querySelector('.hellodown4');
        const none5 = document.querySelector('.none-at-first-5');
        const down5 = document.querySelector('.down5');
        const hellodown5 = document.querySelector('.hellodown5');
        const none6 = document.querySelector('.none-at-first-6');
        const down6 = document.querySelector('.down6');
        const hellodown6 = document.querySelector('.hellodown6');

        const smth = document.querySelector('.for-smth');


        try{
           
        burger__menu.addEventListener('click', () => {
            burger.style.top = '0'
            document.body.style.overflow = 'hidden'
        })
        close__burger.addEventListener('click', () => {
            burger.style.top = '-200%'
            document.body.style.overflow = 'visible'
        })
        header__burger_items[0].onclick = () => {
            none1.classList.toggle('waxaraaclass')
            down1.classList.toggle('zzwabquje')
            hellodown1.classList.toggle('hellodown11');
            smth.classList.toggle('forwhoMargin1')
        }
        header__burger_items[1].onclick = () => {
            none2.classList.toggle('waxaraaclass')
            down2.classList.toggle('zzwabquje')
            hellodown2.classList.toggle('hellodown11')
            smth.classList.toggle('forwhoMargin2')
        }
        header__burger_items[2].onclick = () => {
            none3.classList.toggle('waxaraaclass')
            down3.classList.toggle('zzwabquje')
            hellodown3.classList.toggle('hellodown11')
            smth.classList.toggle('forwhoMargin3')
        }
        header__burger_items[3].onclick = () => {
            none4.classList.toggle('waxaraaclass2')
            down4.classList.toggle('zzwabquje')
            hellodown4.classList.toggle('hellodown11')
        }
        header__burger_items[4].onclick = () => {
            none5.classList.toggle('waxaraaclass2')
            down5.classList.toggle('zzwabquje')
            hellodown5.classList.toggle('hellodown11')
        }
        header__burger_items[5].onclick = () => {
            none6.classList.toggle('waxaraaclass2')
            down6.classList.toggle('zzwabquje')
            hellodown6.classList.toggle('hellodown11')
        }
         
    }catch(err){}