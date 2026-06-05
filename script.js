console.log("Rapid Route");

const welcomeMsg = document.getElementById("welcomeMsg");
console.log(welcomeMsg);

let companyName = "Rapid Route";
console.log(companyName);

function showMessage() {
    welcomeMsg.textContent = "Rapid Route helps you track buses in real time!";
}

const missionBtn = document.getElementById("missionBtn");
missionBtn.addEventListener("click", showMessage);