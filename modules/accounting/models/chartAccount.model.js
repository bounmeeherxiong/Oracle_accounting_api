const db = require('../../../configs/db_accounting');
class chartAccount {
    async selectAllAccountType() {
        const result= await db.query('SELECT * FROM ALL_ACCOUNTS_TYPE');
        return result.length == 0 ? null : result.rows;
    };
    async InsertChartAccount(data){
        return await db.query("BEGIN INSERT_CHART_OF_ACCOUNTS(:ACCOUNT_TYPE_UID,:COMPANY_UID,:ACCOUNT_UID,:CHART_NAME_ENG,:CHART_PARENTS,:CHART_RATE,:CHART_CREATEDATE,:CHART_CURRENCY_CODE,:CHART_CREATED_BY,:OPENING_BALANCES,:OPENING_STATUS,:BS_ID,:STATUS_DEBIT_CREDIT);END;",data);
    }
}
module.exports = chartAccount;