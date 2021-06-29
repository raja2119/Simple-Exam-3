const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const cors = require('cors');


require("./models/Question")
require("./models/QuestionSet")
require("./models/User")



//load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

//route files
const questionsSets = require('./routes/questionsSets');
const users = require('./routes/users');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//body parser
app.use(express.json());

//dev logging middleware
if(process.env.NODE_ENV==='development'){   //only when using dev env
    app.use(morgan('dev'));
}

//mount routers
app.use('/api/v1/questions-sets',questionsSets);
app.use('/api/v1/users',users);


//error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//handle unhandled PromeseRejection
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`.red);
    
    //Close Server & exit process
    server.close(()=> process.exit(1));
})

