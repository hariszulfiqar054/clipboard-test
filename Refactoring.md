# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. I have separated the hash function which is only responsible for generating the hash so that we don't need to add the algorithm and digest again and again and we can also export this standalone function to use it in multiple places.
2. I have also separated the function to calculate event hash which helps to increase the code readability and scalability. Let's say we want to change the calculation of event hash so in this case we only need to change that specific function rather than changing the whole codebase.
3. I have also separated the calculation of candidate hash and I also separated the constants helping to calculate the hash it make the variable encapsulated and create a layer of abstraction. 
