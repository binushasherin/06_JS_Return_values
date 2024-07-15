var getHelloTo;

getHelloTo = function (name) {
    return "Hello to " + name;
};

console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax")); 


function getHelloTo(name1, name2) {
    
    var template;
    
  
    template = "Hello to {{name1}} and {{name2}}";
    
    
    template = template.replace("{{name1}}", name1);
    template = template.replace("{{name2}}", name2);
    
    
    return template;
}


