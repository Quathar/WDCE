window.onload = init;

// <<-CONSTANTS->>
const PARTICIPANTS = 5;
const MIN_VOTERS = 2500;
const MAX_VOTERS = 3000;
const TOTAL_SEATS = 20;

// <<-FIELDS->>
let candidates = [];
let validCandidates = [];
let totalVoters;
let voters;
let votes4Seat;

// <<-FUNCTIONS->>
function init() {
    for (let i = 0; i < PARTICIPANTS; i++)
        candidates[i] = {
            nombre: `Candidate ${i}`,
            votes: 0,
            members: 0,
        };
    totalVoters = Math.floor(Math.random() * (MAX_VOTERS - MIN_VOTERS + 1) + MIN_VOTERS);
    voters = totalVoters;
    document.querySelector('#total').textContent = voters;
    document.querySelector('#seats').textContent = TOTAL_SEATS;

    while (voters > 30) {
        let num = parseInt(Math.random() * 5);
        let vot = parseInt(Math.random() * (Math.random() * 100 + 1));
        candidates[num].votes += vot;
        voters -= vot;
    }

    showResults();
}

function vote() {
    let votes = Math.floor(Math.random() * voters + 1);
    voters -= votes;
    return votes;
}

function showResults() {
    candidates.sort((a, b) => b.votes - a.votes);

    candidates.forEach(candidate => {
        let percent = (candidate.votes / totalVoters) * 100;
        if (percent >= 5)
            validCandidates.push(candidate);
    });

    let counter = 0;
    validCandidates.forEach(candidate => counter += candidate.votes);

    votes4Seat = counter / TOTAL_SEATS;

    let temp = TOTAL_SEATS;
    for (let i = 0; i < validCandidates.length - 1; i++) {
        let n = (validCandidates[i].votes / counter);
        validCandidates[i].members = n * TOTAL_SEATS;
        Math.round(n * TOTAL_SEATS);
        temp -= validCandidates[i].members;
    }
    validCandidates[validCandidates.length - 1].members = temp;

    validCandidates.forEach(candidate => {
        candidate.votes 
    });

    let list      = document.querySelectorAll('.voted');
    let graphic   = document.querySelectorAll('.votebar');
    let resultDiv = document.querySelectorAll('.nvotes');
    let members   = document.querySelectorAll('.members');
    
    for (let i = 0; i < list.length; i++) {
        let percent = (candidates[i].votes / totalVoters) * 100;
        graphic[i]  .style.width = `${percent}%`;
        list[i]     .textContent = candidates[i].nombre;
        resultDiv[i].textContent = candidates[i].votes;
        members[i]  .textContent = candidates[i].members;
    }
}
