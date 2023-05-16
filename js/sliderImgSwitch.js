//Slider img switch
itterator=0;
const images = ['https://gcdnb.pbrd.co/images/3rOpnPqyMlf5.png?o=1'
, 'https://gcdnb.pbrd.co/images/MNalpT4mEbct.png?o=1'
, 'https://gcdnb.pbrd.co/images/gSw88Tzh55Jp.png?o=1'];
const image = document.getElementById("sliderImg");
var myTimer = window.setInterval(nextImage, 4000);
var fadeOutInterval;
var fadeInInterval;

function nextImage()
{
    itterator++;
    if(itterator>=images.length)
    {
        itterator=0;
    }
    sliderImgAnimation();
  
}

function previouslyImage()
{
    itterator--;
    if(itterator<0)
    {
        itterator=images.length-1;
    }
    sliderImgAnimation();
   
}
function sliderImgAnimation()
{
    clearInterval(fadeOutInterval);
    clearInterval(fadeInInterval);
    clearInterval(myTimer);
    fadeOutSliderImg();
   
    
   
}

function fadeOutSliderImg()
{
  
    opacity = Number(window.getComputedStyle(image)
    .getPropertyValue("opacity"));
    fadeOutInterval = setInterval(function() {
          
        if (opacity > 0) {
            opacity = opacity - 0.01;
            image.style.opacity = opacity;
        } else {
            clearInterval(fadeOutInterval);
            fadeInSliderImg();
        }
    }, 10);
   
   
}
function fadeInSliderImg()
{
   
    
    image.style.backgroundImage  = `url(${images[itterator]})`;
    opacity = Number(window.getComputedStyle(image)
    .getPropertyValue("opacity"));
  
    fadeInInterval = setInterval(function() {
          
        if (opacity < 1) {
            opacity = opacity + 0.01;
            image.style.opacity = opacity;
        } 
        else {
            clearInterval(fadeInInterval);
            clearInterval(myTimer);
            myTimer = setInterval(nextImage, 4000);
        }
    }, 10);
    
}