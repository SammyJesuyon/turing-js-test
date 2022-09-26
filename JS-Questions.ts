// first Block
setTimeout(() => {
  console.log(1);
});

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(true).then(() => {
  console.log(3);
});

queueMicrotask(() => {
  console.log(4);
});

console.log(5);
console.log(6);

// second Block

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// third block
function* generator(number) {
  yield number;
  yield (number += 10);
  yield (number += 10);
}

const gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// fourth block
interface IPerson {}

const person: IPerson = {
  name: "Turing",
  age: 30,
  skills: [1, 2, "3"],
  isAdmin: true
};

function returnA<Type>(arg: Type): Type {
  return arg.goal;
}

// fifth block
console.log("Turing".toTuring(3)); // Turing, Turing, Turing.
console.log("Tic".toTuring(5)); // Tic, Tic, Tic, Tic, Tic.


// sixth block
const usersList = [{id:1,name:"Joe", { id: 2, name 'Durand'}];

const user = usersList.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.id]: curr
  };
}, {});
