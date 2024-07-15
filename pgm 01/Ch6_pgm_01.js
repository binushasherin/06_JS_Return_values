var getMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

response = getMessage();

console.log(response);

function getMessage() {
    return "Hello, world!";
}

function getMyMessage() {
    return "This is my custom message.";
}

response2 = getMyMessage();
console.log(response2);

