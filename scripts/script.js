//importing all nacessory classses
const slide = document.querySelector(".slide");
const img = document.querySelectorAll(".img");
const left = document.querySelector('.prev');
const right = document.querySelector('.next');

let count = 1; //let counter value define for a index

const bottom = document.querySelector('.bottom');

//Dots opening

for(let i=0; i<img.length; i++){
    const div = document.createElement('div');
    div.className = "button";
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = "#00000042";

const resetBg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent';
    })
}

buttons.forEach((buttons, i) =>{
    buttons.addEventListener('click',()=>{
        resetBg();
        slide.style.transform = `translateX(-${i*100}%)`;
        count = i+1;
        buttons.style.backgroundColor = "#00000042";
    });
});
const changeColor = () =>{
    resetBg();
    buttons[count-1].style.backgroundColor = '#00000042';
}

// Dots end



// for going every next slide 
const goNext = ()=>{
    slide.style.transform = `translateX(-${100 * count}%)`;
    count++;
}
// for previous slide
const goPrev = ()=>{
    slide.style.transform = `translateX(-${100 * (count-2)}%)`;
    count--;
}

//making a right button work with each click
right.addEventListener('click',()=>{
    if(count < img.length){
        goNext();
    }
    else{ //if users on end slide it returns to 1st slide
        slide.style.transform = `translateX(0%)`;
        count = 1; 
    }
    changeColor();
});


//making a left button work with each click
left.addEventListener('click',()=>{
    if(count > 1){
        goPrev();

    }
    else{  //if users on end slide it returns to 1st slide
        slide.style.transform = `translateX(-${(img.length-1)*100}%)`;
        count = img.length; 
    }
    changeColor(); //setting Dots
});
// auto slider
let slideInterval;
const startSlideShow = ()=>{
    slideInterval = setInterval(()=>{
        if(count < img.length){
        goNext();
    }
    else{ 
        slide.style.transform = `translateX(0%)`;
        count = 1; 
    }
    },3000);
};
startSlideShow();
