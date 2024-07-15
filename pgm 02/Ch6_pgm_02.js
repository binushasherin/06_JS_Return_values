var getHelloTo;
var fullMessage;

getHelloTo = function (name) {
    return "Hello to " + name;
};

fullMessage = getHelloTo("Kandra");

console.log(fullMessage);


getHelloTo = function (name2) {
    return "Hello to " + name2;
};

fullMessage = getHelloTo("Das");

console.log(fullMessage);

