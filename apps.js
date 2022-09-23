const sections = document.querySelectorAll('.section'); // target all class section
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content');

function PageTransition() {
    // active button

    for (let i=0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            sectBtn[i].className += ' active-btn';
        })
    }

    // active sections
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id; // get the data-id of sections
        if (id) {
            // remove the selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide the other sections
            sections.forEach((sections) => {
                sections.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle between dark/light mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransition();