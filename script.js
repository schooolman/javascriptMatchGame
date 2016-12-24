$( document ).ready(function() {

    var app = angular.module('myApp', []);

    app.controller('myApp', function($scope){

      //This is the array of random card values built out.
      $scope.cardArray = [];

      $scope.cardOne = 0;
      $scope.cardTwo = 0;
      $scope.tempSelect = 0;

      $scope.isActive = false;

      //This variable is for the initial build of how many card paris for the game
      var newCardArray = [];

      var numberOfCards = 12; //This variable will be adjusted by front-end user eventually
      var numberOfPairs = numberOfCards/2;

      buildArray(numberOfPairs);
      assignCards();

      //functions

      $scope.matchCards = function($index){

        if($scope.tempSelect === 0){
          $scope.cardOne = $scope.cardArray[$index];
          $scope.tempSelect++;
          // $scope.isActive = !$scope.isActive;
          $scope.targetReveal($index);

          console.log("first card selected", $scope.cardOne);

        } else {
          $scope.cardTwo = $scope.cardArray[$index];
          compareSelection();
          $scope.tempSelect--;
          var cardShowTwo = $('.card')[$index];
          console.log(cardShowTwo);
          // cardShowTwo.addClass('active');
          // $scope.isActive = !$scope.isActive;
          $scope.targetReveal($index);
          console.log("second Card selected", $scope.cardTwo);
        }
      };

      $scope.targetReveal = function($index) {
          // $scope.isActive = !$scope.isActive;
          $(this).addClass('active');
          console.log("class boolean", $scope.isActive);
      };

      function compareSelection(){
          if($scope.cardOne === $scope.cardTwo){
            console.log("they match!");
          } else {
            console.log("try again");
          }
      }

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
