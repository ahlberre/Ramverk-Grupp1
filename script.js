window.onload = function() {
    // Lyssna efter händelser
    let team = document.getElementsByClassName("team-member");

    for (let i=0; i < team.length; i++) {
        team[i].children[0].addEventListener("click", editTitle);

        for (let j=0; j < team[i].children.length; j++){
            let memberElem = team[i].children[j];
            memberElem.addEventListener("mouseover", effectOn);
            memberElem.addEventListener("mouseout", effectOff);
        }
    }
}

var editTitle = function(e) {
    // Ändra "team-title"
    let newTitle = window.prompt("Vad är den nya titeln?");
    this.parentElement.lastElementChild.innerHTML = newTitle;
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    id.target.parentElement.classList.add("hovering");
};

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    id.target.parentElement.classList.remove("hovering");
}
