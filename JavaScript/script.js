const mobileBtn = document.getElementById('mobile_cta')
              nav = document.querySelector('nav')
              mobileBtnExit = document.getElementById('mobile_exit');
        
mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu_btn');
        })

mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu_btn');
        })