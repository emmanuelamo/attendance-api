 # Simple Attendance API 

### simple attendance program for school 

Clone this repository

$ git clone https://github.com/emmanuelamo/attendance-api.git

After clone: cd attendance-api/

Follow this step

$ npm install

$ npm dev

$ change .env.example file to .env

$ In the .env, update your database info. Mostly the root_user, password and database name. make sure you create your database as well with the same name in the .env file

$ run (node ace migration:run) to create the tables

$ Optional - run (node ace db:seed) to insert some few records to work with

$ run (node ace serve --watch) to start the server

$ Copy the url in the terminal and apend "/api/following_endpoints", and test it in any environment you prefer.



# All endpoint

GET - /attendance (get all attendance, in batches of 10)

POST - /attendance/id (get one contact by id)

GET- /attendance (insert attendance)

PATCH - /attendance/id (Update attendance by id)

DELETE - /attendance/id (Delete contact by id)

# note: Fields include
studentId
firstName

lastName

telephone

