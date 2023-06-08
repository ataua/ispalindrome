/*
 * isPalindrome(word: string): boolean
 * Checks if parameter 'word' is a palindrome.
 */

const isPalidrome = (w) => {
    if (typeof w != 'string') {return false}
    let word = w
        .toLowerCase()
        .normalize('NFD')
        .replace(/\W+/g, '')
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
        if (word[ left ] != word[ right ]) {
            return false
        }
    }
    return true
}

module.exports = isPalidrome