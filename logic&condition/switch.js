var date = new Date();
console.log(date)
// 0-sunday, 1-monday
var today = date.getDay()
switch (today) {
    case 0:
        console.log('today is sunday')
        break;

    case 1:
        console.log('today is monday')
        break;

    case 2:
        console.log('today is Tuesday')
        break;

    case 3:
        console.log('today is Wednesday')
        break;
    case 4:
        console.log('today is Thursday')
        break;
    case 5:
        console.log('today is Friday')
        break;
    case 6:
        console.log('today is Saturday')
        break;
    default: console.log('not a valid number')

}