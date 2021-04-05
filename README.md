# Employee Manager App

- [Overview](#overview)
- [Purpose](#purpose)
- [How to run](#running-the-project)
- [Dependancies](#dependancies)
- [Contributors](#contributors)

---

### Overview

This app was built with the purpose of managing employee data within the company with regards to their details and statuses.

Currently, the app has the following features: 

1. Home page

    <img src="https://puu.sh/HvEZA/5441f7302e.png" alt="home page" />

2. Login page

    <img src="https://puu.sh/HvEZJ/0d1473e690.png" alt="login page" />

3. Register page

    
    <img src="https://puu.sh/HvF00/96fc6620f8.png" alt="register page" />
    
---

### Purpose

This app is made for the purpose of managing employee details.

---

### Running the project

The repo does not include the node_modules, please run `npm install` in the main project 
directory if you wish to clone it and run it locally

The repo does not include the firebase configuration files, to do your own configuration 
please do the following:
1. set up a new firebase application
2. navigate to project settings and tab over to "Config"
3. paste the config information in your project under src/firebase/firebaseConfig.js file
4. run all of the firebase steps to initialize a project and provide appropriate config
5. make sure that you choose "build" as your public build folder and specify that your app is SPA


The package.json is already configured with:
- `npm start` to run the application in production
- `npm run build` to build your project into the build folder which firebase reads from

---

### Dependancies

- Production

| Package                        | Purpose                                                       |
|--------------------------------|---------------------------------------------------------------|
| firebase                       | backend as a service from google                              |
| react-router-dom               | enables routing in react components                           |


- Development

| Package                        | Purpose                                                       |
|--------------------------------|---------------------------------------------------------------|
| @svgr/cli                      | convert svg files to reusable components                      |
| svgo                           | convert svg files to reusable components                      |
| node-sass                      | enable sass styling for components                            |
| styled-components              | in-component styling                                          |


---

### Contributors

- [Ayman Al-Dali](https://github.com/ayman-d) :octocat:

---
