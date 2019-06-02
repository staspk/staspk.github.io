var mainAudio = new Audio('./../audio/main-song.mp3');
var buttonHoverSound = new Audio('./../audio/button-hover.mp3');
var twinkleSound = new Audio('./../audio/twinkle-sound.mp3');
const introPage  =  $('#introPage');
const mainPage   =  $('#mainPage');
const ewuLogo = $("#ewuLogo");
const nameHolder = $("#nameHolder");
const link1 = $("#link1");
const link2 = $("#link2");
const link3 = $("#link3");
const link4 = $("#link4");

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
    let introAudio =  new Audio('./../audio/intro-sound.mp3');
    let introOutSound =  new Audio('./../audio/intro-out.mp3');
    let deepWhooshSound = new Audio('./../audio/deep-whoosh.mp3');
    let rhythmicEchoSound = new Audio('./../audio/whoosh-echo.mp3');
    let whooshEchoSound1 = new Audio('./../audio/whoosh-echo1.mp3');
    let whooshEchoSound2 = new Audio('./../audio/whoosh-echo1.mp3');
    introAudio.play();
    introOutSound.play();
    
    animateCSS('#introPage', 'intro-disappear', function() {
        setStarField(1400);

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
            setStarField(1100, 2000);
            link1.show('slide', {direction: 'left'}, 60, function() {
                setStarField(900, 1700);
                rhythmicEchoSound.play();
                link2.show('slide', {direction: 'left'}, 75, function() {
                    setStarField(780, 1500);
                    whooshEchoSound1.play();
                    link3.show('slide', {direction: 'left'}, 100, function() {
                        setStarField(500, 1250);
                        link4.show('slide', {direction: 'left'}, 120, function() {
                            setStarField(250, 1000);
                        });
                    });
                });
            });
        });
        whooshEchoSound2.play();
    });
    
    CUR_PAGE_OPEN = 1;
}

function closeMainPage(event, linkClicked) {
    event.preventDefault();

    var links = [ link1, link2, link3, link4 ];


    var linkFadeOutSound1 = new Audio('./../audio/link-fade-out-sound.mp3');
    var linkFadeOutSound2 = new Audio('./../audio/link-fade-out-sound.mp3');
    var logoSlideOutSound = new Audio('./../audio/logo-slide-out-sound.mp3');

    setStarField(600, 1250);

    link4.css("color", "#fcabcd");
    link4.hide('puff', {opacity: '0'}, 500, function() {
        link4.css("color", "#fcabcd");
    });
    
    linkFadeOutSound1.play();
    link1.hide('explode', {direction: 'left'}, 200, function() {
        setStarField(800, 1500);
        linkFadeOutSound2.play(); 
        logoSlideOutSound.play();
        link2.hide('explode', {direction: 'left'}, 200, function() {
            setStarField(1000, 1700);
            link3.hide('explode', {direction: 'left'}, 100, function() {
                setStarField(1200, 2000);
                nameHolder.hide('drop', {direction: 'right'}, 110, function() {
                    setStarField(1400, 2100);
                    ewuLogo.hide('drop', {direction: 'left'}, 110, function() {
                        openPage(linkClicked);
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

