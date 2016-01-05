var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person={
        name:'Joe doe',
        
        address: '555 main st',
        
        city:'new york' , 
        state:'NY',
        
        zip:'111111'
    }
    
    $scope.formattedAddress = function(person){
        return person.address+','+person.city+','+person.state+','+person.zip;
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function(){
   return {
       restrict: 'AECM',
//       template: '<div class="list-group"><a href="#" class="list-group-item "><h4 class="list-group-item-heading">Doe , John</h4><p class="list-group-item-text">555 main st, new york , my 111111  </p></a></div>',
       
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
//           personName:"@",
//           personAddress:"@"
           personObject: "=",
           formattedAddressFunction: "&"
       }
   } 
});