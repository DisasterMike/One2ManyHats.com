import './global.js'

// page controllers
import homeController from './controllers/home-controller.js'
import gamesController from './controllers/games-controller.js'
import webController from './controllers/web-controller.js'
import boardGamesController from './controllers/board-games-controller.js'
import aboutController from './controllers/about-controller.js'

import dayjs from 'dayjs'

const serveFullPage = async (filePath) => {
    let html = await READ(filePath)

    // TODO - set up fonts the same way i did in my last project!!!!!
    // const fonts = await fs.promises.readFile('pages/components/fonts.html')
    // html = html.replace('{{fonts}}', fonts)

    const navbar = await READ('pages/components/navbar.html')
    
    let footer = await READ('pages/components/footer.html')
    const copyrightText = `One2ManyHats ${dayjs().format('YYYY')}`
    footer = footer.replace('{{copyright}}', copyrightText)

    html = html.replace('{{navbar}}', navbar)
    html = html.replace('{{footer}}', footer)

    return html
}

export default { serveFullPage, 
    homeController, gamesController, webController, boardGamesController, aboutController }