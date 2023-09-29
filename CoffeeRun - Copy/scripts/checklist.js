// (function(window){

//     'use strict';
//     var	App	= window.App || {};
//     var	$ = window.jQuery;

//     function CheckList(selector)	{
//         if	(!selector)	{
//             throw new Error('No	selector	provided');
//         }

//         this.$element =	$(selector);

//         if (this.$element.length ===	0)	{
//             throw new Error('Could	not	find	element	with	selector:	'	+	selector);
//         }
//     }

//     //adding checklist
//     CheckList.prototype.addRow = function (coffeeOrder) {
//         var rowElement = new Row(coffeeOrder);
//         this.$element.append(rowElement.$element);
//     }


//     function Row(coffeeOrder) {
//         var $div = $('<div></div>', {
//             'data-coffee-order':'checkbox', 'class': 'checkbox'
//         });
 
//         var $label = $('<div></div>');
//         var $checkbox = $('<input></input>', {
//             type: 'checkbox', value: coffeeOrder.emailAddress
//         });

//         // class description 
//         var desc = coffeeOrder.size + ' ' 
//         if (coffeeOrder.flavor){
//             desc += coffeeOrder.flavor + ' '
//         }

//         desc += coffeeOrder.size + ' '
//         desc += ' (' + coffeeOrder.emailAddress + ')' ;
//         desc += ' [' + coffeeOrder.strengh +  ' X ]' ;

//         $label.append($checkbox);
//         $label.append(desc);
//         $div.append($label);

//         this.$element = $div;
//     }

//     App.CheckList =	CheckList;
//     window.App = App;
// })(window);


(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
        if (this.$element.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
    }
 }

//  CheckList.prototype.addClickedHandler = function(fn) {
//     this.$element.on('click', 'input', function(event) {
//         var email = event.target.value;
//         this.removeRow(email);
//         fn(email);  // call back function in email and bind this 
//     }.bind(this));
//  };


//  CheckList.prototype.addClickHandler = function (fn) {
//     this.$element.on('click', 'input', function (event) {
//     var email = event.target.value;
//     this.removeRow(email);
//     fn(email);
//     }.bind(this));
//     };
    
    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input[type="checkbox"]', function (event) {
          var email = event.target.value;
          console.log('Checkbox clicked here are*****:', email);
          this.removeRow(email);
          fn(email);
        }.bind(this));
      };


 CheckList.prototype.addRow = function (coffeeOrder) {
    //** remove the existing order  */
    this.removeRow(coffeeOrder.emailAddress);

    // Create a new instance of a row, using the coffee order info
    var rowElement = new Row(coffeeOrder);
    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
 };


 // remove 
//  CheckList.prototype.removeRow = function (email) {
//     this.$element
//     .find('[value= "' + email + '"]')
//     .closest('[data-coffee-order = "checkbox"]')
//     .remove();
//  };


 CheckList.prototype.removeRow = function (email) {
    this.$element
    .find('[value="'+ email +'"]')
    .closest('[data-coffee-order="checkbox"]')
    .remove();
    }

//  CheckList.prototype.removeRow = function (email) {
//     this.$element
//     .find('[value="' + email + '"]')
//     .closest('[data-coffee-order="checkbox"]')
//     .remove();
//     };



 function Row(coffeeOrder) {
    // Constructor code will go here
    // individual parts then putting them together
    // <div> <input> < label> description
    var $div = $('<div> </div>', {
        'data-coffee-order': 'checkbox', 
        'class' : 'checkbox'
    });
    //create an <div> element to content the ROW
    //label element
    var $label = $('<label> </label>');

    //checkbox element
    var $checkbox = $('<input></input>', {
        type: 'checkbox', 
        value: coffeeOrder.emailAddress
    });

    var desc = coffeeOrder.coffee + ' '
    if (coffeeOrder.flavor) {
        desc += '   '+ coffeeOrder.flavor + ' '
    } 
    desc += coffeeOrder.size + ', ';
    desc += ' (' + coffeeOrder.emailAddress + ')';
    desc += ' [' + coffeeOrder.strength + 'x]';
    // 1. Append the $checkbox to the $label
    // 2. Append the description to the $label
    // 3. Append the $label to the $div
    $label.append($checkbox);
    $label.append(desc);
    $div.append($label);
    this.$element = $div;
}


    App.CheckList = CheckList;
    window.App = App;
})(window);
    
// append checkbox to the new DOM row element