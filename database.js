const pg = require("pg")
const pool = new pg.Pool({
    connectionString: "YOUR_POSTGRES_CONNECTION_STRING_GOES_HERE"
})

module.exports = pool