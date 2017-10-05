$(document).ready(function () {


  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');
  var organ_id = getCookie('organ_id');

  var data = new FormData();
  data.append("grant_type", 'password');
  data.append("client_id", '1');
  data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var json = JSON.parse(this.responseText);
      console.log(json);

      if (json.response_object == "error"){
        alert("Please Update Your Profile");
        window.location.href = "user_profile.html";
      }

      var i;
      var length_of_list = json.response_data.length;

      if(json.response_object === "error"){
        console.log(json.response_data.name);
      }

      for (i = 0; i <= length_of_list; i++) {

        document.getElementById("list_driver").innerHTML +=
        '<li style="border: 1px solid black; padding: 4px ;margin: 4px">'
            +json.response_data[i].name  + '<br>'+json.response_data[i].phone +'&nbsp' +
            ' '+'</li>' ;
      }
    }
  });

  xhr.open("GET", "http://mtruck.in/api/users/drivers/list/" + organ_id);
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.send(data);
});

