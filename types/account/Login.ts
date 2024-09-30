export {}

// package.json 내 eslint 설정에서 rules에 type 검사 빼놓음 -> 추후 수정 필요
declare global {
    export interface LoginParameter {
        uid: string,
        password: string
    }

    export interface LoginInfo {
        uid: string,
        password: string,
        birth: string,
        favoriteList: Array<string>,
        watchingList: Array<string>
    }
}