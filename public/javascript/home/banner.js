const logoLettersToggle = async (img) => {
    const banner = img.closest('.banner')
    const letters = banner.querySelectorAll('.b-letter.moving')
    letters.forEach(letter => {
        letter.classList.toggle("letter-buttons")
    })
}