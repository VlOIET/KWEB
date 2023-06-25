const changeBoxColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const RandomColor = 'rgb(' + R + ',' + G + ',' + B + ')';

    const SecondBox = document.getElementsByClassName('box')[1];
    SecondBox.style.backgroundColor = RandomColor;
}