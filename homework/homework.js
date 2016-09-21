$(document).ready(function() {
       
    $("#add").click(function() {
        var domElement = $("#box").append('<div class="module_holder"><div class="module_item"><p>Aaaah</p></div></div>');
        $("#box").after(domElement);
    });
    
});