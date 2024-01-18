let i = 0;
let images = [];
let time = 4000;

//Image List 

images[0] = 'player01.png';
images[1] = 'player02.png';
images[2] = 'player03.png';


// Change Image

function changeImg(){
    document.slide.src = images[i];

    if( i < images.length - 1){
        i++;
    }else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
