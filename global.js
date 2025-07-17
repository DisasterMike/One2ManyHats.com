import dayjs from "dayjs";
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const getDatetime = () => dayjs().format('YYYY-MM-DD HH:mm:ss')

// just grabs the file path - defaulted to 'public' folder
global.FILE = (name, space = 'public') => path.join(__dirname, space, name)


// read and returns a string of the file - defaulted to 'public' folder
global.READ = (name, space = 'public') => fs.promises.readFile(path.join(__dirname, space, name), 'utf-8')
// e.g. const html = await file('/pages/components/navbar.html') 
    // or await file('/pages/components/navbar.html', 'FOLDER NAME')

global.LOG = (...args) => {
    const stack = new Error().stack;
    const coreParts = stack.split('\n')[2].split(' ').filter(Boolean).splice(1) // [func, (path/to/file:15:5)]

    let func
    let file
    if (coreParts.length > 1) { // called inside a function
        const title = coreParts[0].split('.')
        func = title.length > 1 ? title[1] : title[0]
        file = coreParts[1].replace(/[\(\)]/g, '').split('One2ManyHats.com/')[1]
    } else {
        func = 'anonymous'
        file = coreParts[0].replace(/[\(\)]/g, '').split('One2ManyHats.com/')[1]
    }

    console.log('LOG', getDatetime(), file, func, '\n---> ', ...args)
}

global.ERR = (...args) => {
    const stack = new Error().stack;
    const coreParts = stack.split('\n')[2].split(' ').filter(Boolean).splice(1) // [func, (path/to/file:15:5)]

    let func
    let file
    if (coreParts.length > 1) { // called inside a function
        const title = coreParts[0].split('.')
        func = title.length > 1 ? title[1] : title[0]
        file = coreParts[1].replace(/[\(\)]/g, '').split('DietApp/')[1]
    } else {
        func = 'anonymous'
        file = coreParts[0].replace(/[\(\)]/g, '').split('DietApp/')[1]
    }

    console.log('ERR', getDatetime(), file, func, '\n---> ', ...args)
}

