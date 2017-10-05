$(document).ready(function () {

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  var accessToken = getCookie('accesstoken');


  if (accessToken === undefined || accessToken === null) {

    alert("Please Log In");
    window.location.href = "index.html";
  }



  $(".button").on('click',function(event){

        var x = document.getElementById('drpdwn');
        if (x.style.display === 'none') {
          x.style.display = 'block';
          $("#drpdwn").show;
        } else {
          x.style.display = 'none';
          $("#drpdwn").hide;
        }
      }
  );
  var acc = document.getElementsByClassName("truck-num");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          var expandtruck = document.getElementsByClassName("expand-truck");
          if (expandtruck.style.display === "block") {
              expandtruck.style.display = "none";
          } else {
              expandtruck.style.display = "block";
          }
      }
  }

  $(".logout").click(function () {

    function delete_cookie(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    delete_cookie('accesstoken');
    delete_cookie('uid');
    delete_cookie('otp_id');
    delete_cookie('phone_number');
    delete_cookie('organ_id');
    window.location.href = 'index.html';

  });

  $(function(){
    $("#includedContent").load("menu.html");
  });
  $(function(){
    $("#includedMobileMenu").load("mobile-menu.html");
  });
  $('.back-button a').click(function(){
    window.history.back();
  });



});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}