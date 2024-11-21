let p = {
    name: "him",
    age: 100,
    favColour: "black"
}

Object.freeze(p);

console.log(p);
p.name = "yo";
console.log(p);
