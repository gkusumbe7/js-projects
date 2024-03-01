// light Mode

let lightMode = document.querySelector('.light-btn');
lightMode.addEventListener('click',function(){
    let bodyWhite = document.querySelector('body');
    bodyWhite.style.backgroundColor = 'white';
    let mainText = document.querySelector('.main-text');
    mainText.style.color = 'black';
    let moveScrollButton = document.querySelector('.scroll-btn');
    let currPostion = parseInt(window.getComputedStyle(moveScrollButton).getPropertyValue('right'));
    console.log(currPostion);
    
    let newPosition = currPostion + 5;
    moveScrollButton.style.left=newPosition+'px';
});


// Dark Mode

let darkMode = document.querySelector('.dark-btn');
darkMode.addEventListener('click',function(){
    let bodyBalck = document.querySelector('body');
    bodyBalck.style.backgroundColor = 'black';
    let mainText = document.querySelector('.main-text');
    mainText.classList.toggle('red-text');
    let moveScrollButton = document.querySelector('.scroll-btn');

    let currPostion = parseInt(window.getComputedStyle(moveScrollButton).getPropertyValue('left'));
    console.log(currPostion);
    

    let newPosition = currPostion + 70;
    moveScrollButton.style.left=newPosition+'px';

});
