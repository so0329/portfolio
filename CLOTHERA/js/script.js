function adjustMainPadding() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const headerHeight = header.getBoundingClientRect().height;
  main.style.paddingTop = headerHeight + "px";
}

window.addEventListener("load", () => {
  requestAnimationFrame(adjustMainPadding);
});
window.addEventListener("resize", adjustMainPadding);
