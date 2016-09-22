var num = 1;


$(document).ready(function() {
       
    $("#add").click(function() {
        var domElement = $("#box").append('<div class="col-md-3 minusbtn" id="'+num +'" style="border-radius: 10px; height: 350px; margin: 30px; background-image:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(http://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg); background-size: cover"><h4 style="text-align: center; color: white">Paintsville, Ky<button onclick="removeDiv('+num +')"; class="btn btn-default pull-right" id="add"><span class="glyphicon glyphicon-minus"></span></button></h4><br /> <br /><p style="font-size: 62px; text-align: center; color:white">70&#8457</p><br /> <br /><h4 style="text-align: center; color: white">Sleet</h4><hr /><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><div class="col-md-4" style="color:white; text-align: center;">70 %</div><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><br /><div class="col-md-4" style="color:white; text-align: center;">min</div><div class="col-md-4" style="color:white; text-align: center;">rain</div><div class="col-md-4" style="color:white; text-align: center;">max</div>');
        $("#box").after(domElement);

        num++
    });

   $("#"+num).on("click", ".minusbtn", function() {
  $(this).parent().remove();
});
    
});

function removeDiv(divId) {
   $("#"+divId).remove();
}

function weather(result) {
    var current = result.currently.summary
    var temp = result.currently.temperature;
    var precip = result.currently.precipProbability;
    var min = result.daily.data[0].temperatureMin;
    var max = result.daily.data[0].temperatureMax;
    console.log(result.currently.summary);
    $("#current").text(current);
    $("#temp").text(parseInt(temp));
    $("#precip").text(precip + "%");
    $("#min").text(parseInt(min));
    $("#max").text(parseInt(max));

}


$(function() {

    var request = {
        url:
        "https://api.darksky.net/forecast/31d5888f911f2afbeafa65f275545ee3/37.8267,-122.4233",
        dataType: "jsonp",
        success: weather
    };

    $.ajax(request);

    weather();
});


// border-radius: 10px; height: 350px; margin: 30px; background-image:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(http://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg); background-size: cover"><h4 style="text-align: center; color: white">Paintsville, Ky</h4><br /> <br /><p style="font-size: 62px; text-align: center; color:white">70&#8457</p><br /> <br /><h4 style="text-align: center; color: white">Sleet</h4><hr /><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><div class="col-md-4" style="color:white; text-align: center;">70 %</div><div class="col-md-4" style="color:white; text-align: center;">70&#8457</div><br /><div class="col-md-4" style="color:white; text-align: center;">min</div><div class="col-md-4" style="color:white; text-align: center;">rain</div><div class="col-md-4" style="color:white; text-align: center;">max</div>