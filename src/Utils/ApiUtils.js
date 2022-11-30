export function FetchData(url, method, body = {}, options = {}) {
    let _options = {
        ...options
    }
    if (method.toUpperCase() === 'POST') {
        _options.body = JSON.stringify(body)
    }
    return fetch(url, {
        method,
        ..._options
    }).then(async (resp) => {
        const status = resp.status
        return {
            data: await resp.json(),
            status
        }
    })
}

export function FakeLoginApi() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove({ user: { name: 'Suhayb' }, token: 'eyJhbGciOiJIUzI1NiIsInR', status: 200 })
        }, 1500)
    })
}