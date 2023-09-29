(function(window){
    'use strict';
    
    //code using IIFE
    var App= window.App || {}

    function DataStore() {
        console.log("running Datastore good.. ");
        this.data = {};
    }

    //adding a key and val to dictionary 'data' 
    DataStore.prototype.add = function(key, val) {this.data[key] = val; };
    DataStore.prototype.get = function(key) { return this.data[key]; };
    DataStore.prototype.remove = function(key) { delete this.data[key]; };
    DataStore.prototype.getAll = function() { return this.data; };
    

    App.DataStore =  DataStore;
    window.App = App;
})(window);


