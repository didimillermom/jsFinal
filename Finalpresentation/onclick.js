// function hideOne(one){
//     var page = document.getElementById(one);
//     page.style.margin= "0 -500px 0 0"; page.style.transition="margin 1s ease 0s";
//     console.log('called function');
//      }
$(document).ready(function(){
    $('.round-button-circle').click(function () {
        $('.round-button-circle').toggleClass('click');
        $('#twotitle').toggleClass('bgmove');
    });
});
$(document).ready(function(){
    $('.round-button-circle2').click(function () {
        $('.round-button-circle2').toggleClass('click');
        $('#twotitle2').toggleClass('bgmove');
    });
});

var circlebutton = document.querySelector(".round-button-circle");
circlebutton.addEventListener('click', function(){
    circlebutton.classList.toggle('bgmove');

})




//
// function hideOne(one){
//   var page=document.getElementById(one);
//     if (page.style.margin = ""){
//         page.style.margin = "0 -500px 0 0";
//         page.style.transition = "margin 2s ease 0s";
//     }
//     else {
//         page.style.margin = "";
//     }
//     console.log("number 1 done");
//     }


// document.addEventListener("click", function hideOne(){
//     var rotato = document.getElementById("round-button-circle");
//        if (rotato.style.transform = "none"){
//         rotato.style.transform = "rotateZ(45deg)";
//         rotato.style.transition = "transform 1s ease 0s";
//     }
//     else {
//         rotato.style.transform = "none";
//     }
//     console.log('called function2');
// })
// function hideOne(one,two) {
//     var page = document.getElementById("one");
//     var rotato = document.getElementsByClassName("two");
//     if (page.style.margin = ""){
//         page.style.margin = "0 -1000px 0 0";
//         page.style.transition = "margin 2s ease 0s";
//         rotato.style.transform = "rotateZ(45deg)";
//         rotato.style.transition = "transform 1s ease 0s";
//     }
//     else {
//         page.style.margin = "";
//         rotato.style.transform = "none";
//     }
//     console.log("number 1 done");


// function hideOne(one,two) {
//     var page = document.getElementById("one");
//     if (page.style.margin = "") {
//         page.style.margin = "0 -1000px 0 0";
//         page.style.transition = "margin 2s ease 0s";
//     }
//     else {
//         page.style.margin = "";
//     }
//     console.log("number 1 done");
//
//     var rotato = document.getElementsByClassName("two");
//     if (rotato.style.transform = "none"){
//         rotato.style.transform = "rotateZ(45deg)";
//         rotato.style.transition = "transform 1s ease 0s";
//     }
//     else {
//         rotato.style.transform = "none";
//     }
//     console.log('called function2');
