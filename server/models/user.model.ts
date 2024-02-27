import mongoose from "mongoose";
import type { IUser } from "~/interface";

const schema = new mongoose.Schema<IUser>({
    username: { type: String, required: true, default: 'admin' },
    password: { type: String, required: true, default: 'admin' }
}, { timestamps: true });

export default mongoose.model<IUser >('User', schema);