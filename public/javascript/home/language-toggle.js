let langageToggle
let toggleInput
let languageTexts
let toggleEnText
let toggleJpText

const main = async () => {
    // api({name: 'michael'})

    const cookies = document.cookie.cookiesToObject()
    const langage = cookies.find(i => i.name === 'lang').value

    langageToggle = document.querySelector('.lang-toggle')
    toggleInput = langageToggle.querySelector('input')
    languageTexts = Array.from(langageToggle.querySelectorAll('p'))
    toggleEnText = languageTexts[0]
    toggleJpText = languageTexts[1]
    
    await new Promise(r => setTimeout(r, 50)) // wait for page to load before moving toggle
    if (langage === 'en') {
        toggleEnText.style.color = 'var(--highlight)'
        toggleInput.checked = false
    } else if (langage === 'jp') {
        toggleJpText.style.color = 'var(--highlight)'
        toggleInput.checked = true
    }
}

const changeLocalization = async (input) => {
    if (input.checked) {
        // params.set('l', 'jp')
        toggleInput.checked = false // keep the checkbox from moving and let it do so after page reloads
        await fetch(`/set-language/jp`) // set language cookies
    } else {
        // params.set('l', 'en')
        toggleInput.checked = true // keep the checkbox from moving and let it do so after page reloads
        await fetch(`/set-language/en`) // set language cookies
    }

    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', main)