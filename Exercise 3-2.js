const getDivisors = x => {
    const arr = [];

    for (let i = 1; i < (x + 1); i++){
        if(x % i === 0)
            arr.push(i);
    }

    console.log(arr);
}