define(function(){
   var $=require('jquery');
   var data=require('tempdata');
   var container=$("container");
     container.DataList("datalist");
     container.bind("ddlPager",data.pagedata());
     container.render(data.jsondata());
  });


//    $(document).delegate(
//        '.btn','click',function(){
//                 $(this).after('<input type="button" class="btn btn-default" value="Click"/>');
//                        });
//                        });
//    $(document).on(
//        'click','.btn',function(){
//                 $(this).after('<input type="button" class="btn btn-default" value="Click"/>');
//                        });
//       });
