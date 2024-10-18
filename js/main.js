// ! HTML elements
var model = document.querySelector(".model");
var allImgs = Array.from(document.querySelectorAll("figure img"));
var nextBtn = document.querySelector(".fa-circle-arrow-right");
var prevBtn = document.querySelector(".fa-circle-arrow-left");
var closeBtn = document.querySelector(".fa-circle-xmark");
// ^ app variables
var currentImgIndex;
// * functions
function showModel(){
    model.classList.remove("d-none");
    model.classList.add("d-flex");
}
function hideModel(){
    model.classList.remove("d-flex");
    model.classList.add("d-none");
}
function getCurrentImg(e){
    var currentImg = e.target;
    var currentImgSrc = e.target.getAttribute("src");
    currentImgIndex = allImgs.indexOf(currentImg);
    model.querySelector(".model img").setAttribute("src" , currentImgSrc);
}
function nextImg(){
    currentImgIndex++ ; 
    if(currentImgIndex >= allImgs.length){
        currentImgIndex = 0 ;
    }
    var nextImgSrc = allImgs[currentImgIndex].getAttribute("src");
    model.querySelector(".model img").setAttribute("src" , nextImgSrc);
}
function prevImg(){
    currentImgIndex-- ;
    if(currentImgIndex < 0){
        currentImgIndex = allImgs.length - 1 ;
    }
    var prevImgSrc = allImgs[currentImgIndex].getAttribute("src");
    model.querySelector(".model img").setAttribute("src" , prevImgSrc);
}
// & events
for( var i = 0 ; i < allImgs.length ; i++){
    allImgs[i].addEventListener("click",function(e){
        showModel()
        getCurrentImg(e);
    })
}
closeBtn.addEventListener("click" , hideModel);
nextBtn.addEventListener("click" , nextImg);
prevBtn.addEventListener("click" , prevImg);
document.addEventListener("keydown" , function(e){
    switch(e.code){
        case "ArrowRight":
            nextImg();
            break;
        case "ArrowLeft":
            prevImg();
            break;
        case "Escape":
            hideModel();
            break;
    }
});
model.addEventListener("click" , function(e){
    if(e.target === model){
        hideModel();
    }
});