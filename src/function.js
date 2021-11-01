function addToCart(quantity,productName="Elma"){
    console.log("Sepete eklendi : " + productName + " adet :" + quantity);
}

//adddToCart();
 addToCart(10);
//adddToCart("Karpuz");

let sayHello=()=>{
    console.log("Hello World");
}
sayHello();

let sayHello2=function(){
    console.log("Hello World 2");
}

sayHello2();


function addToCart2(productName,quantity,unitPrice){

}

addToCart("Elma",5,10);
addToCart("Armut",2,20);
addToCart("Limon",3,15);

let product1 ={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product){
    console.log("Ürün : "+product.productName);
    console.log("Adet : "+product.unitPrice);
    console.log("Fiyat : "+product.quantity);
}

addToCart3(product1);

let product2 ={productName:"Elma",unitPrice:10,quantity:5}
let product3 ={productName:"Elma",unitPrice:10,quantity:5}
product2 = product3;
product2.productName="Karpuz";
console.log(product3.productName);

function addToCart4(products) {
    console.log(products);
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
];

addToCart4(products);


function add(bisey,...numbers){// ! rest operator  rest operatoru her zaman fonksiyonun sonuna yaz birleştirmede kullanıldı
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i];        
    }

    console.log(total);
    console.log(bisey);
}
add(20,30);
// add(20,30,40);
// add(20,30,40,50);
let numbers =[30,10,500,600,120]

console.log(Math.max(...numbers));// ! spread operator ayrıştırmada kullanılır


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] =[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30m"},
    {name:"Karadeniz",population:"10m"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]; // ! destructring

// console.log(icAnadolu);
// console.log(marmara);
// console.log(karadeniz);
console.log(icAnadoluSehirleri);

let newProductName,newUnitPrice,newQuantity
({ productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5})


console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);