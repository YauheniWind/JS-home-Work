const cleanRoom = dirtyLevel => {
    return new Promise((resolve, reject) => {
        if (dirtyLevel < 0 || dirtyLevel > 10) {
            reject('clean is fail')
        } else {
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
        }
    })
}

function cleanRoomsAll(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    let promise_1 = cleanRoom(dirtyLevel_1)

    let promise_2 = cleanRoom(dirtyLevel_2)

    let promise_3 = cleanRoom(dirtyLevel_3)

    Promise.allSettled([promise_1, promise_2, promise_3])
        .then(values => {
            console.log('all is done', values)
        })
}

cleanRoomsAll(-1, 2, 3)
