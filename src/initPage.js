// Initialize page
import {homePage, deleteContent} from './home';
import loadTabs from './loadTabs';
import contactPage from './contact';
import menuPage from './menu';

const initPage = () => {
    loadTabs();
    homePage();
}

export default initPage;