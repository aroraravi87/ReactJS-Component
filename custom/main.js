require(['babel','react','reactDOM','angular','tempdata'],function(babel,React,ReactDOM,angular,itemCollection){
     
        var items=itemCollection.jsondata();
        
        var Message=React.createClass({
        
        getInitialState: function() {
            return { items: [] }
        },
        render: function() {
if(typeof items!="undefined")
{
        var listItems = items.map((item) => {
            return (React.createElement('tr',"",
                            React.createElement('td',{className:""},item.Id),
                            React.createElement('td',{className:""},item.Id),
                            React.createElement('td',{className:""},item.firstName),
                            React.createElement('td',{className:""},item.EmailID)))
             });
}      
       return  (
            
                React.createElement('div',{className:"container"},
                    React.createElement('table',{className:"table table-bordered table-striped"},
                       React.createElement('th',{className:""},'#'),
                        React.createElement('th',{className:""},'Customer ID'),
                        React.createElement('th',{className:""},'Customer Name'),
                        React.createElement('th',{className:""},'Customer EmailID'),
                        listItems
                        )
                        )
        );
        }
        });
        var ExampleApplicationFactory = React.createFactory(Message);
        ReactDOM.render(ExampleApplicationFactory(), document.body);
});
