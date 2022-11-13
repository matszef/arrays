const people = [
    {name: 'Kyle', age: 26},
    {name: 'Sully', age: 32},
    {name: 'Rob', age: 41},
    {name: 'Sue', age: 41},
]

const allPeople = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(allPeople)


const items = [
    { name: 'book', price: 20 },
    { name: 'mouse', price: 100 },
    { name: 'food', price: 30 },
    { name: 'keyboard', price: 120 }
]

const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price}`)
    return total + item.price
}, 0)

console.log(totalPrice)
