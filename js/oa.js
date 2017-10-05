$(document).ready(function () {

  $("#login_btn").click(function () {                                   //jquery for login button

  });


  $("input").keypress(function (event) {
    if (event.which == 13){
      event.preventDefault();
      login();
    }
  });

});

function login(){
  var Username = document.getElementById("ph_number").value;
  document.cookie = 'phone_number =' + Username;

  var data = new FormData();
  data.append("grant_type", 'password');
  data.append("client_id", '1');
  data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
  data.append("phone", Username);
  data.append("domain_app", 'user');


  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {

      var x = JSON.parse(this.responseText);

      if(x.response_object == "error"){
        alert(x.response_data + ". Please check the Phone Number. ");
      }
      else{
        document.cookie = 'otp_id = ' + x.otp_transaction_id;
        document.cookie = 'uid =' + x.response_data.id;
        document.cookie = 'organ_id =' + x.response_data.organization_id;

        window.location.href = "otp_confirmation.html";
      }
    }
  });

  xhr.open("POST", "http://mtruck.in/api/user/login/system");
  xhr.setRequestHeader("accept", "application/json");
  xhr.send(data);
}
