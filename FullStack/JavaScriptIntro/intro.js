// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };
  
// fetch("https://type.fit/api/quotes", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

        
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'GET', 
    });
    return response.json(); 
      }

postData('https://type.fit/api/quotes')
    .then((data) => {
    console.log(data); 
  });