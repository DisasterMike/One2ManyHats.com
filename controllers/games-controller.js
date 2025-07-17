import control from './../application.controller.js'

const gamesPage = async (req, res) => {
    const html = await control.serveFullPage('/pages/games.html')
    res.send(html)
}

export default { gamesPage }