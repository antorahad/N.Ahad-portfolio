let isToggle = false;

document.getElementById('menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if(isToggle){
        mobileMenu.classList.add('hidden');
    }else{
        mobileMenu.classList.remove('hidden');
    }

    isToggle = !isToggle;
});