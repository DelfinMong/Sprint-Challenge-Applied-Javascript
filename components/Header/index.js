// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function header() {
    const  header = document.createElement('header');
    const  span = document.createElement('date');
    const  Lambda = document.createElement('h1');
    const  temp = document.createElement('span');

    header.classList.add('header');
    span.classList.add('date');
    temp.classList.add('temp');

    header.append(span,Lambda,temp);

    return header
}

const container = document.querySelector('.header-container');
container.append(header());