let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let doggieOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
}

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
}


// After you have created the other object literals, add the astronautID property to each one. 
// Each astronautID should be assigned a number between 1 and 10 (including 10). However, no crew members should have the same ID
let array = [];
superChimpOne["astronautID"] = getId();
superChimpTwo["astronautID"] = getId();
salamander["astronautID"] = getId();
doggieOne["astronautID"] = getId();
tardigradeOne["astronautID"] = getId();
function getId() {
   let id = Math.floor(Math.random() * 10)+1;

   while (array.indexOf(id) >= 0) {
      id = Math.floor(Math.random() * 10)+1;
   }
   array.push(id);
   return id;

}

// function findId() {
//    let id = Math.floor(Math.random() * 10) + 1;
//    if (array.indexOf(id) === -1) {
//       array.push(id);
//       return id;

//    } else {
//       id = findId();
//       return id;
//    }
// }

// Add a move method to each animal object
let move = function () {
   return Math.ceil(Math.random() * 10);
}
superChimpOne["move"]= move;
salamander["move"]= move;
superChimpTwo["move"]= move;
doggieOne["move"]= move;
tardigradeOne["move"]= move;

// Create an array to hold the animal objects.
let animalCrew = [superChimpOne, superChimpTwo, salamander, doggieOne, tardigradeOne];
// Print out the relevant information about each animal.
console.log([superChimpOne, superChimpTwo, salamander, doggieOne, tardigradeOne]);
// Start an animal race!

function crewReports(animalName){
   return console.log(`"${animalName} is a ${animalName[name]}. They are${animalName[age]} years old and ${animalName[mass]} kilograms. Their ID is ${animalName[move]}."`)
}
