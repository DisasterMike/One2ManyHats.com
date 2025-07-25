import control from './../application.controller.js'
import './../global.js'

const homePage = async (req, res) => {
    // NOTE: for anything specific, do it BEFORE serveFullPage
        // i.e. things created with javascript here...

    let html = await control.serveFullPage('/pages/index.html')
    res.send(html)

    // some are done after.. like the footer
}

export default { homePage }