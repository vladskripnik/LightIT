'use strict';

phonecatApp.controller('PhoneListCtrl',[
  '$scope','$http', '$location', 'Phone',
  function($scope, $http, $location, Phone) {

    Phone.query({phoneId: 'phones'}, function(data) {
      $scope.phones = data;
    });

    //Phone.query(params, successcb, errorcb)

    //Phone.get(params, successcb, errorcb)

    //Phone.save(params, payloadData, successcb, errorcb)

    //Phone.delete(params, successcb, errorcb)

  }
  ]);
