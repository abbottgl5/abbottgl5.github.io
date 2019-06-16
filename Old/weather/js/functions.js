/************************
* Weather Site JavaScript Functions
************************/

console.log('My javascript is being read');

/// Variables for unction Use
const temp = 31;
const speed = 5;
const direction = "N";
const meter = 10;

// Calling windDial function
    windDial(direction);

// Calling the windchill funtion
    buildWC(speed, temp);

/* Windchill calculations for the Weather page */

function buildWC(speed, temp) {
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    // Round the answer down to an integer
    wc = Math.floor(wc);
    // wc/ temp display determination, If chill is greater the temp return temp if now return wc
    wc = (wc > temp)?temp:wc;
    // Display the windchill
    console.log(wc);
    wc = "Feels like " + wc + '&deg;F';
    feelTemp.innerHTML = wc;
}

// Wind Dial Function
function windDial(direction){
    // Get the wind dial container
    console.log('Testing Wind Dial');
    const dial = document.getElementById("dial");
    console.log(direction);
    // Determine the dial class
    switch(direction){
        case "North":
        case "N":
        dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        break;
        case "NE":
        case "NNE":
        case "ENE":
        dial.setAttribute("class", "ne");
        break;
        case "NW":
        case "NNW":
        case "WNW":
        dial.setAttribute("class", "nw");
        break;
        case "South":
        case "S":
        dial.setAttribute("class", "s");
        break;
        case "SE":
        case "SSE":
        case "ESE":
        dial.setAttribute("class", "se");
        break;
        case "SW":
        case "SSW":
        case "WSW":
        dial.setAttribute("class", "sw");
        break;
        case "East":
        case "E":
        dial.setAttribute("class", "e");
        break;
        case "West":
        case "W":
        dial.setAttribute("class", "w");
        break;
    }

    function convertMeters(meter)
    {
        let feet = meter * 3.28084;
        console.log(meter);
        console.log(feet);
        li_Location_Elivation.innerHTML = feet;
    }

    //function changeSummaryImage()

    //function getCondition() 

}


