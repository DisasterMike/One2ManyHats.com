
const api = req => {
    LOG('this is api')
}

const getDatetime = () => new Date().toISOString().replace('T', ' ').split('.')[0]
const getLogSource = () => {
	try {
		throw new Error()
	} catch ({stack = ''}) {
		const lines = stack.split('\n').slice(3)
		const [path, line] = lines[0].replace('://', '/').split(':')
		const [loc, file] = path.split('/').slice(1)
		const d = new Date()
		return `${file||'index'}:${line}`
	}
}
const LOG = (...args) => console.log('LOG', getDatetime(), getLogSource(), '\n--->', ...args)
const ERR = (...args) => console.error('ERR', getDatetime(), getLogSource(), '\n--->', ...args)

String.prototype.capitalize = function () {
    if (this.length === 0) return this;
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.cookiesToObject = function () {
    return this.split('; ').map(i => {
        const [name, value] = i.split('=')
        return {
            name,
            value
        }
    })
}