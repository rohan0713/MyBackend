import express from 'express'
import path from 'path'

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

app.post("/submit", (req,res) => {
    console.log(req.body)
    res.redirect("/success")
})

app.listen(5000, () => {
    console.log('Server Started')
})