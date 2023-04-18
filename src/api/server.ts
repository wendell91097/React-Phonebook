
export const server_calls = {
    get: async() => {
        const response = await fetch(`https://tan-tricky-grouse.glitch.me/api/contacts`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token':	'Bearer de3a93a15d89efa56fb8ee059a34cebe5e5270e3900f7355',
            },
        })   

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://tan-tricky-grouse.glitch.me/api/contacts`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token':	'Bearer de3a93a15d89efa56fb8ee059a34cebe5e5270e3900f7355',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://tan-tricky-grouse.glitch.me/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': 'Bearer de3a93a15d89efa56fb8ee059a34cebe5e5270e3900f7355',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://tan-tricky-grouse.glitch.me/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-origin':	'*',
                'x-access-token': 'Bearer de3a93a15d89efa56fb8ee059a34cebe5e5270e3900f7355',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
