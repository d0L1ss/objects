/* Задача 1.1
Создай объект start, у которого будут два любых ключа и значения. */

const obj = {
    name: 'Rasul',
    age: 15
}

/* Задача 1.2
В том же файле создай объект, person у которого будут следующие ключи и значения: */
const person = {
    firstname: 'Rasul',
    lastname: 'Tokaev',
    city: 'Grozny',
    age: 15,
    height: 168,
    heightMeters: 1.68,
    born: 2007,
    haveCar: false,
    carName: undefined,
    haveSkills: true,
    level: 7,
    mobilePhone: {
        model: 'iPhone 13 pro', price: 76.000, operator: 'beeline', producer: 'Apple'
    }
}

/* Задача 1.3 
В том же файле создай объект galaxy, у которого будут минимум 10 свойств.
Свойства должны давать информацию о нашей галактике. */

const galaxy = {
    galaxyName: 'MilkyWay',
    stars: 400,
    distance: 7.5,
    solarSystem: true,
    group: 'Local group',
    stellarMagnitude: undefined,
    mass: 12.10,
    form: 'disk',
    speedSec: 220,
    galaxyAlongside: 'Andromeda Galaxy'
}

/* Задача 1.3.2
Пользуясь оператором delete удали из объекта galaxy любое свойство.
Выведи объект galaxy в консоль. */

delete(galaxy.form);
console.log(galaxy);

/* Задача 1.4
В том же файле создай объект student, в котором будет инфа о любом из твоих одногруппников.
Инфа должна включать имя, фамилию и регион проживания. */

const student = {
    firstName: 'Mansur',
    lastName: 'Tukhugov',
    region: 'Chechen Republic',
}

/* Задача 1.5
Добавь в объект student из задачи 1.4 новый ключ age, в котором будет возраст студента.
Выведи объект student в консоль. */
student.age = 16
console.log(student);