import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards";


//App config 
const app = express();
const port = process.env.PORT || 8001
const connection__url = `mongodb+srv://admin:FMcCK2ksxBm0YqBJ@cluster0.0stpq.mongodb.net/lovelydb?retryWrites=true&w=majority`

//Middelwares 

//DB Config 
mongoose.connect(connection__url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

//API Endpoinds
app.get('/', (req, res) => res.status(200).send('Hello Bartek'));

app.post('/lovely/card', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('lovely/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));