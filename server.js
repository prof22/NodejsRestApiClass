const app = require('./app');

const PORT = 3000;

app.listen(PORT,"0.0.0.0", ()=>{
    console.log(`server is running on ${PORT}`);
})