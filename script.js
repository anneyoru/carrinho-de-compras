function getTotal() {

    let hamburguer = document.getElementById("hamburguer_qty");
    let frenchFries = document.getElementById("frenchfries_qty");
    let coke = document.getElementById("coke_qty");

    let hamburguerQty = Number(hamburguer.value);
    let frenchFriesQty = Number(frenchFries.value);
    let cokeQty = Number(coke.value);

    let hamburguerTotal = hamburguerQty * 11.99;
    let frenchFriesTotal = frenchFriesQty * 8.99;
    let cokeTotal = cokeQty * 4.99;

    let total = hamburguerTotal + frenchFriesTotal + cokeTotal;

    let checkout = document.getElementById("checkout");
    checkout.textContent = `Total: R$ ${total.toFixed(2)}`
}

