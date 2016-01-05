//var things=[1,'2',3,function(){
//    alert("hello");
//}];
//
//things[3]();
//
//
//console.log(things);

var myApp = angular.module('myApp', ['ngMessages','ngResource']);

myApp.controller('mainController', ['$scope','$log',function($scope, $log, $filter, $resource) {
    
    $log.info($scope);
    
//    $scope.name='john';
//    $scope.formattendname=$filter('uppercase')($scope.name);
//    
//    $log.info($scope.name);
//    $log.info($scope.formattendname);
//    
//    console.log($resource)
    
    
//    $log.log("hello");
//    $log.info("This is some information.");
//    $log.warn("warning!");
//    $log.debug("Some debug info while writing my code");
//    $log.error("This was an error!");
    
    
//    console.log($log);
//    console.log($scope);
    
//    $scope.name = 'Jane Doe';
//    $scope.occupation = 'Coder';
//    
//    $scope.getname = function() {
//        return 'John Doe';
//    }
//    
//    console.log($scope);
}]);

//function searchPeople(firstname, lastname, height, age, occupation) 
//{
//    return 'Jane Doe';
//}
//
//console.log(angular.injector().annotate(searchPeople));

//var searchPeopleString = searchPeople.toString();

//console.log(searchPeopleString);