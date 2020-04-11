console.log('Covid-19 Estimator');

fetch('https://mickeymond-covid-19-estimator.herokuapp.com/api/v1/on-covid-19/logs')
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(console.log);