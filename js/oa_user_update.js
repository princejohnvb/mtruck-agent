$(document).ready(function () {

  $("#confrim_btn").click(function () {


    var Name = document.getElementById("nam").value;
    var Email = document.getElementById("mail").value;
    var Phone = document.getElementById("ph").value;
    var ty = document.getElementById("typ");
    var Type = ty.options[ty.selectedIndex].value;


    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("name", Name);
    data.append("email", Email);
    data.append("phone", Phone);
    data.append("type", Type);

    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var json = JSON.parse(this.responseText);
        document.cookie = 'organ_id = ' + json.response_data.organization_id;
        console.log(json.response_data.organization_id);
      }
    });

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var accessToken = getCookie('accesstoken');
    var uid = getCookie('uid');

    xhr.open("POST", "http://mtruck.in/api/user/" + uid);
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'BEARER ' + accessToken );
    xhr.send(data);


  });


  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');
  var uid = getCookie('uid');
  // $.getJSON("http://mtruck.in/api/user/" + uid , function(data) {
  //   console.log(data);
  //
  //   var mailid = data.response_data.email;
  //   var newname = data.response_data.name;
  //   console.log(mailid);
  //   // document.getElementById("mail").value = mailid;
  //   document.getElementById("nam").value = newname  ;
  // });


});
