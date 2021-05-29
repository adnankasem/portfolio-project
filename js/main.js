let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function(){
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
}

const input = document.querySelector("textarea");
const divOne = document.getElementById("one");
const divTwo = document.getElementById("two");


const addFood = (e) => {
    if (e.key === 'Enter') {
        divOne.innerHTML = input.value;
        console.log('Enter Pressed')
        input.addEventListener('keyup', addFoodTwo)
    }
}

input.addEventListener('keyup', addFood)

const addFoodTwo = (e) => {
    if (e.key === 'Enter') {
        divTwo.innerHTML = input.value;
        console.log('Enter Pressed Two')
    }
}

