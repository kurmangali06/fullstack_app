import mongoose from "mongoose"
import { IContent } from "~/interface"


const schema = new mongoose.Schema<IContent>({
    section: [],
    footer : {
        links: [],
        contacts: [],
    }
   
}, { timestamps: true })

export default mongoose.model<IContent>('Content', schema)