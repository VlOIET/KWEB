const arr = [100+'%', 60+'%', 36+'%', 22+'%', 13+'%', 8+'%', 5+'%', 3+'%', 2+'%', 1+'%'];
let level = 0, cnt = 0;

const getRandomBinaryResult = (elmt) => {
    const std = Math.floor(Math.random() * 100);
    const percent = parseInt(elmt);
    if(std <= percent) return true;
    else return false;
}

const tryLevelUp = () => {
    const work = setInterval(() => {
        if(getRandomBinaryResult(arr[level]) === true) level++;
        document.getElementById('gauge-bar').style.width = 10 * level + '%';
        document.getElementById('current-level').innerText = level;
        cnt++;
        document.getElementById('attempts').innerText = cnt;
        if(level >= 10) clearInterval(work);
    }, 50);
}