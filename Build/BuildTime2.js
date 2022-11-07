// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

const utente = "utenteAmy";
let total=0;
let totalShipping=0;
switch(utente){
  case "utenteMarco":
    if(marco.isAmbassador===true){
      for(let i=0;i<3;i++){
        total=prices[i]+total;
      }
      total=total*0.7;
      console.log("Carrello scontato",total);
      if(total<=100){
        totalShipping=total+shippingCost;
        console.log("Totale carrello",totalShipping);
      }
      else{
        totalShipping=total;
        console.log("Totale carrello",totalShipping);
      }
    }
    else {
        for(let i=0;i<3;i++){
          total=prices[i]+total;
        }
        console.log("Carrello",total);
        if(total<=100){
          totalShipping=total+shippingCost;
          console.log("Totale carrello",totalShipping);
        }
        else{
          totalShipping=total;
          console.log("Totale carrello",totalShipping);
        }
    }
    break;
  case "utentePaul":
    if(paul.isAmbassador===true){
      for(let i=0;i<3;i++){
        total=prices[i]+total;
      }
      total=total*0.7;
      console.log("Carrello scontato",total);
      if(total<=100){
        totalShipping=total+shippingCost;
        console.log("Totale carrello",totalShipping);
      }
      else{
        totalShipping=total;
        console.log("Totale carrello",totalShipping);
      }
    }
    else {
        for(let i=0;i<3;i++){
          total=prices[i]+total;
        }
        console.log("Carrello",total);
        if(total<=100){
          totalShipping=total+shippingCost;
          console.log("Totale carrello",totalShipping);
        }
        else{
          totalShipping=total;
          console.log("Totale carrello",totalShipping);
        }
    }
    break;
  case "utenteAmy":
    if(amy.isAmbassador===true){
      for(let i=0;i<3;i++){
        total=prices[i]+total;
      }
      total=total*0.7;
      console.log("Carrello scontato",total);
      if(total<=100){
        totalShipping=total+shippingCost;
        console.log("Totale carrello",totalShipping);
      }
      else{
        totalShipping=total;
        console.log("Totale carrello",totalShipping);
      }
    }
    else {
        for(let i=0;i<3;i++){
          total=prices[i]+total;
        }
        console.log("Carrello",total);
        if(total<=100){
          totalShipping=total+shippingCost;
          console.log("Totale carrello",totalShipping);
        }
        else{
          totalShipping=total;
          console.log("Totale carrello",totalShipping);
        }
    }
    break;
    default:{
      console.log("Utente non registrato");
    }
}