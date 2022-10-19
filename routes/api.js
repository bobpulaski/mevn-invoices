const {Router} = require('express');
const router = Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mevn-invoice'
});

router.get('/company', async (req, res) => {
    try {

        connection.query(
            'SELECT * FROM `companies`',
            function (err, results) {
                if (err) console.log(err);
                return res.status(200).json(results);
                //console.log(results); // results contains rows returned by server
            });
    } catch (e) {
        res.status(500).json({message: 'Error on Company route'});
    }
});

module.exports = router;