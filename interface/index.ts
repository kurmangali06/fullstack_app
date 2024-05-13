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
    _id:  string
    title_en: string
    title_ru: string
    title_kz: string
    description_en: string
    description_ru: string
    description_kz: string
    [key: string]: any
}
export  interface ISection {
    navigate_en: string
    navigate_ru: string
    navigate_kz: string
    title_en: string
    title_ru: string
    title_kz: string
    description_en: string
    description_ru: string
    description_kz: string
    _id:  string
    images: string[]
    [key: string]: any
}
export interface IHeader {
    title_en: string
    title_ru: string
    title_kz: string
    description_en: string
    description_ru: string
    description_kz: string
    subtitle_en: string
    subtitle_ru: string
    subtitle_kz: string
    [key: string]: any
}

export interface IMeta {
    title: string,
    description: string
    keywords: string
}
export interface IContent {
    footer: IFooter
    section: ISection[]
    header: IHeader
    meta: IMeta
    _id?:  string
}

export interface ISetResponse {
    statusCode: number
    statusMessage: string
    data?: any,
    cause?: any
}

export interface IUser {
    username: string
    password: string
}