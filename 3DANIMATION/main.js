//movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const mushaf = document.querySelector('.mushaf img');
const purchase = document.querySelector('.purchase button');
const juz = document.querySelector('.juz');
const description = document.querySelector('.info h3');


//Moving event
container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 10;
    let yAxis = ((window.innerHeight / 2) - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    
//PopOut
title.style.transform = 'translateZ(150px)';
mushaf.style.transform = 'translateZ(200px) rotateZ(-25deg)';
description.style.transform = 'translateZ(125px)'; 
purchase.style.transform = 'translateZ(70px)';
juz.style.transform = 'translateZ(100px)';

});

// animate out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 

//PopBack
title.style.transform = 'translateZ(0px)';
mushaf.style.transform = 'translateZ(0px) rotateZ(0deg)';
description.style.transform = 'translateZ(0px)';
purchase.style.transform = 'translateZ(0px)';
juz.style.transform = 'translateZ(100px)';


});