$( document ).ready(function() {

    var app = angular.module('myApp', []);

    app.controller('myApp', function($scope){

        // $scope.title = "Testing controller";

      //This is the array of random card values built out.
      $scope.cardArray = [];

      //This variable is for the initial build of how many card paris for the game
      var newCardArray = [];

      var numberOfCards = 12; //This variable will be adjusted by front-end user eventually
      var numberOfPairs = numberOfCards/2;

      // var cardOne = 0;
      // var cardTwo = 0;
      // var cardThree = 0;
      // var cardFour = 0;
      // var cardFive = 0;
      // var cardSix = 0;

      buildArray(numberOfPairs);
      assignCards();


      //functions

      function buildArray(arrayLength){
        for(var i = 0; i < arrayLength; i++){
          newCardArray.push(i);
          newCardArray.push(i);
        }
      }

      function assignCards(){

        for(var ii = 0; ii < numberOfCards; ii++){
          var randomNumMax = newCardArray.length;
          var tempCard = assignCard(randomNumMax);
          var tempMove = newCardArray.splice(tempCard, 1);
          $scope.cardArray.push(tempMove[0]);
        }
        console.log($scope.cardArray);
        putCardsOnDOM();
      }

      function putCardsOnDOM(){
        for(var i = 0; i < $scope.cardArray.length; i++){

        }
      }

      function assignCard(max){
        var newCard = randomInt(0, max);
        return newCard;
      }

      function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    });
  });
