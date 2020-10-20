const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;

const getTableData = async () => {

  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'hr',
      password: 'hr',
      connectString: 'orcl'
    });

    const result = await connection.execute(
      `select  inv_year inv_type inv_no from  sal_invh` ,

    );
    let firstQuery = result.rows;
    console.log('firstQuery :' + firstQuery)
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