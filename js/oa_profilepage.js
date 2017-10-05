$(document).ready(function () {

  autocompleteCity();
  autocompleteSource();
  autocompleteDestination();
  onLoad();


  function delete_cookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  delete_cookie('phone_number');


  // $("#add_field").click(function () {
  //
  //   var newDiv = $(
  //       '<label>Source:</label><select class="btn btn-default form-control"></select>'+'<br>'+
  //       '<label>Destination:</label><select class="btn btn-default form-control"></select>');
  //
  //   $("#preferred_route").append(newDiv);
  // });




  // $('#add_docs').click(function () {
  //
  //   var newDiv = $('<div id="identity_doc" style="margin-top: 5px">' +
  //       '<div class="form-group">\n' +
  //       '   <label>Identity Doc:</label>\n' +
  //       '   <select name="id_docs" class="btn btn-default">\n' +
  //       '       <option value="1">Aadhar Card</option>\n' +
  //       '       <option value="2">Driving Licence</option>>\n' +
  //       '       <option value="3">Pan Card</option>\n' +
  //       '       <option value="4">RC Card</option>\n' +
  //       '   </select>\n' +
  //       '</div>\n' +
  //       '\n' +
  //       '<div class="form-group">\n' +
  //       '\n' +' <label>Reference Id:</label><input type="text" class="form-control" id="refer_id"><br>'+
  //       '    <input type="file" id="myFile" class="btn btn-default">\n' +
  //       '    <button class="btn btn-default"  id="upload_doc" style="margin-top: 5px;">Upload</button>' +
  //       '</div>');
  //   $("#identity_doc").append(newDiv);
  //
  // });
  
  
  function autocompleteCity() {

    var Data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var json = JSON.parse(this.responseText),key;


     for(key in json){
       if (json.hasOwnProperty(key)) {
         // console.log(key + " = " + json[key]);

         var name = json[key];
           var value = key;
           var sel = document.getElementById("city_id");

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

    xhr.open("GET", "http://mtruck.in/api/cities/list-fixed");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(Data);

  }

  function autocompleteSource() {

    var Data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var json = JSON.parse(this.responseText),key;

        for(key in json){
          if (json.hasOwnProperty(key)) {
            // console.log(key + " = " + json[key]);

            var name = json[key];
            var value = key;
            var sel = document.getElementById("source_id");

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

    xhr.open("GET", "http://mtruck.in/api/cities/list-fixed");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(Data);

  }

  function autocompleteDestination() {

    var Data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

        var json = JSON.parse(this.responseText),key;
        // console.log(json);

        for(key in json){
          if (json.hasOwnProperty(key)) {
            // console.log(key + " = " + json[key]);

            var name = json[key];
            var value = key;
            var sel = document.getElementById("destination_id");

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

    xhr.open("GET", "http://mtruck.in/api/cities/list-fixed");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.send(Data);

  }


  // $("#upload_doc").click(function (e) {
  //
  //   e.preventDefault();
  //
  //   var file = document.getElementById("file").files[0];
  //   var formData = new FormData();
  //   formData.append('file', file);
  //
  //
  //   var xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;
  //
  //   xhr.addEventListener("readystatechange", function () {
  //     if (this.readyState === 4) {
  //       console.log(this.responseText);
  //       var x = JSON.parse(this.responseText);
  //       console.log(x.file);
  //
  //       document.getElementById("hidden_field").innerHTML = x.file;
  //       identiDocType();
  //     }
  //   });
  //
  //   function getCookie(name) {
  //     var value = "; " + document.cookie;
  //     var parts = value.split("; " + name + "=");
  //     if (parts.length === 2) return parts.pop().split(";").shift();
  //   }
  //   var accessToken = getCookie('accesstoken');
  //
  //   xhr.open("POST", "http://mtruck.in/api/upload/files");
  //   xhr.setRequestHeader("accept", "application/json");
  //   xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  //   xhr.send(formData);
  //
  // });


  $("#confirm_btn").click(function () {

    var flag = 0;
    var Name = document.getElementById("fname").value;


    if(Name == ""){
      alert("Please enter the required fields");
      flag = 1;
      var Name = document.getElementById("fname").focus();
    }

    var Email = document.getElementById("usr_email").value;
    var Phone = document.getElementById("usr_phone").value;
    var ty = document.getElementById("typ");
    var Type = ty.options[ty.selectedIndex].value;

    var cityid = document.getElementById("city_id");
    var City = cityid.options[cityid.selectedIndex].value;

    var src = document.getElementById("source_id");
    var Source = src.options[src.selectedIndex].value;

    var destn = document.getElementById("destination_id");
    var Destination  = destn.options[destn.selectedIndex].value;


    // var Identification_type = document.getElementById("hidden_ref_id").value;
    //
    // var docty = document.getElementById("doc_types");
    // var Identification_reference = docty.options[docty.selectedIndex].value;
    // //
    // var Identification_file_id = document.getElementById("hidden_field").value;
    //

    var data = new FormData();
    data.append("grant_type", 'password');
    data.append("client_id", '1');
    data.append("client_secret", 'jjj99un7vIlS87ewqI1x18TSbGwPxguITg7sgGh5');
    data.append("name", Name);
    data.append("email", Email);
    data.append("phone", Phone);
    data.append("type", Type);
    data.append("city_id",City);
    data.append("preferredRoute[0][preferred_route_id]","");
    data.append("preferredRoute[0][source_route_id]",Source);
    data.append("preferredRoute[0][destination_route_id]",Destination);



    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        // console.log(this.responseText);
        alert("Submitted !");
        var json = JSON.parse(this.responseText);
        console.log(json);

        var org_id = json.response_data.organization_id;
        console.log(org_id);
        document.cookie = 'organ_id ' + org_id;
        location.reload();

      }
    });

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var accessToken = getCookie('accesstoken');
    var uid = getCookie('uid');

    if(flag == 0) {
      xhr.open("POST", "http://mtruck.in/api/user/" + uid);
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send(data);
    }

  });

  // **************************************************************************ON LOAD

function onLoad() {

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');
  var uid = getCookie('uid');
  var data = null;
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      // console.log(this.responseText);

      var data = JSON.parse(this.responseText);
      console.log(data);
      var mailid = data.response_data.email;
      var newname = data.response_data.name;
      var mobile = data.response_data.phone;
      var Type = data.response_data.type;
      var City = data.response_data.city_id;

      console.log(City);
          var org_id = data.response_data.organization_id;
          document.cookie = 'organ_id = ' + org_id;

          if(data.response_data.preferred_route[0]){
              var source = data.response_data.preferred_route[0].source_route_id;
              var destination = data.response_data.preferred_route[0].destination_route_id;
          }

          for(i in data.response_data.preferred_route) {
            document.getElementById("old_preferred_routes").innerHTML +=
                '<li>'
                + data.response_data.preferred_route[i].source_city.city_name +
                '&nbsp; to &nbsp;' + data.response_data.preferred_route[i].destination_city.city_name +'</li>';
          }



          // console.log(source);
        document.getElementById("fname").value = newname;
        document.getElementById("usr_email").value = mailid;
        document.getElementById("usr_phone").value = mobile;
        // document.getElementById("typ").value = Type;
        document.getElementById("city_id").value = City;
        document.getElementById("source_id").value = source;
        document.getElementById("destination_id").value = destination;

    }
  });

  xhr.open("GET", "http://mtruck.in/api/user/" + uid);
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.send(data);
}

  // **************************************************************************

  // function identiDocType(){
  //
  //   function getCookie(name) {
  //     var value = "; " + document.cookie;
  //     var parts = value.split("; " + name + "=");
  //     if (parts.length === 2) return parts.pop().split(";").shift();
  //   }
  //   var accessToken = getCookie('accesstoken');
  //
  //   var docty = document.getElementById("doc_types");
  //   var Type = docty.options[docty.selectedIndex].value;
  //
  //
  //   var data = null;
  //   var xhr = new XMLHttpRequest();
  //   xhr.withCredentials = true;
  //
  //   xhr.addEventListener("readystatechange", function () {
  //     if (this.readyState === 4) {
  //
  //       var p = JSON.parse(this.responseText);
  //       console.log(p);
  //       var ref_id = p.response_data[Type].id;
  //       alert(ref_id);
  //       document.getElementById("hidden_ref_id").innerHTML = ref_id;
  //       }
  //
  //     });
  //   xhr.open("GET", "http://mtruck.in/api/identification/types/list");
  //   xhr.setRequestHeader("accept", "application/json");
  //   xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  //   xhr.send(data);
  // }
    });




