const small_acceuil = document.querySelector(".rotate");
const acceuil = document.querySelector(".acceuil");

small_acceuil.addEventListener("click", () => {
  small_acceuil.classList.toggle("active");
  acceuil.classList.toggle("responsive");
});
