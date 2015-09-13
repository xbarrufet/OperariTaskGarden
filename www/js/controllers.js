angular.module('starter.controllers', [])

.controller('TasquesCtrl', function($scope,$location, $state,$ionicSlideBoxDelegate,$ionicModal) {

    $scope.goToSetmanaView = function() 
    {
        $state.go('tab.tasquesSetmana');
    }
    
    $scope.goToDiaView = function() 
    {
        $state.go('tab.tasquesDia');
    }
    
     $scope.goToJardiView = function() 
    {
        $state.go('tab.tasquesJardi');
    }
     
     $scope.goToClientList= function() 
    {
        $state.go('tab.clients');
    }
     
    $scope.goToClientDetall= function() 
    {
        $state.go('tab.clientDetall');
    }
     $scope.goToChat= function() 
    {
        $state.go('tab.chat');
    }
     
    $scope.goToLlistaFotos = function() 
    {
        $state.go('tab.llistaFotos');
    }
     $scope.goToFoto = function() 
    {
        $state.go('tab.foto');
    }
    
    
    $scope.canviSlideDia = function() {
        alert($ionicSlideBoxDelegate.currentIndex());
    }
    
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
    
    $ionicModal.fromTemplateUrl('templates/novaIncidencia.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
  
  $scope.openModal = function() {   
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
    
 $scope.showAlert = function(msg) {
                  alert(msg);
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
