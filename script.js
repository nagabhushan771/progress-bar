const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
let pgPercent = 0;

next.addEventListener('click', () => {
    // console.log(Number(progress.style.width)+25);
    pgPercent += 25;
    progress.style.width = pgPercent + "%";
    // console.log(Math.floor(pgPercent/25));
    circles[Math.floor(pgPercent/25)].classList.add('active');
    if(pgPercent == 100)
        next.setAttribute('disabled', '');
    if(pgPercent === 25)
        prev.removeAttribute('disabled');

})

prev.addEventListener('click', () => {
    
    circles[Math.floor(pgPercent/25)].classList.remove('active');
    pgPercent -= 25;
    progress.style.width = pgPercent + "%";
    if(pgPercent === 75){
        next.removeAttribute('disabled');
    }
    if(pgPercent == 0)
        prev.setAttribute('disabled', '');

})