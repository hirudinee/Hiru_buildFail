module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["Hiru_test"] = {
        host: process.env.EndPoint_rdsHirutest,
        port: sample,
        user: "Hiru",
        password: "12345678",
        database: "Test",
    };
    
    };