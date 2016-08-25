angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: ''
		})
        .when('/chat', {
            templateUrl: 'modules/chat/index.html',
            controller: 'ChatController'
        })


		// .when('/settings/user', {
		// 	templateUrl: 'views/modules/user.html',
		// 	controller: ''		
		// })

		// .when('/users/login', {
		// 	templateUrl: 'views/sections/login.html',
		// 	controller: 'UserController'		
		// })

		// .when('/users/register', {
		// 	templateUrl: 'views/sections/register.html',
		// 	controller: 'UserController'
		// })
		// .when('/procedure',{
		// 	templateUrl: 'views/modules/procedure.html',
		// 	controller: ''	
		// })

		// .when('/procedure/run', {
		// 	templateUrl: 'views/modules/runProcedure.html',
		// 	controller: ''
		// })

		// .when('/settings/device', {
		// 	templateUrl: 'views/modules/device.html',
		// 	controller: 'DeviceController'
		// })

		// .when('/settings/labware', {
		// 	templateUrl: 'views/modules/labware.html',
		// 	controller: ''
		// })

		.otherwise({
            redirectTo: '/'
        })

		;

	$locationProvider.html5Mode(true);

}]);