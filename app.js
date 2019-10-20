const express = require('express')
const cors = require('cors')
const app = express();



app.set('port', '9000')

app.use(cors());

app.use(express.json())
app.get('/', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
});
app.use('/', cors(), require('./src/routes/index'));




app.listen(app.get('port'), () => {
    console.log('Server has been started in port ' + app.get('port'))
})