## Note Taking Site:

This repository consists of 2 projects:

### 1. React Front End - reactjs-note folder

To run this application type in the following in the console:
> npm install  
> npm start

Application will run on http://localhost:4000/

### 2. Node API api-note folder
To run this application type the following in the console:
> npm install  
> nodemon server.js

Application will run on http://localhost:3000/

The following calls are available:  
GET http://localhost:3000/notes   
POST http://localhost:3000/note   
PUT http://localhost:3000/note   
DELETE http://localhost:3000/note  

### Notes:
All the data is saved in memory.  Restarting the front end will remove all notes, but previous notes can be retrieved by using the "Get Saved Notes" button.  
The backend can be run on its own, or used through the front end.  Restarting the backend will clear all saved records.
