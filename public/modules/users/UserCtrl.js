function UserController($scope, User, $location, $window, $rootScope) {

    $scope.tagline = 'User Controller';

    $scope.isAdmin = true; //todo: isAdmin 
    // $rootScope.isBusy = 'free';

    $rootScope.isAuthenticated = false;
    $scope.currentUser = {};

    //init method to check whether user is already logged in
    $scope.menuInit = function() {
        myPrint('Init function in the Usercontroller');
        User.isLoggedIn().success(function(data) {
            myPrint('Reponse of the isLoggedIn');
            myPrint(data);
            if (data) {
                $scope.currentUser = data;
                $rootScope.isAuthenticated = true;
                if ($scope.currentUser.roles[0] === 'admin') {
                    $scope.isAdmin = true;
                }

            } else {
                $location.path('/users/login');
            }
        });
    };

    $scope.statusInit = function() {

        $scope.deviceStep = '1'; //device step for starting the 
        $scope.robotStep = '1';
        $scope.deviceTask = 0;

    }

    $scope.register = function() {
        myPrint($scope.currentUser);

        var res = User.addNew($scope.currentUser);
        myPrint('Response : ');
        console.log(res);

    };

    $scope.login = function() {
        // var res = User.login($scope.currentUser.username, $scope.currentUser.password);
        // myPrint('Response: ');
        // myPrint(res);
        User.login($scope.currentUser.username, $scope.currentUser.password).success(function(res) {
            myPrint('Response: ');
            myPrint(res);
            if (res)
                window.location = '/';
            else {
                //window.location = '/users/login';
            }

        });

    };


    $scope.logout = function() {
        User.logout();
        $location.path('/users/login');
    };
    //menu item background color
    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    function myPrint(msg) {
        console.log(msg);
    };

};

UserController.$inject = ['$scope', 'User', '$location', '$window', '$rootScope'];

angular.module('UserCtrl', []).controller('UserController', UserController);