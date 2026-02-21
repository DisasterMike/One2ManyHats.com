import control from './../application.controller.js'

const boardGamesPage = async (req, res) => {
    let html = await READ('/pages/boardgames.html')

    const page = await control.serveFullPage(html, req)
    res.send(page)
}

export default { boardGamesPage }