# React-ToDo (Starter Kit) 

> This is the Starter kit, to see the finished App please go here https://github.com/fiuacm/React-ToDo

> A simple ToDo-List built with MongoDB (Database), ExpressJs (Server), ReactJS (Front-End), NodeJS (Back-end driver).The simple app can be built from scratch by following the guidelines here and comments through the code.

## Requirements:
* **NodeJS:**  To install node in either Windows/Linux please follow these steps: https://nodejs.org/en/download/ (Any version above 5.7.1 works!) Also recommend getting nvm https://github.com/creationix/nvm to manage Node versions.
* **MongoDB:** To install mongo in either Windows/Linux please follow these steps: https://www.mongodb.com/download-center?jmp=nav. Easier way to install mongo is Linux: $ sudo apt-get install mongodb
       
* **Important Checks** Once Node/Mongo is installed check if it's working in your computer by running these commands:
    $ node -v
    $ mongo --version

*  **Windows Users:** If these command are not found by your terminal follow these steps:
    1. Restart the terminal and try again
    2. If step 1 does not work. Then you have to add node to your path, follow these steps: http://windowsitpro.com/systems-management/how-can-i-add-new-folder-my-system-path
    3. Restart Terminal and try again.


## Development Manul Set Up

Manual (For those who would like to set up the environment manually, otherwise skip to line 45 for easier automatic setup)

 After node is installed and working we install dependencies on the project directory with npm (For more details about this setup please visit: https://codegaze.github.io/2016/01/05/working-with-es6-in-browser/)

    1. Run this command and follow the instructions to completion:
       $ npm init
    2. Install **Gulp** : https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
       $ npm install gulp-cli -g
    3. Install **Gulp-Babel**: https://www.npmjs.com/package/gulp-babel
       $ npm install gulp --save   
       $ npm install gulp-babel babel-preset-es2015 babel-preset-react babelify browserify gulp gulp-rename gulp-util vinyl-buffer vinyl-source-stream watchify gulp-nodemon --save
    4. Install **Express**: http://expressjs.com/en/starter/hello-world.html
       $ npm install express --save
    5. Install **ReactJS**: https://facebook.github.io/react/docs/installation.html
       $ npm install react react-dom --save
    6. **Optional** AngularJS v1/v2 Although we're not making our ToDo-List in Angular you could use it instead of React. https://angularjs.org/
       For a guide on how to build a ToDo in Angular visit: https://github.com/jonycodes/ToDo   
    7. Set up gulfile.js:
        * In the main directory run
            $ touch gulpfile.js
        * Copy and paste https://github.com/fiuacm/React-ToDo/blob/master/gulpfile.js into your local gulpfile (This whole compile process is another workshop to explain. For now you're get it for free!!)
    8. Create all the same files from the github repository with the same exact file structure as https://github.com/fiuacm/React-ToDo/blob/master/gulpfile.js or create your own file sctructure but change the configs of the **gulpfile** accordinly. 
    9. Watch the video https://www.youtube.com/watch?v=cV-bGvnRZdw&t=767s to fill in the code

## Automatic Setup:

    1. Run:
         $ git clone https://github.com/fiuacm/React-ToDo.git
         $ mv React-ToDo-Setup React-ToDo
         $ cd React-ToDo
         $ npm install
         $ gulp
    2. Start Coding! A server should be live at **localhost:3000** with a **Hello, World!** message (Make sure you can see this message otherwise something has gone wrong)  
    3. Watch the video https://www.youtube.com/watch?v=cV-bGvnRZdw&t=767s and have fun!  
