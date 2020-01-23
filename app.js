const celciusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

  function roundNum(num) {
    return Math.round(num * 100)/100
  } //This would give us the number rounded down with two decimal points
    //if we wanted that, but I just decided to use toFixed(2);

  function celsiusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = fTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
  }

  function fahrenheitToCelsiusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = cTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
  }

  function KelvinToCandF() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15
    const fTemp = (9/5) * (kTemp - 273) + 32
    celciusInput.value = cTemp.toFixed(2);
    fahrenheitInput.value = fTemp.toFixed(2);
  }

  function main(){
    celciusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener('input', KelvinToCandF);
  }

  main();
