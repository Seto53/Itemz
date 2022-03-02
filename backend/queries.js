const format = require('pg-format');
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
    client.query(`CREATE TABLE IF NOT EXISTS "Users"
                  (
                      "userID"   SERIAL,
                      "picture"  text         NOT NULL,
                      "name"     varchar(255) NOT NULL,
                      "email"    varchar(255) NOT NULL,
                      "password" text         NOT NULL,
                      "coins"    float DEFAULT 0.00,
                      PRIMARY KEY ("userID")
                  );`, (err, res) => {
        if (!err) {
            console.log('Users created')
            const sql = 'INSERT INTO "Users" ("userID", "picture","name","email","password","coins") VALUES %L';
            const values = [
                [1, "null", "John Doe", "jd@gmail.com", "password1234jd", 1234],
                [2, "null", "Marc Sam", "ms@gmail.com", "password1234ms", 92],
                [3, "null", "Alice John", "aj@gmail.com", "password1234aj", 200],
                [4, "null", "Peter Parker", "pp@gmail.com", "password1234pp", 29],
                [5, "null", "Sam Doe", "sd@gmail.com", "password1234sd", 1000000]
            ];
            client.query(format(sql, values), [], (error, results) => {
                if (!error) {
                    console.log("Users test data inserted")
                    console.log(results.rows)
                } else {
                    console.log(error.message)
                }
            })
        }
    });

    client.query(`CREATE TABLE IF NOT EXISTS "Drop"
                  (
                      "dropID"      SERIAL,
                      "rarity"      varchar(255) NOT NULL,
                      "asset"       text         NOT NULL,
                      "name"        varchar(255) NOT NULL,
                      "series"      varchar(255),
                      "description" text,
                      "price"       float        NOT NULL,
                      "count"       integer      NOT NULL,
                      "dropDate"    timestamp    NOT NULL,
                      PRIMARY KEY ("dropID")
                  );`, (err, res) => {
        if (!err) {
            console.log('Drop created')
            const sql = 'INSERT INTO "Drop" ("dropID", rarity, asset, name, series, description, price, count, "dropDate") VALUES %L';
            const values = [
                [1, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed.gif"', 'Robot 1', 'Robots', 'Robot #1 Description', 50, 10, '"2022-02-27", "11:00:00"'],
                [2, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (1).gif"', 'Robot 2', 'Robots', 'Robot #2 Description', 50, 7, '"2022-02-28", "11:00:00"'],
                [3, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (2).gif"', 'Robot 3', 'Robots', 'Robot #3 Description', 50, 10, '"2022-03-01", "11:00:00"'],
                [4, 'Rare', '"../docs/assets/collectibles/robot-nft-temp/unnamed (3).gif"', 'Robot 4', 'Robots', 'Robot #4 Description', 70, 5, '"2022-03-01", "15:00:00"'],
                [5, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (4).gif"', 'Robot 5', 'Robots', 'Robot #5 Description', 50, 7, '"2022-03-02", "11:00:00"'],
                [6, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (5).gif"', 'Robot 6', 'Robots', 'Robot #6 Description', 50, 10, '"2022-03-03", "11:00:00"'],
                [7, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (6).gif"', 'Robot 7', 'Robots', 'Robot #7 Description', 50, 7, '"2022-03-04", "11:00:00"'],
                [8, 'Epic', '"../docs/assets/collectibles/robot-nft-temp/unnamed (7).gif"', 'Robot 8', 'Robots', 'Robot #8 Description', 100, 3, '"2022-03-05", "11:00:00"'],
                [9, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (8).gif"', 'Robot 9', 'Robots', 'Robot #9 Description', 50, 10, '"2022-03-06", "11:00:00"'],
                [10, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (9).gif"', 'Robot 10', 'Robots', 'Robot #10 Description', 50, 10, '"2022-03-07", "11:00:00"'],
                [11, 'Rare', '"../docs/assets/collectibles/robot-nft-temp/unnamed (10).gif"', 'Robot 11', 'Robots', 'Robot #11 Description', 70, 5, '"2022-03-08", "11:00:00"'],
                [12, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (11).gif"', 'Robot 12', 'Robots', 'Robot #12 Description', 50, 10, '"2022-03-09", "11:00:00"'],
                [13, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (12).gif"', 'Robot 13', 'Robots', 'Robot #13 Description', 50, 7, '"2022-03-10", "11:00:00"'],
                [14, 'Legendary', '"../docs/assets/collectibles/robot-nft-temp/unnamed (13).gif"', 'Robot 14', 'Robots', 'Robot #14 Description', 500, 1, '"2022-03-15", "11:00:00"']
            ];
            client.query(format(sql, values), [], (error, results) => {
                if (!error) {
                    console.log("Drop test data inserted")
                    console.log(results.rows)
                } else {
                    console.log(error.message)
                }
            })
        }
    });

    client.query(`CREATE TABLE IF NOT EXISTS "Mint"
                  (
                      "mintID" SERIAL,
                      "dropID" integer references "Drop" ("dropID"),
                      "userID" integer references "Users" ("userID"),
                      PRIMARY KEY ("mintID")
                  );`, (err, res) => {
        if (!err) console.log('Mint created')
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
    if (isNaN(id)) return
    pool.query('SELECT * FROM "Users" WHERE "userID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {password, picture, name, email} = request.body

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
    if (isNaN(id)) return
    const {name, email} = request.body

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
    if (isNaN(id)) return

    pool.query('DELETE FROM "Users" WHERE "userID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const getDrops = (request, response) => {
    pool.query('SELECT * FROM "Drop"', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDropById = (request, response) => {
    const id = parseInt(request.params.id)
    if (isNaN(id)) return

    pool.query('SELECT * FROM "Drop" WHERE "dropID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDropCount = (request, response) => {
    const id = parseInt(request.params.id)
    if (isNaN(id)) return

    pool.query('SELECT count FROM "Drop" WHERE "dropID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUpcomingDrop = (request, response) => {
    pool.query('SELECT * from "Drop" order by abs(extract(epoch from ("Drop"."dropDate" - CURRENT_TIMESTAMP))) limit 1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getDrops,
    getDropById,
    getDropCount,
    getUpcomingDrop
}