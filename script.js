document.querySelectorAll(".product button").forEach(btn => {
  btn.addEventListener("click", () => {
    const form = btn.nextElementSibling;
    form.style.display = form.style.display === "block" ? "none" : "block";
  });
});
