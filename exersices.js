const roomNames = rooms.map(room => room.name)
console.log(roomNames)



const roomsWithTVs = rooms.filter(room => room.media?.devices?.includes('tv'))
console.log(roomsWithTVs)


const roomsWithFans = rooms
    .filter(({ fans }) => fans?.length)
    .map(({ name }) => name)
    .sort((a, b) => a.localeCompare(b))
console.log(roomsWithFans)



const allLights = rooms.reduce((prev, curr) => {
    return [ ...new Set([ ...prev, ...curr.lights ]) ]
}, [ ])

console.log(allLights)

const rooms = require('./rooms.json')

const roomSlugs = rooms
.reduce((prev, ({ name })) => {
    prev[name] = name.toLowerCase().replaceAll(' ', '-')
    return prev
}, { })

console.log(roomSlugs)
