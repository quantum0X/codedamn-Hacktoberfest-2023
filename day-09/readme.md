# Initializing Matrix

## Problem Statement
Theo, was tasked to create an `initializeEmptyMatrix` function, which would return a new array with the shape of mentioned rows and columns, which are passed as parameters to this function.

Theo, was testing his newly learned Array method .fill() to implement this function. However, when performing` .push()` operations on the array, there seems to be some un-intended consequences. Pushing a new element to the matrix is propogating the value across the entire matrix. Theo is unable to understand the root cause of this? You are free to use a different array methods or your own implementation to fix the problem.

Can you figure out why this behavior occurs and find a way to fix it. You can scour the web and stackoverflow to find the answer. You can also use our Jarvis AI to figure out the problem, you can access Jarvis AI by switching to the Jarvis AI Tab in the playground sidebar.

Take a look at the challenges before to understand the scope of this function, it should give you a good idea on the exact output the `initializeEmptyMatrix` is supposed to perform.

## Challenges

✅ Pushing an element to the Matrix Row Array should only update the mentioned cell

✅ Initializing a matrix with different integers works as expected

✅ Initializing a matrix with negative numbers & zero should throw an error

✅ Initializing a matrix with non-integers should throw an error

✅ Initializing a matrix with null and undefined values should throw an error