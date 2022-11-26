// displaying the country's flag in the console

let request = new XMLHttpRequest();
request.open("GET", 'https://restcountries.com/v3.1/all', true);
request.send()
request.onload = function (result) {
      let data = JSON.parse(request.response);
      for (const element of data) {
            console.log(element?.flags?.png);          
      }
}