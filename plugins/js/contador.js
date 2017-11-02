$(document).ready(function(){   
    cargar_contador();
    incrementar();
})
var cargar_contador = function(){
    $(".views").load("./contador.txt");
   
}
var incrementar = function(){
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
         sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
            conex();
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
var conex = function(){
    $.ajax({
 
    // The URL for the request
    url: "executioner.php",
   // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( data ) {
        console.log(data);
        var valuee = JSON.parse(data);
        $(".views").text(valuee);
    },
 
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },
 
    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
        
    }
});}
