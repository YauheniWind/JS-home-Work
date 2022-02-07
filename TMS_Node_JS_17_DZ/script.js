const cleanRoom = dirtyLevel => {
    return new Promise((resolve, reject) => {
        if (dirtyLevel < 0 && dirtyLevel > 10) {
            reject('clean is fail')
        } else {
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
        }
    })
        .catch((err) => {
            console.log(err)
        })
}

function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    cleanRoom(dirtyLevel_1)
        .then(res => {
            if (res < 0 || res > 10) {
                console.log('Мы не можем убрать эту комнату', res)
            } else {
                console.info(`Комната убрана за ${res} сек`)
            }
            return cleanRoom(dirtyLevel_2)
        })
        .then(res => {
            if (res < 0 || res > 10) {
                console.log('Мы не можем убрать эту комнату', res)
            } else {
                console.info(`Комната убрана за ${res} сек`)
            }
            return cleanRoom(dirtyLevel_3)
        })
        .then(res => {
            if (res < 0 || res > 10) {
                console.log('Мы не можем убрать эту комнату', res)
            } else {
                console.info(`Комната убрана за ${res} сек`)
            }
        })
}

cleanRoomsStepByStep(-1, 2, 3)
