let neon = document.getElementById("image-text");
let customInput = document.getElementById("type-text-input");
let fonts = document.getElementsByClassName("pick-fonts");
let colors = document.getElementsByClassName("colors-Array");
let size = document.getElementsByClassName("font-size");
let backColor = ["white","#ffc1ca","rgb(134, 236, 179)","rgb(2, 0, 254)","rgb(254, 235, 178)","rgb(255, 162, 22)","rgb(174, 216, 229)","rgb(230, 230, 131)","rgb(254, 255, 34)","#e31238"];
let fontSize = ["60px","80px","100px"];

customInput.addEventListener("input", (e) => {
    neon.innerHTML = e.target.value;
});

let fontsArray = Array.from(fonts);

fontsArray.forEach(element => {
element.style.fontFamily=element.innerHTML;

element.addEventListener("click",()=>{
neon.style.fontFamily = element.innerHTML;
})
});

Array.from(colors).forEach((val,ind) => {
    val.addEventListener("click",(e)=>{
       neon.style.color= backColor[ind];
    })
});

Array.from(size).forEach((element,index) => {
    element.addEventListener("click",()=>{
        neon.style.fontSize = fontSize[index];
    })
});