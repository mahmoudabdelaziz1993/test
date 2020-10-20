/* DESCRIPTION
 *   Tests a basic connection to the database.
 *   See dbconfig.js for information on connectString formats.
 *
 *   For a connection pool example see connectionpool.js
 *
 *   This example uses Node 8's async/await syntax.
 *
 *****************************************************************************/
const oracledb = require('oracledb');
const dbConfig = require('./config')


const dbConnectionTest = async () => {

    let connection;

    try {
        // Get a non-pooled connection
        connection = await oracledb.getConnection(dbConfig);
        console.log(' ;)  OracleDb connection success !! ');
    } catch (err) {
        console.log(' :(  OracleDb connection failed !! ');
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
module.exports = dbConnectionTest