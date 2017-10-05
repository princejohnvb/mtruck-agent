$(document).ready(function () {

  $("#registration_btn").click(function () {

    var Phone = document.getElementById("pwd").value;

    var ty = document.getElementById("typ");
    var Type = ty.options[ty.selectedIndex].value;

    document.cookie = 'phone_number =' + Phone;

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("phone", Phone);
    data.append("type", Type);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var x = JSON.parse(this.responseText);


        if(x.phone == "The phone field is required."){
          alert("Please Enter the Required Fields");
        }
        if(x.phone == "The phone has already been taken."){
          alert("Please Re-enter. This Email or Phone has already been taken");
        }
        document.cookie = 'uid = ' + x.response_data.id;
        document.cookie = 'otp_id = ' + x.otp_transaction_id;

        window.location.href = "otp_confirmation.html";
      }
    });
    xhr.open("POST", "http://mtruck.in/api/user/register/phone");
    xhr.setRequestHeader("accept", "application/json");
    xhr.send(data);
  });
});