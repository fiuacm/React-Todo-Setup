React-ToDo

This a a simple ToDo-List built with ReactJS. NodeJS, Express and Mongo

This simple app can be built from scratch just follow the guidelines here and comments through the code.


  Requirements:
    1. NodeJS: To install node in either Windows/Linux please follow these steps: https://nodejs.org/en/download/
    2. MongoDB: To install mongo in either Windows/Linux please follow these steps: https://www.mongodb.com/download-center?jmp=nav

  Once Node is installed check to see if it's in your computer by running these commands:
    $ node -v

  Windows Users: If this command is not found by your terminal two things:
    1. Restart the terminal and try again
    2. If step 1 does not work. Then you have to add node to your path, follow these steps: http://windowsitpro.com/systems-management/how-can-i-add-new-folder-my-system-path
    3. Restart Terminal and try again.


Development Set Up

Manual (I already did this for you but feel free to learn how to do it manually, skip to line 47 for the easier setup):

  After node is installed and working we install dependencies on the project directory with npm (For more details about this setup please visit: https://codegaze.github.io/2016/01/05/working-with-es6-in-browser/)

    1. Run this command and follow the instructions to completion:
       $ npm init
    2. Gulp: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
       $ npm install gulp-cli -g
    3. Gulp-Babel: https://www.npmjs.com/package/gulp-babel
       $ npm install gulp --save   
       $ npm install gulp-babel babel-preset-es2015 babel-preset-react babelify browserify gulp gulp-rename gulp-util vinyl-buffer vinyl-source-stream watchify gulp-nodemon --save
    4. Express: http://expressjs.com/en/starter/hello-world.html
       $ npm install express --save
    5. ReactJS: https://facebook.github.io/react/docs/installation.html
       $ npm install react react-dom --save
    6. AngularJS v1/v2 (Optional) Although we're not making our ToDo-List in Angular you could use it instead of React. https://angularjs.org/
       For a guide on how to build a ToDo in Angular visit: https://github.com/jonycodes/ToDo   
    7. Set up gulfile.js:
        * In the main directory run
            $ touch gulpfile.js
        * Copy and paste https://github.com/jonycodes/React-ToDo/blob/master/gulpfile.js into your local gulpfile (This whole compile process is another workshop to explain. For now you're get it for free!!)
    8. Create all the same files from the github repository with the same exact file structure of https://github.com/jonycodes/React-ToDo or create your own      file sctructure but change the configs the `gulpfile`
    9. Follow the instructions in each js file to fill in the code

Automatic:

    1. Run:
        $ git clone https://github.com/jonycodes/React-ToDo.git
        $ cd React-ToDo
        $ npm install
        $ gulp
    2. Start Coding! A server should be live at `localhost:3000` with a `Hello, World!` message (Make sure you can see this message otherwise something has gone wrong)  
    3. Follow the instructions in each js file to fill in the code  
