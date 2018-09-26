/* eslint-disable no-undef */
$('.top-content').slick({
    arrows: false,
    dots: false,
    speed: 1500,
    autoplay: true,
    fade: true
});
$('.slid-news-b').slick({
    arrows: true,
    dots: false,
    speed: 1200,
    autoplay: true
});
$('.big-slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-slid'
});
$('.small-slid').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.big-slid',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});
$('.slid-photogallery').slick({
    arrows: true,
    dots: false,
    speed: 1200,
    autoplay: true,
    variableWidth: true
});
$(function () {
    $('#datetimepicker1').datetimepicker();
});
$('.ic-menu').click(function () {
   $('.in-menu').fadeToggle();
});
$("#calendar-1").ionCalendar({
    lang: "ru",
    sundayFirst: false,
    years: "80",
    format: "DD.MM.YYYY",
    onClick: function(date){
        $("#result-1").html("onClick: " + date);
    }
});