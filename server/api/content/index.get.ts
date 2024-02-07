import setResponse from "~/server/utils/set-response"
import todoModel from "../../models/content.model"

export default defineEventHandler(async (event) => {
    try {
        const items = await todoModel.find()        
        return setResponse(event, { statusCode: 200, statusMessage: 'success', data: items })
    } catch (error: unknown) {
        return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong.' })
    }
  })