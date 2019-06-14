const app = document.getElementById('root');

//create a div with class container and append it to the app
const container = document.createElement('div');
container.setAttribute('class', container);
app.appendChild(container);

//make a request to the API
const CORS_ANYWHERE_PROXY = "https://afternoon-headland-40880.herokuapp.com/";
// const CORS_ANYWHERE_PROXY = "https://cors-anywhere.herokuapp.com";
// const CORS_ANYWHERE_PROXY = "https://cors.io/?";

const url = `${CORS_ANYWHERE_PROXY}https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`;

// var request = new XMLHttpRequest();
// request.open('GET', url, true);
// request.withCredentials = false;
// request.onload = function() {
//   console.log(this.response);
  
// }

// request.send();

// axios.get(url)
// .then(function(response) {
//   console.log(response.data);
//   console.log(response.status);
// })




