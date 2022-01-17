const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const express = require('express');

const app = express();
const swaggerSpec = YAML.load(path.join(__dirname,'./build/swagger.yaml'));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
//asdfasdfa
app.get('/',(req,res)=>{
    console.log('test1');
    res.send("hello!");
});

app.listen(3000,()=>{
    console.log('server start');
});