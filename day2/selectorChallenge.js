function hideP1() {
    $("#p1").fadeOut("slow", "linear");
};

$(document).ready(function() {
    $("h3").click(function() {
        $("h3").css("color", "blue");
    });
});

$(document).ready(function() {
    $("li:nth-child(1)").mouseenter(function() {
        $("li:nth-child(1)").css("font-size", "60px");
    });
});