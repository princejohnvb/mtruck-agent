  $(document).ready(function () {

    // *******************************************RECIEVED LIST*****************
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
      data.append("id",'1');
      data.append("invitor", '1');
      data.append("invitee_phone", '9898989898');
      data.append("invitee_name", 'xyz');
      data.append("status", '0');
      data.append("invitee_id", invite_id);


      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          // console.log(this.responseText);

          var json = JSON.parse(this.responseText);
          // console.log(json);
          var i;
          var length_of_list = json.response_data.length;

          for(i=0; i<=length_of_list;i++){

            if (json.response_data[i].status === 1) {
              var Status = "Approved";
              document.getElementById('recieved-ul').innerHTML +=
                  '<li style="border: 1px solid black; margin: inherit; padding: 4px ">' +
                  'From:&nbsp;'+ json.response_data[i].invitor.name +'<br> STATUS :'+ Status +'' +'</li>';
            }

            if (json.response_data[i].status != 1 && json.response_data[i].status != 0 ) {
              var Status = "Denied";
              var Status = "Approved";
              document.getElementById('recieved-ul').innerHTML +=
                  '<li style="border: 1px solid black; margin: inherit; padding: 4px ">' +
                  'From:&nbsp;'+ json.response_data[i].invitor.name +'<br> STATUS :'+ Status +'' +'</li>';

            }

            if(json.response_data[i].status === 0){
              var Status = "Pending";
              document.getElementById('recieved-ul').innerHTML +=
                  '<li style="border: 1px solid black; margin: inherit; padding: 4px ">' +
                  'From:&nbsp;'+ json.response_data[i].invitor.name +'<br> STATUS :'+ Status +'' +
                  '<br><button onclick="approved('+json.response_data[i].id+')" class="btn btn-default">Accept</button>  ' +
                  '<button  onclick="rejected('+json.response_data[i].id+')" class="btn btn-default">Reject</button> ' + '</li>';
            }


          }
        }
      });


      xhr.open("GET", "http://mtruck.in/api/users/invite/list/received");
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send(data);

    //*****************************************************ALL LIST*************
    //**************************************************************************

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
    data.append("id",'1');
    data.append("invitor", '1');
    data.append("invitee_phone", '9898989898');
    data.append("invitee_name", 'xyz');
    data.append("status", '0');
    data.append("invitee_id", invite_id);


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        // console.log(this.responseText);

        var json = JSON.parse(this.responseText);
        var i;
        var length_of_list = json.response_data.length;

        for(i=0; i<=length_of_list;i++){

          if (json.response_data[i].status === 1) {
            var Status = "Approved";
          }
          if (json.response_data[i].status === '' || json[i] === null) {
            var flag = 1;
          }
          if(json.response_data[i].status === 0){
            var Status = "Pending";
          }

          document.getElementById('agents-ul').innerHTML +=
              '<li style="border: 1px solid black; margin: inherit; padding: 4px ">'
              + json.response_data[i].invitor.name +'&nbsp; to &nbsp;'+ json.response_data[i].invitee_name+'' +
              '<br> STATUS :'+ Status + '</li>';
        }
      }
    });



    xhr.open("GET", "http://mtruck.in/api/users/invite/list/all");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);

    //*************************************************SEND LIST*****************
    //***************************************************************************

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
    data.append("id",'1');
    data.append("invitor", '1');
    data.append("invitee_phone", '9898989898');
    data.append("invitee_name", 'xyz');
    data.append("status", '0');
    data.append("invitee_id", invite_id);


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        // console.log(this.responseText);

        var json = JSON.parse(this.responseText);
        var i;
        var length_of_list = json.response_data.length;



        for(i=0; i<=length_of_list;i++){

          if (json.response_data[i].status === 1) {
            var Status = "Approved";
          }
          if (json.response_data[i].status === '' || json[i] === null) {
            var flag = 1;
          }
          if(json.response_data[i].status === 0){
            var Status = "Pending";
          }

          document.getElementById('send-ul').innerHTML +=
              '<li style="border: 1px solid black; margin: inherit; padding: 4px ">'
              + json.response_data[i].invitee_name +' <br>STATUS :'+ Status + '</li>';
        }
      }
    });
    xhr.open("GET", "http://mtruck.in/api/users/invite/list/sent");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);
  });


  //***********************************APPROVAL FUNCTION*************************
  //*****************************************************************************

  function approved(id) {

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var accessToken = getCookie('accesstoken');
    var invitee_id = getCookie('inviteid');
    var sta  = 1;

    console.log(invitee_id);

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("invite_id", id);
    data.append("status", sta);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var x=JSON.parse(this.responseText);
        console.log(x);
        window.location.href = "list_user.html";
      }
    });

    xhr.open("POST", "http://mtruck.in/api/users/invite/respond");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);
  }

  //**********************************REJECTION FUNCTION*************************

  function rejected(id) {

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    var invite_id = getCookie('inviteid');
    var accessToken = getCookie('accesstoken');
    var sta  = '';

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("invite_id", id);
    data.append("status", sta);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        // window.location.href = "list_user.html";
      }
    });

    xhr.open("POST", "http://mtruck.in/api/users/invite/respond");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(data);
  }

  //*********************************************ACCORDION**********************

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }
  }
  //***************************************LIST FUNCTION*************************
  function list(evt, typeName) {                                       //accordion function --list_user.html

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




