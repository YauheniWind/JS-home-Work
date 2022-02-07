const cleanRoom = dirtyLevel => {
    return new Promise((resolve, reject) => {
        if (dirtyLevel < 0 || dirtyLevel > 10) {
            reject('Не получилось завершить уборку')
        } else {
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
        }
    })
        .catch((err) => {
            console.log(err)
        })
}

async function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    try {
        const resaltFirstRoom = await cleanRoom(dirtyLevel_1)
        if (resaltFirstRoom === undefined) {
            console.log('Комната слишком грязная', dirtyLevel_1)
        } else {
            console.log('Убрана за', resaltFirstRoom)
        }

        const resaltSecondRoom = await cleanRoom(dirtyLevel_2)
        if (resaltSecondRoom === undefined) {
            console.log('Комната слишком грязная', dirtyLevel_2)
        } else {
            console.log('Комната убрана за', resaltSecondRoom)
        }

        const resaltThirdRoom = await cleanRoom(dirtyLevel_3)
        if (resaltThirdRoom === undefined) {
            console.log('Комната слишком грязная', dirtyLevel_3)
        } else {
            console.log('Комната убрана за', resaltThirdRoom)
        }
    } catch (err) {
        console.log('Какая-то комната слишком грязная', err)
    }
}

cleanRoomsStepByStep(-1, 2, 2)