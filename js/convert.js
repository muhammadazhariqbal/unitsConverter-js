
// an API for converting units values
import convert from 'https://esm.run/convert@4';

//  function run on onclick of convert button, It will get all the values from input values and pass them on convertValue function.
document.getElementById("convertBtn").onclick = function run() {
    var userValue = parseInt(document.getElementById("userValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    document.getElementById('error-msg').style.display="none";

    if(!userValue){return document.getElementById('error-msg').style.display="block";}

    convertValue(userValue, fromUnit, toUnit)
        .then(res => { 
            var roundedValue = res.toFixed(2)
            document.getElementById('result').innerText=`${roundedValue} ${toUnit}`;
         })
        .catch(error => {document.getElementById('error-msg').style.display="block";})
}

// convertValue function for calling convert api 
const convertValue = (userValue, fromUnit, toUnit) => {
    return new Promise((resolve) => {
        var convertedValue = convert(userValue, fromUnit).to(toUnit);
        resolve(convertedValue)
    })
}
