console.log("Merhaba kodlama.io");


// *!JS TYPE SAFE DEĞİLDİR
var dolarBugun = 9.30;

let dolarDun = 9.20;


{
    let dolarDun=9.10;
}


console.log(dolarDun);

const euroDun=11.2;
//euroDun=11; //! cons sabittir bir kere tanımlanır ve deper içine atılır sonrasında değiştirilemez

// * array
// * camelCasing
// * PascalCasing
let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li> " + konutKredileri[i] + "</li>");
    
}
console.log("</ul>");


// console.log(konutKredileri);

/* 

console.log(dolarDun); -> output undifined
var dolarDun = 9.20;
*/