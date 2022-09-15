# Introduction 
TODO: Classify urls into specific technologies depending on the criteria of each technology

# Requirement
Based on the image "./symbiosis.png" build an algorithm that receive between 5,000 to 10,000 url objects (check the example in the image) and be able to identify/classify to what technology does the url belongs.

To identify to which technology does the url belong, the url object has to match to specific criterias (see the examples of the criterias in the image),

- No mock data for url objects is provided, also you can modify the url object example in the image to suit better for your solution.
- No mock data for the technologies is provided for the technologies, read the criteria and propose data that allows you identify which url belongs to the up to 4000 technologies (not provided)
- The implementation shouldn't actually run, the important thing is to see the approach and strategy used to solve this problem
- The solution challenge should be finished in 2 or max 3 hours

# About
The program run a function that receive an array of url object (example in ./src/testData/urlObjects.ts) and an array of technologies with their respective criterias (example in: ./src/testData/technologies.ts) and returns and object with the urls clasified in the corresponding technology

# Run and Test
### Notes:
- You can edit and add urls in ./src/testData/
- You can edit and add technologies in ./src/testData/technologies.ts
### Steps for run
1. Install dependencies: 
  ```
  $ npm i
  ```
2. run in dev mode: 
  ```
  $ npm run dev
  ```
2.5 run in prod mode: 
  ```
  $ npm run prod
  ```
# Requirements
- node 16.x
- npm 8.x