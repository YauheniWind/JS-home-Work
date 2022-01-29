const cleanRoom = dirtyLevel => {
    return new Promise((resolve) => {
        return setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
    })
}

cleanRoom(8)
    .then((result) => {
        if (result > 0 && result <= 10) {
            console.log(`Уборка проведена успешно за ${result} секунд`);
        } else {
            console.log(`The level is not selected correctlys`)
        }
    })