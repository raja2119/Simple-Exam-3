# `SimpelExam`
## _A Simple Exam Portal_

SimpleExam is a examportal with basic authentication functionalities ,

## Installation


Install the dependencies and start the server.
#### Backend
`Make a mongoDB URI for a cluster`
```sh
git clone https://github.com/SD170/simpleExam
cd backend
npm install
cd config
```
##### make a file called `config.env` and write

NODE_ENV=development

PORT=5000

MONGO_URI=`paste your mongoDB project URI`

##### Back to CLI
```sh
cd ..  [to go to the "/backend"] 
npm run dev
```

#### Frontend
```sh
cd .. [to go to root '/']
cd /frontend
npm install
npm start
```

## License
MIT

