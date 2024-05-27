import img1 from './img1.jpg';

const homePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.setAttribute('class', 'page-content');

    // image, headline, paragraph
    const image = document.createElement('img');
    // const myImage = new Image();
    image.src = img1 // include image source
    image.height = '400';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = `Welcome to our restaurant`;
    pageContent.appendChild(headline);

    const paragraph = document.createElement('p1');
    paragraph.textContent = `Welcome to [Restaurant Name], where culinary excellence meets warm hospitality in every dish we serve. Situated in the heart of [City/Town], our restaurant offers a welcoming ambiance perfect for intimate dinners, family gatherings, or casual get-togethers with friends. Our diverse menu features a tantalizing array of dishes inspired by global flavors and crafted with the finest, locally sourced ingredients. From sizzling appetizers to mouthwatering entrees and indulgent desserts, each dish is meticulously prepared to delight your senses and leave you craving more. Complement your meal with a selection from our carefully curated wine list or enjoy handcrafted cocktails expertly mixed by our talented bartenders. Whether you're seeking a cozy dinner for two or hosting a special event, our dedicated team is committed to providing an unforgettable dining experience that exceeds your expectations. Join us at [Restaurant Name] and let us take you on a culinary journey you won't soon forget.`;
    pageContent.appendChild(paragraph);

    content.appendChild(pageContent);
}

const deleteContent = () => {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent)
    }
}



export {homePage, deleteContent}




// clearContent function to remove content before new content