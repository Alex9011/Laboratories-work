function yearsForIn(people) {
    const out = {};
    for (const key in people) {
        if (Object.prototype.hasOwnProperty.call(people, key)) {
            const person = people[key];
            out[key] = person.died - person.born;
        }
    }
    return out;
}

function yearsKeys(people) {
    const out = {};
    const keys = Object.keys(people);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        out[k] = people[k].died - people[k].born;
    }
    return out;
}

function yearsEntries(people) {
    const out = {};
    const pairs = Object.entries(people);
    for (const [k, p] of pairs) {
        out[k] = p.died - p.born;
    }
    return out;
}

function yearsReduce(people) {
    return Object.entries(people).reduce((acc, [k, p]) => {
        acc[k] = p.died - p.born;
        return acc;
    }, {});
}

function yearsMap(people) {
    return Object.fromEntries(
        Object.entries(people).map(([k, p]) => [k, p.died - p.born])
    );
}

console.log('= Перевірка варіантів підрахунку віку =\n');

const people = {
    newton:   { born: 1643, died: 1727 },
    darwin:   { born: 1809, died: 1882 },
    turing:   { born: 1912, died: 1954 },
    bohr:     { born: 1885, died: 1962 },
};

console.log('1. for..in:');
console.log(yearsForIn(people));

console.log('\n2. Object.keys():');
console.log(yearsKeys(people));

console.log('\n3. Object.entries():');
console.log(yearsEntries(people));

console.log('\n4. reduce():');
console.log(yearsReduce(people));

console.log('\n5. map() + fromEntries():');
console.log(yearsMap(people));

console.log('\n= Додатковий тест =');
const scholars = {
    galileo: { born: 1564, died: 1642 },
    pasteur: { born: 1822, died: 1895 },
    lovelace: { born: 1815, died: 1852 },
};

console.log('yearsForIn(scholars) =', yearsForIn(scholars));
