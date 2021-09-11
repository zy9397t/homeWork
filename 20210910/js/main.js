var sliderContainerNode = document.querySelector('.sliderContainer')
var imgPath = [
    './image/1.jpg',
    './image/2.jpg',
    './image/3.jpg',
    './image/4.jpg',
    './image/5.jpg',
    './image/6.jpg',
]
var slider = new SLIDER(sliderContainerNode,imgPath,{button:true,pointer:true,firstImgIndex:2})
slider.init()