import control from './../application.controller.js'

const webPage = async (req, res) => {
    let html = await READ('/pages/web.html')

    const page = await control.serveFullPage(html, req)
    res.send(page)
}

export default { webPage }