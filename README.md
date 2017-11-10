# True Prodigy Front End App

### Getting Started
* created using create-react-app 
* clone repo
* npm start to run react app - app will run on localhost:3000 in browser

### File Locations and functionalities
* index.html in /public folder
* React/Redux files in /src folder
* index.js is the main file, calls the App component via Provider and Redux store
* store.js contains Redux store code
* App.js calls the Grid component, which is the ui and stateful React component
* Redux actions, reducers in respective folders
* Grid (and its associated css file) component in /src/components folder:

  * Grid component uses the Redux store to gather data.
  * As soon as the component mounts, the Redux action calls api request to "http://107.21.199.89/equityfinder/property" and the incoming store data is parsed for the specific properties to be displayed. These are then displayed in a table format.
  * When user clicks on the PropID of each table element, the Redux action calls api request to "http://107.21.199.89/equityfinder/property/<propID>" and the incoming store data is parsed for the properties to be displayed in a modal, and the modal is opened.
