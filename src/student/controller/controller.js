const pool = require('../../../db/postgreDb')
const queries = require('../queries/queries')


/** get students */
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

/** get students by id */
const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}


/** add students */
const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    //check if email exists 
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }

        //add students to postgredb 
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) throw error
            res.status(200).send("Student Created Sucessfully!");
        })
    });
}

/** remove student */
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database, could not remove.");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student removed succesfully.")
        })
    })
}

/** update student */
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("Student does not exist in the database");
        }

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if (error) throw error
            res.status(200).send("Student updated successfully");
        });
    });
};

module.exports = {
    getStudents,
    getStudentsById,
    addStudent,
    removeStudent,
    updateStudent
};