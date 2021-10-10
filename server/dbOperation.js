const config=require('./dbconfig'),
sql=require('mssql');

const getClients=async()=>{
    try{
    let pool= await sql.connect(config);
    let clients=pool.request().query("SELECT * from CMPT373_client")
    console.log(clients)
    return clients;
    }
    catch(error){
        console.log(error)

    }
}
module.exports={
    getClients
}