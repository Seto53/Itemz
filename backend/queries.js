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
        if (!err) console.log('Users created')
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
                [1, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed.gif"', 'Robot 1', 'Robots', 'Robot #1 Description', 50, 10, '"2022-02-15", "11:00:00"'],
                [2, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (1).gif"', 'Robot 2', 'Robots', 'Robot #2 Description', 50, 7, '"2022-02-16", "11:00:00"'],
                [3, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (2).gif"', 'Robot 3', 'Robots', 'Robot #3 Description', 50, 10, '"2022-02-17", "11:00:00"'],
                [4, 'Rare', '"../docs/assets/collectibles/robot-nft-temp/unnamed (3).gif"', 'Robot 4', 'Robots', 'Robot #4 Description', 70, 5, '"2022-02-18", "11:00:00"'],
                [5, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (4).gif"', 'Robot 5', 'Robots', 'Robot #5 Description', 50, 7, '"2022-02-19", "11:00:00"'],
                [6, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (5).gif"', 'Robot 6', 'Robots', 'Robot #6 Description', 50, 10, '"2022-02-20", "11:00:00"'],
                [7, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (6).gif"', 'Robot 7', 'Robots', 'Robot #7 Description', 50, 7, '"2022-02-21", "11:00:00"'],
                [8, 'Epic', '"../docs/assets/collectibles/robot-nft-temp/unnamed (7).gif"', 'Robot 8', 'Robots', 'Robot #8 Description', 100, 3, '"2022-02-22", "11:00:00"'],
                [9, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (8).gif"', 'Robot 9', 'Robots', 'Robot #9 Description', 50, 10, '"2022-02-23", "11:00:00"'],
                [10, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (9).gif"', 'Robot 10', 'Robots', 'Robot #10 Description', 50, 10, '"2022-02-24", "11:00:00"'],
                [11, 'Rare', '"../docs/assets/collectibles/robot-nft-temp/unnamed (10).gif"', 'Robot 11', 'Robots', 'Robot #11 Description', 70, 5, '"2022-02-25", "11:00:00"'],
                [12, 'Common', '"../docs/assets/collectibles/robot-nft-temp/unnamed (11).gif"', 'Robot 12', 'Robots', 'Robot #12 Description', 50, 10, '"2022-02-26", "11:00:00"'],
                [13, 'Uncommon', '"../docs/assets/collectibles/robot-nft-temp/unnamed (12).gif"', 'Robot 13', 'Robots', 'Robot #13 Description', 50, 7, '"2022-02-27", "11:00:00"'],
                [14, 'Legendary', '"../docs/assets/collectibles/robot-nft-temp/unnamed (13).gif"', 'Robot 14', 'Robots', 'Robot #14 Description', 500, 1, '"2022-02-28", "11:00:00"']
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

    pool.query('SELECT * FROM "Drop" WHERE "dropID" = $1', [id], (error, results) => {
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
    getDropById
}