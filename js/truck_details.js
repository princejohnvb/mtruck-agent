$(document).ready(function () {

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');

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


  // *********************************************Owned Trucks********************

      if(type == 1){

        for(i in json.response_data.owned ){
          var id = json.response_data.owned[i].id;

          if (id == tid ){

            document.getElementById('details').innerHTML +=
                '<li style="border: 1px solid black; margin: inherit; margin-right: 45px; padding: 4px ">'
                +'<label>Truck Id:&nbsp;</label>'+ json.response_data.owned[i].id + ' <br> <label>Capacity:&nbsp;</label>' +
                ' ' + json.response_data.owned[i].capacity +
                '&nbsp;'+json.response_data.owned[i].capacity_unit +
                '<br><label>Register Number: </label>' + json.response_data.owned[i].reg_no +
                '<br><label>Status:&nbsp; </label>' + '' + json.response_data.owned[i].status +
                '<br><label>Truck Type: &nbsp; </label>'+
                ''+json.response_data.owned[i].truck_types.title +'</li>';

          }

        }
      }

  // ********************************************Managed Trucks******************

      if(type == 2){

        for(i in json.response_data.managed){
          var id = json.response_data.managed[i].id;

          if (id == tid ){

            document.getElementById('details').innerHTML +=
                '<li style="border: 1px solid black; margin: inherit; margin-right: 45px; padding: 4px ">'+
                '<label>Truck Id: &nbsp;</label>'+ json.response_data.managed[i].id +
                ' <br><label>Capacity:&nbsp; </label>' + ' ' + json.response_data.managed[i].capacity +
                '&nbsp;'+json.response_data.managed[i].capacity_unit +'<br><label>Register Number:&nbsp; </label>'
                + json.response_data.managed[i].reg_no + '<br><label>Status:&nbsp; </label>' +
                '' + json.response_data.managed[i].status + '<br><label>Truck Type: &nbsp; </label>'+'' +
                ''+json.response_data.managed[i].truck_types.title + '</li>';

          }

        }
      }
    }
  });

  xhr.open("GET", "http://mtruck.in/api/trucks/all");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.send(data);

});