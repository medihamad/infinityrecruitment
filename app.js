const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('add-candidate')
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

const test = {title: 'medi', age: 30};

module.exports = test;