export {}

// package.json 내 eslint 설정에서 rules에 type 검사 빼놓음 -> 추후 수정 필요
declare global {
    export interface CommonResponse<T> {
        result: string,
        errorCode: string,
        errorMessage: string,
        data: T
    }
}