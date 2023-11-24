const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const card = document.querySelector(".fa-cart-shopping");
const confirmCard = document.querySelector(".confirm")
const products = document.querySelector(".products")
const sub = document.querySelector(".addtocart")
const buy = document.querySelector(".cart-item")

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
    product.title = parent.children[0].innerHTML
    product.image = parent.children[1].src
    let price = Number(parent.children[2].children[0].textContent.split("$")[0])
    product.price = price
  }

  let korb = document.createElement("div")
  korb.classList.add("cart-item")
  korb.innerHTML = `
  <div>
  <span><img src="${product.image}" alt=""></span>
  <div class="cart-des">
      <h4>${product.title}</h4>
      <h5>${product.price}$</h5>
  </div>
  <div class="counter">
      <span><i class="fa-solid fa-chevron-up"></i></span>
      <p>1</p> 
      <span><i class="fa-solid fa-chevron-down"></i></span>       
  </div>
  <span><i class="fa-solid fa-trash"></i></span>
  </div>
  `
  buy.appendChild(korb)
}
