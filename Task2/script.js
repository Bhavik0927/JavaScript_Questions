const buttons = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3')
];

const rotateBtn = document.getElementById('rotateBtn');

rotateBtn.addEventListener('click',() =>{
    const colors = buttons.map(btn => window.getComputedStyle(btn).backgroundColor);

    buttons[2].style.backgroundColor = colors[1];
    buttons[1].style.backgroundColor = colors[0];
    buttons[0].style.backgroundColor = colors[2];


    // console.log("clicked");
    // let last = buttons[2].style.backgroundColor;

    // buttons[2].style.backgroundColor = buttons[1].style.backgroundColor;
    // buttons[1].style.backgroundColor = buttons[0].style.backgroundColor;
    // buttons[0].style.backgroundColor = last;
})