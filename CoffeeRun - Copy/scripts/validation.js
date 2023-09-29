(function (window) {
    'use strict';
    var App = window.App || {};

    // method is an variable ? 
    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@starfleet\.com$/.test(email);
        }
    }

    // FormHandler.prototype.addInputHandler = function (fn) {
    //     console.log('Setting input handler for form');
    //     this.$formElement.on('input', '[name="emailAddress"]', function(event){
    //         //event handler code 
    //         var emailAddress = event.target.value;
    //         console.log(fn(emailAddress));

    //     });
    // };

        

    App.Validation = Validation;
    window.App = App;
    })(window);
    