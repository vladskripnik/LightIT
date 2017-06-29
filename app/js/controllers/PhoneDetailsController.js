'use strict';

/* Phone Detail Controller */
phonecatApp.controller('PhoneDetailCtrl',[
  '$scope','$http', '$location', '$routeParams', 'Phone',
  function($scope, $http, $location, $routeParams, Phone,id) {
    $scope.phoneId = $routeParams.phoneId;
    Phone.get({phoneId: $routeParams.phoneId}, function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
      //data.$save();
    });
    $scope.rating = 0;
    $scope.rateFunction = function(rating) {
      $scope.score = rating;
    };
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
      $http.get('http://smktesting.herokuapp.com/api/reviews/1')
      .success(function (data){
              console.log(data);
              $scope.items = data ;
          })
          .error(function (data,status){
            console.log(data);
            console.log(status);
          });
    $scope.AddComment = function () {
        var data =({
        rate: $scope.score,
        product:1,
        text: $scope.textcomment,
        created_by:null
      });
      $http.post('http://smktesting.herokuapp.com/api/reviews/1', data)
      .success(function (result){
              console.log(result);
          })
          .error(function (data,status){
            console.log(data);
            console.log(status);
          });

    };
  }
  ]);