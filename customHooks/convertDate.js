export default function convertDate(first, second, breaker) {
    let date = String;
    if (first < 10 && second + 1 < 10) date = `0${first}${breaker}0${second}`;
    else if (first < 10 && second + 1 >= 10) date = `0${first}${breaker}${second}`;
    else if (first >= 10 && second + 1 >= 10) date = `${first}${breaker}${second}`;
    else if (first >= 10 && second + 1 < 10) date = `${first}${breaker}0${second}`;
    return date;
}
