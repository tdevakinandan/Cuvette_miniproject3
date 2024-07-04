document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;
            const operators = ['+', '-', '*', '/'];
            const lastChar = display.value[display.value.length - 1];

            if (button.classList.contains('del')) {
                // Delete the last character
                display.value = display.value.slice(0, -1) || '0';
            } else if (button.classList.contains('reset')) {
                // Reset the display
                display.value = '0';
            } else if (button.classList.contains('equals')) {
                // Calculate the result
                try {
                    display.value = eval(display.value);
                    display.style.background = 'black';
                } catch {
                    display.value = 'Error';
                }

                // Toggle the "6" and "+" button visibility and adjust the row
                const sixButton = document.getElementById('six');
                const plusButton = document.getElementById('plus');
                const secondRow = document.getElementById('row_2');

                sixButton.textContent = '+';
                plusButton.style.display = 'none'; // Hide the fourth button in the second row
                secondRow.classList.add('adjusted'); // Add adjusted class to handle layout change
            } else {
                // Prevent multiple operators from being added consecutively
                if (operators.includes(value) && operators.includes(lastChar)) {
                    return;
                }

                // Append the button value to the display
                if (display.value === '0') {
                    display.value = value;
                } else {
                    display.value += value;
                }
            }
        });
    });
});
