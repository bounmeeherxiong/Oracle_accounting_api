
const Accounts = require('../models/chartAccount.model');
const accountsModel = new Accounts();
const uuid = require('uuid');

exports.SelectAllCurrency = async (req, res, next) => {
    try{
        const data = await accountsModel.SelectAllCurrency()
        res.status(200).json({
            statusCode: 200,
            result: data,
        });
    }catch(err){
        console.log(err)
    }
};

exports.InsertChartAccount = async (req, res, next) => {
    try{
        // const CurrencyUid = uuid.v4();
        // const Currencyname = req.body.Currencyname;
        // const Createdate=req.body.Createdate;
        const data={
            ACCOUNT_TYPE_UID,
            COMPANY_UID,
            ACCOUNT_UID,
            CHART_NAME_ENG,
            CHART_PARENTS,
            CHART_RATE,
            CHART_CREATEDATE,
            CHART_CURRENCY_CODE,
            CHART_CREATED_BY,
            OPENING_BALANCES,
            OPENING_STATUS,
            STATUS_DEBIT_CREDIT
             }=req.body;
             console.log("data=",data)

        await accountsModel.InsertChartAccount(data);
        res.status(201).json({
            statusCode: 201,
            message: "successfully"
        });

    }catch(err){
        console.log(err)
    }
};


