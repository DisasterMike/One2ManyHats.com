import control from './../application.controller.js'

const aboutPage = async (req, res) => {
    let html = await READ('/pages/about.html')

    const page = await control.serveFullPage(html, req)
    res.send(page)
}

export default { aboutPage }