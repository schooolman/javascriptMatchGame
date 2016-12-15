$( document ).ready(function() {
    // console.log("hello WORLD");
    var cardArray = [];

    var newCardArray = [1, 2, 3, 4, 5, 6];

    var cardOne = 0;
    var cardTwo = 0;
    var cardThree = 0;
    var cardFour = 0;
    var cardFive = 0;
    var cardSix = 0;

    randomCardAssign();



    function randomCardAssign(){

      for(var i = 0; i < 12; i++){
        // var newCard = randomInt(0, 11);
        // var currentCard = assignCard();
        var temp = assignCard();

        switch (temp) {
          case temp === 0:
            if(cardOne < 2){
              cardArray.push(temp);
            } else {
              i--;
            }
            break;

          case temp === 1:
            if(cardTwo < 2){
              cardArray.push(temp);
            } else {
              i--;
            }
            break;

          case temp === 2:
            if(cardThree < 2){
              cardArray.push(temp);
            } else {
              i--;
            }
            break;

          default:
            console.log("hitting default switch");

        }

        // cardArray.push(currentCard);

      }
      checkForDuplicates();
      console.log(cardArray);

    }


    //Functions


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

    function checkForDuplicates() {
      // console.log("checking");
      for(var i = 0; i < cardArray.length; i++){
        var selectedPosition = cardArray[i];
        var testing = cardArray.indexOf(selectedPosition, "this is the selected position");
        // console.log(testing);
        // if(testing === -1){
        //   console.log("found match");
        // }
      }
    }

  });
