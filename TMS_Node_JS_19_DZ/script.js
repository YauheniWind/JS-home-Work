const url = 'https://jsonplaceholder.typicode.com/albums';
let albumsArr = []

async function getId() {
    const response = await fetch(url);
    let data = await response.json()

    if (response.ok) {

        albumsArr = data.filter((a) => {
            if (a.userId === 1 || a.userId === 4) {
                return a
            }
        })

        console.log('DATA IN', albumsArr)
        return albumsArr
    }
}

getId()