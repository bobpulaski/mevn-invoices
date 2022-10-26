const express = require('express');
const { Router, response } = require('express');
const router = Router();
const mysql = require('mysql2');


router.use(express.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mevn-invoice',
});

router.get('/company', async (req, res) => {
    try {
        await connection.execute(
            'SELECT * FROM `companies`',
            function (err, results) {
                if (err) console.log(err);
                return res.status(200).json(results);
            });
    } catch (e) {
        res.status(500).json({ message: 'Error on Company route' });
    }
});

router.post('/company', async (req, res) => {
    try {
        const { name, inn } = req.body;
        console.log(req.body);
        let sql = 'INSERT INTO companies (name, inn) VALUES (?, ?)';

        await connection.execute(sql, [name, inn], function (err, results, next) {
            if (err) console.log(err);
            //return res.status(200).json({message: '1 record added.'});
            return res.status(200).json(results);
        });

    } catch (e) {
        res.status(500).json({ message: 'Error on Company/POST route' });
    }

});

module.exports = router;