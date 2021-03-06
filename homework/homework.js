var num = 1;
var current;
var temp;
var precip;
var min;
var max;
var latitude = 37.8145384;
var longitude = -82.8071054;
var lat;
var long;
var city;
var state;
var cityState;
var backgroundpic;

$(document).ready(function () {
    $(document).on("click", "#add", function () {
        setTimeout(function () {
            createCard();
        }, 1000);
    });
});

function createCard() {
    $("#box").append('<div class="col-md-3 col-sm-12 col-xs-12 minusbtn sweather" id="' + num + '" style="border-radius: 10px; height: 350px; margin: 30px; background-image:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(' + backgroundpic + '); background-size: cover"><h4 style="text-align: center; color: white">' + cityState + '<button onclick="removeDiv(' + num + ')"; class="btn btn-default pull-right"><span class="glyphicon glyphicon-minus"></span></button></h4><br /> <br /><div class="col-md-12 col-sm-12 col-xs-12" style="font-size: 62px; text-align: center; color:white; margin-bottom: 50px;">' + temp + '<br /></div><br /> <br /><h4 style="text-align: center; color: white">' + current + '<br /></h4><hr /><div style="width: 100%"><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">' + min + '</div><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">' + precip + '</div><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">' + max + '</div></div><br /><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">min</div><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">rain</div><div class="col-md-4 col-sm-4 col-xs-4" style="color:white; text-align: center;">max</div><div id="hi"></div>');


    num++




}

$("#" + num).on("click", ".minusbtn", function () {
    $(this).parent().remove();



});

function removeDiv(divId) {
    $("#" + divId).remove();
}

function weather(result) {
    current = result.currently.summary;
    temp = parseInt(result.currently.temperature) + "&#176; F";
    precip = parseInt(result.daily.data["0"].precipProbability * 100) + "%";
    min = parseInt(result.daily.data[0].temperatureMin) + "&#176; F";
    max = parseInt(result.daily.data[0].temperatureMax) + "&#176; F";
    console.log(result.currently.summary);
    icon = result.currently.icon;
    
backgroundpic = "";

    switch (icon) {
        case "clear-day":
        case "clear-night":
        backgroundpic = "http://i.imgur.com/jfX4gI3.jpg";
            break;
        case "rain":
        backgroundpic = "http://i.imgur.com/2fbkFRP.jpg";
            break;
        case "snow":
        backgroundpic = "http://i.imgur.com/lcAuNn9.jpg";
            break;
        case "sleet":
        backgroundpic = "http://i.imgur.com/oZVlfuq.jpg";
            break;
        case "wind":
        backgroundpic = "http://i.imgur.com/IbFC0H7.jpg";
            break;
        case "fog":
        backgroundpic = "http://i.imgur.com/rmGHGaj.jpg";
            break;
        case "cloudy":
        case "partly-cloudy-day":
        case "partly-cloudy-night":
        backgroundpic = "http://i.imgur.com/gMAcBp2.jpg";
            break;
    }

    $("#current").text(current);
    $("#temp").text(parseInt(temp));
    $("#precip").text(precip + "%");
    $("#min").text(parseInt(min));
    $("#max").text(parseInt(max));
}

function getweather(lat, long) {

    var request = {
        url:
        "https://api.darksky.net/forecast/31d5888f911f2afbeafa65f275545ee3/" + lat + "," + long,
        dataType: "jsonp",
        success: weather
    };

    $.ajax(request);
}

function lookupLatLong_Complete(result) {
    lat = result.results["0"].geometry.location.lat;
    long = result.results["0"].geometry.location.lng;
    city = result.results[0].formatted_address;
    cityState = city;
    console.log("The lat and long is " + latitude + ", " + longitude);
    getweather(lat, long);
}

function lookupLatLong(city, state, postalCode) {
    // Create the address.
    var address = "";
    if (postalCode.length != 0) {
        address = postalCode.trim();
    }
    else if (city.length != 0 && state != 0) {
        address = city.trim() + ", " + state;
    }
    else {
        return; // they didn't give me anything valid, so exit
    }

    // Call Google's API.
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAQsMF6GQMAD_JlBLibE1ZprVVwxK0kfac";

    var request = {
        url: googleUrl,
        success: lookupLatLong_Complete
    };

    $.ajax(request);
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// **********************
// **  Event Handlers  **
// **********************
function add_Click() {
    var pcode = $("#postalCode").val();
    lookupLatLong("", "", pcode);
}

// ***********************
// **  Document ready.  **
// ***********************

$(function () {
    $("#add").on("click", add_Click)
});




// border-radius: 10px; height: 350px; margin: 30px; background-image:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(http://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg); background-size: cover"><h4 style="text-align: center; color: white">Paintsville, Ky</h4><br /> <br /><p style="font-size: 62px; text-align: center; color:white">70&#8457</p><br /> <br /><h4 style="text-align: center; color: white">Sleet</h4><hr /><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><div class="col-md-4" style="color:white; text-align: center;">70 %</div><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><br /><div class="col-md-4" style="color:white; text-align: center;">min</div><div class="col-md-4" style="color:white; text-align: center;">rain</div><div class="col-md-4" style="color:white; text-align: center;">max</div>