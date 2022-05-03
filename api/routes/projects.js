const { response } = require('express');
const express = require('express')
const router = require('express').Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`
    SELECT * FROM projects
    `).then((response) => {
      res.json(response.rows)
    })
  });

  router.get('/:project_id/technologies', (req, res) => {
    const projectId = req.params.project_id;
    db.query(`
    SELECT * FROM technologies
    WHERE project_id = $1
    `, [projectId])
    .then((response) => {
      res.json(response.rows);
    })
  });

  router.get('/:project_id/deploys', (req, res) => {
    const projectId = req.params.project_id;
    db.query(`
    SELECT * FROM deploys
    WHERE project_id = $1
    `, [projectId])
    .then((response) => {
      res.json(response.rows);
    })
  });

  return router;
}