export {}

declare global {
    export interface Content {
        code: string,
        category: string,
        title: string,
        description: string,
        limitAge: number,
        genre: string,
        mainImg: string,
        summaryImg: string,
        isTop: boolean,
        isRecommend: boolean
    }

    export interface ContentList {
        title: string,
        list: Array<Content>
    }
}