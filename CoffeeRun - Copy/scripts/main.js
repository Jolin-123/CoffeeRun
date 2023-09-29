(function (window) {
    "use strict";
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
                           //  data-coffee-order="checklist"             
             
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    //validation before checklist
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    


    var nccTruck = new Truck('ncc-1701', new DataStore());
    window.nccTruck = nccTruck;

    var checklist = new CheckList(CHECKLIST_SELECTOR);
    //**after checklist.js remove module  */
    // checklist.addClickHandler(nccTruck.deliverOrder.bind(nccTruck));
    checklist.addClickHandler(nccTruck.deliverOrder.bind(nccTruck));
       
    // var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR); //forming data from the form, binding new form object to dataStore()
    // formHandler.addSubmitHandler(nccTruck.createOrder.bind(nccTruck)); // We want the 'truck' to create an oder when we hit the submit button
    // formHandler.addSubmitHandler(function(data) {
    //   nccTruck.createOrder.call(nccTruck,data);
    //   checklist.addRow.call(nccTruck,data);
    // });
    
    formHandler.addSubmitHandler(function (data) {
      nccTruck.createOrder.call(nccTruck, data);
      checklist.addRow.call(checklist, data);
  });

    formHandler.addInputHandler(Validation.isCompanyEmail);
    
    // console.log(formHandler);
})(window);