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

$(document).ready(function () {
    $(document).on("click", "#add", function() {
        setTimeout(function() {
        createCard();
        }, 700);
    });
});

function createCard() {
        var domElement = $("#box").append('<div class="col-md-3 minusbtn" id="' + num + '" style="border-radius: 10px; height: 350px; margin: 30px; background-image:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(https://pixabay.com/static/uploads/photo/2013/06/14/11/16/sun-sunny-139308_1280.jpg); background-size: cover"><h4 style="text-align: center; color: white">' + cityState + '<button onclick="removeDiv(' + num + ')"; class="btn btn-default pull-right"><span class="glyphicon glyphicon-minus"></span></button></h4><br /> <br /><div class="col-md-12" style="font-size: 62px; text-align: center; color:white; margin-bottom: 50px;">' + temp + '<br /></div><br /> <br /><h4 style="text-align: center; color: white">' + current + '<br /></h4><hr /><div class="col-md-4" style="color:white; text-align: center;">' + min + '</div><div class="col-md-4" style="color:white; text-align: center;">' + precip + '</div><div class="col-md-4" style="color:white; text-align: center;">' + max + '</div><br /><div class="col-md-4" style="color:white; text-align: center;">min</div><div class="col-md-4" style="color:white; text-align: center;">rain</div><div class="col-md-4" style="color:white; text-align: center;">max</div>');
        $("#box").after(domElement);


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
    precip = parseInt(result.currently.precipProbability * 100);
    min = parseInt(result.daily.data[0].temperatureMin) + "&#176; F";
    max = parseInt(result.daily.data[0].temperatureMax) + "&#176; F";
    console.log(result.currently.summary);
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
    city = result.results[0].address_components[1].long_name;
    state = result.results[0].address_components[3].short_name;
    cityState = city + ", " + state;
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