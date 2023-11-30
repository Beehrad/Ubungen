const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const card = document.querySelector(".fa-cart-shopping");
const confirmCard = document.querySelector(".confirm")
const products = document.querySelector(".products")
const sub = document.querySelector(".addtocart")
const buy = document.querySelector(".cart-item")

confirmCard.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);


card.addEventListener("click", showModal);
document.addEventListener("DOMContentLoaded", onLoad)
products.addEventListener("click" , addToCard)

function showModal() {
  backdrop.style.display = "flex";
  modal.style.opacity = "1";
  modal.style.transform = "translatey(0vh)";
}
function closeModal() {
  backdrop.style.display = "none";
  modal.style.opacity = "0";
  modal.style.transform = "translatey(-100vh)";
}

function onLoad(){
  let UI = ""
  fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((element) =>{
    element.forEach(e => {
      UI += `
      <div id="${e.id}" class="item">
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
  let target = e.target
  let product = {}
  if(target.className == "addtocart"){
    let parent = target.parentElement
    let id = parent.id

    addToLocal(id)
    addToModal()
  }
}

function addToLocal(id){
  let product = getLocal()
  if(!product.includes(id)){
  product.push(id)

}
localStorage.setItem("product" , JSON.stringify(product))
}


function getLocal(){
  let product;
  if(localStorage.getItem("product") === null){
    product = []
  }else{
    product = JSON.parse(localStorage.getItem("product"))
  }
  return product
}

function addToModal(){
  let product = getLocal()
  buy.innerHTML = ""
  product.forEach(el => {
    fetch(`https://fakestoreapi.com/products/${el}`)
    .then((response) => response.json())
    .then((element) => {
      let korb = document.createElement("div")
          korb.classList.add("cart-item")
          korb.id = element.id
          korb.innerHTML = `
          <div>
          <span><img src="${element.image}" alt=""></span>
          <div class="cart-des">
              <h4>${element.title}</h4>
              <h5>${element.price}$</h5>
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
    })
  });
}


.
addToModal()