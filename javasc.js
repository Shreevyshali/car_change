data1 = document.getElementById("car");
data2 = document.getElementById("click");
// data3 = document.getElementById("click");


function red(){
    document.getElementById("audi").src="audi orange.jpeg";
    data1.style='background-color:orange';
    data2.style='background-color:orange';
    // data3.innerHTML="Your item is added to cart";
}
function black(){
    document.getElementById("audi").src="audi black.webp";
    data1.style='background-color:black';
    data2.style='background-color:black';
    // data3.innerHTML="Your item is added to cart";
}
function blue(){
    document.getElementById("audi").src="audi blue.jpeg";
    data1.style='background-color:blue';
    data2.style='background-color:blue';
    // data3.innerHTML="Your item is added to cart";
}
function touch(){
    data2.textContent ="Your item is added to cart";
}
