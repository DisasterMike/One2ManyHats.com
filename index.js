// Native packages
import express from 'express'
// import bodyParser from "body-parser"
import os from 'os'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url))

// References
import './global.js'
import control from './application.controller.js'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/', async (req, res) => {
    return control.homeController.homePage(req, res)
})
app.get('/games', async (req, res) => {
    return control.gamesController.gamesPage(req, res)
})
app.get('/web', async (req, res) => {
    return control.webController.webPage(req, res)
})
app.get('/board-games', async (req, res) => {
    return control.boardGamesController.boardGamesPage(req, res)
})
app.get('/about', async (req, res) => {
    return control.aboutController.aboutPage(req, res)
})

const getLocalIPAddress = () => {
    return Object.values(os.networkInterfaces())
        .flat()
        .find(i => i.family==='IPv4' && !i.internal)?.address || 'localhost'
}

const onServerStart = () => {
    const ipAddress = getLocalIPAddress()
    LOG(`Server is running on http://${ipAddress}:${port}`)
}
app.listen(port, onServerStart)