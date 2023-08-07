const pair1Button = document.getElementById("pair1");
const pair2Button = document.getElementById("pair2");
const pair3Button = document.getElementById("pair3");

// this is color ans size variable which i have used.

const sizeColorOptions = document.getElementById("sizeColorOptions");
const size2ColorOptions = document.getElementById("size2ColorOptions");
const size3ColorOptions = document.getElementById("size3ColorOptions");

// this is the function section

pair1Button.addEventListener("click", () => {
  size3ColorOptions.style.display = "none";
  size2ColorOptions.style.display = "none";
  sizeColorOptions.style.display = "flex";
  
  
});

pair2Button.addEventListener("click", () => {
  sizeColorOptions.style.display = "none";
  size3ColorOptions.style.display = "none";
  size2ColorOptions.style.display = "flex";
});
pair3Button.addEventListener("click", () => {
  size2ColorOptions.style.display = "none";
  sizeColorOptions.style.display = "none";
  size3ColorOptions.style.display = "flex";
});
