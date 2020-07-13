let blinkingCursor = document.querySelector(".js-blink-cursor");
let blink = true;

let dayLoadPanelColor = "rgb(7, 7, 7)";
let dayLoadPanelBcolor = "white";

let nightHillBColor = "rgb(70, 61, 50)";
let documentBodyColor = "white";
let nightLoadPanelBcolor  = "rgb(82, 79, 76)";
let nightLoadPanelColor  = "white";
let nightSunMoonColor  = "rgb(238, 238, 238)";
let nightHillColor = "rgb(70, 61, 50)";
let nightStoneColor = "rgb(73, 72, 71)";
let nightTentColor = "rgb(136, 131, 126)";
let nightTentLineColor = "rgb(109, 107, 106)";
let nightStoneBenchColor = "rgb(73, 72, 71)";
let nightPanelTitle = "white";
let nightProjectFrameTitleNameColor = "white";

let documentBody = document.querySelector("body");
let loadPanel = document.querySelector(".load-panel");
let twitterA  = document.querySelector(".twitter");
let gmailA  = document.querySelector(".gmail");
let skyMoonSun = document.querySelector(".sky-moon-sun");
let hillPath = document.querySelector(".hill-path");

let campFireStone = document.querySelector(".stone-fire");
let stoneBench = document.querySelector(".stone-bench");
let tent = document.querySelector(".tent");
let tentFrontLeftLine = document.querySelector(".tent-front-left-line");
let tentLowerHalfSide = document.querySelector(".tent-lower-half-side");
let tentLowerHalfFront = document.querySelector(".tent-lower-half-front");
let tentLineLeftBack = document.querySelector(".tent-line-left-back");
let tentLineLeftFront = document.querySelector(".tent-line-left-front");
let tentLineRightFront = document.querySelector(".tent-line-right-front");
let skillsTitle = document.querySelector(".skills-title");
let panelTitle = document.querySelector(".projects-title");
let aboutTitle = document.querySelector(".about-title");
let contactTitle = document.querySelector(".contact-title");
let projectFrameTitle = document.getElementsByClassName("projects-project-frame-title-name")



let faceEmojiLeftTwitter = document.querySelector(".js-twitter-fe-left");
let faceEmojiRightTwitter = document.querySelector(".js-twitter-fe-right");
let faceEmojiMiddleTwitter = document.querySelector(".js-twitter-fe-middle");
let contactWrapperTwitterP = document.querySelector(".contact-wrapper-twitter-p");

let faceEmojiLeftGithub = document.querySelector(".js-github-fe-left");
let faceEmojiRightGithub = document.querySelector(".js-github-fe-right");
let faceEmojiMiddleGithub = document.querySelector(".js-github-fe-middle");
let contactWrapperGithubP = document.querySelector(".contact-wrapper-github-p");

let faceEmojiLeftGmail = document.querySelector(".js-gmail-fe-left");
let faceEmojiRightGmail = document.querySelector(".js-gmail-fe-right");
let faceEmojiMiddleGmail = document.querySelector(".js-gmail-fe-middle");
let contactWrapperGmailP = document.querySelector(".contact-wrapper-gmail-p");

let faceEmojiLeftPhone = document.querySelector(".js-phone-fe-left");
let faceEmojiRightPhone = document.querySelector(".js-phone-fe-right");
let faceEmojiMiddlePhone = document.querySelector(".js-phone-fe-middle");
let contactWrapperPhoneP = document.querySelector(".contact-wrapper-phone-p");

let blinkingInterval = setInterval(function blinkingIntervalFunction(){
    if(blink){
        blinkingCursor.style.color = "white";
        blink = false;
    }else{
        blinkingCursor.style.color = "rgb(82, 79, 76)";
        blink = true;
    }
}, 500)

contactWrapperTwitterP.addEventListener("mouseover", function(){
    faceEmojiLeftTwitter.style.transform = "translate(0em, 0) rotate(45deg)";
    faceEmojiRightTwitter.style.transform = "translate(2.5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleTwitter.style.transform = "translate(0, 3em)";
})
contactWrapperTwitterP.addEventListener("mouseleave", function(){
    faceEmojiLeftTwitter.style.transform = "translate(-2.2em, 0) rotate(45deg)";
    faceEmojiRightTwitter.style.transform = "translate(5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleTwitter.style.transform = "translate(0, 5em)";
})
contactWrapperGithubP.addEventListener("mouseover", function(){
    faceEmojiLeftGithub.style.transform = "translate(0em, 0) rotate(45deg)";
    faceEmojiRightGithub.style.transform = "translate(2.5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleGithub.style.transform = "translate(0, 3em)";
})
contactWrapperGithubP.addEventListener("mouseleave", function(){
    faceEmojiLeftGithub.style.transform = "translate(-2.2em, 0) rotate(45deg)";
    faceEmojiRightGithub.style.transform = "translate(5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleGithub.style.transform = "translate(0, 5em)";
})
contactWrapperGmailP.addEventListener("mouseover", function(){
    faceEmojiLeftGmail.style.transform = "translate(0em, 0) rotate(45deg)";
    faceEmojiRightGmail.style.transform = "translate(2.5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleGmail.style.transform = "translate(0, 3em)";
})
contactWrapperGmailP.addEventListener("mouseleave", function(){
    faceEmojiLeftGmail.style.transform = "translate(-2.2em, 0) rotate(45deg)";
    faceEmojiRightGmail.style.transform = "translate(5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddleGmail.style.transform = "translate(0, 5em)";
})
contactWrapperPhoneP.addEventListener("mouseover", function(){
    faceEmojiLeftPhone.style.transform = "translate(0em, 0) rotate(45deg)";
    faceEmojiRightPhone.style.transform = "translate(2.5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddlePhone.style.transform = "translate(0, 3em)";
})
contactWrapperPhoneP.addEventListener("mouseleave", function(){
    faceEmojiLeftPhone.style.transform = "translate(-2.2em, 0) rotate(45deg)";
    faceEmojiRightPhone.style.transform = "translate(5em, 6.5em) rotate(-15deg)";
    faceEmojiMiddlePhone.style.transform = "translate(0, 5em)";
})



let currentTime = 18;
if(currentTime >= 18){
    //night time
    loadPanel.style.backgroundColor = nightLoadPanelBcolor;
    loadPanel.style.color = nightLoadPanelColor;
    twitterA.style.color = nightLoadPanelColor;
    gmailA.style.color = nightLoadPanelColor;
    skyMoonSun.style.fill = nightSunMoonColor;
    skyMoonSun.style.stroke = nightSunMoonColor;
    hillPath.style.fill = nightHillColor;
    hillPath.style.stroke = nightHillColor;
    documentBody.style.backgroundColor = nightHillBColor;
    documentBody.style.color = documentBodyColor;

    /*campfire + stone + bench*/
    campFireStone.style.fill = nightStoneColor;
    stoneBench.style.fill = nightStoneBenchColor;
    tent.style.fill = nightTentColor;
    tentFrontLeftLine.style.fill = nightTentColor;
    tentFrontLeftLine.style.stroke = nightTentLineColor;
    tentLowerHalfSide.style.fill = nightTentColor;
    tentLowerHalfSide.style.stroke = nightTentLineColor;
    tentLowerHalfFront.style.fill = nightTentColor;
    tentLowerHalfFront.style.stroke = nightTentLineColor;
    tentLineLeftBack.style.stroke = nightTentLineColor;
    tentLineLeftFront.style.stroke =  nightTentLineColor;
    tentLineRightFront.style.stroke =  nightTentLineColor;

    panelTitle.style.color = nightPanelTitle;
    skillsTitle.style.color = nightPanelTitle;
    aboutTitle.style.color = nightPanelTitle;
    contactTitle.style.color = nightPanelTitle;
    //every class that name .... will color white
    for(let i = 0; i < projectFrameTitle.length; i++){
        projectFrameTitle[i].style.color = nightProjectFrameTitleNameColor;
    } 
}else{
    //day time

}