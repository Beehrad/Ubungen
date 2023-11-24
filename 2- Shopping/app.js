const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const card = document.querySelector(".fa-cart-shopping");
const confirmCard = document.querySelector(".confirm")
const products = document.querySelector(".products")
const sub = document.querySelector(".addtocart")

confirmCard.addEventListener("click", closeModal);


card.addEventListener("click", showModal);
document.addEventListener("DOMContentLoaded", onLoad)
products.addEventListener("click" , addToCard)

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
      UI += `
      <div class="item">
        <h6>${e.title}</h6>
        <img src="${e.image}" alt="">
        <div>
            <span value="${e.price}">${e.price}$</span>
            <p>${e.category}</p>
        </div>
        <button class="addtocart">add to cart</button>
      </div>
      `
    });
    products.innerHTML = UI
  })
}

function addToCard(e){
  // console.log(e.target)
  let target = e.target
  let product = {}
  if(target.className == "addtocart"){
    let parent = target.parentElement
    console.log(parent.children[2].children[0].textContent.split("$")[0])
    product.title = parent.children[0].innerHTML
    product.image = parent.children[1]
    product.price = parent.children[2].children[0].textContent.split("$")[0]

    return product
  }
}