const STRINGLENGTH = 25;

export default function handleCutString(nameWine: string) {
    if (nameWine.length <= STRINGLENGTH) {
        return nameWine
    } 
    if (nameWine.length > STRINGLENGTH) {
        return nameWine.substring(0, STRINGLENGTH)+'...'
    }
}