const url = 'https://jsonplaceholder.typicode.com/users/10';
const postUrl = 'https://jsonplaceholder.typicode.com/users'

let bodyToPostRespons = {
    name: 'Alexander Kiss',
    userName: 'Shanik',
    id: 11
};

let bodyToPutRespons = {
    name: 'Alexander Kiss',
    userName: 'Shanik',
    id: 11,
    phone: '421-123-456'
};

async function getResponse() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            let data = await response.json()
            console.log('DATA IN GET RESPONSE', data)
        } else {
            console.log('Request is not succsess')
        }
    } catch (err) {
        console.log(err)
    }
}

getResponse()

async function postResponse() {
    try {
        const response = await fetch(postUrl, {
            method: 'POST',
            body: JSON.stringify(bodyToPostRespons),
            headers: {
                'Content-type': 'application/json; chrset=UTF-8',
            }
        })

        if (response.ok) {
            let data = await response.json()
            console.log('DATA IN POST RESPONSE', data)
        } else {
            console.log('Request is not succsess')
        }
    } catch (err) {
        console.log(err)
    }
}

postResponse()

async function putResponse() {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(bodyToPutRespons),
            headers: {
                'Content-type': 'application/json; chrset=UTF-8',
            }
        })

        if (response.ok) {
            let data = await response.json()
            console.log('DATA IN PUT RESPONSE', data)
        } else {
            console.log('Request is not succsess')
        }
    } catch (err) {
        console.log(err)
    }
}

putResponse()

async function patchResponse() {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                name: 'Alexander Kišš'
            }),
            headers: {
                'Content-type': 'application/json; chrset=UTF-8',
            }
        })

        if (response.ok) {
            let data = await response.json()
            console.log('DATA IN PATCH RESPONSE', data)
        } else {
            console.log('Request is not succsess')
        }
    } catch (err) {
        console.log(err)
    }
}

patchResponse()

async function deleteResponse() {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        })

        if (response.ok) {
            let data = await response.json()
            console.log('DATA IN PATCH RESPONSE', data)
        } else {
            console.log('Request is not succsess')
        }
    } catch (err) {
        console.log(err)
    }
}

deleteResponse()