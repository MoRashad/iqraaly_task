# Iqraaly full-stack task

this is a full-stack socail media posts for iqraaly

## 1 - using docker

- `git clone https://github.com/MoRashad/iqraaly_task.git`
- `cd iqraaly_task`
- `docker-compose up --build`
- after finishing open the browser and type `http://localhost:3000`
- for php my admin dashboard `http://localhost:8080`
- username: `simple`, password: `123456789`

## 2 npm

- setup mysql local database
- open terminal in project directory and type these commands
- `cd server`
- `cd express` or ` cd nestjs`
- `npm i`
- edit the `.env` file with your database info
- `npm start`
- open another terminal in the project directory and type these commands
- `cd client`
- `npm i`
- `npm start`
- the open browser and type `http://localhost:3000`

## server

server created using using express.js and nestjs

### express

    - packeges used
    	- express
    	- ajv: schema validation
    	- mysql2

### nestjs

    - packeges used
    	- class validation: schema validation
    	- mysql
    	- typeform

## client

### reactjs

    - packeges used
    	- axios
    	- react-router
    	- react-icons
    	- tailwind
