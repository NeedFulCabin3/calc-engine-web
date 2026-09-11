const display = document.getElementById('display');
let shouldResetDisplay = false;

function appendValue(value) {
    if (display.innerText === '0' && value !== '.' || shouldResetDisplay) {
        display.innerText = value;
        shouldResetDisplay = false;
    } else {
        // Prevent consecutive operators
        const lastChar = display.innerText.slice(-1);
        const operators = ['+', '-', '*', '/'];
        if (operators.includes(lastChar) && operators.includes(value)) {
            display.innerText = display.innerText.slice(0, -1) + value;
            return;
        }
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
    shouldResetDisplay = false;
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        const expression = display.innerText;
        
        // Use Function instead of eval for a slightly cleaner and safer approach
        const result = new Function(`return ${expression}`)();
        
        if (result === Infinity || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            // Handle floating point precision issues nicely
            display.innerText = Number(result.toFixed(8)).toString();
        }
        shouldResetDisplay = true;
    } catch (error) {
        display.innerText = 'Error';
        shouldResetDisplay = true;
    }
}