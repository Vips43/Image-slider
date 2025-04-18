//importing all nacessory classses
const slide = document.querySelector(".slide");
const img = document.querySelectorAll(".img");
const left = document.querySelector('.prev');
const right = document.querySelector('.next');

let count = 1; //let counter value define for a index

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
});

