# SIMPLE-CRUD

# SIMPLE-CRUD/db/postgreDb.js
The provided code initializes a PostgreSQL connection pool using the pg library. 
The pool is configured with the necessary connection parameters such as the username, host, 
database name, password, and port number. The initialized pool object is exported, allowing other modules 
to use it for executing database queries and managing connections efficiently.

# SIMPLE-CRUD/server/server.js
The provided code sets up an Express server that listens on port 3000. 
It uses the express module to create the server instance. It also registers a route for the root
URL ("/") that sends a "Hello World!" response. Additionally, it mounts the studentRoutes module under the 
"/api/v1/students" path, allowing further routing and handling of student-related API endpoints. When the server starts 
listening, it logs a message indicating the port it is listening on.

# SIMPLE-CRUD/src/student/controller/controller.js
The provided code defines various functions for handling student-related operations using the pool object from the 
postgreDb module and SQL queries from the queries module. These functions include retrieving all students, retrieving
a student by ID, adding a new student, removing a student, and updating a student. Each function interacts with the 
PostgreSQL database using the pool.query method and sends appropriate responses based on the results. These functions can
be used as route handlers in an Express application to handle student-related API endpoints.

# SIMPLE-CRUD/src/student/queries/queries.js

The provided code exports a set of SQL queries as constants. These queries are used for interacting with a "users" table 
in a PostgreSQL database. The queries include selecting all users, selecting a user by ID, checking if an email exists in 
the table, adding a new user, removing a user by ID, and updating a user's name by ID. These queries can be imported and 
used in conjunction with a PostgreSQL database connection to perform various operations on the "users" table.

# SIMPLE-CRUD/src/student/routes/routes.js
The provided code exports an Express Router that defines the routes for handling CRUD operations on student data. 
The routes include retrieving all students, adding a new student, retrieving a student by ID, updating a student by ID, 
and deleting a student by ID. These routes are associated with corresponding controller functions that handle the logic
for each operation.

# SIMPLE-CRUD/package.json
The provided package.json file contains the necessary information and dependencies for the "crud" project.
It specifies the project name, version, description, entry point (index.js), available scripts (including a "dev" script 
for running the server with Nodemon), dependencies (Express and pg), and devDependencies (Chai, Chai-HTTP, Mocha, and Nodemon). 
The project is licensed under ISC.
