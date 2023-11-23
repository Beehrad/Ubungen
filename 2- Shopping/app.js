const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const card = document.querySelector(".fa-cart-shopping");
const confirmCard = document.querySelector(".confirm")
const products = document.querySelector(".products")

confirmCard.addEventListener("click", closeModal);

card.addEventListener("click", showModal);
document.addEventListener("DOMContentLoaded", onLoad)

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

function onLoad(){
  let UI = ""
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((element) =>{
    element.forEach(e => {
      console.log(e)
      UI += `
      <div class="item">
        <h6>${e.title}</h6>
        <img src="${e.image}" alt="">
        <div>
            <p>${e.price}$</p>
            <p>${e.category}</p>
        </div>
        <button class="add-to-cart">add to cart</button>
      </div>
      `
    });
    products.innerHTML = UI
  })
}