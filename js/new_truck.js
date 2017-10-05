$(document).ready(function () {


  myFunction();

function myFunction()
{
  var data = new FormData();
  data.append("grant_type", 'password');
  data.append("client_id", '1');
  data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {


      var json = JSON.parse(this.responseText);

      for(i in json){

        var name = json[i].title;
        var value = json[i].id;
        var sel = document.getElementById("truck_type");

        if(sel){
          sel.options[sel.options.length] = new Option(name , value);
        }
      }
    }
  });

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');

  xhr.open("GET", " http://mtruck.in/api/system/truck-types");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.send(data);
}


  $("#new_truck").click(function () {

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var accessToken = getCookie('accesstoken');
    var uid = getCookie('uid');

    var Redg_No = document.getElementById("redg_no").value;

    var ty = document.getElementById("truck_type");
    var Type = ty.options[ty.selectedIndex].value;

    var manage_or_own;

    if (document.getElementById('radio_btn_1').checked) {
      manage_or_own = document.getElementById('radio_btn_1').value;
    }

    if (document.getElementById('radio_btn_2').checked) {
      manage_or_own = document.getElementById('radio_btn_2').value;
    }

    var Capacity = document.getElementById("capacity").value;
    var cu = document.getElementById("capacity_unit");
    var Capacity_Unit = cu.options[cu.selectedIndex].value;

    var flag = 0;

    if(Redg_No == "" || Capacity == ""){
      alert("Please enter the required fields");
      flag = 1;
      var Redg_No = document.getElementById("redg_no").focus();
      var Capacity = document.getElementById("capacity").focus();
    }


    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("reg_no", Redg_No);
    data.append("truck_type_id", Type);
    data.append("capacity", Capacity);
    data.append("managed_by",uid );
    data.append("owned_by", uid);

    data.append("capacity_unit", Capacity_Unit);
    data.append("manage_or_own", manage_or_own);


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var json = JSON.parse(this.responseText);
          console.log(json);
        if(json.response_object == "error"){
          alert(json.response_data);
        }

        document.cookie = 'truck_id =' + json.response_data.id;
        console.log(json.response_data.id);

        window.location.href = "mytruck.html";
      }
    });

    if(flag == 0) {
      xhr.open("POST", "http://mtruck.in/api/truck/add");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send(data);
    }

  });
});