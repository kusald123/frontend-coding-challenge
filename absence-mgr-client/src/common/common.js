
const getDateByFormat = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const getDateRangeMap = (startDate, endDate) => {
    const dates = {};
    const current = new Date(startDate);
    const end = new Date(endDate);
    while (current <= end) {
        const formattedDate = getDateByFormat(current);
        dates[formattedDate] = true;
        current.setUTCDate(current.getUTCDate() + 1);
    }
    return dates;
}

module.exports = {
    getDateByFormat,
    getDateRangeMap
}

