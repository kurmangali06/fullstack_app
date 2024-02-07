import { Types } from "mongoose"

export interface IAllItems extends ISetResponse {
    data: ITodo[]
}
  

export interface ITodo {
    _id: Types.ObjectId
    item: string,
}

export interface ISetResponse {
    statusCode: number
    statusMessage: string
    data?: any,
    cause?: any
}