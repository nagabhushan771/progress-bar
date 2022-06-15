const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
// let pgPercent = 0;
let pgPercent = 1;
let numberOfCircles = circles.length;

// next.addEventListener('click', () => {
//     // console.log(Number(progress.style.width)+25);
//     pgPercent += 25;
//     progress.style.width = pgPercent + "%";
//     // console.log(Math.floor(pgPercent/25));
//     circles[Math.floor(pgPercent/25)].classList.add('active');
//     if(pgPercent == 100)
//         next.setAttribute('disabled', '');
//     if(pgPercent === 25)
//         prev.removeAttribute('disabled');

// })

// prev.addEventListener('click', () => {
    
//     circles[Math.floor(pgPercent/25)].classList.remove('active');
//     pgPercent -= 25;
//     progress.style.width = pgPercent + "%";
//     if(pgPercent === 75){
//         next.removeAttribute('disabled');
//     }
//     if(pgPercent == 0)
//         prev.setAttribute('disabled', '');

// })
next.addEventListener('click', () => {
    pgPercent++;
    if(pgPercent > numberOfCircles)
        pgPercent = numberOfCircles;
    updateCSS();
});

prev.addEventListener('click', () =>{
    pgPercent--;
    if(pgPercent < 1)
        pgPercent = 1;
    updateCSS();
})

function enableDisable(){
    if(pgPercent == 1)
        prev.disabled = false;
    else if(pgPercent === numberOfCircles)
        next.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateCSS(){
    enableDisable();
    for(var i = 0; i<pgPercent; i++){
        circles[i].classList.add('active');
    }
    for(var i = pgPercent; i<numberOfCircles; i++){
        circles[i].classList.remove('active');
    }
    var active = document.querySelectorAll('.active');
    var width = ((active.length-1)/(numberOfCircles-1))*100;
    progress.style.width = width+"%";
}
