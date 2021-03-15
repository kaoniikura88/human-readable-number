module.exports = function toReadable (number) {
    let item = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    }
    if (number === 0 ){
        return 'zero'
    }
    let arr = number.toString().split('')


}
