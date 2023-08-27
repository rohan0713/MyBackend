import express from 'express'
import path from 'path'

const app = express()

app.get("/", (req,res) => {

    const pathName = path.resolve()
    res.sendFile(path.join(pathName, 'index.html'))
})

app.listen(5000, () => {
    console.log('Server Started')
})