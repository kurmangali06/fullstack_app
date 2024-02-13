import { Types } from "mongoose"

export interface IAllItems extends ISetResponse {
    data: IContent
}
  
export interface ILink {
    _id: string
    link: string
    text: string
}

export interface IContact {
    _id:  string
    phone: string
}
export interface IFooter {
    links: ILink[]
    contacts: IContact[]
}
export interface IBlock {
    title: string
    _id:  string
    description: string
}
export  interface ISection {
    title: string
    _id:  string
    items:IBlock[]
}

export interface IContent {
    footer: IFooter
    section: ISection[]
    _id:  string
}

export interface ISetResponse {
    statusCode: number
    statusMessage: string
    data?: any,
    cause?: any
}