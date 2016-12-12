$( document ).ready(function() {
    // console.log("hello WORLD");
    var cardArray = [];
    randomCardAssign();






    function randomCardAssign(){

      for(var i = 0; i < 12; i++){
        // var newCard = randomInt(0, 11);
        var currentCard = assignCard();
        console.log(currentCard);
        // cardArray.push(currentCard);

        if(i < 1){
          pushCard(currentCard);
        } else{
          checkCardNumbers(currentCard);
        }

        // for(var card = 0; card < 12; card ++){
        //
        //
        //   if(currentCard === cardArray[card]){
        //     currentCard = assignCard();
        //   } else {
        //     cardArray.push(currentCard);
        //   }
        // }

        // console.log(newCard);
      }

      console.log(cardArray);

    }

    function checkCardNumbers(current){
      for(var i = 0; i < cardArray.length; i++){
        console.log(cardArray[i] + " and the current is " + current);
        console.log(cardArray.length);
        if(current === cardArray[i]){
          console.log("card numbers matched, re-do", current);
          // current = assignCard();
          return;
        } else {
          // pushCard();
          console.log("card numbers did not match this is what current is", current);
          pushCard(current);
          return;
        }
      }
    }

    function pushCard(firstCard){
      cardArray.push(firstCard);
    }

    function assignCard(){
      var newCard = randomInt(0, 11);
      return newCard;
    }

    function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

  });
