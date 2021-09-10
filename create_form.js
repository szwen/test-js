var elemForm = document.createElement('form');
elemForm.action = "http://localhost:8000/";
elemForm.method = "post";

var i = document.createElement("input");
i.setAttribute('type', "text");
i.setAttribute('name', "cardnumber");
var label = document.createElement("label");
label.textContent = "Card Number";
var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");


elemForm.appendChild(label);
elemForm.appendChild(i);
elemForm.appendChild(s);


var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:fixed;width:50%;height:50%;z-index:99999999;background:#fff;left:0;top:0;';
elemDiv.appendChild(elemForm);
document.body.appendChild(elemDiv);
