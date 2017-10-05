$(document).ready(function () {

    // ********************************************************************************

  $("#reg_btn").click(function() {                                 //jquery for register.html

    var Name = document.getElementById("nam").value;
    var Email = document.getElementById("mail").value;
    var Password = document.getElementById("pwd").value;
    var Phone = document.getElementById("ph").value;
    var ty = document.getElementById("typ");
    var Type = ty.options[ty.selectedIndex].value;


    var data = new FormData();
    data.append("name", Name);
    data.append("email", Email);
    data.append("password", Password);
    data.append("phone", Phone);
    data.append("type", Type);

    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);

        var x = JSON.parse(this.responseText);
        console.log(x.response_data.id);
        document.cookie = 'idcookie = '+ x.response_data.id;
      }
    });

    xhr.open("POST", "http://mtruck.in/api/user/register");
    xhr.setRequestHeader("accept", "application/json");

    xhr.send(data);
  });


  // **************************************************************************************************************


  $('#update_btn').click(function () {                                  //jquery for register.html

    var Name = document.getElementById("nam").value;
    var Email = document.getElementById("mail").value;
    var Password = document.getElementById("pwd").value;
    var Phone = document.getElementById("ph").value;
    var ty = document.getElementById("typ");
    var Type = ty.options[ty.selectedIndex].value;

    $.post("http://139.59.88.65/api/user/register",
        {
          name: Name,
          email: Email,
          password: Password,
          phone: Phone,
          type: Type
        },
        function (data) {
          console.log(data);
        });
  });

  // ***********************************************************************************************************************


});

