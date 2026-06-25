let k = (prompt("digite uma quantidade de termos: "));

let primeiro = 0;
let segundo = 1;

 for (let i = 1; i <= k; i++){
     console.log (primeiro);
     let proximo = primeiro + segundo;
     primeiro = segundo;
     segundo = proximo
 }