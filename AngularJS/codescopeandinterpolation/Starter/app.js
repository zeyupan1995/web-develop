var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter','$timeout',function($scope,$filter,$timeout) {
    
    $scope.alertClick = function(){
        alert("Clicked!");
    };
    $scope.handle ='';
    
    $scope.name='Tony';
    
    $scope.lowercasehandle=function(){
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules=[
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"},
    ];
    
    console.log($scope.rules);
      
    $scope.$watch('handle',function(newValue,oldValue){
        console.info('changed');
        console.log('old:'+oldValue);
        console.log('new:'+newValue);
    });  
//    setTimeout(function(){
//        $scope.$apply(function(){
//        $scope.handle='newtwitterhandle';
//        console.log('scope changed');
//        });   
//    },3000);
    
    
    $timeout(function(){
        $scope.name='Everybody';
    },3000);
    
}]);
