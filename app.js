const title = document.querySelector(".hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}

const handel = () => {
  title.style.color = "blue";
};

const sum = (a, b) => {
  return a + b;
};

const sum = (a, b) => a + b;

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

title.onclick = handle;
title.addEventListener("mouseenter", (a, b) => a + b);
title.addEventListener("mouseleave", handleMouseLeave);
