// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//   res.send(__dirname + "/views/index.html")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require("express")
const app = express()
const port = 3000
app.use("/views", express.static(__dirname + "/views"))
app.use("/public", express.static(__dirname + "/public"))
//public optional argit creates , in html ../public need to add it to the path of html
//it will loop over all the files in the path you give it
//they want to get the html file, you give
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})
app.get('/about', (request, res) => {
    res.sendFile(__dirname + "/views/about.html")
})
app.get('/works', (request, res) => {
    res.sendFile(__dirname + "/views/works.html")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})