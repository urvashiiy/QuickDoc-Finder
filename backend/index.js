const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')


const userRouter = require('./Routers/User');
const doctorRouter = require('./Routers/AddDoctor')



// mongoose work as a middleware
app.use(express.json());

app.use(cors({
    origin:['http://localhost:5173']
}))

app.use('/user',userRouter);
app.use('/doctors',doctorRouter);




app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});