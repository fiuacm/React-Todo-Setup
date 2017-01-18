React-ToDo

This a a simple ToDo-List built with ReactJS. NodeJS, Express and Mongo

This simple app can be built from scratch just follow the guidelines here and comments through the code.

Initial Set-up:

  Requirements:
    1. NodeJS: To install node in either Windows/Linux please follow these steps: https://nodejs.org/en/download/
    2. MongoDB: To install mongo in either Windows/Linux please follow these steps: https://www.mongodb.com/download-center?jmp=nav

  Once Node is installed check to see if it's in your computer by running these commands:
    $ node -v

  Windows Users: If this command is not found by your terminal two things:
    1. Restart the terminal and try again
    2. If step 1 does not work. Then you have to add node to your path, follow these steps: http://windowsitpro.com/systems-management/how-can-i-add-new-folder-my-system-path
    3. Restart Terminal and try again.

  After node is installed and working we install the following dependencies on the project directory (For more details about this setup please visit: https://codegaze.github.io/2016/01/05/working-with-es6-in-browser/)
  
    1. Run this command and follow the instructions to completion:
       $ npm init
    2. Gulp: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
       $ npm install gulp-cli -g
    3. Gulp-Babel: https://www.npmjs.com/package/gulp-babel
       $ npm install gulp --save   
       $ npm install gulp-babel babel-preset-es2015 babel-preset-react babelify browserify gulp gulp-rename gulp-util vinyl-buffer vinyl-source-stream watchify --save

Development Set Up

    1. Express: http://expressjs.com/en/starter/hello-world.html
       $ npm install express --save
    2. ReactJS: https://facebook.github.io/react/docs/installation.html
       $ npm install react react-dom --save
    3. AngularJS v1/v2 (Optional) Although we're not making our ToDo-List in Angular you could use it instead of React. https://angularjs.org/
       For a guide on how to build a ToDo in Angular visit: https://github.com/jonycodes/ToDo   
