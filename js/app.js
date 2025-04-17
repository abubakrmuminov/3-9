// // ============================================================ //
// // ========================== 1-QISM ========================== //
// // ============================================================ //

// // ======= //
// // 1-mashq //
// // ======= //

// function getUserInfo(user) {
//   return `Foydalanuvchi ismi: ${user.name}, yoshi: ${user.age}`;
// }

// const user = { name: "Ali", age: 25 };
// console.log(getUserInfo(user));

// // ======= //
// // 2-mashq //
// // ======= //

// function addTax(product) {
//   const tax = product.price * 0.12;
//   product.priceWithTax = product.price + tax;
//   return product;
// }

// const product = { name: "Telefon", price: 1000 };
// console.log(addTax(product));

// // ======= //
// // 3-mashq //
// // ======= //

// function carInfo(car) {
//   return `Bu ${car.color} rangli ${car.model}, ${car.year}-yil`;
// }

// const car = { model: "Cobalt", year: 2022, color: "oq" };
// console.log(carInfo(car));

// // ======= //
// // 4-mashq //
// // ======= //

// function hasEmail(user) {
//   if (user.email) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const user1 = { name: "Ali", email: "ali@gmail.com" };

// console.log(hasEmail(user1));

// // ======= //
// // 5-mashq //
// // ======= //

// // ======= //
// // 6-mashq //
// // ======= //

// function calculateSpeed(car) {
//   car.speed = car.distance / car.time;
//   return car;
// }

// const myCar = { model: "Cobalt", distance: 150, time: 3 };
// console.log(calculateSpeed(myCar));

// // ======= //
// // 7-mashq //
// // ======= //

// function calculateWorkTime(worker) {
//   worker.hoursWorked = worker.end - worker.start;
//   return worker;
// }

// const ali = { name: "Ali", start: 9, end: 18 };
// console.log(calculateWorkTime(ali));

// // ======= //
// // 8-mashq //
// // ======= //

// function calculateVolume(cube) {
//   cube.volume = Math.pow(cube.side, 3);
//   return cube;
// }

// const result = calculateVolume({ side: 4 });
// console.log(result);

// // ======= //
// // 9-mashq //
// // ======= //

// function isPasswordStrong(user) {
//   user.isStrong = user.password.length >= 8;
//   return user;
// }

// const result = isPasswordStrong({ username: "test", password: "12345678" });
// console.log(result);

// // ======== //
// // 10-mashq //
// // ======== //

// function calculateBirthYear(person) {
//   const currentYear = 2025;
//   person.birthYear = currentYear - person.age;
//   return person;
// }

// const result = calculateBirthYear({ name: "Laylo", age: 20 });
// console.log(result);

// // ============================================================ //
// // ========================== 2-QISM ========================== //
// // ============================================================ //

// // ======= //
// // 1-mashq //
// // ======= //

// function updateUser(user) {
//   if (Object.isFrozen(user)) {
//     return "Object is frozen";
//   }

//   user.age += 1;
//   return user;
// }

// const frozenUser = Object.freeze({ name: "Ulug'bek", age: 20 });
// console.log(updateUser(frozenUser));

// // ======= //
// // 2-mashq //
// // ======= //

// function checkFrozenStatus(obj) {
//   if (Object.isFrozen(obj)) {
//     return "Frozen";
//   } else {
//     return "Not frozen";
//   }
// }

// const car = Object.freeze({ model: "Malibu" });
// console.log(checkFrozenStatus(car));

// // ======= //
// // 3-mashq //
// // ======= //

// function addProperty(obj, key, value) {
//   if (Object.isSealed(obj)) {
//     return "Cannot add new property";
//   } else {
//     obj[key] = value;
//   }
// }

// const person = { name: "Ali" };
// Object.seal(person);
// console.log(addProperty(person, "age", 25));

// // ======= //
// // 4-mashq //
// // ======= //

// function isItSealed(obj) {
//   if (Object.isSealed(obj)) {
//     return "Sealed";
//   } else {
//     return "Not sealed";
//   }
// }

// const phone = Object.seal({ brand: "iPhone" });
// console.log(isItSealed(phone));

// // ======= //
// // 5-mashq //
// // ======= //

// function checkProperty(obj, key) {
//   return key in obj;
// }

// const book = { title: "JS Fundamentals", author: "Mirzo" };

// console.log(checkProperty(book, "author"));
// console.log(checkProperty(book, "price"));

// // ======= //
// // 6-mashq //
// // ======= //

// function isOwnKey(obj, key) {
//   return obj.hasOwnProperty(key);
// }

// const parent = { name: "Parent" };
// const child = Object.create(parent);
// child.age = 10;

// console.log(isOwnKey(child, "age"));
// console.log(isOwnKey(child, "name"));
