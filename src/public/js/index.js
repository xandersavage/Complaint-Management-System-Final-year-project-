import core from 'core-js';  //this will ONLY work with a bundler

import { login, logout } from './login';

const loginForm = document.querySelector('form')
const logoutButton = document.querySelector('.logout')

if (loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        login(email, password)
    })

if (logoutButton) logoutButton.addEventListener('click', logout)
