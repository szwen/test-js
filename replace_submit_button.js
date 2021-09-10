var button = document.createElement('button');
button.type='submit';
button.innerHTML="Submit";
var paymentForm = document.getElementsByClassName('PaymentForm_CheckoutPaymentPanel__LQOQW');
paymentForm[0].appendChild(button);
button.onclick = function () { alert(document.getElementById('root_payment_first_name').value); };
var submit_payment_button = document.getElementsByClassName('BpkButtonBase_bpk-button__3aBJ2 BpkButtonBase_bpk-button--large__3jGfH SubmitButton_SubmitButton__3vnj8')[1];
submit_payment_button.parentNode.removeChild(submit_payment_button);
