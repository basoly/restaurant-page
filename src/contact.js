import img3 from './img3.jpg';

const contactPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.setAttribute('class', 'page-content');
 
    // image, headline, paragraph
    const image = document.createElement('img');
    image.src = img3 // include image source
    image.height = '400';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = `About Us`;
    pageContent.appendChild(headline);

    const paragraph = document.createElement('p1');
    paragraph.textContent = `Contact us below!`;
    pageContent.appendChild(paragraph);
    content.appendChild(pageContent);
}

export default contactPage;