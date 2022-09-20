const moles = document.querySelectorAll('img[src="./mole.svg"]');
const scoreBoard = document.querySelector('#score-board');
const win = document.querySelector('#winner');
let counter = 0;


function hey(e) {
    counter++;
    console.log(counter);
    scoreBoard.innerText = counter;
    if (counter === 3) {
        clearInterval(myInterval);
        win.style.transform = `scale(1)`;
    }
}

const myInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    moles[randomNumber].style.bottom = '50px';
    
    moles[randomNumber].addEventListener('click', hey);
    
    setTimeout(() => {
        moles[randomNumber].style.bottom = '-100px';
    }, 1500);
    
}, 2500);

// for mobile users
window.onload = function(){
    let mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        if (confirm("Visit this on a Computer for Better View")) {
            close();
            
        }              
    }
}
