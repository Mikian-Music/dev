window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.opacity = 0;
  setTimeout(() => {
    body.style.transition = "opacity 1s ease-in";
    body.style.opacity = 1;
  }, 100);
});
