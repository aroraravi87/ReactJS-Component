define(function(){
    var items=require('tempdata');
   var coreModule = angular.module('coreModule',[]);
    
    
   
    coreModule.controller('divController',function($scope){
      $scope.data = items.jsondata();
      $scope.data.display=false;
      $scope.data.switch=1;
    });
    
    coreModule.controller('tableController',function($scope){
       $scope.data = items.jsondata();;
       $scope.data.display=true;
    });
    
    coreModule.controller('mainController',function($scope){
       $scope.data = items.jsondata();;
       $scope.data.display=false;
     
     //Received message from emit from bottom
     $scope.$on('eventname',function(event,args){ $scope.message=args.message });
     
     //Broadcast message on click of button from top to bottom
    $scope.handleClick=function(msg1){
        $scope.$broadcast('eventname1',{message1:msg1});
    };
    
     //Received message from emit from center
       $scope.$on('eventname2',function(event,args){$scope.message2=args.message2})
    });
    
    
    coreModule.controller('parentController',function($scope){
        
     //Received message from emit from bottom
      $scope.$on('eventname',function(event,args){ $scope.message=args.message });
      
      //Received message from broadcast from top
      $scope.$on('eventname1',function(event,args){$scope.message1=args.message1});
    
      //emit message from  parentcontroller 
       $scope.handleClick1=function(msg2){
      $scope.$emit('eventname2',{message2:msg2});
       };
     });
    
    coreModule.controller('childController',function($scope){
    
     //Emit message on click of button from bottom to top
      $scope.handleClick2=function(msg){
       $scope.$emit('eventname',{message: msg});
      };
      
        //Received message from broadcast from top
       $scope.$on('eventname1',function(event,args){$scope.message1=args.message1})
       
       //Received message from emit from center
       $scope.$on('eventname2',function(event,args){$scope.message2=args.message2})
    });
});