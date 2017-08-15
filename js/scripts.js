function clicked(event){
  event.preventDefault();
  var stringIn = $("input#stringIn").val();
  var potentialPrimes = [];
  for(var i = 2; i < stringIn; i++){
    potentialPrimes.push(i);
  }

  for(var i = 0; i < potentialPrimes.length && potentialPrimes[i]<= Math.sqrt(potentialPrimes[potentialPrimes.length - 1]) ; i++) {
    for(var j = 0; j < potentialPrimes.length; j++) {
      if(potentialPrimes[j] % potentialPrimes[i] === 0 && potentialPrimes[j] !== potentialPrimes[i]){
        potentialPrimes.splice(j, 1);
      }
    }
  }

    $("#stringOut").html(potentialPrimes.join(", "));
};
  // var list = [];
  // var prime = 2;
  // var list2 = [];
  // var list3 = [];
  // for(var i = 2; i < (stringIn + 1); i++){
  //   list[i - 2] = i;
  // }
  // while(prime <= stringIn){
  //   for(i = prime; i < list.length; i++){
  //     if(i % prime != 0){
  //       list2.push(i);
  //     }
  //   }
  //   prime++;
  // }

  // list2.sort();
  // for(i = 1; i <= stringIn; i++){
  //   for(var j = 0; j < list2.length; j++){
  //     if(j == list2[j]){
  //       list3.push(j);
  //     }
  //   }
  // }
