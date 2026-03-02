"use strict";

let menuOpener = document.getElementById("menuOpener");
let tableOfContentsImg = document.getElementById("tableOfContentsImg");
menuOpener.addEventListener("mouseenter", function() {
    tableOfContentsImg.src = "images/color-toc.svg";
});
menuOpener.addEventListener("mouseleave", function() {
    tableOfContentsImg.src = "images/toc.svg";
});

let tableOfContents = document.getElementById("tableOfContents");
document.querySelector('#menuOpener').addEventListener('click', function() {
    tableOfContents.classList.toggle('menuClosed');
    tableOfContents.classList.toggle('menuOpen');
});

let chapterOne = document.getElementById("abilities");
let chapterTwo = document.getElementById("classes");
let chapterThree = document.getElementById("species");
let chapterFour = document.getElementById("traits");

let goToAbilities = document.querySelectorAll(".goToAbilities");
let goToClasses = document.querySelectorAll(".goToClasses");
let goToSpecies = document.querySelectorAll(".goToSpecies");
let goToTraits = document.querySelectorAll(".goToTraits");
goToAbilities.forEach(goTo => {
    goTo.addEventListener('click', showAbilities);
});
goToClasses.forEach(goTo => {
    goTo.addEventListener('click', showClasses);
});
goToSpecies.forEach(goTo => {
    goTo.addEventListener('click', showSpecies);
});
goToTraits.forEach(goTo => {
    goTo.addEventListener('click', showTraits);
});

function showAbilities() {
    chapterTwo.classList.add("tabDeselected");
    chapterThree.classList.add("tabDeselected");
    chapterFour.classList.add("tabDeselected");
    chapterOne.classList.remove("tabDeselected");
};
function showClasses() {
    chapterOne.classList.add("tabDeselected");
    chapterThree.classList.add("tabDeselected");
    chapterFour.classList.add("tabDeselected");
    chapterTwo.classList.remove("tabDeselected");
};
function showSpecies() {
    chapterOne.classList.add("tabDeselected");
    chapterTwo.classList.add("tabDeselected");
    chapterFour.classList.add("tabDeselected");
    chapterThree.classList.remove("tabDeselected");
};
function showTraits() {
    chapterOne.classList.add("tabDeselected");
    chapterTwo.classList.add("tabDeselected");
    chapterThree.classList.add("tabDeselected");
    chapterFour.classList.remove("tabDeselected");
};

let alignment = "";
// let setAlignment = document.querySelectorAll(".alignments");
document.getElementById("lg").addEventListener('click', function(){
    alignment = "Lawful Good";
    console.log(alignment);
});
document.getElementById("ng").addEventListener('click', function(){
    alignment = "Neutral Good";
    console.log(alignment);
});
document.getElementById("cg").addEventListener('click', function(){
    alignment = "Chaotic Good";
    console.log(alignment);
});
document.getElementById("ln").addEventListener('click', function(){
    alignment = "Lawful Neutral";
    console.log(alignment);
});
document.getElementById("tn").addEventListener('click', function(){
    alignment = "True Neutral";
    console.log(alignment);
});
document.getElementById("cn").addEventListener('click', function(){
    alignment = "Chaotic Neutral";
    console.log(alignment);
});
document.getElementById("le").addEventListener('click', function(){
    alignment = "Lawful Evil";
    console.log(alignment);
});
document.getElementById("ne").addEventListener('click', function(){
    alignment = "Neutral Evil";
    console.log(alignment);
});
document.getElementById("ce").addEventListener('click', function(){
    alignment = "Chaotic Evil";
    console.log(alignment);
});

// setAlignment.forEach(newAlignment => {
//     newAlignment.addEventListener('click', function(event) {
//         console.log(event.target.id);
//         let alignmentID = this.id;
//         if(alignmentID = "lg") {
//             alignment = "Lawful Good";
//         } else if (alignmentID = "ng") {
//             alignment = "Neutral Good";
//         } else if (alignmentID = "cg") {
//             alignment = "Chaotic Good";
//         } else if (alignmentID = "ln") {
//             alignment = "Lawful Neutral";
//         } else if (alignmentID = "tn") {
//             alignment = "True Neutral";
//         } else if (alignmentID = "cn") {
//             alignment = "Chaotic Neutral";
//         } else if (alignmentID = "le") {
//             alignment = "Lawful Evil";
//         } else if (alignmentID = "ne") {
//             alignment = "Neutral Evil";
//         } else if (alignmentID = "ce") {
//             alignment = "Chaotic Evil";
//         }
//         console.log(alignmentID);
//     });
// });

    let nameInput = "Name";
    let characterLevel = 1;
    let classChoice = "Barbarian";
    let speciesChoice = "Aasimar";
    let strength = 8;
    let dexterity = 10;
    let constitution = 12;
    let intelligence = 13;
    let wisdom = 14;
    let charisma = 15;
    let background = "Acolyte";

let button = document.getElementById('submit');
button.addEventListener('click', (event) => {
        event.preventDefault();
});
$("#submit").click(function(){
    let nameInput = $("#nameInput").val();
    let characterLevel = $("#characterLevel").val();
    let classChoice = $("#classSelect").val();
    let speciesChoice = $("#speciesChoice").val();
    let strength = $("#strength").val();
    let dexterity = $("#dexterity").val();
    let constitution = $("#constitution").val();
    let intelligence = $("#intelligence").val();
    let wisdom = $("#wisdom").val();
    let charisma = $("#charisma").val();
    let background = $("#backgroundSelect").val();
    // use the variables to info to local storage
    localStorage.setItem("name", nameInput);
    localStorage.setItem("characterLevel", characterLevel);
    localStorage.setItem("classChoice", classChoice);
    localStorage.setItem("speciesChoice", speciesChoice);
    localStorage.setItem("strength", strength);
    localStorage.setItem("dexterity", dexterity);
    localStorage.setItem("constitution", constitution);
    localStorage.setItem("intelligence", intelligence);
    localStorage.setItem("wisdom", wisdom);
    localStorage.setItem("charisma", charisma);
    localStorage.setItem("background", background);
    localStorage.setItem("alignment", alignment);
    let name = localStorage.getItem("name");
    let level = localStorage.getItem("characterLevel");
    let characterClass = localStorage.getItem("classChoice");
    let species = localStorage.getItem("speciesChoice");
    let strengthScore = localStorage.getItem("strength");
    let dexterityScore = localStorage.getItem("dexterity");
    let constitutionScore = localStorage.getItem("constitution");
    let intelligenceScore = localStorage.getItem("intelligence");
    let wisdomScore = localStorage.getItem("wisdom");
    let charismaScore = localStorage.getItem("charisma");
    let characterBackground = localStorage.getItem("background");
    let characterAlignment = localStorage.getItem("alignment");
    // display a welcome message with their information
    let newCharInfo = document.getElementById("newCharInfo");
    let newCharAlignment = document.getElementById("newCharAlignment");
    // let thirdLine = document.getElementById("thirdLine");
    let newCharStr = document.getElementById("newCharStr");
    let newCharDex = document.getElementById("newCharDex");
    let newCharCon = document.getElementById("newCharCon");
    let newCharInt = document.getElementById("newCharInt");
    let newCharWis = document.getElementById("newCharWis");
    let newCharCha = document.getElementById("newCharCha");
    let firstString = `${name}, a Level ${level} ${species} ${characterClass} ${characterBackground}`;
    let secondString = `Alignment: ${alignment}`;
    // let thirdString = `Strength: ${strengthScore}\nDexterity: ${dexterityScore}\nConstitution: ${constitutionScore}\nIntelligence: ${intelligenceScore}\nWisdom: ${wisdomScore}\nCharisma: ${charismaScore}`;
    newCharInfo.innerHTML = firstString;
    newCharAlignment.innerHTML = secondString;
    // thirdLine.innerHTML = thirdString;
    newCharStr.innerHTML = `Strength<br>${strengthScore}`;
    newCharDex.innerHTML = `Dexterity<br>${dexterityScore}`;
    newCharCon.innerHTML = `Constitution<br>${constitutionScore}`;
    newCharInt.innerHTML = `Intelligence<br>${intelligenceScore}`;
    newCharWis.innerHTML = `Wisdom<br>${wisdomScore}`;
    newCharCha.innerHTML = `Charisma<br>${charismaScore}`;
    

    // firstLine.innerHTML(`${name}, a Level ${level} ${characterAlignment} ${species} ${characterClass}`);
    // secondLine.innerHTML(`Background: ${characterBackground}`)
    // thirdLine.innerHTML(`Strength: ${strengthScore}\nDexterity: ${dexterityScore}\nConstitution: ${constitutionScore}\nIntelligence: ${intelligenceScore}\nWisdom: ${wisdomScore}\nCharisma: ${charismaScore}`);
    let characterSheet = document.getElementById("characterSheet");
    characterSheet.classList.remove("hidden");
})