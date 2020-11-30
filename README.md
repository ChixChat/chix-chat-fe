# Chix Chat 
Chix Chat is a community building app for Creative, Healthy, Inclusive, Xenas (confident, welcoming womxn) to connect with each other.
The Chix Chat community starts with Chix developing the app in a collaborative public manner.
Please see the [CONTRIBUTING](CONTRIBUTING.md) and [RESOURCES](RESOURCES.md) files if you are interested in making an open source contribution to this project!

## Project Specifications
### Iteration 1 Chix Users
- Users can sign up or sign in to the app with Google
  - A new users must agree to Community Guidelines
  - A new user must create a profile (think Bumble) by uploading a profile picture and answering the following:
     - What would you like to be called here? (screenname)
     - How do you foster your creativity?
     - How do you nurture your wellbeing?
     - Inspiring words, such as an affirmation or quote (headline)
- Users can edit their profile

### Iteration 2 Chix Community
- Users can browse fellow users profiles (think Bumble but without swiping left, just browsing Chix for inspiration)

### Iteration 3 Chix Chats
- Chats are community message boards (think Reddit)
- Users can post questions or conversation starters
- Posts can include text, images and/or links
- Users can reply to posts
- Users are notified when someone responds to a post or comment

### Iteration 4 Topix
- Users can tag posts by topic
- Users can filter posts by topic

### Extensions
Feel free to add more ideas for future iterations here!
- Users can add current book, game, podcast, show ie "Currently Reading" to profile 
- Users can leave compliments on chix profiles
- Users can change app from dark to light theme

## Components & Features
- Welcome
  - Logo
  - Description of the app
  - Returning user can sign in with Google to go to their Profile
  - New user can sign up with Google to go to SignUp
- SignUp
  - User must agree to community code of conduct
  - User must create a profile to use the app
- Profile
  - User can upload a profile picture
  - User can answer and edit profile prompts
  - User can log out of the app
  - User can delete profile
- NavBar
  - User can navigate to About, Profile, Chix, or Chat
- Chix (container for Profiles)
  - User can view other users Profiles
- Chat (container for Posts)
  - User can post questions or conversation starters
    - Post can include text, images and/or links
  - Users can reply to posts
  - Users are notified when someone responds to a post or comment they made
- About
  - Users can review community code of conduct

## Wireframes
TBD (To Be Developed) Do you have an eye for design? We'd love your support with our logo and prototype design!
- [Miro Whiteboard](https://miro.com/app/board/o9J_khKi5is=/)

## Tech Stack
- Front End (this repo)
  - React
  - React Hooks & Context API (TBD)
  - styled-components
- [Back End Repo](https://github.com/ChixChat/chix_chat_be) 
  - Ruby on Rails
  - GraphQL (TBD)
- Other
  - [Deployed](https://chix-chat.herokuapp.com/) with Heroku
  - Travis CI [![Build Status](https://travis-ci.org/ChixChat/chix-chat-fe.svg?branch=main)](https://travis-ci.org/ChixChat/chix-chat-fe)

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- To install, fork then clone this repo into an empty directory on your local machine.
- Run `npm install` from the project directory in your teminal to install the project's dependencies.
- Run `npm start` to run the application in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser. \
The page will reload if you make edits and show any lint errors in the console.
- You can also run `npm test` to launch the test runner in the interactive watch mode. \
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `npm run build` builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. \
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Maintainers
Please contact us with any questions about this project!
- [Lauren Lucero](https://github.com/laurenlucero)
- [Léah Winters](https://github.com/LeahWinters)
- [Kelsha Darby](https://github.com/kelshadarby)

