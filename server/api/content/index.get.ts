import setResponse from "~/server/utils/set-response"
import contentModel from "../../models/content.model"

export default defineEventHandler(async (event) => {
    try {
        const items = await contentModel.findOne()        
        return setResponse(event, { statusCode: 200, statusMessage: 'success', data: items })
    } catch (error: unknown) {
        return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong.' })
    }
  })