let box = document.querySelectorAll(".box");
//console.log(box);
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    box[i].classList.toggle("active");
    document.querySelector(`#i${i + 1}`).classList.toggle("rot45");
  });
}
