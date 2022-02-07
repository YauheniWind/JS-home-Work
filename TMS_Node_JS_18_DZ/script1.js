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
        const resultFirstRoom = await cleanRoom(dirtyLevel_1)
        if (resultFirstRoom === undefined) {
            throw new Error(dirtyLevel_1)
        } else {
            console.log('Убрана за', resultFirstRoom)
        }

        const resultSecondRoom = await cleanRoom(dirtyLevel_2)
        if (resultSecondRoom === undefined) {
            throw new Error(dirtyLevel_2)
        } else {
            console.log('Комната убрана за', resultSecondRoom)
        }

        const resultThirdRoom = await cleanRoom(dirtyLevel_3)
        if (resultThirdRoom === undefined) {
            throw new Error(dirtyLevel_3)
        } else {
            console.log('Комната убрана за', resultThirdRoom)
        }
    } catch (err) {
        console.log('Какая-то из комната слишком грязная', err)
    }
}

cleanRoomsStepByStep(1, 2, -2)