
var budgetController = (function() {
   
  
})();


var UIController = (function() {
    var DOMstrings = {
        inputType: '.add_type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    }
    return {
        getinput: function() {
    
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }

        }
    }
})()


var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        var input = UICtrl.getinput();
        console.log(input)

    }
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event) {
     if (event.keyCode === 13 || event.which === 13){
         ctrlAddItem();
     }

  })

})(budgetController, UIController);
