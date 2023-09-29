(function(window){
    'use strict';
    
    //code using IIFE
    var App= window.App || {}

    function Truck(truckId, db) {

        console.log("running truck good.. ");
        this.truckId = truckId;  //truck need ID and database (DataStore ---> sql, firebase)
        this.db = db;  // db can an object, inside db object, there are .add .remove .get .getAll, from DataStore()
   
    Truck.prototype.createOrder = function(order) {
        console.log("Adding order for " + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };

    //Truck asking dataStore to remove a data
    Truck.prototype.deliverOrder = function(customerId) {
        console.log("Delivering order for " + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys( this.db.getAll());

        console.log("Truck # " + this.truckId + " has pending orders ");

        customerIdArray.forEach(function(id) { // forEach is call back 
            console.log (this.db.get(id));
        }.bind(this));

    };
}// why when I put it outside, the turck.printOrders() does not work ? 


Truck.runTests = function() { 
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var enterprise = new Truck('ncc-1705', new DataStore());

    console.log('------------- running Truck tests ------------------------')
    enterprise.createOrder({ emailAddress: 'ryker@starfleet.com', order: 'caramel macciato' });
    enterprise.createOrder({ emailAddress: 'laforge@starfleet.com', order: 'boba' });
    enterprise.createOrder({ emailAddress: 'data@starfleet.com', order: 'water' });
    enterprise.createOrder({ emailAddress: 'picard@starfleet.com', order: 'earl grey hot' });
    enterprise.createOrder({ emailAddress: 'crusher@starfleet.com', order: 'coca-cola' });
    enterprise.createOrder({ emailAddress: 'worf@starfleet.com', order: 'triple espresso' });
    enterprise.printOrders();

    enterprise.deliverOrder('laforge@starfleet.com');
    enterprise.deliverOrder('crusher@starfleet.com');
    enterprise.deliverOrder('worf@starfleet.com');
    enterprise.printOrders();

    console.log('------------ finished Truck tests ------------------------')
  };

    App.Truck =  Truck;
    window.App = App;
})(window);


