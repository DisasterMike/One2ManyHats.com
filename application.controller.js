import './global.js'

// page controllers
import homeController from './controllers/home-controller.js'
import gamesController from './controllers/games-controller.js'
import webController from './controllers/web-controller.js'
import boardGamesController from './controllers/board-games-controller.js'
import aboutController from './controllers/about-controller.js'

import dayjs from 'dayjs'

/**
 * Takes the page html and replaces any templates like {{navbar}} with that component html.
 * Mostly used for common things like navbar, header, footer etc.
 * @param {*} html - current page to be loaded
 * @returns {*} formatted html with all the components added. i.e. fonts, footer, navbar etc.
 */
const serveFullPage = async (html, req) => {
    // let html = await READ(filePath)

    // stuff that just needs reading
    const components = html.match(/{{.*?}}/g)
    for (let i = 0; i < components.length; i++) {
        const component = components[i]
        const componentHtml = await READ(`pages/components/${component.replace(/{{/g, '').replace(/}}/g, '')}.html`)
        html = html.replace(component, componentHtml)
    }

    const copyrightText = `One2ManyHats ${dayjs().format('YYYY')}`
    html = html.replace('{{copyright}}', copyrightText)

    // change the language toggle to either checked or not on load
        // it is set to the opposite so the slider can move after page loads
    const language = req.cookies.lang || ''
    html = html.replace('{{language}}', language === 'jp' ? '' : 'checked') // TODO - should i change the templating here????

    // change text based on language settings
    const textToLocalizeArr = html.match(/\[\[t: \w+(?:-\w+)*\]\]/g) || []
    for (let i = 0; i < textToLocalizeArr.length; i++) {
        const text = textToLocalizeArr[i]
        let localizedText = text.match(/t: \w+(?:-\w+)*/)[0].split(': ')[1].localize(language)
        if (Array.isArray(localizedText)) localizedText = localizedText.join('\n')
        html = html.replace(text, localizedText)
    }

    return html
}

export default { serveFullPage,
    homeController, gamesController, webController, boardGamesController, aboutController }