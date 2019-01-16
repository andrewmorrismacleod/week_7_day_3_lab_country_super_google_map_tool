const Countries = require('./models/countries.js')
const ViewCountries = require('./views/view_countries.js')
const RenderCountryInfo = require('./views/render_country_info.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const dataCollection = new Countries
  dataCollection.getData();

  const selector = document.querySelector('#countries')
  const dataTransfer = new ViewCountries(selector)
  dataTransfer.bindEvent();

  dataCollection.bindEvent();

  const space = document.querySelector('#country')
  const view = new RenderCountryInfo(space)
  view.bindEvent();
});
