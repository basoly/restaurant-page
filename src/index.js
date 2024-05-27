import initPage from './initPage.js';
import {homePage, deleteContent} from './home.js';
import loadTabs from './loadTabs.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import './style.css';

alert('Hello!');

// Hard code page elements into html
// Finalize each page of each tab in HTML before dynamically generating it with JS
// Tab switching logic: put contents of each tab inside its own module
// Each module exports function that creates div element and adds appropriate content and styles to said element
// and appends to DOM
// make event listeners for each button in header navbar that wipes out current contents of div#content 
// and then runs correct 'tab module' to populate with new contents again.
// Dummy Content: Collect Dummy content while at work and figure out the tab switch logic in codepen.
// you can store dummy headlines and text in array and select from arr based on id of button clicked.


initPage();

