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

    // stuff that just needs reading
    const components = html.match(/{{.*?}}/g);
    for (let i = 0; i < components.length; i++) {
        const name = components[i]
        const component = await READ(`pages/components/${name.replace(/{{/g, '').replace(/}}/g, '')}.html`)
        html = html.replace(name, component)
    }

    const copyrightText = `One2ManyHats ${dayjs().format('YYYY')}`
    html = html.replace('{{copyright}}', copyrightText)

    return html
}

export default { serveFullPage,
    homeController, gamesController, webController, boardGamesController, aboutController }