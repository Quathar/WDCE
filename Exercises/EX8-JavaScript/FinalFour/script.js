'use strict'

// <<-CONSTANTS->>
const CSV = 
    '58,Haslett,Dolle,212,35.64,95.34,95.94\n' +
    '95,Christye,Spittles,174,83.24,45.31,7.71\n' +
    '78,Enid,Welds,215,10.5,99.43,58.56\n' +
    '19,Archibold,McNair,214,92.45,23.35,1.47\n' +
    '45,Ahmad,Quibell,150,63.83,30.56,42.81\n' +
    '72,Fonsie,Crunden,212,54.57,21.12,73.73\n' +
    '57,Lil,Goly,176,13.21,68.86,63.98\n' +
    '2,Sigvard,Valder,179,47.93,23.85,53.45\n' +
    '80,Antonino,Gellion,178,97.89,53.04,2.62\n' +
    '67,Lotty,Torregiani,192,83.46,56.89,9.68\n' +
    '82,Odey,Grgic,169,2.96,20.69,92.86\n' +
    '24,Jordana,Tombleson,217,98.89,91.44,52.06\n' +
    '4,Myrlene,Kleisle,183,69.73,42.99,63.84\n' +
    '5,Lenci,Millen,159,44.37,41.09,72.41\n' +
    '91,Adelina,Danforth,150,53.38,21.57,48.77\n' +
    '30,Cherlyn,Hasker,192,35.58,13.33,52.88\n' +
    '87,Tobi,Taylor,219,81.9,98.53,55.3\n' +
    '36,Radcliffe,Sheldrake,211,75.71,34.02,51.32\n' +
    '29,Amelina,Eddisford,220,26.27,24.81,22.05\n' +
    '37,Etheline,Botha,191,3.11,92.27,82.12';

window.onload = init;

// <<-FIELDS->>
let teamsMap = new Map();
let teamsFixed = false;
let playersFixed = false;
let currentTeam;

function init() {
    // Process CSV
    let csvPlayers = [];
    let lines = CSV.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let fields = lines[i].split(",");
        csvPlayers.push(new Player(
            fields[0],
            fields[1],
            fields[2],
            fields[3],
            fields[4],
            fields[5],
            fields[6]
        ));
    }

    // Team's players
    let teams = document.querySelectorAll(".team");
    let index = 0;
    teams.forEach(team => {
        teamsMap.set(
            team.textContent, [
            csvPlayers[index++],
            csvPlayers[index++],
            csvPlayers[index++],
            csvPlayers[index++],
            csvPlayers[index++]
        ]);
        team.addEventListener('mouseover', () => {
            if (!teamsFixed) setPlayers(team.textContent);
        });
        team.addEventListener('mouseout',  () => {
            if (!teamsFixed) clearPlayers();
        });
        team.addEventListener('click',     () => {
            teamsFixed = !teamsFixed;
            currentTeam = team.textContent;
        });
    })

    // Player info
    let jugadores = document.querySelectorAll(".players");
    jugadores.forEach((player, i) => {
        player.addEventListener('mouseover', () => {
            if (teamsFixed && !playersFixed) setData(i);
        });
        player.addEventListener('mouseout', () => {
            if (teamsFixed && !playersFixed) clearData();
        });
        player.addEventListener('click', () => playersFixed = !playersFixed);
    })

    document.querySelector('#control').addEventListener('click', () => { clearPlayers(), clearData() })
}

// <<-LISTENERS->>
let setPlayers = (team) => document.querySelectorAll('.players')
                                   .forEach((player, i) => player.textContent = teamsMap.get(team)[i].name);
let clearPlayers = () => document.querySelectorAll('.players')
                                 .forEach((player, i) => player.textContent = `Jugador ${i + 1}`);

let setData = (index) => document.querySelectorAll('.datos')
                                 .forEach((dato, i) => dato.innerHTML = teamsMap.get(currentTeam)[index].getField(i));
let clearData = () => document.querySelectorAll('.datos')
                              .forEach((dato, i) => dato.textContent = `Dato ${i + 1}`);

// <<-CLASS->>
class Player {

    // <<-CONSTRUCTOR->>
    constructor(points, name, lastName, height, pointsAvg, bouncesAvg, ratingAvg) {
        this.points     = points;
        this.name       = name;
        this.lastName   = lastName;
        this.height     = height;
        this.pointsAvg  = pointsAvg;
        this.bouncesAvg = bouncesAvg;
        this.ratingAvg  = ratingAvg;
    }

    // <<-GETTER->>
    getField(i) {
        switch(i) {
            case 0: return `Puntos: <b>${this.points}</b>`;
            case 1: return `Nombre: <b>${this.name}</b>`;
            case 2: return `Apellido: <b>${this.lastName}</b>`;
            case 3: return `Altura: <b>${this.height}</b>`;
            case 4: return `Puntos (avg): <b>${this.pointsAvg}</b>`;
            case 5: return `Rebotes (avg): <b>${this.bouncesAvg}</b>`;
            case 6: return `Valoración (avg): <b>${this.ratingAvg}</b>`;
        }
    }

}
