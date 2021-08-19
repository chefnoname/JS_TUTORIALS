
let theme = localStorage.getItem('theme');

if(theme === null){
    setTheme('light');
} else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(let i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode);
    })
} 

function setTheme(mode) {
    if(mode === 'light'){
        document.getElementById('theme-style').href = 'default.css'
    } else if (mode === 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    } else if (mode === 'green'){
        document.getElementById('theme-style').href = 'green.css'
    } else if (mode === 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode);

}