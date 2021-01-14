<<<<<<< HEAD

# Instructions to run the server (dev) and website testing

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

# Goals of the project

Create a basic website filled with real information / content and create a basic logo to improve brand image.


M1. Setup : create a basic website using Next.JS
M1.a. Create instructions so that anyone pulling this repo knows how to run the server (dev) and build the website for testing 
M1.b. Create a document to explain whaat each file in the project is for and general organization of the repo, keep this document up to date as the project continues
M1.c. Be sure to read everything here (all the instructions and all the "General notes about collaboration and work habits") before beginning the project

M2. Create a template showing a website called Autokroma.com hosting 4 software products : the same one copy pasted 4 times, we will be based on AfterCodecs content accessible on https://www.autokroma.com/AfterCodecs

M2.a. Template has to be responsive, adapting to any resolution
M2.b. Clean design, use light colors and spacing between text
M2.c. Do not include giant CSS sheet from somewhere else start from scratch. You can assume the website only has to work for Chrome V87+ on Windows, do not try to make it work on all browser/all OSes
M2.d. Website should contain the same info than on autokroma.com for basic blog and 3 subpages of https://www.autokroma.com/AfterCodecs : Overview, Download and User Guide. You can simplify the Changelog and the F.A.Q of course here we just want to get a broad idea of the design using a bit of true information instead of Lorem Ipsum
M2.e. Try to make the final page displayed lightweight
M2.f. Adapt AfterCodecs official colors to this new design
M2.g. Create a small blog on homepage just like autokroma.com and fill 1 article, copy paste it 10 times to create new fake articles
M2.h. Add all products on a left sidebar, with submenus for all subpages of each product
M2.i. Create a top header and a bottom footer too, imitating information from https://www.autokroma.com


M3. Quickly create a new logo (a draft) for AfterCodecs :
    AfterCodecs is an exporter plugin with new features and new speed :
		exporter : ENCODES video and audio streams into an audiovideo file
		plugin : the software plugs into Adobe software or other video editing software
		new features and new speed : the exporter is more performant, faster and improves users' workflow
	so the logo should try to reflect some things about AfterCodecs, while fitting well in the overall website design 
	Sine this is a draft you can explain what you could do if you would spend more time on this and explain the overall idea you have about the logo (or different possibilities)

 
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

