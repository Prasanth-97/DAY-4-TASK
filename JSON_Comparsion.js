var obj1 = {
    name: "person 1",
    age: 5

}
var obj2 = {
    age: 5,
    name: "person 1"
}

let jsonEqual = (obj1, obj2) => {
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    return keys1.length == keys2.length && keys1.every(checkTheValue);
}

function checkTheValue(key) {
    return obj1[key] == obj2[key]
}
console.log("json comparison :", jsonEqual(obj1, obj2));
