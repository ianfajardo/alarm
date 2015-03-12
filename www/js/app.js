// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('alarmCtrl', function($scope, $interval){
  $scope.hour = 1;
  $scope.minute = 2;
  $scope.period = "AM";
  $scope.hold = false;

  var time_increment = function($time, prop, min, max){
    if($time[prop] < max){
      $time[prop]++;
      
    }
    else{
      $time[prop] = min;
    }
  };

  var time_decrement = function($time, prop, min, max){
    if($time[prop] > min){
      $time[prop]--;
    }
    else{
      $time[prop] = max;
    }
  }

  var promise;
  $scope.increase = function(){
    time_increment($scope, 'hour', 1, 12);
  }

  $scope.increaseHold = function(){
    promise = $interval(function(){
      $scope.increase();
    }, 200);
  }

  $scope.release = function(){
    $interval.cancel(promise);
  }

  $scope.decrease = function(){
    time_decrement($scope, 'hour', 1, 12)
  }

});