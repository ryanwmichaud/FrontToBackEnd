const express = require('express');
const app = express();
const port = 8383;

var last = 0
var curr = 0
var sum =  0

app.use(express.static('public')) //default served at home route
app.use(express.json())
const cors = require('cors')
app.use(cors());

app.get('/doubled', (req, res) => { //"send to" the server. really telling it what to respond with
    
    
    res.status(200).json(
        {
            last: `${last}`,
            current: `${curr}`,
            sum:  `${sum}`
        })
})

app.post('/', (req,res)=>{ //receive the fetch post req w new data. get the data and do stuff w it. here I jsut saved it globally. 
    last = curr
    const {parcel} = req.body
    curr = parcel
    sum = parseInt(curr) + parseInt(last)
    if (!parcel){
        return res.status(400).send({status: 'failed'})
    }
    res.status(200).send({status: 'received'})
})

app.listen(port, ()=>console.log(`server has started on port ${port}`))