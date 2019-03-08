// server.js
const next = require('next')
const routes = require('./config/routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')

app.prepare().then(() => {
  express().use(handler)
  express().listen(3000, () => {
    console.log("listening on port 3000")
  })
})
