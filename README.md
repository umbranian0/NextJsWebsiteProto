<<<<<<< HEAD

# #Instructions to run the server (dev) and website testing

# 0 --> Install all Pre Requisites to run Next.JS
https://nodejs.org/en/

# 1 --> Navigate to project directory
cd autokroma

# 2 --> Start the server
npm run dev

# 3 --> Run the aplication in Chrome Browser
http://localhost:3000

# 4 --> Editing the Page
Open pages/index.js with your text editor and start editing

 
# General notes about collaboration and work habits
# 1 ->  Lets create our project with create-next-app.
npx create-next-app your-app-name
# 2 -> Now you can start using application with changing directory to your app name with
cd your-app-name
yarn dev
# 3 -> Useful commands
	yarn dev
		Starts the development server.yarn build
		Builds the app for production.yarn start
		Runs the built app in production mode.
# 4 -> 
npm init -y
npm install --save react react-dom next
npm add styled-components
npm install react-iframe
npm install framer-motion
add node-json-db
# 5 -> Runs
npm run dev




# # Repository Files
# components
Modules for layouts, headers and NavBars.
If you modify one model, it modify entire aplication
# # /StatidDB
Json files that stores the static information
# /.next 
Contain all information about aplication manifest, cache and server initialization
# /node_modules
Library extensions and modules
# /pages
All application pages
The pages are modular, all have a Layout that Have a Header with a menu and a footer.
The Pages modules get data from components/StaticDb JSON file
# /public 
Media files and configurations
# .gitignore
Gitignore  untracked files that Git should ignore
# package-lock.json
automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
# pages
All modules with pages used in website
# package.json
his document is all you need to know about what's required in your package.json file. It must be actual JSON, not just a JavaScript object literal.
A lot of the behavior described in this document is affected by the config settings described in config.
# README
File that explain all project scope and documentation

https://nextjs.org/docs
# Packages to Install
 - > npm i styled-components
 - > npm install react-iframe
 - > npm install sass
 - >  npm install --save @zeit/next-sass node-sass

 - > npm add node-json-db
 - > npm install @fortawesome/fontawesome-free
 
 https://antoncodes.com/article/importing-font-awesome-into-nextjs
>>>>>>>>


