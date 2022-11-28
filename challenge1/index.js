import fetch from 'node-fetch'

const textUsers = await fetch("https://codember.dev/users.txt")
    .then(res => res.text())

const users = textUsers.split('\n\n')
const fields = ["usr", "eme", "psw", "age", "loc", "fll"]

let count = 0

const mapedUsers = users.map(e => e.replaceAll('\n', " "))

const validUsers = mapedUsers.filter(e => fields.every(field => e.includes(field)))

console.log(validUsers.length)
console.log(validUsers[validUsers.length-1])
