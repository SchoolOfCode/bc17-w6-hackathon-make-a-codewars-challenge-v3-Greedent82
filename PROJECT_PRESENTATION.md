


If you're the other group trying to do my kata, you'll find the challenge in 'clefairy.md'. Thanks for your time trying out my challenge :D




# Make a word from the letters of another!

Just want to say if anyone who made this hackathon is reading this; thank you. This one has been a lot of fun!

Create a function that take in a word, and checks to see if that word can be made from the letters in 'clefairy'. Letters can be re-used.

    If it can, test should return true

        If it's an anagram (in that you don't use any letter more than once) it should return " That's an anagram!"

        Further, if the word is a pass, and the length of the word is equal to or greater than 7 letters long, you should return "Excellent job!"

            If it fulfills both conditions, you should concatonate both of the above strings or otherwise return "Thats an anagram! Excellent job!"


    If it can't, test should return false

# Thought Proccess (function)

Easiest way to do this is probably to split the word into an array and iterate through the array to see if it does (not) have the letters C, L, E, F, A, I, R, or Y. Probably with some kind of for (each) loop. Sounds incredibly messy to check `for x OR y OR z ...` 8 times, but I cant think of anything better

From there you can probably set up a 2nd variable (array) as a 'basket' of sorts which collects the letters used.

It should be a relativly easy affair of checking the variable.length > 6 and googling some way of seeing if any array element is identical to another (if not, then it's an anagram)

 Both of these can be if statments that prints out a variable that is equal to "That's an anagram" and induvidually print out any necessary message

 All of this goes out the window if false, as it doesn't return or check anything

 Kind of wish there was some way of checking to see if it's an actual word without involving some kind of dictonary API, which is kind of beyond the scope of what i can do in 3 hours, let alone a group testing it for 1

 # Psuedocode

Start by defining the function such that it expects an input of a string, ie `clefairyWord(word) {`
split word, ie ` word = word.split('')`

setup a forEach loop to check for letters, ie `word.forEach(clefairy)`

set up the function im using in the for each `if (array element === xyz...){ add to a variable} else { return false}` etc

setup anagram result `if (variable has no repeats) result += console.log("That's an anagram!")`

setup long word result `if (variable.length > 6) result += console.log(Excellent job!)`

theres probably some way of not nesting so much, I'll see if I have time to refactor this later. For now I'll try the above spaghetti garbage 

# Coding log 

`Set` seems like an easy way of checking if there are duplicates in an array, I'll use that

Words under 6 letters long return `''`, incompetent as I am, I forgot to return something if it doesnt fulfill the
word.length > 6 condition. Just returns nothing

Cannot get the function to break if a letter that isnt C L E F A I R Y is entered; quite irritating

Going to have to use a 'for of' loop instead of for each, given i need to break it early if there's a letter present that doesnt match clefairy 

These tests are super boring, I would've liked to check for different things in the same function execution, but I can't think of how I'd do that with the framework I set up

On reflection, this is probably a little much for a team of 3 to approach for the first time and solve in a reasonable timeframe. I'll see if I can't make an easier challenge (maybe just a boolean)

Also it occurs to me that the set function couldnt be used if i used a word that has duplicate letters instead.
If I used 'cleffa' to compare against instead of 'clefairy', a word with 2 f's shouldn't be counted as not a strict anagram, wheras they would if i just injected cleffa into the function currently