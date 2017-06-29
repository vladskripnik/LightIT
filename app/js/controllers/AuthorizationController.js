'use strict';
/*Authorization Controller*/
phonecatApp.controller('authorizationCtrl',[
  '$scope','$http', '$location',
  function($scope, $http) {
   $scope.adduser =  function() {
    var data =({
      username:$scope.loginuser,
      password:$scope.passworduser
    });
    $http.post('http://smktesting.herokuapp.com/api/login/',data)
    .success(function (result){
      console.log(result);
    })
    .error(function (data,status){
      console.log(data);
      console.log(status);
    });
  }
}
]);