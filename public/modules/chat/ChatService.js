angular.module('ChatService', []).factory('Chat', ['$http',
    function($http) {

        return {

            //send message 
            send: function(username, message) {
                return $http.post('/api/chats', {
                    'username': username,
                    'message': message
                });
            }
        }

    }
]);