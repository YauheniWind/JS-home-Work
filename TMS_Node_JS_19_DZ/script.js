// Вариант 1

const url = 'https://jsonplaceholder.typicode.com/albums';
let albumsArr = []

async function getId() {
    const response = await fetch(url);
    let data = await response.json()

    if (response.ok) {

        data.filter((a) => {
            if (a.userId === 1 || a.userId === 4) {
                albumsArr.push(a)
            }
        })

        console.log('DATA IN', albumsArr)
    }
}
getId()

setTimeout(getDataOut, 1000)

function getDataOut() {
    console.log('DATA OUT', albumsArr)
}

// Вариант 2
// const url = 'https://jsonplaceholder.typicode.com/albums';
// let albumsArr = []

// async function getId() {
//     const response = await fetch(url);
//     let data = await response.json()

//     if (response.ok) {
//         for (key in data) {
//             if (data[key].userId === 1 || data[key].userId === 4) {
//                 albumsArr.push(data[key])
//             }
//         }
//         console.log('DATA IN', albumsArr)
//     }
// }
// getId()

// setTimeout(getDataOut, 1000)

// function getDataOut() {
//     console.log('DATA OUT', albumsArr)
// }
