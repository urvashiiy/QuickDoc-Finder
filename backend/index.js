const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')


const userRouter = require('./Routers/User');
const doctorRouter = require('./Routers/AddDoctor');
const contactRouter = require('./Routers/Contact');
const UtilRouter = require('./Routers/Utils');



// mongoose work as a middleware
app.use(express.json());

app.use(cors({
    origin:['http://localhost:5173']
}))

app.use('/user',userRouter);
app.use('/doctor',doctorRouter);
app.use('/contact',contactRouter);
app.use('/contact',contactRouter);
app.use('/util',UtilRouter);


app.use(express.static('./Uploads'))

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});