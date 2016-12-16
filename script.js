$( document ).ready(function() {

    var cardArray = [];

    var newCardArray = [];

    var numberOfCards = 12;
    var numberOfPairs = numberOfCards/2;

    var cardOne = 0;
    var cardTwo = 0;
    var cardThree = 0;
    var cardFour = 0;
    var cardFive = 0;
    var cardSix = 0;

    // randomCardAssign();
    buildArray(numberOfPairs);
    assignCards();

    function assignCards(){
      var randomNumMax = newCardArray.length;
      console.log(randomNumMax);
    }

    function buildArray(arrayLength){
      for(var i = 0; i < arrayLength; i++){
        newCardArray.push(i);
        newCardArray.push(i);
      }
      console.log(newCardArray);
    }
    // Using a switch is working as far as assigning and building a random
    // card number array, but it is blowing the stack when the options get
    // too small. Only works up to four cards.

    // Need to remove the possiblility of a a loop that runs too long. Maybe
    // selecting from an array and removing them from the choices when there are 2 of them?

    function randomCardAssign(){

      for(var i = 0; i < 12; i++){
        // var newCard = randomInt(0, 11);
        // var currentCard = assignCard();
        var temp = assignCard();

        switch (temp) {
          case 0:
            if(cardOne < 2){
              cardArray.push(temp);
              cardOne++;
              console.log("hopefully Pushhed", cardOne);
            } else {
              console.log("no go");
              i--;
            }
            break;

          case 1:
            if(cardTwo < 2){
              cardArray.push(temp);
              cardTwo++;
              console.log("hopefully Pushhed", cardTwo);
            } else {
              console.log("no go");
              i--;
            }
            break;

          case 2:
            if(cardThree < 2){
              cardArray.push(temp);
              cardThree++;
              console.log("hopefully Pushhed", cardThree);
            } else {
              console.log("no go");
              i--;
            }
            break;

          case 3:
            if(cardFour < 2){
              cardArray.push(temp);
              cardFour++;
              console.log("hopefully Pushhed", cardFour);
            } else {
              console.log("no go");
              i--;
            }
            break;

          case 4:
            if(cardFive < 2){
              cardArray.push(temp);
              // cardFive++;
              console.log("hopefully Pushhed", cardFive);
            } else {
              console.log("no go");
              i--;
            }
            break;

          case 5:
            if(cardSix < 2){
              cardArray.push(temp);
              // cardSix++;
              console.log("hopefully Pushhed");
            } else {
              console.log("no go");
              i--;
            }
            break;

          default:
            console.log("hitting default switch", temp);
            break;

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
      var newCard = randomInt(0, 5);
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
