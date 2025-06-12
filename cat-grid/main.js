let mainImage = document.querySelector("#main");

const imageSources = [
  "./static/cat1.jpg",
  "./static/cat2.jpg",
  "./static/cat3.jpg",
  "./static/cat4.jpg",
  "./static/cat5.jpg",
  "./static/cat6.jpg",
  "./static/cat7.jpg",
  "./static/cat8.jpg",
];

const thumbnails = document.querySelectorAll(".thumbnail");

for (const img of thumbnails) {
  img.addEventListener("click", (e) => {
    mainImage.setAttribute("src", e.target.src);
  });
}

let leftIndex = 0;
let rightIndex = 4;

const handleShift = (newThumbnailsArr) => {
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].setAttribute("src", newThumbnailsArr[i]);
  }
};

const goLeft = () => {
  if (leftIndex > 0) {
    handleShift(imageSources.slice(--leftIndex, --rightIndex));
  }
};

const goRight = () => {
  if (rightIndex < imageSources.length) {
    handleShift(imageSources.slice(++leftIndex, ++rightIndex));
  }
};

const shiftLeftBtn = document.querySelector("#left");
shiftLeftBtn.addEventListener("click", goLeft);

const shiftRightBtn = document.querySelector("#right");
shiftRightBtn.addEventListener("click", goRight);

const ht = document.querySelector("html");
const la = ht.getAttribute("lang");

console.log(la);
