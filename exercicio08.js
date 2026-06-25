 let numero = (prompt("digite um numero:"));
 
 let maior = numero; 
 let menor = numero;
 
 while (numero!= 0){
     if (numero > maior){
        maior = numero;
     }
     
     if (numero < menor){
         menor = numero;
     }
      
      numero = prompt ("digite outro numero:");
 }
  
   console.log('maior numero digite: ${maior}');
   console.log('menor numero digitado: ${menor}');