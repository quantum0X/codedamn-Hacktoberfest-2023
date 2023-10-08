# Jokes API

## Problem Statement

José is trying to make the people who visit their blog page laugh a little, so he's attempting to use a Jokes API to fetch a random joke and display it in the sidebar of his blog.

However, he seems to have hit a roadblock, can you help him debug why he's unable to receive a proper resonse from the Jokes API

The API link used in the `getJoke()` function is [https://official-joke-api.appspot.com/random_joke](https://official-joke-api.appspot.com/random_joke)

Here is a sample response from the api

```
{
  "type": "general",
  "setup": "What do you get when you cross a rabbit with a water hose?",
  "punchline": "Hare spray.",
  "id": 234
}
```

The `getJoke()` function should return an object with properties `setup` and `punchline` to be shown to visitors on the blog.

To complete this challenge you should be familar with the basics of axios which is used here for fetching the joke data.

> Make sure that you return a proper object without adding any additional properties to the return type of this function

## Challenges
`getJoke()` function should return a valid Object containing setup and punchline properties