let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let product = [
    {
        id:1,
        name:'PRODUCT NAME 1',
        image:'image/img-6.png',
        price:12000
    },
    {
        id:2,
        name:'PRODUCT NAME 2',
        image:'image/img-9.png',
        price:13000
    },
    {
        id:3,
        name:'PRODUCT NAME 3',
        image:'image/img-12.-png',
        price:12000
    },
    {
        id:4,
        name:'PRODUCT NAME 4',
        image:'image/img-7.png',
        price:22000
    },
        
];
let listCard = [];
function initApp(){
   product.forEach((value, key)=>{
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
       <img srs="image/${value.image}"/>
       <div class="title">${value.name}</div>
       <div class="price">${value.price.toLocaleString()}</div>
       <button onclick="addToCard(${key})">Add To Card</button>

       `;
       list.appendChild(newDiv);
   })
}
initApp