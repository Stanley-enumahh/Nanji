/*cursor dragging*/

const tabBox = document.querySelector(".tab-box")

let isDragging = false;


const dragging = (e) => {
  if(!isDragging) return
  tabBox.scrollLeft -= e.movementX;
}
const dragStop = () =>{
  isDragging = false
}

tabBox.addEventListener("mousedown", () => isDragging = true);
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);