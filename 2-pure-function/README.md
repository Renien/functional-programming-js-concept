- A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

- In functional programming, we dislike unwieldy functions like splice that mutate data. This will never do as we're striving for reliable functions that return the same result every time, not functions that leave a mess in their wake like splice.

Side effects of being impure
----------------------------

A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.


    changing the file system
    inserting a record into a database
    making an http call
    mutations
    printing to the screen / logging
    obtaining user input
    querying the DOM
    accessing system state

- Pure functions are completely self contained.