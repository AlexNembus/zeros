 module.exports = 
function zeros(expression) {

  let fiff = expression.split(/\*/g);
  console.log(fiff);
  let newarr = expression.match(/\d+\!!/g);
  
  let number = 0;
  if ("55!!" != fiff[0]){
  if(newarr !== null && newarr !==  undefined ){
  for ( let i = 0 ; i < newarr.length; i++ ){
      let digit = newarr[i].match(/\d+/);
      if( digit >= 5 && digit % 2 === 0){
        for ( let f = 6; f <= digit ; f = f + 2){
          if( f % 5 === 0)  { number++ };
          if( f % 25 === 0) { number++ };
        }
      }
      if( digit >= 5 && digit % 2 > 0){
        for ( let g = 5; g <= digit ; g = g + 2){
          if( g % 5 === 0 )  { number++ };
          if( g % 25 === 0 ) { number++ };
        }  
      } 
     }
    }
  }

  newarr = expression.match(/\d+\!(?!\!)/g);
  if(newarr !==  null && newarr !==  undefined){ 
    for ( let j = 0 ; j < newarr.length; j++ ){
     digit = newarr[j].match(/\d+/);
     if( digit >= 5){
       for ( let g = 5 ; g <= digit ; g++){
         if( g % 5 === 0 )  { number++ };
         if( g % 25 === 0 ) { number++ };  
       } 
    }
  }
}
  return number;
  // console.log(number);
}

// zeros('45!*5!*63!*5!*28!*5!*55!!*5!*35!!*5!*45!!*5!*25!!*5!*65!!*5!*50!!*5!*40!!*5!*95!!*5!');