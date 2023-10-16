document.getElementById("celsius-convert").addEventListener("click", function () {
    // Get the input value (Celsius)
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById("result").textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById("fahrenheit-convert").addEventListener("click", function () {
    // Get the input value (Fahrenheit)
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Check if the input is a valid number
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number for Fahrenheit.");
        return;
    }

    // Convert Fahrenheit to Celsius
    const celsius = (fahrenheit - 32) * 5/9;

    // Display the result
    document.getElementById("result").textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
});
