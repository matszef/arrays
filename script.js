//high order functions

const numbers = [2, 3, 2, 1, 5, 4, 4, 7]

//map - loops and returns an array

const doubleMap = (numbers) => {
    return numbers.map(number => number ** 2)
}

console.log(doubleMap(numbers))

//filter - loops and returns an array with matching conditions

// const filter = numbers.filter(number => number > 3)
// console.log(filter)

const filter = (numbers, greaterThan) => {
    let result = []

    for (const number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }

    return result
}

console.log(filter(numbers, 3))


const actors = [
    {name: 'johnny', netWorth: 2000000},
    {name: 'amber', netWorth: 10},
    {name: 'leonardo', netWorth: 100000}
]

//const result = actors.filter(actor => actor.netWorth > 10)

//let names = result.map(actor => actor.name).join(', ')

// document.body.innerHTML = `<h1>${JSON.stringify(result)}</h1>`

//document.body.innerHTML = `<h1>${names}</h1>`

let result = actors.filter(actor => actor.netWorth >= 100000)

let names = result.map(actor => actor.name).join(', ')

document.body.innerHTML = `<h2>${names}</h2>`


//reduce
//sum all of the net worths
//sum: think reduce
//reduce takes in a function as an argument
//reduce loops and gives you back the accumulator

const nums = [1, 2, 3, 4]
const res = nums.reduce((prev, curr) => prev + curr)
console.log(res)
const resu = nums.reduce((a, b) => a + b)


function mult(a, b) {
    return a * b
}
const re = nums.reduce(mult)

console.log(re)


console.log(actors.reduce((a, b) => a + b.netWorth, 0))


