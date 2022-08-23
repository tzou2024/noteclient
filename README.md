# Techonologies Used

## React.js

React.js is a JavaScript library that allows you to build fast and efficient web applications using the minimum amount of code possible. In React.js, you can break the web layout into components - reusable bits of code that return HTML elements. 

- 👉 [JavaScript concepts for React Beginners](https://blog.appseed.us/10-javascript-concepts-for-react-beginners/)

## Chakra UI Library 

Chakra UI is a library that allows you to build stunning and modern web applications using various layout components. It differs from other UI frameworks in that it offers accessibility and dark mode support by default. 

With Chakra UI, you spend less time building responsive and beautiful websites. If you want to create a web application that allows users to switch between different color modes with minimal lines of code, then Chakra UI is an excellent choice.

- 👉 [Chakra UI](https://chakra-ui.com/) - official website  

## How to use it 

- Install `NodejS` - version 14.x or higher 
- Install dependencies via `yarn`
- Start the project: `yarn start` 

## Formik 
Let's face it, forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:

Getting values in and out of form state
Validation and error messages
Handling form submission
By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze.

## Installation
You can install Formik with NPM, Yarn, or a good ol' `<script>` via unpkg.com.

NPM
 npm install formik --save
or
 yarn add formik

Formik is compatible with React v15+ and works with ReactDOM and React Native.

## Installing Dependencies
Dependencies are stored in [`package.json.`](package.json) To install these dependencies, run npm install.

------------

# Spotlight App Project 
A social media app that allow users to "SPOTLIGHT" a major current event, a special moment of their day, or just an image that provided a fleeting moment of joy and share it with others.

## User Story
- As an unregistered user, I would like to view all images
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to upload an image to AWS with a name
- As a signed in user, I would like to update the name of my image on AWS.
- As a signed in user, I would like to see all my images on AWS.
- As a signed in user, I would like to see the thumbnail of all images on AWS.
- As a signed in user, I would like to comment on posts
- As a signed in user, I would like to delete my comments
- As a signed in user, I would like to update my comments
- As a signed in user, I would like to delete the reference of my image from the database.
- As a signed in user, I would like to see the following data for any post:
    - date created/uploaded
    - date modified
    - owner (user who created the post)
    - name

### Stretch Goals
- As an unregistered user, I would like to download any image
- As a signed in user, I would like to 'like' images
- As a signed in user, i would like to follow another user
- As a signed in user, i would like to share another user's post

## Views

### User Views
    | Route             | Description                               |
    | ----------------- | ----------------------------------------- |
    | /sign-up          | allows users to sign into their account   |
    | /sign-in          | allows users to create a new account      |
    | /changepassword/ | allows users to change their password     |

### Post Views
    | Route    | Description                             |
    | -------- | --------------------------------------- |
    | /        | allows users to see everyone's posts    |
    | /myposts | allows users to see all of user's posts |
    | /addpost | allows users to create a new post       |

## Wireframes
![](planning/WireFrames.png)

## Development Roles 
- Front-End SME: Trevor Zou
- Back-End SME: Shai Aloni 
- Team Manager: Dang Do