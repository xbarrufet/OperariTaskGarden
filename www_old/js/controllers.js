angular.module('starter.controllers', [])

.controller('TasquesCtrl', function($scope,$location, $state,$ionicSlideBoxDelegate) {

    $scope.goToSetmanaView = function() 
    {
        $state.go('tab.tasquesSetmana');
    }
    
    $scope.goToDiaView = function() 
    {
        $state.go('tab.tasques');
    }
    
     $scope.goToJardiView = function() 
    {
        $state.go('tab.tasquesJardi');
    }
    
    $scope.canviSlideDia = function() {
        alert($ionicSlideBoxDelegate.currentIndex());
    }
    
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };


})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
