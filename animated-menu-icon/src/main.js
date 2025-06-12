const button = document.getElementById("animated-button");
const openAnimTopLine = document.getElementById("animate-top-line-open");
const openAnimBottomLine = document.getElementById("animate-bottom-line-open");
const closeAnimTopLine = document.getElementById("animate-top-line-close");
const closeAnimBottomLine = document.getElementById("animate-bottom-line-close");
let isExpanded = false;

button.addEventListener("click", () => {
  isExpanded = !isExpanded;
  if(isExpanded){
    console.log("Here")
    openAnimTopLine?.beginElement();
    openAnimBottomLine?.beginElement();
  }
  else{
    closeAnimTopLine?.beginElement();
    closeAnimBottomLine?.beginElement();
  }

})
