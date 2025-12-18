function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.random() * 80 + "%";
  elm.style.left = Math.random() * 80 + "%";
}

const btn = document.getElementById("move-random");

btn.addEventListener("mouseenter", () => moveRandomEl(btn));
btn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveRandomEl(btn);
});
