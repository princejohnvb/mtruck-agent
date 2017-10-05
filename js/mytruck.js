$(document).ready(function () {

    // *******************************************Owned Trucks*****************

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var uid = getCookie('uid');
    var accessToken = getCookie('accesstoken');
    var invite_id = getCookie('inviteid');
    var status = getCookie('status');

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {



        var json = JSON.parse(this.responseText);


        var i;
        for (i in json.response_data.owned) {

          var tid = json.response_data.owned[i].id;

          document.getElementById('owned').innerHTML +=
              '<li style="border: 1px solid black; margin: inherit; margin-right: 45px; padding: 4px ">'
              + json.response_data.owned[i].truck_types.title +'<br><label>Capacity: &nbsp;</label> ' +
              ' '+ json.response_data.owned[i].capacity + '&nbsp;'+json.response_data.owned[i].capacity_unit +'<br><label>Register Number: &nbsp;</label>' +json.response_data.owned[i].reg_no +'&nbsp;' +
              '<br>'+'<button class="btn btn-default" onclick="details('+json.response_data.owned[i].id+')">View Detail</button>'+'</li>';
        }
      }
    });

    xhr.open("GET", "http://mtruck.in/api/trucks/owned");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);


    // *******************************************Managed Trucks***************


    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var uid = getCookie('uid');
    var accessToken = getCookie('accesstoken');
    var invite_id = getCookie('inviteid');
    var status = getCookie('status');

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var json = JSON.parse(this.responseText);

        var i;
        for (i in json.response_data.managed) {

          document.getElementById('managed').innerHTML +=
              '<li style="border: 1px solid black; margin: inherit; margin-right: 45px; padding: 4px ">'
              + json.response_data.managed[i].truck_types.title +' <br><label>Capacity: &nbsp;</label>' +
              ' '+ json.response_data.managed[i].capacity + '&nbsp;'+json.response_data.managed[i].capacity_unit +'<br><label>Register Number: &nbsp;</label>'+json.response_data.managed[i].reg_no +'&nbsp;' +
              '<br>'+'<button id="details" class="btn btn-default" onclick="manageDetails('+json.response_data.managed[i].id+')">View Detail</button>'+'</li>';
        }
      }
    });

    xhr.open("GET", "http://mtruck.in/api/trucks/managed");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);

});


//*********************************************Accordion***********************


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      }
      else {
        panel.style.display = "block";
      }
    }
  }


//***************************************List Function*************************


  function list(evt, typeName) {

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



// ***********************************Details Showing Function*****************


function details(id) {
  window.location.href = "truck_details.html?index="+id+"&type="+1;
}

function manageDetails(id) {
  window.location.href = "truck_details.html?index="+id+"&type="+2;
}