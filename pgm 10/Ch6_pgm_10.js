var getPlayerName = function (playerName) {
    return playerName;
};

var getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var getBorder = function () {
    return "================================";
};

var getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

console.log(getPlayerInfo(player1.name, player1.place, player1.health));
console.log(getPlayerInfo(player2.name, player2.place, player2.health));


function getPlayerInfo(player) {
    let info = `${player.playerName} has health ${player.playerHealth}. `;
    info += `${player.playerName} is in ${player.playerPlace}. `;
    info += getPlayerItems(player);
    return info;
}


console.log(getPlayerInfo(player1)); 
console.log(getPlayerInfo(player2));