const isValidNumber = x => {
    const ParsedNum = parseInt(x);
    if ( ParsedNum != x) return false;
    if ( !isFinite(ParsedNum) || isNaN(ParsedNum) ) return false;
    if ( 1 <= x && x <= 9 ) return true;
    else return false;
}