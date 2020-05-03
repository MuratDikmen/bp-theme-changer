document.querySelectorAll(".theme-changer-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  })
);
