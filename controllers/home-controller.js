import control from './../application.controller.js'
import './../global.js'

const homePage = async (req, res) => {
    let html = await READ('/pages/index.html')

    const techSkills = [
        'C#', 
        'HTML', 
        'CSS', 
        'Javascript', 
        'NodeJs', 
        'Ruby', 
        'SQL', 
        'ClipStudioPaint'
    ]
    const techHtml = techSkills.map(i => `<h2>${i}</h2>`).join('')
    html = html.replace(/{{marquee-names}}/g, techHtml)

    const page = await control.serveFullPage(html, req)
    res.send(page)

    // some are done after.. like the footer
}

export default { homePage }