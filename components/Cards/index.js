// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const axiosPromises2 = axios.get("https://lambda-times-backend.herokuapp.com/articles");
console.log(axiosPromises2);

axiosPromises2.then(response => {
   
    const keys =  Object.keys(response.data.articles)
    keys.forEach(item => {
        response.data.articles[item].forEach(items => {
           const container2 = document.querySelector('.cards-container')
           const allCars = articleCards (items);
           container2.append(allCars);
       })
    })
})
     
axiosPromises2.catch(error => {
console.log('the data was not returned', error);
});


function articleCards (info) {
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgCont= document.createElement('div');
const img = document.createElement('img');
const authorName = document.createElement('span')

card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgCont.classList.add('img-container');

headline.textContent = info.headline;
img.src = info.authorPhoto;
authorName.textContent = info.authorName;

card.append(headline,author);
imgCont.append(img);
author.append(imgCont,authorName);

return card;
}