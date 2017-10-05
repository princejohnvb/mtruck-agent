$(document).ready(function () {

  $("#invite_status_btn").click(function () {

    // var Invite_Id = document.getElementById("in_id").value;
    // var sta= document.getElementById("stat");
    // var Status = sta.options[sta.selectedIndex].value;


    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("invite_id", '1');
    data.append("status", '1');

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });;

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var accessToken = getCookie('ppcookie');
    alert(getCookie('ppcookie'));

    xhr.open("POST", "http://mtruck.in/api/users/invite/respond");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken );
    xhr.send(data);
  });
});