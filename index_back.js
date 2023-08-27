import http from 'http'
import name from './features.js'
import {age, state} from './features.js'
import * as myObj from './employee.js'
import { getEven } from './calculate.js'
import fs from 'fs'

// const dd = fs.readFile('./index.html', (err, data) => {
//     console.log(data)
// })

console.log(name)
console.log(age)
console.log(state)

console.log(myObj.default)
console.log(myObj.department)
console.log(myObj.exp)

console.log(getEven())

const server = http.createServer((req,res) => {
    if(req.url === '/about'){
        res.end("<h1>About Page</h1>")
    }
    else if(req.url === '/'){
        fs.readFile('./index.html', (err,data) => {
            res.end(data)
        })
    }
})

server.listen(5000, () => {
    console.log("SERVER IS RUNNING")
})