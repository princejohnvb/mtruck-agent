$(document).ready(function () {
  $("#invite_btn").click(function () {

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var uid = getCookie('uid');
    var Invitee_Phn = document.getElementById("in_ph").value;
    var Invitee_Nme = document.getElementById("in_nam").value;
    var flag = 0;

    if(Invitee_Phn == ""){
      alert("Please enter the required fields");
      flag = 1;
      var Invitee_Phn = document.getElementById("in_ph").focus();
    }

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("invitor", uid);
    data.append("invitee_phone", Invitee_Phn);
    data.append("invitee_name", Invitee_Nme);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var x = JSON.parse(this.responseText);
        console.log(x);
        document.cookie = 'inviteid = '+ x.response_data.id;
        document.cookie = 'status =' + x.response_data.status;
        window.location.href = "list_user.html";
        console.log(x.response_data.id);
      }
    });

    var accessToken = getCookie('accesstoken');

    if (flag == 0) {
      xhr.open("POST", "http://mtruck.in/api/users/invite");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send(data);
    }

  });




});