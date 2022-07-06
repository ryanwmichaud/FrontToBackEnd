const express = require('express');
const app = express();
const port = 8383;

function calc(num){
    return num * 2
}

var num = 0;

app.use(express.static('public')) //default served at home route
app.use(express.json())
const cors = require('cors')
app.use(cors());

app.get('/doubled', (req, res) => {
    
    ret = calc(num)
    console.log(ret);
    res.status(200).json({info: `${ret}`})
})

app.post('/', (req,res)=>{
    const {parcel} = req.body
    console.log(parcel);
    num = parcel;
    if (!parcel){
        return res.status(400).send({status: 'failed'})
    }
    res.status(200).send({status: 'received'})
})

app.listen(port, ()=>console.log(`server has started on port ${port}`))