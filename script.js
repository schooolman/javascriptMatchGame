$( document ).ready(function() {
    // console.log("hello WORLD");
    var cardArray = [];
    randomCardAssign();






    function randomCardAssign(){

      for(var i = 0; i < 12; i++){
        // var newCard = randomInt(0, 11);
        var currentCard = assignCard();
        for(var card = 0; card < cardArray.length; card ++){
          if(currentCard === cardArray[card]){
            currentCard = assignCard();
          } else {
            cardArray.push(newCard);
          }
        }

        // console.log(newCard);
      }

      console.log(cardArray);

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
