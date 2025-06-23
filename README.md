# Cat Facts

A web app for learning cool facts about cats and laughing at excellent cat images.

## Introduction

This app was created as a way primarily for me to practice some of what I've learned about React so far. I came up with the idea myself after looking over some of the free-to-use APIs listed here on GitHub (https://github.com/public-apis/public-apis). The app calls out to two APIs--MeowFacts and TheCatAPI--and receives a variety of facts and images that it randomly pairs together. Users can then save any facts they particuarly like, which are populated on a separate My Saved Facts page.

## Using the App

This app has been deployed on Netlify and can be utilized at the following address: https://endearing-pavlova-e773e5.netlify.app/catfacts

## Features

*Three routes, including a landing page, cat facts page, and saved facts page
*Buttons allowing users to save individual cat facts
*Utilizes LocalStorage to main saved facts and pass over to saved facts page

## Technologies Used

* HTML
* CSS
* JavaScript
* React
* React Router

## Reflections

This is my first project utilizing React Router, so it is a little contrived (that is, I recognize conditional rendering could have been used instead). It is also the first time I've utilized LocalStorage within a React environment, and so that was actually the largest sticking point in getting things to work. That is, coming to understand exactly how LocalStorage should be used inside a UseEffect hook was the biggest learning curve. The app also gave me the opportunity to continue practicing with API calls, which in the past have giving me a little trouble but this time seemed to go quite smoothly. Working with two APIs also led me to having to figure out how to best handle two data streams, and I'm quite happy with the solution I came up with, which was to first combine the two responses and then utilize a single array of objects for generating the HTML for the cat facts.


