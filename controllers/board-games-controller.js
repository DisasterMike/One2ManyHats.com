import control from './../application.controller.js'

const boardGamesPage = async (req, res) => {
    const html = await control.serveFullPage('/pages/boardgames.html')
    res.send(html)
}

export default { boardGamesPage }