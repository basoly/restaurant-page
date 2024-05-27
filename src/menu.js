import img2 from './img2.jpg';

const menuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.setAttribute('class', 'page-content');
 
    // image, headline, paragraph
    const image = document.createElement('img');
    image.src = img2 // include image source
    image.height = '400';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = `Cheeseburger`;
    pageContent.appendChild(headline);

    const paragraph = document.createElement('p1');
    paragraph.textContent = `Indulge in the ultimate satisfaction with our mouthwatering cheeseburger, a culinary masterpiece crafted to tantalize your taste buds. Picture this: a perfectly grilled beef patty, seasoned to perfection and nestled between two toasted buns, each bite bursting with juiciness and flavor. As you sink your teeth into the tender goodness, savory melted cheese cascades over the edges, adding a creamy richness that elevates every delicious morsel. Accompanied by crisp lettuce, ripe tomato, and zesty pickles, this cheeseburger is a symphony of taste and texture, a symphony that will leave you craving more with each savory bite. Whether you're a seasoned burger aficionado or simply seeking culinary bliss, our cheeseburger is sure to satisfy your cravings and leave you longing for another unforgettable dining experience.`;
    pageContent.appendChild(paragraph);
    content.appendChild(pageContent);
}

export default menuPage;