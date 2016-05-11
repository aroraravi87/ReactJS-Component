define(function()
{
    
    var $=require('jquery');
    var data=require('tempdata');
   console.log(data);
   $(document).ready(function(){
 
  $("#jqGrid").jqGrid({
    datatype: "json",
   	colNames:['Id','firstName', 'EmailID'],
   	colModel:[
   		{name:'Id',index:'Id', width:55},
   		{name:'firstName',index:'firstName asc', width:200},
   		{name:'EmailID',index:'EmailID , firstName', width:100},
   			
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#pager2',
   	sortname: 'Id',
    viewrecords: true,
    sortorder: "desc",
    caption:"JSON Example"
});
for(var i=0;i<data.length;i++)
{
$("#jqGrid").jqGrid('addRowData',i+1,data[i]);
}
$("#jqGrid").jqGrid('navGrid','#pager2',{edit:false,add:false,del:false});
   });
   
    
});