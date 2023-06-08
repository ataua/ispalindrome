# Is this expression a palindrome?

Palindromes are expressions thar read the same from left to right and from 
right to left. Some examples are:  
- "Socorram-me, subi no ônibus em Marrocos"
- "Madam, I'm Adam" 
- "Never odd or even"  

Since we are interested only in the sounds, white spaces and capitalization are meaningless. Non-alphabetic characters, like punctuation and white spaces are removed from the expression. Accented letters are normalized. For example: 'maçã' becomes 'maca', so the phrase "Socorram-me, subi no ônibus em Marrocos" will return true.   

Calling the function without parameters will return false:
```json
isPalindrome() // false
isPalindrome('') // true
```
This is because the function tests for the type of the parameter, returning false if it is not a string, so it won't crash if an integer or other kind of parameter is passed to it. Calling the function without parameters means that the parameter is *null*, which is different from *string*