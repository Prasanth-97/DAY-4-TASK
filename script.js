 //displaying the countryname ,region ,subregion and population

 let request = new XMLHttpRequest();
 request.open("GET", 'https://restcountries.com/v3.1/all', true);
 request.send()
 request.onload = function (result) {
       let data = JSON.parse(request.response);
       for (const element of data) {
             console.log("country name :" + element?.name?.common + '\n' +
                   "Country population :" + element?.population + '\n' +
                   "Region :" + element?.region + '\n' +
                   "SubRegion :" + element?.subregion
             );
       }
 }