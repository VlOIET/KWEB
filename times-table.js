const ErrorText = elmt => elmt.innerText = 'Input Error!';

const displayTimes = () => {

    const NPInt = document.getElementById('number').value;
    const TimesResult = document.getElementById('times-result');
    const PInt = parseInt(NPInt);

    if(NPInt != PInt) return ErrorText(TimesResult);
    if(PInt < 1 || PInt > 9) return ErrorText(TimesResult);
    if(isNaN(NPInt) || !isFinite(NPInt)) return ErrorText(TimesResult);

    const result = [];
    for(let i = 1; i < 10; i++)
        result.push(PInt + ' X ' + i + ' = ' + PInt * i);

    TimesResult.innerText = result.join('\n');
}