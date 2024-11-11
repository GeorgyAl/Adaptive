const mainLine = document.querySelector('.slider__line');
const leftBtn = document.querySelector('.slider__leftSwitch');
const rightBtn = document.querySelector('.slider__rightSwitch');
let counts = document.querySelectorAll('.count');
let slidePos = 0;
let countPos = 0;


const o2 = {};

const countSwitcher = (idx) => {
    for (let count of counts) {
        count.classList.remove('count_active');
        console.log(count)
    }
    counts[idx].classList.add('count_active')
}

o2.slider = {
    leftSwitch() {
        if (slidePos > 0) {
            slidePos -= 750;
            countPos -= 1;
            mainLine.style.left = -slidePos + 'px';
        }
        if (slidePos < 2250) {
            rightBtn.style.display = 'block';
        }
        if (slidePos === 0) {
            leftBtn.style.display = 'none';
        }
        countSwitcher(countPos)
        console.log(slidePos)
    },
    rightSwitch() {
        if(slidePos > 0) {
            leftBtn.style.display = 'block';
        }
        if(slidePos< 2250)
        {
            slidePos += 750;
            countPos += 1
            mainLine.style.left = -slidePos + 'px';
        }
        if(slidePos === 2250) {
            rightBtn.style.display = 'none';
        }
        countSwitcher(countPos)
        console.log(slidePos)
    },
    foo() {
        console.log('4');
    }
}