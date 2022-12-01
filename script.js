 //displaying the countryname ,region ,subregion and population

 let request = new XMLHttpRequest();
 request.open("GET", 'https://restcountries.com/v3.1/all', true);
 request.send()
 request.onload = function () {
       let data = JSON.parse(request.response);
       for (const element of data) {
             console.log("country name :" + element?.name?.common + '\n' +
                   "Country population :" + element?.population + '\n' +
                   "Region :" + element?.region + '\n' +
                   "SubRegion :" + element?.subregion
             );
       }
 }

//output : 

//country name :Mauritania
// Country population :4649660
// Region :Africa
// SubRegion :Western Africa
//  country name :Aruba
// Country population :106766
// Region :Americas
// SubRegion :Caribbean
//  country name :Argentina
// Country population :45376763
// Region :Americas
// SubRegion :South America
// country name :Sweden
// Country population :10353442
// Region :Europe
// SubRegion :Northern Europe





 // displaying the country's flag in the console

let request1 = new XMLHttpRequest();
request1.open("GET", 'https://restcountries.com/v3.1/all', true);
request1.send()
request1.onload = function () {
      let data = JSON.parse(request1.response);
      for (const element of data) {
            console.log("Country's flag url : ",element?.flags?.png);          
      }
}

//output  : 

// Country's flag url :  https://flagcdn.com/w320/pw.png
//  Country's flag url :  https://flagcdn.com/w320/gq.png
//  Country's flag url :  https://flagcdn.com/w320/gn.png
//  Country's flag url :  https://flagcdn.com/w320/ae.png
//  Country's flag url :  https://flagcdn.com/w320/tc.png
//  Country's flag url :  https://flagcdn.com/w320/vg.png
//  Country's flag url :  https://flagcdn.com/w320/li.png
//  Country's flag url :  https://flagcdn.com/w320/ba.png




// How to compare two json having the same properties without order


var obj1 = {
      name: "person 1",
      age: 5
  
  }
  var obj2 = {
      age: 5,
      name: "person 1"
  }

let res1 = JSON.stringify(obj1);
let res2 = JSON.stringify(obj2);

  let jsonEqual = (res1, res2) => {
      keys1 = Object.keys(res1);
      keys2 = Object.keys(res2);
      return keys1.length == keys2.length && keys1.every(checkTheValue);
  }
  
  function checkTheValue(key) {
      return res1[key] == res2[key]
  }
  console.log("json comparison :", jsonEqual(res1, res2));

//output : json comparison : false