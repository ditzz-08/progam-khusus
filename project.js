function greetUser() {
    const name = document.getElementById("nameInput").value.toLowerCase();
    const greeting = document.getElementById("greeting");

    if (name === "nadia") {
        greeting.textContent = "Halo, gimana kabarmu (baik/gak)?";
        document.getElementById("questionSection").style.display = "block";
    } else {
        greeting.textContent = `Boong banget, aku tau kamu bukan Nadia!`;
    }
}

function checkMood() {
    const mood = document.getElementById("moodInput").value.toLowerCase();
    const moodResponse = document.getElementById("moodResponse");

    if (mood === "baik") {
        moodResponse.textContent = "Maafin aku yaa sayang (iyaa/gak)?";
        document.getElementById("apologySection").style.display = "block";
    } else {
        moodResponse.textContent = "Boong banget, aku tau kamu gak baik!";
    }
}

function checkApology() {
    const apology = document.getElementById("apologyInput").value.toLowerCase();
    const apologyResponse = document.getElementById("apologyResponse");

    if (apology === "iyaa") {
        apologyResponse.textContent = "Halo, aku program yang dibikin pacarmu!";
        document.getElementById("testSection").style.display = "block";
    } else {
        apologyResponse.textContent = "Boong banget, aku tau kamu boong!";
    }
}

function checkTest() {
    let testValue = parseInt(document.getElementById("testInput").value);
    const warning = document.getElementById("warning");
    warning.innerHTML = "";

    if (testValue <= 0) {
        alert("Rate harus lebih dari 0!");
    } else {
        for (let i = 0; i < testValue; i++) {
            const warningMessage = document.createElement("p");
            warningMessage.textContent = "awas aja kalo boong!";
            warning.appendChild(warningMessage);
        }
    }
}
