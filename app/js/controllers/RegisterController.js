'use strict';
/* Registration Controller */
phonecatApp.controller('RegisterCtrl',[
  '$scope','$http', '$location',
  function($scope, $http) {
   $scope.adduser =  function() {
      var data =({
        username:$scope.loginuser,
        password:$scope.passworduser
      });
      alert('Cпасибо за регистрацию!')
      $http.post('http://smktesting.herokuapp.com/api/register/', data)
          .success(function (data){
              console.log(data);
              $scope.items = data ;
          })
          .error(function (data,status){
            console.log(data);
            console.log(status);
          });
}
}
]);