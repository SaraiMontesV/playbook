const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

console.log("1) ----------------- FOREACH -----------------------\n");
explorers.forEach((explorer) =>
  console.log(`El nombre del explorer es: ${explorer.name}`)
);

// Imprime el stack de cada explorer, usa FOR EACH

console.log("\n 2) ----------------- FOREACH -----------------------\n");
explorers.forEach((explorer) =>
  console.log(`El stack de ${explorer.name} es: ${explorer.stack}`)
);

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

console.log("\n 3) ----------------- MAP -----------------------\n");
const stack_list = explorers.map((explorer) => explorer.stack);
console.log(stack_list)

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

console.log("\n 4) ------------------ FILTER ----------------------\n");
const stack_js = explorers.filter((explorer) => explorer.stack.includes('js'));
console.log(stack_js)


// Busca el primer explorer que sea de la CDMX, usa FIND

console.log("\n 5) ------------------ FIND ----------------------\n");
const filter_cdmx = explorers.find(explorer => explorer.city ==='CDMX');
console.log(filter_cdmx)

// Obtén la suma de todos los exercises_completed, usa REDUCE

console.log("\n 6) ------------------ REDUCE ----------------------\n");
const sum_exercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0 )
console.log(`La suma de todos los ejercicios completados es: ${sum_exercises}`)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

console.log("\n 7) ------------------ SOME ----------------------\n");
const exercisesFinished = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true )
console.log(`¿Al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true?: ${exercisesFinished}`)

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

console.log("\n 8) ------------------ EVERY ----------------------\n");
const onboarding = explorers.every((explorer) => explorer.missions.onboarding.exercisesFinished === true )
console.log(`¿Todos los explorers tienen la propiedad isFinished del onboarding como true?: ${onboarding}`)

console.log("\n ---------------------------------------------\n");