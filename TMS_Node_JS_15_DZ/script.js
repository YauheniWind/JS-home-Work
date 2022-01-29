let getDateAgo = (date, days) => {
    let dateStart = new Date(date);
    let dateEnd = new Date(dateStart - days * 24 * 3600 * 1000);

    return `${dateEnd.getMonth() + 1}-${dateEnd.getDate()}-${dateEnd.getFullYear()}`
}

console.log(getDateAgo('1-2-2022', 1))
