//select elements
let input = document.querySelector("input");
let btnTen = document.getElementById("ten");
let btnFifteen = document.getElementById("fifteen");
let btnTwenty = document.getElementById("twenty");
let tipTotal = document.getElementById("tipTotal");
let billTotal = document.getElementById("billTotal");

//create event listeners
btnTen.addEventListener("click", function(){
    let num =parseInt(input.value);
    let tip = num * .10;
    tipTotal.textContent = tip.toFixed(2);
    billTotal.textContent = num + tip;
});

btnFifteen.addEventListener("click", function(){
    let num =parseFloat(input.value);
    let tip = num * .15;
    tipTotal.textContent = tip.toFixed(2);
    billTotal.textContent = num + tip;
});

btnTwenty.addEventListener("click", function(){
    let num =parseInt(input.value);
    let tip = num * .20;
    tipTotal.textContent = tip.toFixed(2);
    billTotal.textContent = num + tip;
});