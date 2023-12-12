const express = require('express')
const auth = require('../middleware/auth')
const isLoggedIn = require('../middleware/isLoggedIn')
const router = express.Router()

router.use(isLoggedIn) // we must place this before any other routes

router.get('/', (req, res) => {
    res.status(200).render('home') 
})

router.get('/signup', auth, (req, res) => {
    res.status(200).render('signup')
})

router.get('/login', (req, res) => {
    res.status(200).render('login')
})

router.get('/me', auth, (req, res) => {
    res.status(200).render('dashboard')
})

router.get('/dashboard', (req, res) => {
    res.status(200).render('dashboard')
})

module.exports = router