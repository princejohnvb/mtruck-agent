$(document).ready(function () {

  $("#new_driver").click(function () {

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var accessToken = getCookie('accesstoken');

    var Name = document.getElementById("dnme").value;
    var Phone = document.getElementById("dphon").value;
    var flag = 0;

    if(Name == "" || Phone == ""){
      alert("Please enter the required fields");
      flag = 1;
      var Name = document.getElementById("dnme").focus();
      var Phone = document.getElementById("dphon").focus();
    }


    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("name", Name);
    data.append("phone", Phone);


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var json = JSON.parse(this.responseText);
        if(json.response_object == "error"){
          alert(json.response_data);
        }
        window.location.href = "list_drivers.html";
      }
    });
    if(flag == 0) {
      xhr.open("POST", "http://mtruck.in/api/user/add/driver");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send(data);
    }

  });
});