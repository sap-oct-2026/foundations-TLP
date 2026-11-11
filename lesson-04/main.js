const people = [
  {
    name: "Barry McBaguette",
    email: "barry@breadventures.com",
    age: 45,
    isTeacher: true,
    classes: ["advanced napping", "bread engineering"],
    test: undefined,
    address: {
      street: "Croissant Avenue 42",
      city: "Paris",
      countryCode: "FR",
      postalCode: "75001",
      mapCoordinates: { lat: 48.8566, lon: 2.3522 },
    },
  },
  {
    name: "Doris von Potato",
    email: "doris@potatoinstitute.com",
    age: 67,
    isTeacher: false,
    classes: ["potato science", "emotional support"],
    test: undefined,
    address: {
      street: "Mashed Potato Lane 13",
      city: "Berlin",
      countryCode: "DE",
      postalCode: "10115",
      mapCoordinates: { lat: 52.52, lon: 13.405 },
    },
  },
  {
    name: "Chuck Norris Junior",
    email: "chuck@roundhouse.academy",
    age: 23,
    isTeacher: true,
    classes: ["karate for beginners", "advanced kicking"],
    test: undefined,
    address: {
      street: "Roundhouse Road 99",
      city: "Austin",
      countryCode: "US",
      postalCode: "73301",
      mapCoordinates: { lat: 30.2672, lon: -97.7431 },
    },
  },
  {
    name: "Sir Lancelot Pancake",
    email: "sir@pancakekingdom.com",
    age: 38,
    isTeacher: false,
    classes: ["pancake flipping", "medieval breakfast"],
    test: undefined,
    address: {
      street: "Syrup Street 7",
      city: "London",
      countryCode: "GB",
      postalCode: "SW1A1AA",
      mapCoordinates: { lat: 51.5072, lon: -0.1276 },
    },
  },
  {
    name: "Karen Keyboardcrusher",
    email: "karen@ctrlaltdelete.com",
    age: 52,
    isTeacher: true,
    classes: ["excel wizardry", "complaint management"],
    test: undefined,
    address: {
      street: "Ctrl Alt Delete 404",
      city: "Amsterdam",
      countryCode: "NL",
      postalCode: "1012",
      mapCoordinates: { lat: 52.3676, lon: 4.9041 },
    },
  },
  {
    name: "Bob the Builder Jr.",
    email: "bob@hammer-time.com",
    age: 31,
    isTeacher: false,
    classes: ["lego architecture", "DIY disasters"],
    test: undefined,
    address: {
      street: "Hammerhead Street 22",
      city: "Lisbon",
      countryCode: "PT",
      postalCode: "1100",
      mapCoordinates: { lat: 38.7223, lon: -9.1393 },
    },
  },
  {
    name: "Princess Consuela Banana",
    email: "princess@bananapalace.com",
    age: 29,
    isTeacher: true,
    classes: ["banana economics", "royal etiquette"],
    test: undefined,
    address: {
      street: "Banana Republic Avenue 5",
      city: "Madrid",
      countryCode: "ES",
      postalCode: "28001",
      mapCoordinates: { lat: 40.4168, lon: -3.7038 },
    },
  },
  {
    name: "Willy Wonka Jr.",
    email: "willy@chocolatefactory.com",
    age: 18,
    isTeacher: false,
    classes: ["chocolate engineering", "candy architecture"],
    test: undefined,
    address: {
      street: "Chocolate Factory Road 1",
      city: "Zurich",
      countryCode: "CH",
      postalCode: "8001",
      mapCoordinates: { lat: 47.3769, lon: 8.5417 },
    },
  },
  {
    name: "Frank Furter",
    email: "frank@hotdoguniversity.com",
    age: 56,
    isTeacher: true,
    classes: ["sausage algorithms", "mustard management"],
    test: undefined,
    address: {
      street: "Hot Dog Boulevard 69",
      city: "Chicago",
      countryCode: "US",
      postalCode: "60601",
      mapCoordinates: { lat: 41.8781, lon: -87.6298 },
    },
  },
  {
    name: "Mona Lott",
    email: "mona@artofnothing.com",
    age: 42,
    isTeacher: false,
    classes: ["professional procrastination", "nap optimization"],
    test: undefined,
    address: {
      street: "Lazy Sunday Street 10",
      city: "Rome",
      countryCode: "IT",
      postalCode: "00100",
      mapCoordinates: { lat: 41.9028, lon: 12.4964 },
    },
  },
  {
    name: "Darth Veggie",
    email: "darth@lettuce-side.com",
    age: 35,
    isTeacher: true,
    classes: ["dark side of vegetables", "force management"],
    test: undefined,
    address: {
      street: "Death Star Avenue 66",
      city: "Tokyo",
      countryCode: "JP",
      postalCode: "1000001",
      mapCoordinates: { lat: 35.6762, lon: 139.6503 },
    },
  },
  {
    name: "Elvis Parsley",
    email: "elvis@rocknrollherbs.com",
    age: 77,
    isTeacher: false,
    classes: ["herbology rockstars", "hip shaking 101"],
    test: undefined,
    address: {
      street: "Jailhouse Rock 12",
      city: "Memphis",
      countryCode: "US",
      postalCode: "38103",
      mapCoordinates: { lat: 35.1495, lon: -90.049 },
    },
  },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (const person of people) {
//   console.log(person);
// }

// for (const key in people) {
//   console.log(key);
// }

// people.forEach((person, index) => {
//   if (person.age >= 30 && person.age <= 60) {
//     console.log(`${index}: ${person.email} :: ${person.age}`);
//   }
// });

const result = people
  .filter((value) => value.age >= 30 && value.age <= 60)
  .map((value) => value.email);

// console.log(result);

// const peopleFromUS = [];
// for (person of people) {
//   if (person.address.countryCode === "US") {
//     peopleFromUS.push(person);
//   }
// }

const peopleFromUS = people.filter(
  (value) => value.address.countryCode === "US",
);

// people.sort((a, b) => a.address.countryCode > b.address.countryCode);

people.sort((a, b) => {
  return b.name.localeCompare(a.name, "en", { sensitivity: "base" });
});

console.log(people);
