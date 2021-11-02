function findPrime(...params) {
    
   
    for(let i=0;i<params.length;i++){
        let isPrime=true;
            for(let j=2;j<=Math.sqrt(params[i]);j++){
         
             if(params[i]%j ===0 ){
                
               isPrime=false;
            }
        }
        if(isPrime && params[i]>1){
            console.log(params[i] +" Asal sayıdır")
         }else{
        console.log(params[i] +" Asal sayı değildir")
    }   
    

    }
}


findPrime(2,3,5,8,12,21);
findPrime(3,5);



function arkadasSayilar(a,b){
    let number= (b<a ? b:a)
    let aDivide=[]
    let bDivide=[]
    for(let i=1;i<number;i++){
        if(a%i===0 && b%i===0){
            aDivide.push(i);
            bDivide.push(i);
        }
        else if(a%i===0){
            aDivide.push(i);
        }
        else if(b%i===0){
            bDivide.push(i);
        }
    } 
    const reducer=(previous,current)=>previous+current;
    let aTotal = aDivide.reduce(reducer);
    let bTotal = bDivide.reduce(reducer);
    
    if(aTotal===b &&bTotal===a){
        console.log(a + " ve " + b +" Arkadaş sayılardır");
    }else{
        console.log(a + " ve " + b +" Arkadaş sayı değillerdir");
    }

    
}

arkadasSayilar(220,284)
arkadasSayilar(1210,1184)



function mukemmelSayılar(){
    let mukemmel=[]
    for(let i=1;i<1000;i++){
        let total=0;
        for(let j=1;j<i;j++){
          if(i%j===0){
              total+=j;
          }
        }
        if(i ===total){
            mukemmel.push(i)
        }
    }
    console.log(...mukemmel)
}
mukemmelSayılar();


function isPrime() {
    let primes=[];
    
    for(let i=1;i<1000;i++){
        let boolPrime=true;
        for(let j=2;j<i;j++){
              if(i%j ===0){
                  boolPrime=false;
                }
        }
        if(boolPrime && i>1){
           
            primes.push(i)
        }
        
    }
    
  console.log(...primes);
}

isPrime();