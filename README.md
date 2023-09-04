
## tailwind setup :
npm install -D tailwindcss
npx tailwindcss init
----------------
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
---------------
@tailwind base;
@tailwind components;
@tailwind utilities;
---------------
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