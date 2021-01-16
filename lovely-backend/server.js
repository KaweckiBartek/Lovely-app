import express from "express"
import mongoose from "mongoose"

//App config 
const app = express();
const port = process.env.PORT || 8001

//Middelwares 

//DB Config 

//API Endpoinds
app.get('/', (req, res) => res.status(200).send('Hello Bartek'));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));