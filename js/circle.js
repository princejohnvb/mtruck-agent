$(document).ready(function () {


    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var accessToken = getCookie('accesstoken');
    var organ_id = getCookie('organ_id');

    console.log(organ_id);

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        // console.log(this.responseText);

        var json = JSON.parse(this.responseText);
        console.log(json);

        var list = json.response_data;
         var i;

          for (i in json.response_data)
        {
          document.getElementById("agents-ul").innerHTML +=
              '<li style="border: 1px solid black; margin: 2px;  padding: 4px ">'
              + json.response_data[i].name + '<br>' + json.response_data[i].phone + '</li>';
        }
      }
    });

    // var type_id = 2;
    // console.log(type_id);

    xhr.open("GET", "http://mtruck.in/api/users/associates/type/Agent");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);
});

  function list(evt, typeName) {                                       //accordion function --circle.html

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(typeName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("defaultOpen");
  }