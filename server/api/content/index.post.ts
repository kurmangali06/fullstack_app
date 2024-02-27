import contentModel from "../../models/content.model"
import setResponse from "~/server/utils/set-response";
import { Error } from "mongoose"
import type { IContent } from "~/interface";
import userModel from "~/server/models/user.model";

export default defineEventHandler(async (event) => {
    try {
        const body: IContent = await readBody(event)
        const user = event.context.auth
        const admin = await userModel.findOne({ username: user.username.username }); 
        if(!admin) {
            return setResponse(event, { statusCode: 401, statusMessage: 'Нет доступа' });
        }   
        if (!body) {
            return setResponse(event, { statusCode: 400, statusMessage: 'Item field is required.' })
        }
        await contentModel.create( body )
        return setResponse(event, { statusCode: 200, statusMessage: 'New item has been added.' })
    } catch (error: unknown) {
        if (error instanceof Error.ValidationError) {
            return setResponse(event, { statusCode: 400, statusMessage: error.message })
        }
        return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong.' })
    }
})