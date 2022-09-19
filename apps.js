const sections = document.querySelectorAll('.section'); // target all class section
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.contorl')
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    // active button
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', () =>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn'
        })
    }
}

PageTransitions();