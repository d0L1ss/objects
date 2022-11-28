/* Задача 3.1 
Создай функцию с именем getName, которая принимает один параметр. В этот параметр будет передаваться объект.
Верни из функции ключ name этого объекта. */

function getName () {
    return Object.name
}
console.log(getName(Object));

/* Задача 3.2
Создай функцию с именем getNames, которая принимает один параметр. В этот параметр будет передаваться объект.
Верни из функции ключ массив, который содержит два элемента */

const obj = {
    name: 'Jamal',
    lastname: 'Lamajov',
    age: 17,
}
function getNames(obj) {
    return [obj.name, obj.lastname]
}
console.log(getNames(obj));

/* Задача 3.3 
Создай функцию concatNames, которая принимает два параметра с именами obj и lastname.
Верни из функции строку, которая содержит в себе ключ firstname из объекта obj, а следом через пробел значение параметра lastname. */

const obj2 = {
    firstname: 'Rasul',
    age: 15,
}
function concatNames(obj2) {
    return obj2.firstname
}
console.log(concatNames(obj2), 'Tokaev');

/* Задача 3.4 
Напиши функцию correctName, которая принимает один параметр (это будет объект). Если в принятом объекте ключ fathername имеет значение undefined, то верни только ключ firstname.
В ином случае верни строку, которая содержит конкатенацию следующих ключей fistname + lastname + fathername */

const first = {
    firstname: 'Amar',
    lastname: 'Mumaev',
    fathername: undefined,
}
function correctName(first) {
    if (first != undefined) {
        console.log(correctName(first.firstname));
    } else {
        return first
    }
    return first.firstname
}
console.log(correctName(first));
// ------------------------------------------------------------------
// Часть 4. №1

/* 1. Создать объект  phone с информацией о телефоне. Он должен содержать свойства: название бренда, модель телефона, память телефона, цвет а также свойство power - которое означает выключен телефон или нет (`true` / `false`).  */

const phone = {
    nameBrand: 'Apple',
    model: 'iPhone 13 Pro',
    storage: '128 Gb',
    color: 'Graphite',
    power: false,
// 2. Добавить в объект метод call() который будет возвращать одну строку “Я звоню…” 
    call (names) {
        return `'Я звоню ${names}'`
    }
}

/* Часть 4. №2

1. Создать объект  man с информацией о человеке. Он должен содержать следующие свойства: имя, фамилия, возраст, рост(м), вес(кг), логин, пароль, сумма денег на счете; */

const Man = {
    fname: 'Rasul',
    lastname: 'Tokaev',
    age: 15,
    growth: 1.68,
    weight: 58,
    login: 'Rasul12345',
    password: 12345678910,
    moneyInAcc: 2780, 
}
const checking = 1234678910 
    if (password = 12345678910) {
        console.log('Добро пожаловать, ' + fname + '. ',  'Ваш логин ' + login);
    } else {
        console.log('Указанный пароль ' + checking, 'не верен. Попробуйте еще раз');
    }
    console.log(checking);

const address = {
    city: 'Grozny',
    street: 'улица Профессора Сухарева',
    house: '35Б'
}

