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

function cleanRoomsAll(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    dirtyLevel_1 = new Promise((resolve, reject) => {
        if (dirtyLevel_1 < 0 || dirtyLevel_1 > 10) {
            console.log('Мы не можем убрать эту комнату', dirtyLevel_1)
            reject('Комната слишком грязная')
        } else {
            resolve(cleanRoom(dirtyLevel_1))
            console.log(`Комната убрана ${dirtyLevel_1} секунд`)
        }
    })
    dirtyLevel_2 = new Promise((resolve, reject) => {
        if (dirtyLevel_2 < 0 || dirtyLevel_2 > 10) {
            console.log('Мы не можем убрать эту комнату', dirtyLevel_2)
            reject('Комната слишком грязная')
        } else {
            resolve(cleanRoom(dirtyLevel_2))
            console.log(`Комната убрана ${dirtyLevel_2} секунд`)
        }
    })
    dirtyLevel_3 = new Promise((resolve, reject) => {
        if (dirtyLevel_3 < 0 || dirtyLevel_3 > 10) {
            console.log('Мы не можем убрать эту комнату', dirtyLevel_3)
            reject('Комната слишком грязная')
        } else {
            resolve(cleanRoom(dirtyLevel_3))
            console.log(`Комната убрана ${dirtyLevel_3} секунд`)
        }
    })

    Promise.allSettled([dirtyLevel_1, dirtyLevel_2, dirtyLevel_3])
        .then(values => {
            console.log('all is done', values)
        })
}

cleanRoomsAll(1, 2, -3)
