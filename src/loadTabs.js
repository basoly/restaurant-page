import {homePage, deleteContent} from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'

const loadTabs = () => {
    alert('test alert');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    tab1.setAttribute('id', 'home-tab');
    tab2.setAttribute('id', 'menu-tab');
    tab3.setAttribute('id', 'contact-tab');

    tab1.setAttribute('class', 'tab');
    tab2.setAttribute('class', 'tab');
    tab3.setAttribute('class', 'tab');

    tab1.textContent = 'Home';
    tab2.textContent = 'Menu';
    tab3.textContent = 'Contact';

    const content = document.querySelector("#tabs");
    content.appendChild(tab1);
    content.appendChild(tab2);
    content.appendChild(tab3);

    tab1.addEventListener('click', () => {
        deleteContent();
        homePage();
    })

    tab2.addEventListener('click', () => {
        deleteContent();
        menuPage();
    })

    tab3.addEventListener('click', () => {
        deleteContent();
        contactPage();
    })
}

export default loadTabs;
