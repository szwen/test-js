setInterval(myTimer, 3000);
function myTimer() {
  var phone_number = document.getElementById("root_contact_details_primary_contact_number");
  if (typeof(phone_number)!='undefined' && phone_number!=null){
    phone_number.oninput=alert(phone_number.value);
  }
}
