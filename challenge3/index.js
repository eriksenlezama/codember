import fetch from 'node-fetch'

const lightsSequenceTxt = await fetch("https://codember.dev/colors.txt")
    .then(res => res.text())

const lightsSequence = JSON.parse(lightsSequenceTxt)

let first = lightsSequence[0]
let second = lightsSequence[1]
let count = 2
let index = 2
let highest = 2
let highestColor = lightsSequence[1]
let color = lightsSequence[1]

while (index < lightsSequence.length - 1) {
    if (lightsSequence[index] == lightsSequence[index - 2] && lightsSequence[index + 1] == lightsSequence[index - 1]) {
        index += 2
        count += 2
    } else {
        if (count > highest) {
            highest = count
            highestColor = lightsSequence[index - 1]
        }

        count = 2
        index += 1
        first = lightsSequence[index - 2]
        second = lightsSequence[index - 1]
        color = lightsSequence[index  - 1]
    }
}

console.log({highestColor, highest})