var audioDiv = $("#audioControls");
var introAudio =  new Audio('./../audio/intro-sound.mp3');
var mainAudio = new Audio('./../audio/main-song.mp3');
var introPage  =  $('#introPage');
var mainPage   =  $('#mainPage');

audioDiv.toggle();
mainPage.toggle();
starfield.set_amount(10000);
introAudio.play();


function enterMainPage() {
    introAudio.play();
    
    animateCSS('#introPage', 'pulse', function() {
        starfield.set_amount(1000);

        mainAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        mainAudio.play();

        introPage.toggle();
        mainPage.toggle();
        $("#ewuLogo").toggle();
        $("#link1").toggle();
        $("#link2").toggle();
        $("#link3").toggle();
        $("#link4").toggle();
        // $("#firstName-mainPage").toggle();
        // $("#lastName-mainPage").toggle();
        // $("#firstName-mainPage").toggle();
        // $("#lastName-mainPage").toggle();
        
        $("#ewuLogo").show('slide', {direction: 'left'}, 100);
        $("#link1").show('slide', {direction: 'left'}, 75, function() {
            $("#link2").show('slide', {direction: 'left'}, 75, function() {
                $("#link3").show('slide', {direction: 'left'}, 75, function() {
                    $("#link4").show('slide', {direction: 'left'}, 75, function() {

                    });
                });
            });
        });

    });
    
    
}




