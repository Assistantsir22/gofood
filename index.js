const express = require('express')
const mongoose=require('mongoose');
const app = express()
const port = 5000
mongoose.set('strictQuery',false)
mongoose.set('strictQuery',true)

const mongoDB=require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})