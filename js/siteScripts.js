var CUR_PAGE_OPEN = -1;

var audioDiv = $("#audioControls");
var introAudio =  new Audio('./../audio/intro-sound.mp3');
var introOutSound =  new Audio('./../audio/intro-out.mp3');
var mainAudio = new Audio('./../audio/main-song.mp3');
var deepWhooshSound = new Audio('./../audio/deep-whoosh.mp3');
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
    var rhythmicEchoSound = new Audio('./../audio/whoosh-echo.mp3');
    var whooshEchoSound1 = new Audio('./../audio/whoosh-echo1.mp3');
    var whooshEchoSound2 = new Audio('./../audio/whoosh-echo1.mp3');
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
        
        nameHolder.fadeToggle('slow');
        deepWhooshSound.play();
        ewuLogo.show('slide', {direction: 'left'}, 110, function() {
            starfield.speed = 1100;
            starfield.set_amount(2000);
            link1.show('slide', {direction: 'left'}, 60, function() {
                starfield.speed = 900;
                starfield.set_amount(1700);
                rhythmicEchoSound.play();
                link2.show('slide', {direction: 'left'}, 75, function() {
                    starfield.speed = 780;
                    starfield.set_amount(1500);
                    whooshEchoSound1.play();
                    link3.show('slide', {direction: 'left'}, 100, function() {
                        starfield.speed = 500;
                        starfield.set_amount(1250);
                        link4.show('slide', {direction: 'left'}, 120, function() {
                            starfield.speed = 250;
                            starfield.set_amount(1000);
                            
                        });
                    });
                });
            });
        });
        whooshEchoSound2.play();
    });
    
    CUR_PAGE_OPEN = 1;
}

function closeMainPage(openPageNum) {

    var linkFadeOutSound1 = new Audio('./../audio/link-fade-out-sound.mp3');
    var linkFadeOutSound2 = new Audio('./../audio/link-fade-out-sound.mp3');
    var logoSlideOutSound = new Audio('./../audio/logo-slide-out-sound.mp3');

    starfield.speed = 600;
    starfield.set_amount(1250);

    link4.css("color", "#fcabcd");
    link4.hide('puff', {opacity: '0'}, 500, function() {
        link4.css("color", "#fcabcd");
    });
    
    linkFadeOutSound1.play();
    link1.hide('explode', {direction: 'left'}, 200, function() {
        starfield.speed = 800;
        starfield.set_amount(1500); 
        linkFadeOutSound2.play(); 
        logoSlideOutSound.play();
        link2.hide('explode', {direction: 'left'}, 200, function() {
            starfield.speed = 1000;
            starfield.set_amount(1700); 
            link3.hide('explode', {direction: 'left'}, 100, function() {
                starfield.speed = 1200;
                starfield.set_amount(2000);
                nameHolder.hide('drop', {direction: 'right'}, 110, function() {
                    starfield.speed = 1400;
                    starfield.set_amount(2100);
                    ewuLogo.hide('drop', {direction: 'left'}, 110, function() {
                    });
                });
            });
        });
    });
}


function openPage(openingPage) {    //pageNum 0 = mainPage, 1-4 in order of appearence of UI

    if(openingPage == 4) {     //need to open Contact Page
        closeMainPage();
    }
}

