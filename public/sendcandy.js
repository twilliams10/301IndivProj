// this is for the code to submit form

var products = ["Sour Patch Watermelon ($4.48)", "Twizzlers ($3.47)", "Dots ($2.54)"];

var labels = document.getElementsByTagName("label");

function processProducts(){
  for(var i = 0; i <5; i++){
    labels[i].innerHTML = products[i];
  }

if (window.addEventListener) {
  window.addEventListener("load", processProducts, false);
} else if (window.attachEvent){
  window.attachEvent("onload", processProducts);
}
}

function calcTotal(){
    var itemTotal = 0; //running total of selected items
    var products = document.getElementsByTagName("input"); //creates the array
    
    for (var i=0; i<5; i++){ //i is the counter and will start at 0 and stop at 5
      if(products[i].checked){ //will check every item in array
    itemTotal += (products[i].value * 1); //if checked, then add to
        }
      }
  //before end last brace, then close end brace
    document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2) + ".";
  //event listener to call function
  }
    var submitButton = document.getElementById("cButton"); 
    submitButton.addEventListener("click", calcTotal)
  

function fillForm() {
  var fnameinput = document.getElementById("fnameinput");
  var lnameinput = document.getElementById("lnameinput");
  var messageinput = document.getElementById("messageinput");
  //below will make sure that the form is filled to submit information
 //(fnameinput.value && lnameinput.value && messageinput.value) ? alert ("Thank you for sending Tessa a message.") : alert ("if only form not filled, Please fill in all form fields.");

  function checkBoxes(){
    var itemTotal = 0; //running total of selected items
    //var items = document.getElementsByTagName("input"); //creates the array
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
      (item1.checked) ? (itemTotal += 4.48):(itemTotal += 0);
      (item2.checked) ? (itemTotal += 3.74):(itemTotal += 0);
      (item3.checked) ? (itemTotal += 2.54):(itemTotal += 0);
    var salesTaxRate = 0.06;
    var orderTotal = itemTotal + (itemTotal * salesTaxRate);
    document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2) + ".";
  }
   

    var spw = document.getElementById("item1");
    var twizzlers = document.getElementById("item2");
    var dots = document.getElementById("item3");

  // below is to make sure that a person does not try to send candy without submitting the complete form information
 if (fnameinput.value && lnameinput.value && messageinput.value) 
  { 
    alert ("Thank you for sending a message to Tessa.") ;  
     if ((fnameinput.value && lnameinput.value && messageinput.value && spw.checked) || (fnameinput.value && lnameinput.value && messageinput.value && twizzlers.checked || fnameinput.value && lnameinput.value && messageinput.value && dots.checked ))
     { alert ("And thank you for sending candy to her; she will very happy.")
     }
   }
     else
     { 
    alert ("Please fill in the form above completely to send Tessa her favorite candies.")
     }
}  
    var submitButton = document.getElementById("submit"); 
    submitButton.addEventListener("click", fillForm)


