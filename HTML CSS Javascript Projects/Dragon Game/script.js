const dino=document.querySelector(".dino");
const jumpDino=()=>{
    if(e.key==38){
        console.log(e.key);
    }
    // dino.classList.add(animateDino);
}
document.addEventListener("keypress", function(e) {
    console.log("keycode is:",e.key);
    jumpDino();
});
