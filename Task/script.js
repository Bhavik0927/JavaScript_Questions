const changeButtonColor = (color) => {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.style.backgroundColor = color;
    })
}