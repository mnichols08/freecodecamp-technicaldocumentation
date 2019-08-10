(() => {
    document.querySelector('footer').innerHTML = `&copy; ${new Date().getFullYear()} Mikey Nichols.`;
    document.querySelectorAll('section').forEach(e => e.classList.add('main-section'));
})()