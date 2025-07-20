import control from './../application.controller.js'
import './../global.js'

const homePage = async (req, res) => {
    let html = await control.serveFullPage('/pages/index.html')
    const banner = await READ('/pages/components/home-banner.html')

    html = html.replace('{{banner}}', banner)
    res.send(html)
}

export default { homePage }