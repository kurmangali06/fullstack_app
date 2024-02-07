import todoModel from "../../models/content.model"
import setResponse from "~/server/utils/set-response";
import { Error } from "mongoose"
import { ITodo } from "~/interface";

export default defineEventHandler(async (event) => {
    try {
        const body: ITodo = await readBody(event);
        if (!body) {
            return setResponse(event, { statusCode: 400, statusMessage: 'Item field is required.' });
        }

        // Предположим, что в теле запроса также передается идентификатор объекта для обновления
        const { _id: id, ...updateData } = body;

        // Проверяем наличие идентификатора
        if (!id) {
            return setResponse(event, { statusCode: 400, statusMessage: 'Item id is required.' });
        }

        // Обновляем объект по идентификатору
        const updatedItem = await todoModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedItem) {
            return setResponse(event, { statusCode: 404, statusMessage: 'Item not found.' });
        }

        return setResponse(event, { statusCode: 200, statusMessage: 'Item has been updated.', data: updatedItem });
    } catch (error: unknown) {
        if (error instanceof Error.ValidationError) {
            return setResponse(event, { statusCode: 400, statusMessage: error.message });
        }
        return setResponse(event, { statusCode: 500, statusMessage: 'Something went wrong.' });
    }
});
