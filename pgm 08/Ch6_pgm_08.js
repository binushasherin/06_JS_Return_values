var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));




function showPlayerInfo(playerName, playerHealth, playerPlace) {

    console.log(`${playerName} has health ${playerHealth}`);
    console.log(`${playerName} is in ${playerPlace}`);
}
showPlayerInfo("Dax", 50, "The Bath");

