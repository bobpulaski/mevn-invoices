const express = require("express");
const { Router, response } = require("express");
const router = Router();
const mysql = require("mysql2");

router.use(express.json());

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mevn-invoice",
});

router.get("/company", async (req, res) => {
  try {
    await connection.execute(
      "SELECT * FROM `companies`",
      function (err, results) {
        if (err) console.log(err);
        return res.status(200).json(results);
      }
    );
  } catch (e) {
    res.status(500).json({ message: "Error on Company route" });
  }
});

router.get("/company/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let sql = "SELECT * FROM companies WHERE id = ?";
    await connection.execute(sql, [id], function (err, results) {
      if (err) console.log(err);
      res.status(200).json(results);
    });
  } catch (e) {}
});

router.put("/company/update", async (req, res) => {
  try {
    //console.log(req.body.data.id);
    let sql = "UPDATE companies SET name = ?, inn = ? WHERE id = ?";
    await connection.execute(
      sql,
      [req.body.data.name, req.body.data.inn, req.body.data.id],
      function (err, results) {
        if (err) console.log(err);
        res.status(200).json("put is ok");
      }
    );
  } catch (e) {
    res.status(500).json({ message: "Error on Company PUT" });
  }
});

router.post("/company", async (req, res) => {
  try {
    const { name, inn } = req.body;
    console.log(req.body);
    let sql = "INSERT INTO companies (name, inn) VALUES (?, ?)";

    await connection.execute(sql, [name, inn], function (err, results) {
      if (err) console.log(err);
      return res.status(200).json(results);
    });
  } catch (e) {
    res.status(500).json({ message: "Error on Company/POST route" });
  }
});

router.delete("/company/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let sql = "DELETE FROM companies WHERE id = ?";
    await connection.execute(sql, [id], function (err, results, next) {
      if (err) console.log(err);
      res.status(200).json(results);
    });
  } catch (e) {}
});

module.exports = router;
