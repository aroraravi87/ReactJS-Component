require.config({
  baseUrl: '../',
  waitSeconds: 200,
  paths: {
    'jquery':['JS/jquery'],
    'react':['JS/react'],
    'babel':['https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min'],
    'JsxTrans':['https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer'],
    'main':['custom/main'],
    'reactDOM':["JS/react-dom"],
    'css':["app_build/css"],
    'angulardemo':["custom/angulardemo"],
    'angular':['JS/angular.min'],
    'angularcdn':['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.0/angular.min'],
    'angularroute':['https://ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route'],
    'tempdata':["custom/tempdata"],
    'coreModule':["custom/coreModule"],
    'jqueryCode':["custom/jqueycode"],
    'JGrid':["custom/JGrid"],
    'gridContent':["custom/gridContent"],
    'jqGridJS':["jqGrid/js/jquery.jqGrid.min"],
    'jqGridLocale':["jqGrid/src/i18n/grid.locale-en"],
    'jqueryPlugin':["custom/jqueryPlugin"],
    'modernizr':["https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr"],
    //'jqGridSrc':["jqGrid/src/grid.base"],
    'demo':["custom/demo"],
    'testplugin':["custom/testplugin"]
    },
    shim : {
        'angular' :{
            deps : ['jquery']
        },
        'angulardemo' : {
            deps : ['angular','coreModule']
        },
        'coreModule' : {
            deps : ['angular','tempdata']
        },
        'jqueryCode':{
            deps :['jqueryPlugin','jquery']
        },
        'jqueryPlugin':{
            deps :['jquery','tempdata','gridContent']
        },
        'gridContent':{
            deps :['react','tempdata','reactDOM']
        },
       'testplugin':{
            deps:['jquery','modernizr','tempdata']
        },
        'demo':{
            deps:['testplugin','tempdata']
        }
        
        
    }
});

require(['angulardemo'],function(){
    angular.bootstrap(document,['angulardemo']);
});