import { defineStore } from 'pinia'
import type { IContent } from '~/interface'

export const useContentStore = defineStore('content', {
    state: () => ({
        content: {} as IContent
    }),
    actions: {
        setContent(val: IContent) {
            this.content = val
        }
    }
})