/*
* isPalindrome(word: string): boolean
*
* Checks if parameter 'word' is a palindrome.
* 
* Usage:
* In another file .js, or running Node in a terminal, in the same folder 
* of the current file, instantiate the function with:
*     const ip = require('./desafio.js')
* Now, use the created function:
*     ip('Roma e amor!')
*
* NOTE: this algorithm tears off any non-alfabetic characters from the string
* parameter 'word'. This includes punctuation and ACCENTED CHARACTERS. Please
* use its unaccented variations.
* Numeric characters inside the parameter are valid as string characters.
* For example: isPalindrome('Is 123 321? Si!') will return true.
*/

const isPalidrome = (w) => {
    let word = w.toLowerCase().replace(/\W+/g, '')
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
        if (word[ left ] != word[ right ]) {
            return false
        }
    }
    return true
}

module.exports = isPalidrome