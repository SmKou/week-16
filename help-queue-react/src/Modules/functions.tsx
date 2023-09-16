export const splitStr = (s: string): string[] => s.toString().split(/[\s,]+/)
export const formStr = (arr: string[], join: string): string => arr.join(join)

const functions = {
    splitStr,
    formStr
}

export default functions;