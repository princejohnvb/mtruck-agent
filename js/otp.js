$(document).ready(function () {

  $("#verify_otp").click(function () {

  });

  $("#resend_otp").click(function () {
        function delete_cookie(name) {
          document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        delete_cookie('otp_id');

        function getCookie(name) {
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length === 2) return parts.pop().split(";").shift();
        }

        var ph = getCookie('phone_number');


        var data = new FormData();
        data.append("grant_type", 'password');
        data.append("client_id", '1');
        data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
        data.append("phone", ph);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {

            var x = JSON.parse(this.responseText);
              document.cookie = 'otp_id = ' + x.otp_transaction_id;
              document.cookie = 'uid =' + x.response_data.id;
              window.location.href = "otp_confirmation.html";
          }
        });

        xhr.open("POST", "http://mtruck.in/api/user/login/system");
        xhr.setRequestHeader("accept", "application/json");
        xhr.send(data);
  });

  $("input").keypress(function (event) {
    if (event.which == 13){
      event.preventDefault();
      otp();
    }
  });
});



  function otp() {

      function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
      }

      var otp_id = getCookie('otp_id');
      var uid = getCookie('uid');

      var one_time_password = document.getElementById("otp").value;

      var data = new FormData();
      data.append("grant_type", 'password');
      data.append("client_id", '1');
      data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
      data.append("otp", one_time_password);
      data.append("transaction_id", otp_id);
      data.append("user_id", uid);


      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          var x = JSON.parse(this.responseText);

          if (x.error === "Please Enter correct otp") {
            alert(x.error);
          }
          else {
            document.cookie = 'accesstoken = ' + x.access_token;
            window.location.href = "user_profile.html";
          }
        }
      });

      xhr.open("POST", "http://mtruck.in/api/user/otp/validate");
      xhr.setRequestHeader("accept", "application/json");
      xhr.send(data);
  }




