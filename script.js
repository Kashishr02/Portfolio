//changing the navbar a tag  colour on click
let homeBtn = document.getElementById('home');
let aboutBtn = document.getElementById('about');
let serviceBtn = document.getElementById('services');
let skillBtn = document.getElementById('skills');
let contactBtn = document.getElementById('contact');

function home() {
    homeBtn.style.color = "dodgerblue";
    aboutBtn.style.color = "white";
    serviceBtn.style.color = "white";
    skillBtn.style.color = "white";
    contactBtn.style.color = "white";
}

function about() {
    homeBtn.style.color = "white";
    aboutBtn.style.color = "dodgerblue";
    serviceBtn.style.color = "white";
    skillBtn.style.color = "white";
    contactBtn.style.color = "white";
}

function service() {
    homeBtn.style.color = "white";
    aboutBtn.style.color = "white";
    serviceBtn.style.color = "dodgerblue";
    skillBtn.style.color = "white";
    contactBtn.style.color = "white";
}

function skill() {
    homeBtn.style.color = "white";
    aboutBtn.style.color = "white";
    serviceBtn.style.color = "white";
    skillBtn.style.color = "dodgerblue";
    contactBtn.style.color = "white";
}

function contact() {
    homeBtn.style.color = "white";
    aboutBtn.style.color = "white";
    serviceBtn.style.color = "white";
    skillBtn.style.color = "white";
    contactBtn.style.color = "dodgerblue";
}
//for read button in about section
let readBtn = document.getElementById('readBtn');
let content = document.getElementById('more-cont');

function readmore() {
    if (readBtn.innerHTML == "Read More") {
        content.style.display = "block";
        readBtn.innerHTML = "Read Less";
    } else {
        content.style.display = "none";
        readBtn.innerHTML = "Read More";
    }
}
//onclick display education detail and experience in about section
let moreSkillBtn = document.getElementById('more-skillBtn');
let moreEduBtn = document.getElementById('more-eduBtn');
let moreExpBtn = document.getElementById('more-expBtn');
let skillDet = document.getElementById('more-skill-detail');
let expDet = document.getElementById('more-exp-detail');
let eduDet = document.getElementById('more-edu-detail');

function moreSkill() {
    eduDet.style.display = "none";
    expDet.style.display = "none";
    skillDet.style.display = "block";
    moreSkillBtn.style.color = "dodgerblue";
    moreEduBtn.style.color = "white";
    moreExpBtn.style.color = "white";
}

function moreEdu() {
    eduDet.style.display = "block";
    expDet.style.display = "none";
    skillDet.style.display = "none";
    moreSkillBtn.style.color = "white";
    moreEduBtn.style.color = "dodgerblue";
    moreExpBtn.style.color = "white";
}

function moreExp() {
    eduDet.style.display = "none";
    expDet.style.display = "block";
    skillDet.style.display = "none";
    moreSkillBtn.style.color = "white";
    moreEduBtn.style.color = "white";
    moreExpBtn.style.color = "dodgerblue";
}