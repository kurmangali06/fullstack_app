import mongoose from "mongoose"
import { ITodo } from "~/interface"


const schema = new mongoose.Schema<ITodo>({
    item: {
        type: String,
        required: [true, 'Item field is required.'],
        trim: true,
        maxlength: [20, 'Max of 20 characters only.']
    }
}, { timestamps: true })

export default mongoose.model<ITodo>('Todo', schema)