import type { UploadProps } from 'ant-design-vue';
export interface IAllItems extends ISetResponse {
    data: IContent
}
  
export interface ILink {
    _id: string
    link: string
    text: string
    type: 'web' | 'email' | 'instagram'
}

export interface IContact {
    _id:  string
    phone: string
}
export interface IAdress {
    _id:  string
    street: string
}
export interface IFooter {
    links: ILink[]
    contacts: IContact[]
    adress: IAdress[]
}
export interface IBlock {
    title: string
    _id:  string
    description: string
}
export  interface ISection {
    navigate: string
    title: string
    description: string
    _id:  string
    images: string[]
    items:IBlock[]
}
export interface IHeader {
    title: string
    description: string
    subtitle: string
}
export interface IContent {
    footer: IFooter
    section: ISection[]
    header: IHeader
    _id:  string
}

export interface ISetResponse {
    statusCode: number
    statusMessage: string
    data?: any,
    cause?: any
}
