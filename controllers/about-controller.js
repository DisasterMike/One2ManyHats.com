import control from './../application.controller.js'

const aboutPage = async (req, res) => {
    const html = await control.serveFullPage('/pages/about.html')
    res.send(html)
}

export default { aboutPage }