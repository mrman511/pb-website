const { response } = require('express');
const express = require('express')
const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT languages.* FROM languages`)
    .then((response) => {
      res.json(response.rows);
    })
  });

  router.get('/:language_id', (req, res) => {
    const language_id = req.params.language_id;
    db.query(`
    SELECT frameworks.* FROM frameworks
    WHERE language_id = $1
    `, [language_id])
    .then((response) => {
      res.json(response.rows);
    })
  });

  return router;
}