export function getFirstLetterUpper(word) {
    if(!word || typeof word === 'number') return word
    return word.slice(0, 1).toUpperCase() + word.slice(1)
}