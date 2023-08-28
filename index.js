import express from 'express'
import path from 'path'
import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/", {
    dbName: "backend"
})
.then(() => console.log("Database connected"))
.catch((e) => console.log(e))

const dataSchema = new mongoose.Schema({
    name: String,
    email: String
})

const users = mongoose.model("users", dataSchema)

const app = express()

//Using Middleware
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get("/", (req,res) => {

    // const pathName = path.resolve()
    // res.sendFile(path.join(pathName, 'index.html'))

    res.render('index', {name: 'peter'})
})

app.get("/success", (req,res) => {
    res.render('success')
})

app.post("/submit", async (req,res) => {
    const {name, email} = req.body
    await users.create({name, email})
    console.log(req.body)
    res.redirect("/success")
})

app.listen(5000, () => {
    console.log('Server Started')
})