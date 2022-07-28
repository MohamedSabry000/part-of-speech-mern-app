# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screens

### Practice Screen:
Fetch the words list from `words` endpoint.

Shows the student one word each time and below the word there are four buttons representing for options of part of speech (noun, adverb, adjective, or verb)

After an option got selected, the student get a feedback whether his/her answer was correct or incorrect.

However, it shouldn't show the correct answer in case an incorrect answer got selected.
Has a progress bar that shows the student his/her progress in %

### Rank Screen:
Displayed after the user answers the final question
a POST request be sent to `rank` endpoint to get the student's rank based on his/her score % provided in the request body.

Score is calculated as follows:
```
(number of correct answers / total number of questions)*100
```
Shows the student his/her rank across his/her peers (not his/her score) when he/she reaches progress of 100% (finishes the activity).

Has a "Try Again" button that enables the student to repeat the activity again.

## References
* Rank Progress Bar is forked from `amit08255` from his repo [circular-dashed-progress-react](https://github.com/amit08255/circular-dashed-progress-react)