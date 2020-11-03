const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const PORTDB = 27017;
const { API_VERSION, IP_SERVER } = require("./config");


mongoose.connect(`mongodb://${IP_SERVER}:${PORTDB}/brayan`,
 {useNewUrlParser: true}, (erro, res) => {
    if(err){
        throw err;

    }else{
        console.log("Exito");
        app.listen(port, () => {
            console.log("########################");
            console.log("####### API REST #######");
            console.log("########################");
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
        })
    }
 });