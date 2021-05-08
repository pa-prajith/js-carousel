const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const imgElements = document.querySelectorAll("img");

const disableCursor = (ele) => {
  ele.style.cursor = "none";
  ele.style.opacity = "0.5";
  ele.disabled = true;
};
const enableCursor = (ele) => {
  ele.style.cursor = "pointer";
  ele.style.opacity = "1.0";
  ele.disabled = false;
};

const removeActiveClass = (ele) => {
  ele.classList.remove("active");
};

const addActiveClass = (ele) => {
  ele.classList.add("active");
};

const resetCursor = () => {
  enableCursor(prevButton);
  enableCursor(nextButton);
};

const reloadImage = (index) => {
  addActiveClass(imgElements[index]);
  if (index === 0 || index === imgElements.length - 1) {
    disableCursor(index === 0 ? prevButton : nextButton);
  }
};

const showImage = (eleId) => {
  let showIndex = null;
  if (imgElements.length > 0) {
    resetCursor();
    for (let itx = 0; itx < imgElements.length; itx++) {
      if (imgElements[itx].classList.contains("active")) {
        showIndex = eleId === "previous" ? itx - 1 : itx + 1;
        removeActiveClass(imgElements[itx]);
        break;
      }
    }
    if (showIndex !== null) {
      reloadImage(showIndex);
    }
  }
};

const onButtonClick = function (e) {
  e.preventDefault();
  showImage(this.id);
};

const onLoadAction = function (e) {
  e.preventDefault;
  if (imgElements.length > 0) {
    if (imgElements[0].classList.contains("active")) {
      disableCursor(prevButton);
    }
    if (imgElements[imgElements.length - 1].classList.contains("active")) {
      disableCursor(nextButton);
    }
  }
};

window.addEventListener("DOMContentLoaded", onLoadAction, false);
prevButton.addEventListener("click", onButtonClick, false);
nextButton.addEventListener("click", onButtonClick, false);
