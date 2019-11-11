// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const axiosPromises = axios.get("https://lambda-times-backend.herokuapp.com/topics");
console.log(axiosPromises);

axiosPromises.then(response => {
    const Arr = response.data.topics;
    Arr.forEach(item =>{
      const tp = document.querySelector('.topics');
      const newCard = tab(item);
      tp.append(newCard);
    })
});
     
axiosPromises.catch(error => {
console.log('the data was not returned', error);
});

function tab (info) {
  const tabs = document.createElement('div');
  tabs.classList.add('tab');
  tabs.textContent = info;

  return tabs;
}