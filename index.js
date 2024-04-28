

let counter = document.getElementById('counter');

let minus = document.getElementById('minus')
let plus = document.getElementById('plus')

minus.addEventListener('click',()=>{
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue - 1;
})
plus.addEventListener('click',()=>{
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
})