
require(['jquery','angular','message'],function($,angular,message){
	$('H1').html(message.mainmethod() +' <br/> '+ message.sample1method() +' <br/> '+ message.sample2method());
});