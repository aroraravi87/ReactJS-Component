define(function(){
	
$("a").click(function(){ 
	switch($( "a" ).index(this))
	{
		case 0:
		SamplePlugin.Init.MethodInit();
		break;
		
		case 1:
		SamplePlugin.Init.MethodDefination();
		break;
		
		case 2:
		SamplePlugin.Init.MethodCalled();
		break;
		
		case 3:
		SamplePlugin.Init.MethodDestroy();
		break;
	}
	
});

$("li").not(':contains("a")').click(function(){ 
	$(this).MethodInit(
		{"x":20,"y":30}
		);	
});
});