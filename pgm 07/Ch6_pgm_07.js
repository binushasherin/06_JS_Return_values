

var getPlayerName;

getPlayerName = function (playerName) {
    return playerName;
};

console.log(getPlayerName("Kandra"));


function getPlayerName(name) {
    let prefix = "==== ";
    let suffix = " ====";
    return prefix + name + suffix;
}

console.log(getPlayerName("Kiki")); 
console.log(getPlayerName("Mahesha")); 


function getPlayerNameWithBorder(name) {
    let border = "|";
    let prefix = "\n" + border + "\n";
    let suffix = "\n" + border + "\n";
    return prefix + " " + name + suffix;
}


console.log(getPlayerNameWithBorder("Jahver"));
