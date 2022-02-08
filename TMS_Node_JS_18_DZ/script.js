const cleanRoom = dirtyLevel => {
    return new Promise((resolve, reject) => {
        if (dirtyLevel < 0 || dirtyLevel > 10) {
            reject('Не получилось завершить уборку')
        } else {
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
        }
    })
}

async function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    try {
        const resaltFirstRoom = await cleanRoom(dirtyLevel_1)
        console.log('Убрана за', resaltFirstRoom)
    } catch (err) {
        console.log('Какая-то комната слишком грязная', err)
    }

    try {
        const resaltSecondRoom = await cleanRoom(dirtyLevel_2)
        console.log('Комната убрана за', resaltSecondRoom)
    } catch (err) {
        console.log('Какая-то комната слишком грязная', err)
    }
    try {
        const resaltThirdRoom = await cleanRoom(dirtyLevel_3)
        console.log('Комната убрана за', resaltThirdRoom)
    }
    catch (err) {
        console.log('Какая-то комната слишком грязная', err)
    }
}

cleanRoomsStepByStep(-1, 2, 2)