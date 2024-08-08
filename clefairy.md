# How many words can you make out of the letters in 'CLEFAIRY?'

Well, we're about to find out...

My challenge to you is the following:

Create a function that takes in a word, and checks to see if that word can be made from the letters in 'clefairy'. Letters can be re-used.

That is to say; check to see if a word contains ONLY the letters C, L, E, F, A, I, R, and Y. It should return the following based on how close it is:

      ⠀⠀⠀⠀⠀⠀⠀⡠⠖⢉⣌⢆⠀⠀⠀⠀⠀If it's an anagram (in that you don't use any letter more than once) it should return:
⠀⠀⠀⠀⠀⠀⠀⣠⠚⠉⠀⠈⠉⠲⣿⣿⡜⡀⠀⠀⠀⠀`'Perfect anagram! '` (note the space)
⡔⢉⣙⣓⣒⡲⠮⡇⠀⠀⠀⠀⠀⠀⠘⡿⡇⡇⠀⠀⠀⠀
⡇⠘⣿⣿⣿⠏⠀⠀⠠⣀⡀⠀⠀⠀⠀⡇⠈⠳⡄⠀⠀⠀From there, it should concatonate the following based on how long the word is:
⢹⠀⢻⣿⠇⠀⠀⣀⣀⠀⡍⠃⠀⠀⣠⣷⡟⢳⡜⡄⠀⠀  
⠈⣆⠀⠋⢀⢔⣵⣿⠋⠹⣿⠒⠒⠚⠁⣿⣿⣾⣷⢸⠤⡄    If the word is 7 characters or longer it should return `'Excellent job!'`
⠀⡇⠀⠀⢸⢸⣿⣿⣶⣾⡏⡇⠀⠀⢀⡘⣝⠿⡻⢸⡰⠁
⠀⢳⠀⠀⠈⢆⠻⢿⡿⠟⡱⠁⠰⠛⢿⡇⠀⠉⠀⡸⠁⠀    If the word is 6 characters or under, it should return `'Good job!'`
⠀⠈⢆⠀⠀⠀⠉⠒⠒⣉⡀⠀⠀⢇⠀⡇⠀⠀⢠⠃⠀⠀
⠀⠀⠈⠣⡀⠀⠀⠀⠀⠀⢉⡱⠀⠀⠉⠀⢀⡴⠁⠀⠀⠀If it contains a letter not present in `'CLEFAIRY'`, it should only return `'Womp Womp'`
⠀⠀⠀⠀⠈⠓⠦⣀⣉⡉⠁⢀⣀⣠⠤⠒⠥⣄⠀⠀⠀ 
⠀⠀⠀⠀⠀⠰⣉⣀⣀⡠⠭⠛⠀⠀⠑⠒⠤⠤⠷⠀⠀⠀

# For example:

`'fireclay'` doesn't use any letter more than once and is 7 characters or longer. it should return: 
      `'Perfect anagram! Excellent job!'`

`'rifle'` doesn't use any letter more than once and is 6 characters or shorter. it should return: 
      `'Perfect anagram! Good job!'`
      
`'lifecycle'` uses letters more than once and is 7 characters or longer. it should return: 
      `'Excellent job!'`  

`'icicle'` uses letters more than once and is 6 characters or shorter. it should return: 
      `'Good job!'` 

`'cosmic'` uses letters not present in clefairy. It should return 
      `'Perfect anagram! Excellent job!'`

There's a whole host more examples in `clefairy.test.js`, but I hope I've explained things decently enough

As a footnote, check out this link https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array for how to check for duplicates in an array... particularly the ES6 version response. Might be useful :)

Best of luck! Head over to `clefairy.js` to get started! I've seen how incredible you all are at this, I'm sure this'll be no problem for you! :D

# Plan

If you're stuck, I've made a plan below to nudge you along. If you'd rather do this strictly no spoilers, you can collapse all of this by pressing the arrow between line 45 and `# Plan`

1. Set up an array of the letters in clefairy 
2. Set up a blank array to serve as a basket
3. split the word injected into the function (lifecycle, icicle etc.) into an array of its composite letters 
4. set up a `for of` loop to iterate through the array from step 3. It should change the case of the array you split in step 3 to match the case of the array you made in step 1 `.toUpperCase` etc.
5. If it matches, it should be pushed into the array from step 2
6. If it doesn't match, the entire function should cease and it should return `'Womp Womp`
7. Set up a function outside the original one to check to see if there are any duplicates. Click the above link, and check the response that uses ES6 features :D
8. Set up a blank variable
9. pass the array you pushed elements into on step 5 through the function. If there are no duplicates, you should add (`+=`) `Perfect anagram! ` to the blank variable from step 8  
10. set up 2 `if` statments to assess how long your array is (`6 < / 7 >`)
11. You should add `Excellent / Good job` to the blank variable from step 8 respectivly
12. return the blank variable from step 8

Great job! I knew you could do it! :D






       
       
       
       
       
       
       
       
        

        Further, if the word is a pass, and the length of the word is equal to or greater than 7 letters long, you should return "Excellent job!"

            If it fulfills both conditions, you should concatonate both of the above strings or otherwise return "Thats an anagram! Excellent job!"