const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
    })
})

pool.on('connect', client => {
    client.query(`CREATE TABLE IF NOT EXISTS "Users"(
    "userID" SERIAL,
    "picture" text NOT NULL, 
    "name" varchar(255) NOT NULL, 
    "email" varchar(255) NOT NULL,
    "password" text NOT NULL,  
    "coins" float DEFAULT 0.00, 
    PRIMARY KEY ("userID") 
    );` , (err, res) => {
        if(!err) console.log('Users created')
    });

    client.query(`CREATE TABLE IF NOT EXISTS "Drop"(
    "dropID" SERIAL,
    "rarity" varchar(255) NOT NULL,
    "asset" text NOT NULL,
    "name" varchar(255) NOT NULL,
    "series" varchar(255),
    "description" text,
    "price" float NOT NULL,
    "count" integer NOT NULL,
    "dropDate" timestamp NOT NULL,
    PRIMARY KEY ("dropID")
    );` , (err, res) => {
        if(!err) console.log('Drop created')
    });

    client.query(`CREATE TABLE IF NOT EXISTS "Mint"(
    "mintID" SERIAL,
    "dropID" integer references "Drop"("dropID"),
    "userID" integer references "Users"("userID"),
    PRIMARY KEY ("mintID")
    );` , (err, res) => {
        if(!err) console.log('Mint created')
        else console.log(err)
    });
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM "Users" ORDER BY "userID" ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM "Users" WHERE "userID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { password, picture, name, email } = request.body

    pool.query('INSERT INTO "Users" (password, picture, name, email) VALUES ($1, $2, $3, $4)', [password, picture, name, email], (error, result) => {
        if (error) {
            throw error
        }
        console.log(result)
        response.status(201).send(`User added`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE "Users" SET name = $1, email = $2 WHERE "userID" = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM "Users" WHERE "userID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}