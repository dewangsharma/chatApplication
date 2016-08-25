function ChatController($scope, Chat, $location, $window, $rootScope) {

    $scope.tagline = 'Chat Controller';

    $scope.send = function(){
    	myPrint($scope.currentUser.username);
    	myPrint($scope.message);
    	Chat.send($scope.currentUser.username, $scope.message);


    	$scope.message= '' ;
    }

    function myPrint(msg) {
        console.log(msg);
    };

};

ChatController.$inject = ['$scope', 'Chat', '$location', '$window', '$rootScope'];

angular.module('ChatCtrl', []).controller('ChatController', ChatController);