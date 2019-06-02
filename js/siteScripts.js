var CUR_PAGE_OPEN = -1;

var audioDiv = $("#audioControls");
var introAudio =  new Audio('./../audio/intro-sound.mp3');
var introOutSound =  new Audio('./../audio/intro-out.mp3');
var mainAudio = new Audio('./../audio/main-song.mp3');
var deepWhooshSound = new Audio('./../audio/deep-whoosh.mp3');
var whooshEchoSound = new Audio('./../audio/whoosh-echo.mp3');
var buttonHoverSound = new Audio('./../audio/button-hover.mp3');
var twinkleSound = new Audio('./../audio/twinkle-sound.mp3');
var introPage  =  $('#introPage');
var mainPage   =  $('#mainPage');

var ewuLogo = $("#ewuLogo");
var nameHolder = $("#nameHolder");
var link1 = $("#link1");
var link2 = $("#link2");
var link3 = $("#link3");
var link4 = $("#link4");

audioDiv.toggle();
mainPage.toggle();

$(".hover-sound").hover(function () {
    buttonHoverSound.play();
}).mouseleave(function ()
{
    buttonHoverSound.pause();
    buttonHoverSound.currentTime = 0;
});

$(".twinkle-sound").hover(function () {
    twinkleSound.play();
});

function enterMainPage() {
    introAudio.play();
    introOutSound.play();
    
    animateCSS('#introPage', 'intro-disappear', function() {
        starfield.speed = 1400;

        mainAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        mainAudio.play();

        introPage.toggle();
        mainPage.toggle();
        ewuLogo.toggle();
        nameHolder.toggle();
        link1.toggle();
        link2.toggle();
        link3.toggle();
        link4.toggle();
        
        $("#nameHolder").fadeToggle('slow');
        deepWhooshSound.play();
        $("#ewuLogo").show('slide', {direction: 'left'}, 110, function() {
            starfield.speed = 1100;
            starfield.set_amount(2000);
            $("#link1").show('slide', {direction: 'left'}, 60, function() {
                starfield.speed = 900;
                starfield.set_amount(1700);
                $("#link2").show('slide', {direction: 'left'}, 75, function() {
                    starfield.speed = 780;
                    starfield.set_amount(1500);
                    whooshEchoSound.play();
                    $("#link3").show('slide', {direction: 'left'}, 100, function() {
                        starfield.speed = 500;
                        starfield.set_amount(1250);
                        
                        $("#link4").show('slide', {direction: 'left'}, 120, function() {
                            starfield.speed = 250;
                            starfield.set_amount(1000);
                        });
                    });
                });
            });
        });
    });
    
    CUR_PAGE_OPEN = 1;
}


function openPage(openingPage) {    //pageNum 0 = mainPage, 1-4 in order of appearence of UI

    
}

