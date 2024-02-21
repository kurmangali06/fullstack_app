export default defineEventHandler(async (event) => { 
    try {
        const { username, password } = await readBody(event)
        if (!username || !password) {
            return setResponse(event, { statusCode: 400, statusMessage: 'Authentication failed' })
        } else if (username === 'admin' && password === 'admin') {
            return setResponse(event, { statusCode: 200, statusMessage: 'Authentication successful', data: true })
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            return setResponse(event, { statusCode: 400, statusMessage: error.message })
        }
        return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong.' })
    }

})
