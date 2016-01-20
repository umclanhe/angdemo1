var BaseController = function ($scope,SessionService) {
    $scope.helloAgain = 'Hello Again 1.3';

    $scope.loggedIn = function(){
    	return SessionService.getToken() !== undefined;
    }
}

BaseController.$inject = ['$scope','SessionService'];