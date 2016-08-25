angular.module('UserService', []).factory('User', ['$http', function($http) {

return {

	//todo: delete this 
	greet: function(){
		return "Hello there";
	},

	//Create new user 
	addNew: function(user){
		return $http.post('/api/users', user);
	},

	//login action for the user 
	login: function(user,pass){
		return $http.post('/api/login',{'username': user,'password': pass });
	},

	//check for isUserLoggedIn
	isLoggedIn: function(){
		return $http.get('/api/isLoggedIn');
	},

	//logout the user 
	logout: function(){
		$http.post('/api/isLoggedIn');
	}

}

}]);