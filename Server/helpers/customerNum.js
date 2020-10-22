const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;
const {connectionvar} = require('./config')

const getCustomerData = async (bill) => {

    let connection;

    try {
        connection = await oracledb.getConnection(connectionvar);

        let sql = `select cus_no,inv_date from sal_invh
        where inv_year = ${bill.inv_year}
          and inv_type = ${bill.inv_type}
          and inv_no   = ${bill.inv_no};`

        const result = await connection.execute(
          sql   ,
        );
        let firstQuery = result.rows;

        console.log('customer Query output:' , firstQuery)
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

module.exports = getCustomerData