import control from './../application.controller.js'

const gamesPage = async (req, res) => {
    let html = await READ('/pages/games.html')

    const page = await control.serveFullPage(html)
    res.send(page)
}

export default { gamesPage }