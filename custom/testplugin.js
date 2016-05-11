

define(function(){
	
	var jQuery=require('jquery');
	
	(function($){
	
	$.fn.MethodInit=function(options){
		$.fn.extend(true,options, {"z":"1000","a":"1000"});
	 };	
	
	
	
	$.fn.MethodDefination=function(){
	alert('Method Defination from self Invoke');	
	$.MethodWait();
	};	
	
	$.fn.MethodCalled=function(){
	alert('Method Called from self Invoke');	
	};	
	$.fn.MethodDestroy=function(){
	alert('Method Destroy from self Invoke');	
	};	
	
	
	})( jQuery );
	
	
	$.fn.extend({
		MethodWait:function(){
					$("ul>li").css("color","silver");
			               
			$("ul").siblings().css("color","yellow");
		}
	});
	
SamplePlugin=
{	

	Initializers:{
		Name:"Test123",
	},
	
     Init:{		
		 MethodInit :function(){
							$("ul>li").css("color","Red");
							 },
						
		MethodDefination:function(){
								// $.fn.MethodWait();
								var uAgent=window.navigator.userAgent;
								
								if(uAgent.indexOf("MSIE")>0 ||uAgent.indexOf('Trident/')>0)
								{
									alert("this is IE browser");
								}
								else if(uAgent.indexOf("Safari")>0 && uAgent.indexOf("Chrome")>0)
								{
									alert("this is Chrome browser");
								}
								else if(uAgent.indexOf("Safari")>0 )
								{
									alert("this is Safari browser");
								}
								
								else if(uAgent.indexOf("Firefox")>0)
								{
									alert("this is mozilla browser");
								}
								else
								alert("browser undefined");
								
								},	
						
		MethodCalled:function(){
	                       		$("ul>li").css("color","silver");
			                     $(".floatleft ul").children("li").css("color","pink");
								 $(".floatright ul").children("li").css("color","pink")
								},	
		MethodDestroy:function(){
								$("ul>li").css("color","silver");	
								}	
	 }
};
return SamplePlugin;
});


