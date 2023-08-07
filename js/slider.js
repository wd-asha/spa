$(function() {
    $("#slide2").fadeOut(100);
    $("#slide3").fadeOut(100);

    setTimeout(() => {
        $("#slide1").fadeOut(300);
        $("#slide3").fadeOut(300);
        $("#slide2").fadeIn(1000);
    }, 5000);

    setTimeout(() => {
        $("#slide1").fadeOut(300);
        $("#slide2").fadeOut(300);
        $("#slide3").fadeIn(1000);
    }, 10000);

    setTimeout(() => {
        $("#slide2").fadeOut(300);
        $("#slide3").fadeOut(300);
        $("#slide1").fadeIn(1000);
    }, 15000);

    setInterval(function(){

    setTimeout(() => {
        $("#slide1").fadeOut(300);
        $("#slide3").fadeOut(300);
        $("#slide2").fadeIn(1000);
    }, 5000);

    setTimeout(() => {
        $("#slide1").fadeOut(300);
        $("#slide2").fadeOut(300);
        $("#slide3").fadeIn(1000);
    }, 10000);

    setTimeout(() => {
        $("#slide2").fadeOut(300);
        $("#slide3").fadeOut(300);
        $("#slide1").fadeIn(1000);
    }, 15000);

    }, 15000);

});