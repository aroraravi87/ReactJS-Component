 define(function(){
   
        var $=require('jquery');
        var datalist=require('tempdata');
 
    $.fn.DataList = function(element){
    
    this.first = function(){
        
    };
	this.last = function(){
        
    };
	this.prev = function(){
        
    };
	this.next = function(){
        
    };
	this.changePage = function(){
        
    };
	this.changePageSize = function(pagesizevalue){
       $.each(datalist.jsondata(),function(index,value){
           
       })
        
    };
    this.bind=function(elementName,data){
      $.each(data,function(index,value)
      {
      $("#"+elementName).append("<option>"+value.PS+"</option");
      });
     $("#"+elementName).addClass("form-control");
    };
    
     };
});