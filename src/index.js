module.exports = function toReadable(number) {

    const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousand = ['', 'thousand'];

    let wordNumber = '';

    if (number === 0) {
        return 'zero';
    }

    for (let i = 0; i < thousand.length; i++) {
        let templateNumber = number % (100 * Math.pow(1000, i));

        if (Math.floor(templateNumber / Math.pow(1000, i)) !== 0) {
            if (Math.floor(templateNumber / Math.pow(1000, i)) < 20) {
                wordNumber = (first[Math.floor(templateNumber / Math.pow(1000, i))] + thousand[i] + wordNumber).trim();
            } else {
                wordNumber = (tens[Math.floor(templateNumber / (10 * Math.pow(1000, i)))] + ' ' + first[Math.floor(templateNumber / Math.pow(1000, i)) % 10] + thousand[i] + wordNumber).trim();
            }
        }

        templateNumber = number % (Math.pow(1000, i + 1));
        if (Math.floor(templateNumber / (100 * Math.pow(1000, i))) !== 0) {
            wordNumber = (first[Math.floor(templateNumber / (100 * Math.pow(1000, i)))] + ' hundred ' + wordNumber).trim();
        }
    }

    return wordNumber;

}
