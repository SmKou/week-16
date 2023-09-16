export const splitStr = (s: string): string[] => s.toString().split(/[\s,]+/)
export const formStr = (arr: string[], join: string): string => arr.join(join)
export const makeKey = (s: string): string => s.toLowerCase().split(" ").join("")

const functions = {
    splitStr,
    formStr,
    makeKey
}

export default functions;