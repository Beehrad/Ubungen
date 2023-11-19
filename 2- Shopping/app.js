const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const card = document.querySelector(".fa-cart-shopping");

backdrop.addEventListener("click", closeModal);

card.addEventListener("click", showModal);

function showModal() {
  backdrop.style.display = "flex";
  modal.style.opacity = "1";
  modal.style.transform = "translateY(0vh)";
}
function closeModal() {
  backdrop.style.display = "none";
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
}
