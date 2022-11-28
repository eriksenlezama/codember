const min = 11098
const max = 98123

const possiblePasswords = []

const includesRepeated = pass => {
    return `${pass}`.includes('55')
}

const isIncreasing = pass => {
    return  `${pass}`[4] >= `${pass}`[3] &&
            `${pass}`[3] >= `${pass}`[2] &&
            `${pass}`[2] >= `${pass}`[1] &&
            `${pass}`[1] >= `${pass}`[0]
}

for (let i = min; i < max; i++) {
    if (includesRepeated(i) && isIncreasing(i)) {
        possiblePasswords.push(i)
    }
}

console.log(possiblePasswords.length, possiblePasswords[55])