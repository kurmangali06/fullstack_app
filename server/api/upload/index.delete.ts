import fs  from 'fs';
import setResponse from "~/server/utils/set-response"

export default defineEventHandler(async(event) => {

    try {
        const file: any = await readBody(event)
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