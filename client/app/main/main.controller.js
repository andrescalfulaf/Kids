'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
     var columnDefs1 = [
    { name: 'firstName' },
    { name: 'lastName' },
    { name: 'company' },
    { name: 'gender' }
  ];
 
  var data1 = [
    {
      "firstName": "Cox",
      "lastName": "Carney",
      "company": "Enormo",
      "gender": "male"
    },
    {
      "firstName": "Lorraine",
      "lastName": "Wise",
      "company": "Comveyer",
      "gender": "female"
    },
    {
      "firstName": "Nancy",
      "lastName": "Waters",
      "company": "Fuelton",
      "gender": "female"
    },
    {
      "firstName": "Misty",
      "lastName": "Oneill",
      "company": "Letpro",
      "gender": "female"
    }
  ];
  $scope.gridOpts = {
    columnDefs: columnDefs1,
    data: data1
  };
      $scope.addData = function() {
    var n = $scope.gridOpts.data.length + 1;
    $scope.gridOpts.data.push({
                "firstName": "New " + n,
                "lastName": "Person " + n,
                "company": "abc",
                "employed": true,
                "gender": "male"
              });
    $http.post('/api/childs', {
          nombre: "New " + n,
          apellido: "Person " + n,
          fecha_nacimiento: "2016-06-18",
          usuario: "New " + n,
          active: 123,
        });
  };
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('kidsApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
