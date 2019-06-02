var audioDiv = $("#audioControls");
var introAudio =  new Audio('./../audio/intro-sound.mp3');
var introPage  =  $('#introPage');
var mainPage   =  $('#mainPage');

audioDiv.toggle();
mainPage.toggle();


function enterMainPage() {
    introAudio.play();

    animateCSS('#introPage', 'pulse', function() {
        introPage.toggle();

        mainPage.toggle();
        $("#ewuLogo").toggle();
        // $("#firstName-mainPage").toggle();
        // $("#lastName-mainPage").toggle();
        // $("#firstName-mainPage").toggle();
        // $("#lastName-mainPage").toggle();
        
        $("#ewuLogo").show('slide', {direction: 'left'}, 100);
        

    });
    
    
}