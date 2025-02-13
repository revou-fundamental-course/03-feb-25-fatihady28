// Ini file Javascript

document.addEventListener('DOMContentLoaded', function () {
    const converterForm = document.getElementById('converterForm');
    const mainInput = document.getElementById('main-input');
    const mainResult = document.getElementById('main-result');
    const caraKonversi = document.getElementById('cara-konversi');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');

    let isCelsiusToFahrenheit = true;

    // Fungsi untuk validasi input
    function validateInput() {
        const inputValue = mainInput.value.trim();

        // Cek jika input kosong
        if (inputValue === "") {
            alert("Input tidak boleh kosong! Silakan masukkan suhu yang valid.");
            return false;
        }

        // Cek jika input bukan angka
        if (isNaN(inputValue)) {
            alert("Input harus berupa angka! Silakan masukkan suhu yang valid.");
            return false;
        }

        return true;
    }

    // Fungsi untuk konversi suhu
    function convertTemperature() {
        if (!validateInput()) {
            return; // Hentikan proses jika input tidak valid
        }

        const inputValue = parseFloat(mainInput.value);
        if (isCelsiusToFahrenheit) {
            const fahrenheit = (inputValue * 9 / 5) + 32;
            mainResult.value = `${fahrenheit.toFixed(2)} °F`;
            caraKonversi.value = `${inputValue} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
        } else {
            const celsius = (inputValue - 32) * 5 / 9;
            mainResult.value = `${celsius.toFixed(2)} °C`;
            caraKonversi.value = `(${inputValue} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
        }
    }

    // Fungsi untuk reset form
    function resetForm() {
        mainInput.value = '';
        mainResult.value = '';
        caraKonversi.value = '';
    }

    // Fungsi untuk reverse konversi
    function reverseConversion() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        if (isCelsiusToFahrenheit) {
            document.querySelector('label[for="main-input"]').textContent = 'Celcius (°C):';
            document.querySelector('label[for="main-result"]').textContent = 'Fahrenheit (°F):';
            document.querySelector('h3').textContent = 'Rumus: Celcius (°C) ke Fahrenheit (°F)';
        } else {
            document.querySelector('label[for="main-input"]').textContent = 'Fahrenheit (°F):';
            document.querySelector('label[for="main-result"]').textContent = 'Celcius (°C):';
            document.querySelector('h3').textContent = 'Rumus: Fahrenheit (°F) ke Celcius (°C)';
        }
        resetForm();
    }

    // Event Listeners
    converterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        convertTemperature();
    });

    resetButton.addEventListener('click', resetForm);
    reverseButton.addEventListener('click', reverseConversion);
});