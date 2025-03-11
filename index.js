const mainAudio = new Audio('./audio/main-song.mp3');

const buttonHoverSound = new Audio('./audio/button-hover.mp3');
const twinkleSound = new Audio('./audio/twinkle-sound.mp3');

const introView      =  $('#view-intro');
const homeView       =  $('#view-home');    const ewuLogo = $("#ewu-logo"); const nameDiv = $("#nameDiv"); const link1 = $("#link1"); const link2 = $("#link2"); const link3 = $("#link3"); const link4 = $("#link4");
const workexpView    =  $('#view-workexp');
const educationView  =  $('#view-education');
const projectsView   =  $('#view-projects');
const contactView    =  $('#view-contact');


var starCanvas = null;

function _loop_()
{
	anim_id = window.requestAnimationFrame( _update_ );
}

function _update_(time)
{
	starCanvas.update(time);
	_loop_();
}


window.onload = () => {
    console.log('in onload')

    starCanvas = new StarCanvas();

    _loop_();
};

$(".hover-sound").hover(() => {
    buttonHoverSound.play();
}).mouseleave(() =>
{
    buttonHoverSound.pause();
    buttonHoverSound.currentTime = 0;
});

$(".twinkle-sound").hover(() => {
    twinkleSound.play();
});






function openMainView() {
    let introAudio =  new Audio('./audio/intro-sound.mp3');
    let introOutSound =  new Audio('./audio/intro-out.mp3');
    let deepWhooshSound = new Audio('./audio/deep-whoosh.mp3');
    let rhythmicEchoSound = new Audio('./audio/whoosh-echo.mp3');
    let whooshEchoSound1 = new Audio('./audio/whoosh-echo1.mp3');
    let whooshEchoSound2 = new Audio('./audio/whoosh-echo1.mp3');
    introAudio.play();
    introOutSound.play();
    
    animateCSS('#view-intro', 'intro-exit', () => {
        starCanvas.setStarField(1400);

        mainAudio.addEventListener('ended', () => {        // This event listener restarts the song when it ends
            this.currentTime = 0;
            this.play();
        }, false);
        mainAudio.play();

        introView.toggle();
        homeView.toggle();
        ewuLogo.toggle();
        nameDiv.toggle();
        link1.toggle();
        link2.toggle();
        link3.toggle();
        link4.toggle();
        
        nameDiv.fadeToggle('slow');
        deepWhooshSound.play();
        whooshEchoSound2.play();
        ewuLogo.show('slide', {direction: 'left'}, 110, () => {
            starCanvas.setStarField(1100, 2000);
            link1.show('slide', {direction: 'left'}, 60, () => {
                starCanvas.setStarField(900, 1700);
                rhythmicEchoSound.play();
                link2.show('slide', {direction: 'left'}, 75, () => {
                    starCanvas.setStarField(780, 1500);
                    whooshEchoSound1.play();
                    link3.show('slide', {direction: 'left'}, 100, () => {
                        starCanvas.setStarField(500, 1250);
                        link4.show('slide', {direction: 'left'}, 120, () => {
                            starCanvas.setStarField(250, 1000);
                        });
                    });
                });
            });
        });
        
    });
    
    CUR_PAGE_OPEN = 1;

    console.log(starCanvas);
}

function closeMainPage(linkClicked) {
    const linkFadeOutSound1 = new Audio('./audio/link-fade-out-sound.mp3');
    const linkFadeOutSound2 = new Audio('./audio/link-fade-out-sound.mp3');
    const logoSlideOutSound = new Audio('./audio/logo-slide-out-sound.mp3');

    let links = [ 1, 2, 3, 4 ];
    let clickedIndex = links.indexOf(linkClicked);
    links.splice(clickedIndex, 1);

    starCanvas.setStarField(600, 1250);

    let clickedLink = $("#link" + linkClicked);
    clickedLink.css("color", "#fcabcd");
    clickedLink.hide('puff', 500, () => {
        clickedLink.css("color", "white");
    });

    linkFadeOutSound1.play();
    $("#link" + links[0]).hide('explode', {direction: 'left'}, 200, () => {
        starCanvas.setStarField(800, 1500);
        linkFadeOutSound2.play(); 
        logoSlideOutSound.play();
        $("#link" + links[1]).hide('explode', {direction: 'left'}, 200, () => {
            starCanvas.setStarField(1000, 1700);
            $("#link" + links[2]).hide('explode', {direction: 'left'}, 100, () => {
                starCanvas.setStarField(1200, 2000);
                nameDiv.hide('drop', {direction: 'right'}, 110, () => {
                    starCanvas.setStarField(1000, 1800);
                    ewuLogo.hide('drop', {direction: 'left'}, 110, () => {
                        starCanvas.setStarField(800, 1600);
                        homeView.toggle();
                        openPage(linkClicked);
                    });
                });
            });
        });
    });
}

function reopenMainPage() {
    const deepWhoosh = new Audio('./audio/deep-whoosh.mp3');
    const invertPopIn1 = new Audio('./audio/inverted-whoosh-popin.mp3');
    const invertPopIn2 = new Audio('./audio/inverted-whoosh-popin.mp3');

    starCanvas.setStarField(1500, 2200);
    homeView.toggle();
    ewuLogo.show('drop', {direction: 'left'}, 110, () => {
        deepWhoosh.play();
        nameDiv.show('drop', {direction: 'right'}, 110, () => {
            starCanvas.setStarField(1300, 2000);
            invertPopIn1.play();
            link4.show('explode', {direction: 'left'}, 100, () => {
                starCanvas.setStarField(1200, 1700);
                link3.show('explode', {direction: 'left'}, 100, () => {
                    starCanvas.setStarField(900, 1500);
                    invertPopIn2.play();
                    link2.show('explode', {direction: 'left'}, 100, () => {
                        starCanvas.setStarField(600, 1250);
                        link1.show('explode', {direction: 'left'}, 100, () => { 
                            starCanvas.setStarField(250, 1000);
                        });

                    });
                });
            });
        });
    });

    
}


function openPage(pageNum) {    //pageNum 0 = homeView, 1-4 in order of appearence of UI

    let pageToShow;
    switch(pageNum) {
        case 1: pageToShow = workexpView; break;
        case 2: pageToShow = educationView; break;
        case 3: pageToShow = projectsView; break;
        case 4: pageToShow = contactView; break;
        default: alert("openPage(pageNum). illegal arg: " + pageNum);
    }


    if(pageNum == 1 || pageNum == 2 || pageNum == 3 || pageNum == 4) {
        starCanvas.setStarField(1400, 2100);
        let canvasUnfurl = new Audio('./audio/spacey-canvas-unfurl.mp3');
        canvasUnfurl.volume = 0.1;
        canvasUnfurl.play();
        pageToShow.show('fold', 1000, () => {
            starCanvas.setStarField(750, 1400);
            new Audio('./audio/gmail-new-mail-sound.mp3').play();
            setTimeout(() => {
                starCanvas.setStarField(500, 1200);
                
                setTimeout(() => {
                    starCanvas.setStarField(250, 1000);
                }, 100);
            }, 100);
        });
    }

    if(pageNum == 4) {     //need to open Contact Page
        starCanvas.setStarField(1400, 2100);
        new Audio('./audio/spacey-canvas-unfurl.mp3').play();
        pageToShow.addClass("moveDownFadeIn");
        pageToShow.show('fold', 1000, () => {
            pageToShow.removeClass("moveDownFadeIn");
            starCanvas.setStarField(750, 1400);
            new Audio('./audio/gmail-new-mail-sound.mp3').play();
            setTimeout(() => {
                starCanvas.setStarField(500, 1200);
                setTimeout(() => {
                    starCanvas.setStarField(250, 1000);
                    
                }, 100);
            }, 100);
        });
    }
}


function closePage(pageNum) {

    let pageToClose;
    switch(pageNum) {
        case 1: pageToClose = workexpView; break;
        case 2: pageToClose = educationView; break;
        case 3: pageToClose = projectsView; break;
        case 4: pageToClose = contactView; break;
        default: alert("openPage(pageNum). illegal arg: " + pageNum);
    }

    starCanvas.setStarField(600, 1500);
    pageToClose.addClass("moveUpFadeOut");    
    setTimeout(() => {    
        starCanvas.setStarField(1200, 1700);
            new Audio("./audio/inverted-spacey-canvas-unfurl.mp3").play();
            pageToClose.hide("fold", 1000, () => {
                starCanvas.setStarField(1400, 2000);
                pageToClose.removeClass("moveUpFadeOut");
                reopenMainPage();
            });
    }, 100);
}
