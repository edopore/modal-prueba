document.querySelector("button[open-modal]").addEventListener("click", () => {
  console.log("open-modal");
  document.querySelector(".modal").classList.toggle("display-none");
});

document.querySelector("button[close-modal]").addEventListener("click", () => {
  console.log("close-modal");
  document.querySelector(".modal").classList.toggle("display-none");
});
window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code === "Escape") {
    document.querySelector(".modal").classList.add("display-none");
  }
});
