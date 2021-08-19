const app = () => {
    const quran = document.querySelector('.quran');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');



    // Sounds


    const sounds = document.querySelectorAll('.sound-picker button');
    //Time Display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button')
    //Get Length of Outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 447;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

//Pick different surah
sounds.forEach(sound => {
    sound.addEventListener('click', function(){
        quran.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        checkPlaying(quran);
    })
})


    //Play Quran
        play.addEventListener("click", () => {
            checkPlaying(quran)
        });

    

    //Select soun
    timeSelect.forEach(option =>{
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
        })
    })

    // Create a function to play the sounds
    const checkPlaying = quran => {
        if(quran.paused){
            quran.play();
            video.play();
            play.src = './assets/pause.svg';
        }else{
            quran.pause();
            video.pause();
            play.src = "./assets/play.svg";
        }
    };


    //Circle animation
    quran.ontimeupdate =  () => {
        let currentTime = quran.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

    
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

    //Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`

    if(currentTime >= fakeDuration){
        quran.pause();
        quran.currentTime = 0;
        play.src = "./assets/play.svg";
        video.pause();
    }
    };
};





app();