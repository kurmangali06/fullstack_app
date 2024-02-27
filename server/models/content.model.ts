import mongoose from "mongoose"
import type { IContent } from "~/interface"


const schema = new mongoose.Schema<IContent>({
    section: [],
    meta: {},
    footer : {
        links: [],
        contacts: [],
        adress: []
    },
    header: {}
   
}, { timestamps: true })

export default mongoose.model<IContent>('Content', schema)