import fs  from 'fs';
import userModel from '~/server/models/user.model';
import setResponse from "~/server/utils/set-response"

export default defineEventHandler(async(event) => {

    try {
        const file: any = await readBody(event)
        const user = event.context.auth 
        
        const admin = await userModel.findOne({ username: user.username.username }); 
        if(!admin) {
            return setResponse(event, { statusCode: 401, statusMessage: 'Нет доступа' });
        }  
        console.log(file.path, 'path')
        fs.unlinkSync( `public/images/${file.path}`);
      
      console.log(`Файл ${file.path} успешно удален.`);
      return true
    } catch (error: any) {
      return createError({
        statusCode: 500,
        statusMessage: 'Something went wrong.',
      });
    }

});