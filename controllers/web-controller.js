import control from './../application.controller.js'

const webPage = async (req, res) => {
    const html = await control.serveFullPage('/pages/web.html')
    res.send(html)
}

export default { webPage }