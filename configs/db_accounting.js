const oracledb=require('oracledb')
const dbConfig={
    user:'oracleadmin2024',
    password:'1das9moq-amhw2dcs2',
    connectString:'oracleaccounting2024.cd2norchyjvi.ap-southeast-1.rds.amazonaws.com/ORCL'
}
 async function query(sql,params){
    let connection;
    let result;
    try{
        connection= await oracledb.getConnection(dbConfig);
        if(params == undefined)
        {
            result= await connection.execute(sql,[],{outFormat: oracledb.OUT_FORMAT_OBJECT});
        }else{
            result= await connection.execute(sql,params,{autoCommit:true});
        }
        return result;
    }catch(err){
        console.log(err)
    }
 }
module.exports = { query }