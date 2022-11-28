import fetch from 'node-fetch'

const encryptedMessage = await fetch("https://codember.dev/encrypted.txt")
    .then(res => res.text())

function stringDecodember(message) {
    let i = 0
    let msgText = message
    let letter = ""
    let decryptedMessage = ""

    while(msgText.length > 0) {
        if (Number.parseInt(msgText.substring(0,1)) > 1) {
            letter = msgText.substring(0,2)
            msgText = msgText.substring(2)
        } else {
            letter = msgText.substring(0,3)
            msgText = msgText.substring(3)
        }
        decryptedMessage += String.fromCharCode(Number.parseInt(letter))
    }

    return decryptedMessage
}

const words = encryptedMessage.split(" ")
let decryptedMessage = ""

words.forEach(word => {
    decryptedMessage += `${stringDecodember(word)} `
})

console.log(decryptedMessage)