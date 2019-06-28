function calcTip() {
    var subtotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = subtotalElem.value;
    var tip = tipElem.value;
    var total = subtotal*(1+tip/100);
    console.log('Total is $' + total);
    alert('Total is $' + total);
    totalElem.innerHTML = '$' + total;
}