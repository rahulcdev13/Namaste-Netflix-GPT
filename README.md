
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
  - after login go to browser page.
Browser [ after authotications ]
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