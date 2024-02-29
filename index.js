document.querySelector("button[open-modal]").addEventListener("click", () => {
  console.log("open-modal");
  document.querySelector(".modal").classList.toggle("display-none");
});

document.querySelector("button[close-modal]").addEventListener("click", () => {
  console.log("close-modal");
  document.querySelector(".modal").classList.toggle("display-none");
});
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    console.log(`Key ${event.code} pressed`);
    document.querySelector(".modal").classList.add("display-none");
  }
});
