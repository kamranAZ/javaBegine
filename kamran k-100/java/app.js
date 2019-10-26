var next = document.getElementById("next")
var prew = document.getElementById("prew")
var sliderUl = document.querySelector(".slider ul")
var vaqif = 0;
next.onclick = function () {
    vaqif++;
    if (
        vaqif == sliderUl.querySelectorAll("li").length) { vaqif = 0 }
    sliderUl.style.left = -800 * vaqif + "px"
}
prew.onclick = function () {
    vaqif--;
    if (
        vaqif == -1) { vaqif = sliderUl.querySelectorAll("li").length-1}
    
    sliderUl.style.left = -800* vaqif + "px"
}
// prew.onclick=function(){
//     vaqif++;
//     sliderUl.style.left=
// }