const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;
const {connectionvar} = require('./config')

const getTableData = async () => {

  let connection;

  try {
    connection = await oracledb.getConnection(connectionvar);

    const result = await connection.execute(
      `select  inv_year ,inv_type, inv_no from  sal_invh` ,
    );
    let firstQuery = result.rows;
    console.log('tableQuery output :' + firstQuery)
    return firstQuery ;

    
  } catch (err) {
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

module.exports = getTableData