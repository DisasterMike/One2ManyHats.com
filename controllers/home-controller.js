import control from './../application.controller.js'
import './../global.js'

const homePage = async (req, res) => {
    let html = await control.serveFullPage('/pages/index.html')

    // read the banner html and add it below

    // html = html.replace('{{banner}}', )
    res.send(html)
}

export default { homePage }