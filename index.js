var drums = document.querySelectorAll('.drum');

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", clicked);
}

function clicked() {
    var innerHtml = this.innerHTML;
    var className = '.' + innerHtml;
    drumSound(innerHtml, this);
}

document.addEventListener('keydown', function(event){
    var className = document.querySelector('.'+event.key);
    drumSound(event.key, className);
});

function drumSound(key, setProperty) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            setProperty.style.color = '#ddf799';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            setProperty.style.color = '#79cbef';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 's':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            setProperty.style.color = '#86efb3';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            setProperty.style.color = '#d3ed8c';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            setProperty.style.color = '#f2b887';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            setProperty.style.color = '#f87d7d';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            setProperty.style.color = '#f5f5ac';
            removeColor(setProperty);
            buttonAnimation(setProperty);
            break;
        default:
            alert("Please Press Valid Key...");

    }
}

function buttonAnimation(className){
//    var activeButton = document.querySelector('.' + currentKey);
    className.classList.add('pressed');
    setTimeout(function(){
        className.classList.toggle('pressed');
    }, 150);
}

function removeColor(setProperty){
    setTimeout(function(){
                setProperty.style.color = '#e52b72';
            }, 300);
}
