function convert() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let resultDiv = document.getElementById("result");

    if (isNaN(temp)) {
        resultDiv.innerHTML = "<p>Please enter a valid temperature.</p>";
        return;
    }

    let output = "";

    if (unit === "C") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;

        output = `
        <h3>Input Unit: Celsius (°C)</h3>
        <p><b>Formula Used:</b></p>
        <p>°F = (°C × 9/5) + 32</p>
        <p>K = °C + 273.15</p>

        <p><b>Converted Values:</b></p>
        <p>Fahrenheit: ${f.toFixed(2)} °F</p>
        <p>Kelvin: ${k.toFixed(2)} K</p>
        `;
    }

    else if (unit === "F") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;

        output = `
        <h3>Input Unit: Fahrenheit (°F)</h3>
        <p><b>Formula Used:</b></p>
        <p>°C = (°F − 32) × 5/9</p>
        <p>K = °C + 273.15</p>

        <p><b>Converted Values:</b></p>
        <p>Celsius: ${c.toFixed(2)} °C</p>
        <p>Kelvin: ${k.toFixed(2)} K</p>
        `;
    }

    else if (unit === "K") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;

        output = `
        <h3>Input Unit: Kelvin (K)</h3>
        <p><b>Formula Used:</b></p>
        <p>°C = K − 273.15</p>
        <p>°F = (°C × 9/5) + 32</p>

        <p><b>Converted Values:</b></p>
        <p>Celsius: ${c.toFixed(2)} °C</p>
        <p>Fahrenheit: ${f.toFixed(2)} °F</p>
        `;
    }

    resultDiv.innerHTML = output;
}
