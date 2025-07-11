const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");


function realTimeValue(input,display) {
    input.addEventListener("input", function() {
        display.textContent = input.value || "Not Provided";
      });
}

realTimeValue(nameInput,nameDisplay);
realTimeValue(ageInput,ageDisplay);
realTimeValue(jobInput,jobDisplay);
realTimeValue(bioInput,bioDisplay);