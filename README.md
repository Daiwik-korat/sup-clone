## Superpower Clone - (Final Evaluation Test)

1.** Project Overview ** 
Project contains 2 webpage Home, How-it-works. Project is developed using Next.js Framework. Both webpage are redeveloped using knowledge and skills learned during internship. Fetching products, FAQ and Testimonial section from provided API Endpoints. All designed components are responsive to the desktop and mobile. Data is managed and stored using Redux toolkit, and shared between all client components which require those data. 

** Tech Stack Used ** -
Frontend: Next.js, Typescript, Tailwind
Version Controll:Git, Github
Deployment: AWS Amplify

Setup Instructions:
1. open project folder in any editor
2. Set Your environment Variables
3. Command to enter in same directory for packadge installation: npm install
 This will install all packedges required to run project.
4. Run Project using: npm run dev
5. Visit site with url given below in CMD or "http://localhost:3000/"

Project Structure-
1. Components Folder: All sections are devided in different reuseable components so that they can be used in      multiple webpages and Stored inside components folder of root directory (So all pages from app can easlily access).
They are also further devided in folders so section wise components can be identified and accessed easily.

2. Public Assets:
All assets like images, fonts, videos required are stored inside public folder so all components or page can access those easily and publically available for use as well.

3. Redux store (Stored in ".app/__lib"): 
Redux files are part of __lib folder as they are not part of UI and act like central data library for statemanagment and data sharing inside whole project files.
I) Slices: Inside inside features acting as different features of website
II) StoreProvider: It acts as bridge to provide React Context to client components as it can be only access using client components of project. and all client components are child of layout server components. 
III) StoreInitializer: To load and fetch different data from API and act as starting point before even loading rendering main components for project.
IV) Storing of different interfaces and types for API data.
V) Api: Contains all 3 queries, Async functions to make an api call for fetching data
VI) Hooks: Reduces reducandant code for mentioning types each time we import dispatch and selector, by wrapping it and returning type safe hooks.
VII) store: Returns a fresh store for server components.

All Constants for fallback at time of failed API calls are stored in constant (Only for footer for now as per asked in Req file).


4. Web Pages.
`/`: inside directly ./app as it is home page. Also haves its loading and error handling file at time of data fetching cases. Layout have all 3 info (Title, Desc, openGraph) as asked in Req file.
`how-it-works`: How it works page route file is stored inside the how-it-works for making a route in next.js with their custom layout file.

Features Implemented: 
- [Y] All pages match reference design
- [Y] Dynamic data loads from API
- [Y] All animations working smoothly
- [Y] Zero TypeScript `any` usage
- [Y] Zero commented-out code
- [Y] All images have alt attributes
- [Y] Semantic HTML used throughout
- [Y] 20+ meaningful commits
- [Y] All Git workflows documented in README
- [Y] AWS Amplify deployment successful
- [Y] README complete with all sections

API Integration: 
Queries were taken as reference from provided senavida website ref and from Req files. It was modified as per requirements, as all of the data were not required for this project.

Git WorkFlow as Asked.
Available in gitRecord.txt in project directory (For Better abstration).

8. Known Issues: 
1. Not complete Pixel perfect UI.g Text, Components sizeing in width, height is different from original site.
Scaling of UI components logic is builded independantly (Deciding Semantic tags use, CSS flex, grid layouting etc.)
2. Because of Heavy animation, Moving widths and size of screen in inspects leads to breaking CSS and have to restart webpage and open inspect again.
3. Product and FAQ Slider only Sliding through button (Has to add premade components for smoother implementation from bootstap or some other libraries).

9. Deployment:
Login into aws amplify
Create application using Github
Selecting a branch for live site. (Created seperate Dev branch out of Main for better abstration and identification or quickly role back production changes).
Setting up .env variables
Deployed application after build

Issues Faced: build failed 2 times because of some type script saftey checks in Slices. Resolved and builded successfull after those changes.

