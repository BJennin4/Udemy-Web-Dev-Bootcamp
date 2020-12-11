const form = document.querySelector('form');


const container = document.querySelector('#list');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let productInput = form.elements.product;
    let qtyInput = form.elements.qty;
    addItem(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
})

function addItem(prod, qty){
const li = document.createElement('li');
const newItem = `${prod} ${qty}`;
li.innerHTML = newItem;
form.appendChild(li);
}