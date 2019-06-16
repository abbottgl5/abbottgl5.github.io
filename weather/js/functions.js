/************************
* Weather Site JavaScript Functions
************************/

// Variables for unction Use

const temp = 23
const speed = 15;
const direction = "W";
const meter = 10;
var condition = "Sunny";


// logWriter
    logWrite('My javascript is being read'  + ", Log Body 1");

// Calling the windchill funtion
    buildWC(speed, temp);

// Calling windDial function
    windDial(direction);

// Calling Convert Meter    
    convertMeters(meter);

// Call getCondition
    logWrite('Condition = ' + condition + ", Log Body 2");
    var newCondition = getCondition(condition);

    // Call changeSummaryImage
    changeSummaryImage(newCondition);

/* Windchill calculations for the Weather page */

function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    logWrite(wc + ", Log 1 WC");
    // Round the answer down to an integer
    wc = Math.floor(wc);
    // wc/ temp display determination, If chill is greater the temp return temp if now return wc
    wc = (wc > temp)?temp:wc;
    // Display the windchill
    logWrite(wc  + ", Log 2 WC");
    wc = "Feels like " + wc + '&deg;F';
    feelTemp.innerHTML = wc;
}

// Wind Dial Function
function windDial(direct){
    // Get the wind dial container
    logWrite(direct  + ", Log 1 direction");
    const dial = document.getElementById("dial");
    // Determine the dial class
    switch(direct){
        case "North":
        case "N":
        {dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        li_Wind_Direction.innerHTML = "N";
        }
        break;
        case "NE":
        case "NNE":
        case "ENE":
        {dial.setAttribute("class", "ne");
        li_Wind_Direction.innerHTML = "NE";    
    }
        break;
        case "NW":
        case "NNW":
        case "WNW":
        {dial.setAttribute("class", "nw");
        li_Wind_Direction.innerHTML = "NW";    
    }
        break;
        case "South":
        case "S":
        {dial.setAttribute("class", "s");
        li_Wind_Direction.innerHTML = "S";    
    }
        break;
        case "SE":
        case "SSE":
        case "ESE":
        {dial.setAttribute("class", "se");
        li_Wind_Direction.innerHTML = "SE";    
    }
        break;
        case "SW":
        case "SSW":
        case "WSW":
        {dial.setAttribute("class", "sw");
        li_Wind_Direction.innerHTML = "SW";    
    }
        break;
        case "East":
        case "E":
        {dial.setAttribute("class", "e");
        li_Wind_Direction.innerHTML = "E";    
    }
        break;
        case "West":
        case "W":
        {dial.setAttribute("class", "w");
        li_Wind_Direction.innerHTML = "W";    
    }
        break;
    }
}

function convertMeters(meter){
        logWrite(meter + ", Log meter");
        let feet = meter * 3.28084;
        logWrite(feet + ", Log feet");
        li_Location_Elivation.innerHTML = feet;
    }

function getCondition(condition){
    logWrite("Condition = " + condition + " getCondition")
    var returning;
    
    if(condition.includes("Clear") || condition.includes("Sunny") || condition.includes("Bright"))
    {returning = "Clear"}
    else if(condition.includes("Cloud") || condition.includes("Overcast") || condition.includes("Gray") || condition.includes("Gloomy"))
    {returning = "Cloud" }         
    else if(condition.includes("Fog") || condition.includes("Hazy"))
    {returning = "Fog" }
    else if(condition.includes("Rain") || condition.includes("Wet") || condition.includes("Shower") || condition.includes("Driz"))
    {returning = "Rain" }
    else if(condition.includes("Snow"))
    {returning = "Snow" }             

    logWrite(returning);

    return returning;
    }

function changeSummaryImage(cur){
    
    switch(cur)
    {
        case "Clear":
            {Current_Weather_Condition.setAttribute("src", "/weather/images/weather-page/clear.jpg");
            Heading3_Current_Weather.innerHTML = "Clear";}
        break;
        case "Clouds":
            {Current_Weather_Condition.setAttribute("src", "/weather/images/weather-page/clouds.jpg");
            Heading3_Current_Weather.innerHTML = "Cloud";}
        break;
        case "Fog":
            {Current_Weather_Condition.setAttribute("src", "/weather/images/weather-page/fog.jpg");
            Heading3_Current_Weather.innerHTML = "Fog";}
        break;
        case "Rain":
            {Current_Weather_Condition.setAttribute("src", "/weather/images/weather-page/rain.jpg");
            Heading3_Current_Weather.innerHTML = "Rain";}
        break;
        case "Snow":
            {Current_Weather_Condition.setAttribute("src", "/weather/images/weather-page/snow.jpg");
            Heading3_Current_Weather.innerHTML = "Snow";}
        break;
    }
}

function logWrite(logWriter){
        console.log(logWriter);
    }


