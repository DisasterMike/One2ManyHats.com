// Native packages
import express from 'express'
import bodyParser from "body-parser"
import os from 'os'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import dayjs from 'dayjs'
const __dirname = dirname(fileURLToPath(import.meta.url))

// References
import './global.js'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/', async (req, res) => {
    // TODO - set up a controller and make this into a function!!! (it will help with LOGs)
    const html = await serveFullPage('/pages/index.html')
    res.send(html)
})


// TODO - extract this into a controller??
const serveFullPage = async (filePath) => {
    let html = await READ(filePath)

    // TODO - set up fonts the same way i did in my last project!!!!!
    // // add in all font links
    // const fonts = await fs.promises.readFile('pages/components/fonts.html')
    // html = html.replace('{{fonts}}', fonts)

    const navbar = await READ('pages/components/navbar.html')
    
    let footer = await READ('pages/components/footer.html')
    const copyrightText = `One2ManyHats ${dayjs().format('YYYY')}`
    footer = footer.replace('{{copyright}}', copyrightText)

    html = html.replace('{{navbar}}', navbar)
    html = html.replace('{{footer}}', footer)

    return html
}


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