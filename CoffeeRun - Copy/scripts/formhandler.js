(function (window) {
    "use strict";
    var App = window.App || { };   // having name space, reference to it, if no name space create one 
    var $ = window.jQuery;
    function FormHandler(selector) {
        // code will go here
        if (! selector){
            throw new Error ('No selector provided in FormHandler..');
        }
        this.$FormHandler = $(selector);
        if (this.$FormHandler.length ===0 ){
            throw new Error ("Could not find the " + selector );
        }
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log ('Setting submit handler for form');
        this.$FormHandler.on('submit', function(event){
            event.preventDefault();

            //inside addSubmitHandler
            // var data = $(this).serializeArray(); // return the form data as array of an Object
            // console.log(data);
            var data = {};
            $(this).serializeArray().forEach(function(item){
                data[item.name] = item.value;
                console.log(item.name + " is " + item.value);
            });
            console.log(data);
            fn(data); //call back function to process the data
            this.reset(); // reset the form
            this.elements[0].focus();
        });

        FormHandler.prototype.addInputHandler = function (fn) {
            console.log('Setting input handler for form****');
    //****here is nit this.$formElement ***********/
            this.$FormHandler.on('input', '[name="emailAddress"]', function (event) {
                var emailAddress = event.target.value;
                // console.log(fn(emailAddress));
                var message='';
                if (fn(emailAddress)) {
                    event.target.setCustomValidity('');
                } else {
                    message = emailAddress + ' is not an authorize email address ! ';
                    event.target.setCustomValidity(message);
                }
            });
        };

            //form element (this.$formElement) and logs the result of calling the provided function fn with the email address as an argument.
    // FormHandler.prototype.addInputHandler = function (fn) {
    //     console.log('Setting input handler for form****');
    //     //**************typo in formHandler */
    //     this.$FormElement.on('input', '[name="emailAddress"]', function(event) {
    //     // Event handler code will go here
    //     var emailAddress = event.target.value;
    //     console.log(fn(emailAddress));
    //   });
    // };

}// end of addSubmitHandler
    




    


    FormHandler.runTests = function() {
        var fn = new App.FormHandler('[data-coffee-order = "form"]'); // forget common here
        fn.addSubmitHandler();
    }

    App.FormHandler = FormHandler;
    window.App = App;

  })(window);


    // FormHandler.prototype.addSubmitHandler = function (fn) {
    //     console.log('Setting submit handler for form');
    //     this.$FormElement.on('submit', function (event) {
    //     event.preventDefault();
    //     var data = {};
    //     $(this).serializeArray().forEach(function (item) {
    //     data[item.name] = item.value;
    //     console.log(item.name + ' is ' + item.value);
    //     });
    //     console.log(data);
    //     fn(data);
    //     this.reset();
    //     this.elements[0].focus();
    //     });
    //     };
