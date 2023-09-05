
## tailwind setup

npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js file:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

App.css File:
@tailwind base;
@tailwind components;
@tailwind utilities;

## Namaste-Netflix-GPT :
Below Implemented point
- React Router
- Build Header
- Login form
- Signin and SignUp form
- form validations
- useRef Hooks with validation
- Firebase Setup
- Deploying app in firebase for production
- Create SignUp user account in firebase
- Create SignUp User in firebase
- Implemented singin user API
- Created a redux store with user slice
- Implemented sign out
- Update profile
## BugFixes :
  - Sign Up User DisplayName and profile picture Update
  - if user not login Redirect user to login page and vice versa
- Unsubscribed to the onAuthStateChanged callback 
- All hardcoded values add in constant file.

## Lets building our application
  - Fetch APi from TMDB Moview 
  - Geta data from TMDB now playing movies list API
  - craete movieSlice and put inside moview data
  - Creating a custome hooks for extract the code this ia good way
  - Update store with movies data
   
## Plannig to Bulding the Browse page 
  Frist design Structue of the browse page
    mainContainer
      - Videobackground
      - VideoTitle
    SecondaryContainer
      - Movielist * n
      -  cards * n   
- Fetch data for traile videos
- Create custome hook for traile video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- tailwind css added for main container look awesome
- Build the secondary Componnet
- Show the movie lists
- Build Movie card
- Movie image CDN URL build api 
- made the browse page amazing with tailwind css
- Suggestion movie with sliderleftt-right vice-versa



## Deployment setup firebase :
Create project with firebase and hosting also :
https://console.firebase.google.com/u/0/project/namastenetflixgpt/overview
 - install firebase : 'npm i firebase'
 - install firebase CLI : 'npm i -g firebase-tools'
 - firebase login : 'firebase login'
 - Initialize firebase : 'firebase init' then select hosting
 - 'npm run build' fro build folder
 - Deploy command : 'firebase deploy'
------------------------------------------------------------
## Project planning features :
Login and signup page
  - login and signup form
  - after login go to Browse page.
Browse [ after authotications ]
  - Header
  - Main Movie
      - Trailr in background
      - Title with descriptions
      - Moview suggestions
        - Movie lists
        - scrolling movie lists
netflix GPT
  - Search bar
  - movie Suggestions
----------------------  